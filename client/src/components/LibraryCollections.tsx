import { ArrowRight, Sparkles } from "lucide-react";
import { collections } from "@/content/library";
import SectionHeading from "./SectionHeading";

export default function LibraryCollections() {
  return (
    <section id="colecciones" className="library-collections section-shell">
      <div className="content-frame library-collections__grid">
        <div className="library-collections__intro">
          <div className="collection-panel__tag"><Sparkles size={16} aria-hidden="true" /> Explora sin límites</div>
          <SectionHeading
            eyebrow="Colecciones vivas"
            title={<>Información que conserva, inspira y <em>conecta.</em></>}
            description="Conecta con los recursos que documentan la investigación, el territorio y el conocimiento creado en la UMOA."
          />
          <a className="text-link" href="#catalogo">
            Ir al catálogo completo <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="collections-list">
          {collections.map(collection => (
            <a className="collection-line umoa-line-item" href="#catalogo" key={collection.index}>
              <span className="collection-line__index">{collection.index}</span>
              <div>
                <h3>{collection.title}</h3>
                <p>{collection.description}</p>
              </div>
              <span className="collection-line__action">{collection.action}<ArrowRight size={16} aria-hidden="true" /></span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
