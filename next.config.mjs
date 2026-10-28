const isProd = process.env.NODE_ENV === "production";

/**
 * Content-Security-Policy compatível com o que o site realmente usa:
 * - script-src precisa de 'unsafe-inline' porque o App Router do Next injeta scripts
 *   inline de hidratação; o caminho sem isso exige nonce por requisição (middleware +
 *   renderização dinâmica), o que desfaz a página estática. Exceção documentada no README.
 * - 'unsafe-eval' só em desenvolvimento (React Refresh).
 * - style-src 'unsafe-inline' por causa de estilos inline que o Next/next-image emitem.
 * - fontes: next/font self-hosteia as fontes em build, então font-src 'self' basta.
 * - frame-src libera somente https://www.google.com para o mapa incorporado da seção
 *   "Visite nossa boutique". Se o Google passar a redirecionar o embed para outro host
 *   (ex.: maps.google.com), acrescente apenas essa origem aqui.
 * - sem scripts de terceiros, sem analytics.
 */
const csp = [
  "default-src 'self'",
  `script-src 'self' 'unsafe-inline'${isProd ? "" : " 'unsafe-eval'"}`,
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data: blob:",
  "font-src 'self'",
  "connect-src 'self'",
  // Única origem externa liberada: o embed do Google Maps (sem chave de API).
  "frame-src https://www.google.com",
  "object-src 'none'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  isProd ? "upgrade-insecure-requests" : null,
]
  .filter(Boolean)
  .join("; ");

const securityHeaders = [
  { key: "Content-Security-Policy", value: csp },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value:
      "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
  { key: "X-Frame-Options", value: "DENY" },
  { key: "Cross-Origin-Opener-Policy", value: "same-origin" },
  // HSTS só em produção (exige HTTPS). Em localhost/dev não é enviado.
  ...(isProd
    ? [
        {
          key: "Strict-Transport-Security",
          value: "max-age=31536000; includeSubDomains",
        },
      ]
    : []),
];

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

export default nextConfig;
