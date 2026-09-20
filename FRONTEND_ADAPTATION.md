# Adaptación visual y estructural: Biblioteca UMOA

## Diagnóstico inicial

El frontend de **UMOA** organiza su interfaz pública en una composición modular dentro de `frontend/src`: `components/` para secciones reutilizables, `content/` para datos editoriales, `contexts/` y `hooks/` para estado transversal, `lib/` para utilidades y `pages/` para ensamblar cada ruta. La página de inicio funciona como un orquestador de secciones, en lugar de concentrar todo el marcado y los estilos en un componente único.

La Biblioteca UMOA dispone de una base React/Vite/Tailwind compatible, pero la experiencia inicial se encuentra concentrada principalmente en `client/src/pages/Home.tsx` y `client/src/index.css`, con una estética de panel administrativo de tonos claros. Esta estructura dificulta reutilizar las secciones, mantener el lenguaje visual institucional y montar el contenido como módulo de la web de la universidad.

## Patrones visuales de UMOA que se trasladarán

| Elemento | Referencia UMOA | Adaptación para Biblioteca UMOA |
| --- | --- | --- |
| Paleta | Negro profundo, borgoña y rojo mineral; textos blancos y grises cálidos | Misma base institucional, usando el rojo como acento y conservando alto contraste |
| Tipografía | Titulares geométricos/tecnológicos y etiquetas en mayúsculas con tracking amplio | Jerarquía editorial para catálogo, servicios y recursos |
| Composición | Fondos fotográficos oscurecidos, retícula contenida y divisores finos | Hero de biblioteca, tarjetas de servicios y bandas institucionales |
| Interacción | Botones delineados, superficies con brillo sutil y transiciones breves | Búsqueda visual, navegación, filtros y llamados a la acción |
| Responsividad | Contenido en columnas que se adapta a una sola columna | Navegación móvil, tarjetas apilables y controles accesibles |

## Alcance de implementación

La adaptación será exclusivamente de frontend. Se conservará la ruta principal y se reemplazará el montaje monolítico por componentes de presentación y contenido local. No se incorporará backend, persistencia, autenticación ni llamadas a API.


## Observación de la interfaz renderizada

La portada de UMOA confirma los patrones identificados en código: una cabecera minimalista y flotante, un **hero fotográfico de pantalla completa** con velo oscuro en degradado, un gran titular condensado en mayúsculas, un acento rojo mineral y dos acciones rectangulares de alto contraste. Las secciones posteriores preservan el ritmo de contenido editorial mediante etiquetas técnicas, divisores lineales, fondos oscuros y tarjetas con una interacción contenida. La implementación de Biblioteca UMOA tomará estos principios sin reutilizar la semántica ni el contenido específico de la universidad.

## Verificación inicial de la adaptación

La composición renderizada refleja correctamente la identidad de referencia: hero oscuro con fotografía institucional, navegación técnica en mayúsculas, rojo mineral como color de acción, retícula sutil y secciones editoriales con alto contraste. También se verificó la navegación al catálogo desde el hero. Durante esta prueba se detectó que el valor de búsqueda se transfiere visualmente al campo del catálogo, pero debe sincronizarse de forma explícita con el estado React para filtrar los resultados; se corregirá mediante un evento local de interfaz, sin introducir ninguna integración de backend.

La sincronización del buscador fue refactorizada a un evento local entre el hero y la sección de catálogo; la siguiente comprobación valida el filtrado al enviar la consulta. Esta comunicación ocurre exclusivamente en el navegador y mantiene el alcance sin backend.

La búsqueda desde el hero ya filtra correctamente el catálogo y actualiza el contador de resultados; los filtros por tipo de material permanecen activos de forma local. La implementación se mantiene enteramente del lado del cliente.

## Estructura aplicada

| Área | Implementación en Biblioteca UMOA | Propósito |
| --- | --- | --- |
| `client/src/pages/Home.tsx` | Ensamblador de la página | Mantiene la ruta principal ligera y legible. |
| `client/src/components/Library*.tsx` | Hero, navegación, servicios, catálogo, colecciones, actualidad y pie | Secciones independientes, con responsabilidades de presentación claras. |
| `client/src/components/InstitutionalBackdrop.tsx` | Fondo fotográfico reutilizable | Replica el patrón de capas y velos institucionales de UMOA. |
| `client/src/components/SectionHeading.tsx` | Encabezado editorial reutilizable | Centraliza eyebrow, título, descripción y acciones de sección. |
| `client/src/content/library.ts` | Contenido estático de interfaz | Separa textos y colecciones de la representación visual. |
| `client/src/index.css` | Sistema visual centralizado | Define tokens, tipografía, retícula, responsive y estados de interacción. |
| `client/public/images/` | Recursos visuales locales | Contiene adaptaciones visuales locales usadas por el hero, catálogo y actualidad. |

## Validación

La adaptación se comprobó con `pnpm check`, `pnpm build` y una revisión en navegador. La portada, navegación anclada, búsqueda del hero, filtrado de catálogo, enlaces de sección y diseño responsivo están resueltos sin endpoints, autenticación, persistencia ni otras dependencias de backend.
