export const navigationItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Servicios", href: "#servicios" },
  { label: "Colecciones", href: "#colecciones" },
  { label: "Actualidad", href: "#actualidad" },
];

export const libraryStats = [
  { value: "+24 mil", label: "registros bibliográficos" },
  { value: "12", label: "colecciones especializadas" },
  { value: "24/7", label: "recursos digitales" },
];

export const libraryServices = [
  {
    key: "catalogue",
    eyebrow: "01 · Consulta",
    title: "Catálogo bibliográfico",
    description:
      "Localiza libros, revistas, tesis y materiales de referencia de nuestra colección física.",
    href: "#catalogo",
  },
  {
    key: "digital",
    eyebrow: "02 · Acceso",
    title: "Recursos digitales",
    description:
      "Explora bases de datos, repositorios y bibliografía académica para la docencia y la investigación.",
    href: "#colecciones",
  },
  {
    key: "training",
    eyebrow: "03 · Formación",
    title: "Acompañamiento académico",
    description:
      "Solicita orientación para buscar, evaluar y citar información con rigor científico.",
    href: "#actualidad",
  },
  {
    key: "reference",
    eyebrow: "04 · Referencia",
    title: "Pregúntale al bibliotecario",
    description:
      "Recibe apoyo para encontrar fuentes, gestionar referencias o conocer nuestros servicios.",
    href: "mailto:biblioteca@umoa.cu",
  },
];

export const catalogueItems = [
  {
    type: "Libro",
    title: "Metalurgia extractiva del níquel",
    author: "A. Núñez Jiménez · L. Fernández",
    subject: "Ingeniería y materiales",
    year: "2024",
  },
  {
    type: "Revista",
    title: "Minería y Geología · Vol. 41",
    author: "Editorial UMOA",
    subject: "Ciencias de la Tierra",
    year: "2025",
  },
  {
    type: "Tesis",
    title: "Transformación digital en procesos industriales",
    author: "D. Sánchez Pérez",
    subject: "Automática e informática",
    year: "2026",
  },
  {
    type: "Libro",
    title: "Metodología de la investigación científica",
    author: "M. Hernández Valdés",
    subject: "Investigación y docencia",
    year: "2023",
  },
];

export const collections = [
  {
    index: "01",
    title: "Repositorio institucional",
    description:
      "Producción científica, tesis, artículos y resultados de investigación de la Universidad de Moa.",
    action: "Explorar repositorio",
  },
  {
    index: "02",
    title: "Hemeroteca científica",
    description:
      "Publicaciones periódicas y revistas especializadas para apoyar la actualización profesional.",
    action: "Ver publicaciones",
  },
  {
    index: "03",
    title: "Colección patrimonial",
    description:
      "Memoria documental de Moa, su universidad y el desarrollo minero-metalúrgico de la región.",
    action: "Conocer la colección",
  },
];

export const newsItems = [
  {
    category: "Formación",
    date: "08 OCT 2026",
    title: "Taller de búsqueda y gestión de información científica",
    description:
      "Una sesión práctica para estudiantes e investigadores que desean mejorar sus estrategias de búsqueda académica.",
  },
  {
    category: "Comunidad",
    date: "15 OCT 2026",
    title: "Semana de acceso abierto en la Biblioteca UMOA",
    description:
      "Conversatorios, demostraciones y asesorías para compartir el conocimiento producido en nuestra universidad.",
  },
  {
    category: "Servicios",
    date: "TODO EL AÑO",
    title: "Reserva una orientación personalizada",
    description:
      "Agenda un espacio con el equipo bibliotecario para proyectos, tesis o necesidades de información concretas.",
  },
];

export const footerGroups = [
  {
    title: "Explora",
    links: [
      { label: "Catálogo", href: "#catalogo" },
      { label: "Recursos digitales", href: "#colecciones" },
      { label: "Colecciones", href: "#colecciones" },
    ],
  },
  {
    title: "Acompañamiento",
    links: [
      { label: "Formación de usuarios", href: "#actualidad" },
      { label: "Servicios de referencia", href: "mailto:biblioteca@umoa.cu" },
      { label: "Horario y contacto", href: "#contacto" },
    ],
  },
];
