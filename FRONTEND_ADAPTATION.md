# Adaptación visual del portal Biblioteca UMOA

## Alcance corregido

La Biblioteca UMOA se mantiene como una **aplicación web funcional tipo portal/dashboard**, no como una landing page. Se conserva la experiencia de navegación por vistas: catálogo, recursos digitales, noticias, favoritos, formación de usuarios, preguntas, visita, notificaciones y estados de confirmación/error.

## Qué se tomó de UMOA

Se aplicó el lenguaje visual del frontend de UMOA sin copiar su estructura de portada institucional: paleta oscura con rojo mineral, contraste alto, tipografía técnica/editorial, navegación compacta, divisores finos, superficies de aplicación y estados de interacción contenidos.

## Estructura conservada

El portal sigue concentrando la lógica interactiva de la página en `client/src/pages/Home.tsx`, porque esa pieza administra las vistas, filtros, favoritos, notificaciones y modales de la biblioteca. Los componentes UI compartidos continúan en `client/src/components/ui`, y los estilos del dashboard se centralizan en `client/src/index.css`.

## Funcionalidades frontend

El catálogo conserva búsqueda por texto, filtros por autor, año y materia, estado de carga y estado vacío. Los libros y recursos pueden guardarse en favoritos mediante `localStorage`. También se mantienen navegación lateral responsive, noticias con modal, servicios institucionales, notificaciones y confirmaciones. No se añadió backend, API, autenticación ni persistencia remota.

## Validación

La corrección se verificó con `pnpm check`, `pnpm build` y revisión visual del portal en navegador. El resultado esperado es una interfaz de aplicación con panel de navegación y vistas internas, no una página de presentación lineal.
