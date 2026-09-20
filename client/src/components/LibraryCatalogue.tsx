import { ArrowRight, BookOpen, Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { catalogueItems } from "@/content/library";
import InstitutionalBackdrop from "./InstitutionalBackdrop";
import SectionHeading from "./SectionHeading";

export default function LibraryCatalogue() {
  const [query, setQuery] = useState("");
  const [activeType, setActiveType] = useState("Todos");

  useEffect(() => {
    const updateQuery = (event: Event) => {
      setQuery((event as CustomEvent<string>).detail);
    };
    window.addEventListener("library-catalogue-search", updateQuery);
    return () => window.removeEventListener("library-catalogue-search", updateQuery);
  }, []);

  const results = useMemo(() => {
    const normalized = query.toLowerCase().trim();
    return catalogueItems.filter(item => {
      const searchable = `${item.title} ${item.author} ${item.subject}`.toLowerCase();
      const matchesQuery = !normalized || searchable.includes(normalized);
      const matchesType = activeType === "Todos" || item.type === activeType;
      return matchesQuery && matchesType;
    });
  }, [activeType, query]);

  return (
    <section id="catalogo" className="library-catalogue section-shell">
      <InstitutionalBackdrop image="/images/library-collections.webp" position="center 43%" intensity="soft" />
      <div className="content-frame library-catalogue__content">
        <SectionHeading
          eyebrow="Catálogo bibliográfico"
          title={<>Encuentra la fuente para tu <em>próxima idea.</em></>}
          description="Un buscador visual de demostración para explorar los materiales más representativos de la Biblioteca UMOA."
          action={<span className="catalogue-count">{results.length.toString().padStart(2, "0")} resultados</span>}
        />

        <div className="catalogue-tools">
          <label className="catalogue-search" htmlFor="catalogue-search">
            <Search size={18} aria-hidden="true" />
            <span className="sr-only">Buscar en el catálogo</span>
            <input
              id="catalogue-search"
              value={query}
              onChange={event => setQuery(event.target.value)}
              placeholder="Escribe un título, autor o tema"
            />
          </label>
          <div className="catalogue-filters" aria-label="Filtrar resultados">
            <SlidersHorizontal size={15} aria-hidden="true" />
            {["Todos", "Libro", "Revista", "Tesis"].map(type => (
              <button
                type="button"
                key={type}
                className={activeType === type ? "is-active" : ""}
                onClick={() => setActiveType(type)}
              >
                {type}
              </button>
            ))}
          </div>
        </div>

        <div className="catalogue-results" aria-live="polite">
          {results.map((item, index) => (
            <article className="catalogue-item" key={item.title}>
              <div className="catalogue-item__index">0{index + 1}</div>
              <div className="catalogue-item__icon"><BookOpen size={22} aria-hidden="true" /></div>
              <div className="catalogue-item__body">
                <div className="catalogue-item__meta"><span>{item.type}</span><span>{item.year}</span></div>
                <h3>{item.title}</h3>
                <p>{item.author}</p>
              </div>
              <span className="catalogue-item__subject">{item.subject}</span>
              <button className="catalogue-item__action" type="button" aria-label={`Ver ficha de ${item.title}`}>
                <ArrowRight size={18} aria-hidden="true" />
              </button>
            </article>
          ))}
          {!results.length && (
            <div className="catalogue-empty">
              <BookOpen size={28} aria-hidden="true" />
              <p>No encontramos resultados. Prueba con otro título, autor o tema.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
