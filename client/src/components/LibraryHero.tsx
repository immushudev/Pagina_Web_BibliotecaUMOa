import { ArrowDownRight, ArrowRight, Search } from "lucide-react";
import { useState, type FormEvent } from "react";
import { libraryStats } from "@/content/library";
import InstitutionalBackdrop from "./InstitutionalBackdrop";

export default function LibraryHero() {
  const [query, setQuery] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.dispatchEvent(new CustomEvent<string>("library-catalogue-search", { detail: query }));
    document.querySelector("#catalogo")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <section id="inicio" className="library-hero">
      <InstitutionalBackdrop image="/images/library-hero.webp" position="center 54%" />
      <div className="library-hero__grid" aria-hidden="true" />
      <div className="library-hero__inner">
        <div className="library-hero__content">
          <div className="hero-kicker">
            <span />
            <p>Sistema de información UMOA</p>
          </div>
          <h1>
            Conocimiento que <em>transforma.</em>
          </h1>
          <p className="library-hero__description">
            Recursos, colecciones y acompañamiento para aprender, investigar y crear desde la Universidad de Moa.
          </p>

          <form className="hero-search" onSubmit={handleSubmit}>
            <label className="sr-only" htmlFor="hero-search">
              Buscar en el catálogo
            </label>
            <Search size={18} aria-hidden="true" />
            <input
              id="hero-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Buscar por título, autor o tema..."
            />
            <button type="submit">
              Explorar <ArrowRight size={15} aria-hidden="true" />
            </button>
          </form>

          <div className="hero-actions">
            <a className="button button--primary" href="#catalogo">
              Consultar catálogo <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#servicios">
              Nuestros servicios
            </a>
          </div>
        </div>

        <aside className="library-hero__aside">
          <p>Biblioteca UMOA</p>
          <strong>Abierta al aprendizaje, la ciencia y la memoria.</strong>
          <a href="#colecciones">
            Explorar recursos <ArrowDownRight size={19} aria-hidden="true" />
          </a>
        </aside>
      </div>
      <div className="library-hero__stats" aria-label="Datos destacados de la Biblioteca UMOA">
        {libraryStats.map(stat => (
          <div key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
