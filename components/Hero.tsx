import Image from "next/image";
import { getHeroProduct } from "@/lib/catalog";

/**
 * Hero editorial: a fotografia fica sozinha na sua moldura e o título e o botão
 * ficam em um bloco separado ao lado (desktop) ou abaixo (celular).
 */
export default function Hero() {
  const photo = getHeroProduct();

  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="container hero__grid">
        <div className="hero__text">
          <p className="eyebrow rise rise--1">
            Aluguel de vestidos de festa · Campinas-SP
          </p>
          <h1 id="hero-title" className="hero__title rise rise--2">
            O vestido certo para a sua festa
          </h1>
          <p className="hero__lead rise rise--3">
            Explore os modelos da Zoé Stores e consulte a disponibilidade
            diretamente pelo WhatsApp.
          </p>
          <div className="hero__actions rise rise--4">
            <a className="btn btn--dark" href="#colecao">
              Encontre seu vestido
            </a>
          </div>
        </div>

        <div className="hero__media fade">
          <div className="hero__frame" aria-hidden="true" />
          <div className="hero__photo">
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.width}
              height={photo.height}
              sizes="(min-width: 900px) 40vw, 86vw"
              quality={90}
              priority
              className="hero__img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
