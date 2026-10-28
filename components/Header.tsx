"use client";

import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";
import { buildWhatsAppUrl, GENERAL_MESSAGE } from "@/lib/whatsapp";

const NAV = [
  { href: "#colecao", label: "Coleção" },
  { href: "#explore", label: "Explore" },
  { href: "#ocasioes", label: "Ocasiões" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#contato", label: "Contato" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <a className="brand" href="#topo" onClick={close}>
          {SITE.name}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="menu-principal"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav-toggle__label">{open ? "Fechar" : "Menu"}</span>
          <span className="sr-only"> menu de navegação</span>
        </button>

        <nav
          id="menu-principal"
          className={open ? "nav nav--open" : "nav"}
          aria-label="Principal"
        >
          <ul className="nav__list">
            {NAV.map((item) => (
              <li key={item.href}>
                <a className="nav__link" href={item.href} onClick={close}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn--outline nav__cta"
            href={buildWhatsAppUrl(GENERAL_MESSAGE)}
            target="_blank"
            rel="noopener noreferrer"
          >
            Fale com a Zoé
            <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
