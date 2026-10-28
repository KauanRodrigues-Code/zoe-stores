import { SITE } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div>
          <p className="site-footer__brand">{SITE.name}</p>
          <p className="site-footer__muted">{SITE.tagline}</p>
        </div>

        <ul className="site-footer__list">
          <li>
            <a
              className="footer-link"
              href={SITE.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram {SITE.instagramHandle}
              <span className="sr-only"> (abre em nova aba)</span>
            </a>
          </li>
          <li>{SITE.address.full}</li>
          <li>
            <a className="footer-link" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>
          </li>
        </ul>
      </div>
      <div className="container">
        <p className="site-footer__legal">
          Valores e disponibilidade sujeitos à confirmação com a loja.
        </p>
      </div>
    </footer>
  );
}
