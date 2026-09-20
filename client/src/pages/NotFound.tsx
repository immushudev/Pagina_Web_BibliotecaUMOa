import { ArrowLeft, BookOpen, Home, SearchX } from "lucide-react";
import { useLocation } from "wouter";

export default function NotFound() {
  const [, setLocation] = useLocation();

  return (
    <main className="not-found-page">
      <div className="not-found-orbit orbit-one" />
      <div className="not-found-orbit orbit-two" />
      <section className="not-found-card">
        <button className="not-found-brand" onClick={() => setLocation("/")}><span className="brand-mark"><BookOpen size={21} /></span><span><strong>Biblioteca</strong><em>UMOA</em></span></button>
        <div className="not-found-icon"><SearchX size={35} /></div>
        <span className="not-found-code">ERROR 404 · PÁGINA NO ENCONTRADA</span>
        <h1>Esta página se<br /><i>perdió entre libros.</i></h1>
        <p>El enlace que buscas no existe o cambió de lugar. Regresa al catálogo y continúa explorando nuestras colecciones.</p>
        <div className="not-found-actions"><button className="button button-dark" onClick={() => setLocation("/")}><Home size={16} /> Ir al catálogo</button><button className="not-found-back" onClick={() => window.history.back()}><ArrowLeft size={15} /> Volver atrás</button></div>
      </section>
    </main>
  );
}
