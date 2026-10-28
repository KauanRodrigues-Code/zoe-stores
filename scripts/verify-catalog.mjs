// Verifica a consistência entre data/catalogo.json, public/images/catalogo e lib/catalog.ts.
// Uso: npm run verify:catalog  (sem dependências externas)
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const catalog = JSON.parse(
  readFileSync(join(root, "data", "catalogo.json"), "utf8"),
);
const imagesDir = join(root, "public", "images", "catalogo");
const catalogTs = readFileSync(join(root, "lib", "catalog.ts"), "utf8");

const errors = [];
const ids = new Set();
const priceRe = /^R\$ \d{1,3}(\.\d{3})*,\d{2}$/;

for (const p of catalog) {
  if (ids.has(p.id)) errors.push(`id duplicado: ${p.id}`);
  ids.add(p.id);

  if (!existsSync(join(imagesDir, p.imagem)))
    errors.push(`${p.id}: imagem ausente em public/images/catalogo (${p.imagem})`);

  // o prefixo numérico do arquivo deve bater com o id (ex.: zoe-07 <-> 07_...)
  const num = p.imagem.slice(0, 2);
  if (p.id !== `zoe-${num}`)
    errors.push(`${p.id}: prefixo do arquivo (${num}) não bate com o id`);

  if (!priceRe.test(p.valor_locacao))
    errors.push(`${p.id}: valor em formato inesperado (${p.valor_locacao})`);

  for (const k of ["nome", "descricao"])
    if (!p[k] || !String(p[k]).trim()) errors.push(`${p.id}: campo ${k} vazio`);

  if (!new RegExp(`"${p.id}"\\s*:`).test(catalogTs))
    errors.push(`${p.id}: sem metadados (alt/dimensões/tom) em lib/catalog.ts`);
}

const files = readdirSync(imagesDir).filter((f) => f.endsWith(".jpg"));
const referenced = new Set(catalog.map((p) => p.imagem));
for (const f of files)
  if (!referenced.has(f)) errors.push(`imagem sem produto no catálogo: ${f}`);

const dresses = catalog.filter((p) => p.categoria === "vestido").length;
const clutches = catalog.filter((p) => p.categoria === "clutch").length;
if (dresses !== 16) errors.push(`esperado 16 vestidos, encontrado ${dresses}`);
if (clutches !== 2) errors.push(`esperado 2 clutches, encontrado ${clutches}`);

if (errors.length) {
  console.error("Falhas na verificação do catálogo:\n- " + errors.join("\n- "));
  process.exit(1);
}
console.log(
  `OK: ${catalog.length} produtos (${dresses} vestidos, ${clutches} clutches), ${files.length} imagens, todos os vínculos conferem.`,
);
