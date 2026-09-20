import { ArrowRight, CalendarDays } from "lucide-react";
import { newsItems } from "@/content/library";
import InstitutionalBackdrop from "./InstitutionalBackdrop";
import SectionHeading from "./SectionHeading";

export default function LibraryNews() {
  return (
    <section id="actualidad" className="library-news section-shell">
      <InstitutionalBackdrop image="/images/library-news.webp" position="center" intensity="soft" />
      <div className="content-frame library-news__content">
        <SectionHeading
          eyebrow="Actualidad y agenda"
          title={<>Aprender también es <em>encontrarse.</em></>}
          description="Talleres, conversaciones y servicios que fortalecen la vida académica de nuestra comunidad universitaria."
          action={<a className="text-link text-link--light" href="mailto:biblioteca@umoa.cu">Escríbenos <ArrowRight size={16} aria-hidden="true" /></a>}
        />
        <div className="news-grid">
          {newsItems.map(item => (
            <article className="news-card" key={item.title}>
              <div className="news-card__meta">
                <span>{item.category}</span>
                <span><CalendarDays size={13} aria-hidden="true" /> {item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <a href="mailto:biblioteca@umoa.cu?subject=Consulta%20Biblioteca%20UMOA">
                Más información <ArrowRight size={15} aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
