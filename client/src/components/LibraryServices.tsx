import { ArrowUpRight, BookOpenCheck, GraduationCap, Laptop, MessagesSquare } from "lucide-react";
import { libraryServices } from "@/content/library";
import SectionHeading from "./SectionHeading";

const serviceIcons = {
  catalogue: BookOpenCheck,
  digital: Laptop,
  training: GraduationCap,
  reference: MessagesSquare,
};

export default function LibraryServices() {
  return (
    <section id="servicios" className="library-services section-shell">
      <div className="content-frame">
        <SectionHeading
          eyebrow="Acceso y acompañamiento"
          title={<>Todo lo que necesitas para <em>avanzar.</em></>}
          description="La biblioteca conecta a la comunidad universitaria con información confiable, colecciones especializadas y orientación profesional."
        />
        <div className="services-grid">
          {libraryServices.map(service => {
            const Icon = serviceIcons[service.key as keyof typeof serviceIcons];
            return (
              <a className="service-card umoa-action-surface" href={service.href} key={service.key}>
                <div className="service-card__top">
                  <Icon size={25} strokeWidth={1.5} aria-hidden="true" />
                  <span>{service.eyebrow}</span>
                </div>
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                </div>
                <span className="service-card__action">
                  Conocer más <ArrowUpRight size={16} aria-hidden="true" />
                </span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
