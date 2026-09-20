import { BookOpen, Menu, Search, X } from "lucide-react";
import { useState } from "react";
import { navigationItems } from "@/content/library";

export default function LibraryNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="library-nav">
      <div className="library-nav__inner">
        <a className="library-brand" href="#inicio" aria-label="Biblioteca UMOA, inicio" onClick={closeMenu}>
          <span className="library-brand__mark">
            <img src="/logoumoa.png" alt="" />
            <BookOpen aria-hidden="true" size={17} />
          </span>
          <span>
            <strong>Biblioteca UMOA</strong>
            <small>Universidad de Moa</small>
          </span>
        </a>

        <nav id="library-navigation" className={`library-nav__links ${menuOpen ? "library-nav__links--open" : ""}`} aria-label="Navegación principal">
          {navigationItems.map(item => (
            <a key={item.href} href={item.href} onClick={closeMenu}>
              {item.label}
            </a>
          ))}
          <a className="library-nav__mobile-cta" href="#catalogo" onClick={closeMenu}>
            <Search size={15} aria-hidden="true" /> Buscar recursos
          </a>
        </nav>

        <div className="library-nav__actions">
          <a className="library-nav__catalogue" href="#catalogo">
            <Search size={15} aria-hidden="true" />
            <span>Buscar</span>
          </a>
          <button
            className="library-nav__menu"
            type="button"
            aria-expanded={menuOpen}
            aria-controls="library-navigation"
            aria-label={menuOpen ? "Cerrar navegación" : "Abrir navegación"}
            onClick={() => setMenuOpen(open => !open)}
          >
            {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>
    </header>
  );
}
