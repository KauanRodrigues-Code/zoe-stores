import raw from "@/data/catalogo.json";

/**
 * Fonte de verdade: data/catalogo.json (nome, descrição e valor vêm de lá, sem retranscrever).
 * Aqui só se acrescenta o que o JSON não tem: tonalidade, destaque, dimensões da foto e texto alternativo.
 */
type RawProduct = {
  id: string;
  categoria: "vestido" | "clutch";
  imagem: string;
  nome: string;
  descricao: string;
  valor_locacao: string;
  valor_confirmar_antes_de_publicar: boolean;
};

export type ToneId =
  | "azul"
  | "vermelho"
  | "pink-rose"
  | "verde"
  | "marrom"
  | "amarelo"
  | "lavanda"
  | "preto";

export const TONES: { id: ToneId; label: string }[] = [
  { id: "azul", label: "Azul serenity" },
  { id: "vermelho", label: "Vermelho" },
  { id: "pink-rose", label: "Pink e rosé" },
  { id: "verde", label: "Verde" },
  { id: "marrom", label: "Marrom" },
  { id: "amarelo", label: "Amarelo" },
  { id: "lavanda", label: "Lavanda" },
  { id: "preto", label: "Preto" },
];

export type Product = RawProduct & {
  src: string;
  width: number;
  height: number;
  alt: string;
  tone?: ToneId;
  featured: boolean;
};

type Meta = {
  width: number;
  height: number;
  alt: string;
  tone?: ToneId;
  featured?: boolean;
};

const META: Record<string, Meta> = {
  "zoe-01": {
    width: 456,
    height: 568,
    tone: "azul",
    featured: true,
    alt: "Modelo com vestido longo azul serenity, decote estruturado e capa longa nos ombros, segurando uma clutch dourada diante de painel de madeira e vaso com capim-dos-pampas.",
  },
  "zoe-02": {
    width: 429,
    height: 571,
    tone: "azul",
    alt: "Modelo com vestido azul serenity de busto reto, saia de babados e echarpe leve sobre os ombros, ao lado de uma escada branca com degraus de madeira.",
  },
  "zoe-03": {
    width: 456,
    height: 561,
    tone: "azul",
    alt: "Modelo com vestido azul serenity tomara que caia e fenda na saia longa, em uma escadaria de mármore, segurando uma clutch prateada.",
  },
  "zoe-04": {
    width: 440,
    height: 566,
    tone: "vermelho",
    featured: true,
    alt: "Modelo com vestido vermelho de ombros caídos e saia em camadas de babados, segurando uma taça, em uma sala clássica com portas brancas.",
  },
  "zoe-05": {
    width: 437,
    height: 562,
    tone: "vermelho",
    alt: "Modelo com vestido vermelho longo de decote transpassado, alças finas e fenda, segurando uma clutch dourada em uma escadaria de mármore.",
  },
  "zoe-06": {
    width: 455,
    height: 574,
    tone: "pink-rose",
    featured: true,
    alt: "Modelo com vestido pink intenso de decote em V, modelagem ajustada e fenda, com a mão na cintura e uma clutch dourada, diante de parede de madeira.",
  },
  "zoe-07": {
    width: 456,
    height: 568,
    tone: "pink-rose",
    featured: true,
    alt: "Modelo com vestido longo rosé com detalhe de laço vazado no busto e fenda, segurando uma clutch roxa em um salão clássico com candelabros.",
  },
  "zoe-08": {
    width: 456,
    height: 564,
    tone: "pink-rose",
    alt: "Modelo com vestido longo rosé claro com capa nos ombros e decote coração, segurando uma clutch dourada diante de painel de madeira e vaso com capim-dos-pampas.",
  },
  "zoe-09": {
    width: 456,
    height: 572,
    tone: "verde",
    featured: true,
    alt: "Modelo com vestido longo verde menta de cetim, decote drapeado e fenda, em uma varanda com árvores ao fundo.",
  },
  "zoe-10": {
    width: 470,
    height: 568,
    tone: "verde",
    alt: "Modelo com vestido longo verde oliva de brilho metálico, alças finas, decote em V e fenda, segurando uma clutch clara ao lado de uma coluna branca.",
  },
  "zoe-11": {
    width: 456,
    height: 575,
    tone: "marrom",
    featured: true,
    alt: "Modelo com vestido marrom de ombros caídos e silhueta sereia, segurando uma clutch cobre em um salão com colunas brancas e lustre.",
  },
  "zoe-12": {
    width: 456,
    height: 571,
    tone: "amarelo",
    featured: true,
    alt: "Modelo com vestido longo amarelo manteiga de frente única, tecido drapeado e fenda, segurando uma clutch clara em um fundo neutro.",
  },
  "zoe-13": {
    width: 456,
    height: 571,
    tone: "amarelo",
    alt: "Modelo com vestido amarelo claro de um ombro só, flor no ombro e fenda, segurando uma clutch lilás diante de uma parede de hera.",
  },
  "zoe-14": {
    width: 456,
    height: 562,
    tone: "lavanda",
    featured: true,
    alt: "Modelo com vestido lavanda tomara que caia com fenda e laço lateral, segurando uma clutch verde em uma escadaria com corrimão de ferro.",
  },
  "zoe-15": {
    width: 468,
    height: 567,
    tone: "lavanda",
    alt: "Modelo com vestido lavanda de tule em camadas, alças finas e decote em V, segurando uma clutch prateada em um ambiente todo branco.",
  },
  "zoe-16": {
    width: 451,
    height: 574,
    tone: "preto",
    featured: true,
    alt: "Modelo com vestido longo preto sem alças e abertura no busto, segurando uma clutch prateada ao lado de uma coluna em uma sala de estar.",
  },
  "zoe-17": {
    width: 466,
    height: 569,
    alt: "Clutch de paetês furta-cor em tons de azul e verde, com fecho dourado, sobre uma mesa de madeira em uma loja de vestidos.",
  },
  "zoe-18": {
    width: 456,
    height: 573,
    alt: "Clutch fúcsia metalizada sobre uma superfície clara, com orquídeas brancas ao fundo.",
  },
};

export const products: Product[] = (raw as RawProduct[]).map((p) => {
  const meta = META[p.id];
  if (!meta) {
    throw new Error(`Produto ${p.id} sem metadados em lib/catalog.ts`);
  }
  return {
    ...p,
    src: `/images/catalogo/${p.imagem}`,
    width: meta.width,
    height: meta.height,
    alt: meta.alt,
    tone: meta.tone,
    featured: meta.featured ?? false,
  };
});

export const dresses = products.filter((p) => p.categoria === "vestido");
export const featuredDresses = dresses.filter((p) => p.featured);
export const otherDresses = dresses.filter((p) => !p.featured);
export const clutches = products.filter((p) => p.categoria === "clutch");

/** Verdadeiro enquanto qualquer valor do catálogo ainda estiver marcado para confirmação. */
export const hasUnconfirmedPrices = products.some(
  (p) => p.valor_confirmar_antes_de_publicar,
);

export function getHeroProduct(): Product {
  const hero = products.find((p) => p.id === "zoe-07");
  if (!hero) throw new Error("Produto do hero (zoe-07) não encontrado");
  return hero;
}
