"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  /** Atraso da transição em ms (usado para escalonar cartões de uma mesma linha). */
  delay?: number;
};

/**
 * Revela o conteúdo com fade + deslocamento curto quando ele entra na tela.
 *
 * Princípios:
 * - Renderiza VISÍVEL no servidor: sem JavaScript, o conteúdo aparece normalmente.
 * - Só esconde o que está abaixo da dobra no momento da montagem; o que já está na tela
 *   não pisca nem some.
 * - Anima apenas opacity e transform, então não causa mudança de layout (CLS).
 * - Com prefers-reduced-motion ou sem IntersectionObserver, nada é escondido.
 * - O estado fica em data-reveal (via ref), sem re-render do React.
 */
export default function Reveal({ children, className, delay = 0 }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }
    if (el.getBoundingClientRect().top < window.innerHeight * 0.9) return;

    el.dataset.reveal = "hidden";
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          el.dataset.reveal = "shown";
          observer.disconnect();
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -6% 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      delete el.dataset.reveal;
    };
  }, []);

  const style = delay
    ? ({ "--reveal-delay": `${delay}ms` } as CSSProperties)
    : undefined;

  return (
    <div
      ref={ref}
      className={className ? `reveal ${className}` : "reveal"}
      style={style}
    >
      {children}
    </div>
  );
}
