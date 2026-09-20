import { ArrowUpRight, BookOpen, MapPin, Mail, Phone } from "lucide-react";
import { footerGroups } from "@/content/library";

export default function LibraryFooter() {
  return (
    <footer id="contacto" className="library-footer">
      <div className="content-frame">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-brand__mark"><BookOpen size={21} aria-hidden="true" /></div>
            <div>
              <p>Biblioteca UMOA</p>
              <strong>Universidad de Moa</strong>
            </div>
          </div>
          <p className="footer-top__message">El conocimiento cobra sentido cuando se comparte.</p>
          <a className="button button--primary" href="mailto:biblioteca@umoa.cu">
            Contactar biblioteca <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>

        <div className="footer-main">
          <div className="footer-contact">
            <p className="footer-label">Visítanos</p>
            <p><MapPin size={15} aria-hidden="true" /> Universidad de Moa, Holguín, Cuba</p>
            <p><Mail size={15} aria-hidden="true" /> biblioteca@umoa.cu</p>
            <p><Phone size={15} aria-hidden="true" /> +53 24 60 0000</p>
          </div>
          {footerGroups.map(group => (
            <div className="footer-links" key={group.title}>
              <p className="footer-label">{group.title}</p>
              {group.links.map(link => <a href={link.href} key={link.label}>{link.label}</a>)}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Universidad de Moa · Biblioteca UMOA</span>
          <span>Dr. Antonio Núñez Jiménez</span>
        </div>
      </div>
    </footer>
  );
}
