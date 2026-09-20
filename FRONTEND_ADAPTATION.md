# Adaptación visual del portal Biblioteca UMOA

## Alcance corregido

La Biblioteca UMOA se mantiene como una **aplicación web funcional tipo portal/dashboard**, no como una landing page. Se conserva la experiencia de navegación por vistas: catálogo, recursos digitales, noticias, favoritos, formación de usuarios, preguntas, visita, notificaciones y estados de confirmación/error.

## Qué se tomó de UMOA

Se aplicó el lenguaje visual del frontend de UMOA sin copiar su estructura de portada institucional: paleta oscura con rojo mineral, contraste alto, tipografía técnica/editorial, navegación compacta, divisores finos, superficies de aplicación y estados de interacción contenidos.

## Estructura conservada

El portal sigue concentrando la lógica interactiva de la página en `frontend/src/pages/Home.tsx`, porque esa pieza administra las vistas, filtros, favoritos, notificaciones y modales de la biblioteca. Los componentes UI compartidos continúan en `frontend/src/components/ui`, y los estilos del dashboard se centralizan en `frontend/src/index.css`.

## Funcionalidades frontend

El catálogo conserva búsqueda por texto, filtros por autor, año y materia, estado de carga y estado vacío. Los libros y recursos pueden guardarse en favoritos mediante `localStorage`. También se mantienen navegación lateral responsive, noticias con modal, servicios institucionales, notificaciones y confirmaciones. No se añadió backend, API, autenticación ni persistencia remota.

## Validación

La corrección se verificó con `pnpm check`, `pnpm build` y revisión visual del portal en navegador. El resultado esperado es una interfaz de aplicación con panel de navegación y vistas internas, no una página de presentación lineal.

## Fondos institucionales

Se incorporaron copias locales de las imágenes visuales utilizadas por UMOA en `frontend/public/images/`: `library-home.webp` para el fondo global, `library-campus.webp` para el área principal, `library-faculties.webp` para la navegación lateral, `library-news.webp` para recursos y noticias, `library-collections.webp` para filtros y `library-texture.webp` para la cabecera y tarjetas. Cada fondo utiliza capas de degradado oscuro para conservar la legibilidad del portal y no altera la navegación ni la funcionalidad del dashboard.

## Portadas del catálogo

Las tarjetas del catálogo ahora aceptan `coverImage` por libro. Tres registros cuentan con portadas locales en `frontend/public/images/books/`, mientras que los demás muestran una portada fallback basada en el icono genérico de libro y el texto “Portada no disponible”. Si una imagen configurada no carga, `BookCover` cambia automáticamente al fallback mediante `onError`, sin romper la tarjeta ni la búsqueda.

## Recomendaciones y logo

El portal guarda hasta cinco búsquedas recientes en `localStorage` (`biblioteca-umoa-recent-searches`). Al confirmar una búsqueda con Enter, el catálogo calcula coincidencias por título, autor y materia, y muestra hasta tres libros recomendados dentro de la vista de catálogo. Las recomendaciones son locales, transparentes y accionables: seleccionar una tarjeta reutiliza su título como nueva búsqueda.

El encabezado utiliza ahora `frontend/public/logoumoa.png`, la misma imagen institucional empleada por el sitio web de la Universidad de Moa.

El logo institucional también está configurado en el encabezado HTML del sitio mediante `favicon` y `apple-touch-icon`, además de mostrarse directamente en la barra superior del portal.

## Revisión visual integral

Se revisaron catálogo, recomendaciones, recursos, noticias, formación, preguntas, visita, notificaciones y estados de confirmación. Los formularios y controles que todavía utilizaban superficies claras fueron alineados con el sistema UMOA: fondo oscuro, bordes finos, acento rojo mineral, tipografía Inter para lectura, Space Grotesk para títulos y Oswald para etiquetas técnicas. También se añadieron estados hover/focus visibles y `focus-visible` consistente para teclado.

## Auditoría contra el catálogo de requisitos

Se revisó el documento `Catálogo_Requisitos_BibliotecaUmoa.docx` y se detectó que el índice contiene requisitos heredados de un sistema de ausencias y vacaciones. La versión mejorada se encuentra en `TAREA_TECNICA_MEJORADA.md` y separa el cumplimiento del frontend de las funciones que requieren backend, KOHA, autenticación, auditoría o infraestructura institucional.

En esta revisión se añadieron una vista independiente para Biblioteca virtual, un menú de Nuestra Universidad, los datos bibliográficos de serie, editor, páginas, clasificación CCD e inventario, además de los recursos de Bibliotecas digitales especializadas y Bibliografías recomendadas. Los recursos pendientes muestran explícitamente su estado de integración para evitar presentar como disponible un enlace institucional que aún no ha sido entregado.
