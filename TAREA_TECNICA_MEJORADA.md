# Tarea técnica mejorada
## Proyecto: Sitio web de la Biblioteca UMOA

**Cliente:** Proyecto PDL / Universidad de Moa Dr. Antonio Núñez Jiménez
**Versión:** 2.0
**Fecha:** 20 de septiembre de 2026
**Alcance de esta versión:** frontend demostrable, preparado para integración posterior con backend, autenticación, KOHA y servicios institucionales.

## 1. Propósito y corrección del documento original

El documento original define objetivos válidos para un sitio web de biblioteca, pero presenta una inconsistencia de contenido: su índice conserva requisitos de un sistema de ausencias, vacaciones y fondo de tiempo que no corresponden a este proyecto. Esta versión elimina esa mezcla, normaliza la numeración y separa tres niveles de implementación: funciones demostrables en el frontend, funciones que requieren una integración posterior y condiciones que deben ser confirmadas por la biblioteca antes de contratar el backend.

La solución actual no debe presentarse como un sistema bibliotecario completo. Es un portal frontend funcional que permite validar la experiencia de usuario, la arquitectura visual y los flujos principales antes de conectar datos institucionales.

## 2. Alcance de la entrega frontend

La entrega contiene una aplicación de una sola página organizada bajo `frontend/`. La interfaz utiliza la identidad visual de la Universidad de Moa, con tipografía Inter para lectura, Space Grotesk para títulos y Oswald para etiquetas técnicas. Incluye navegación responsive, fondos institucionales, logo oficial, estados de carga, estados vacíos, animaciones configurables y controles con foco visible para teclado.

El catálogo de demostración permite consultar libros por texto, autor, año, materia, tipo de material, ISBN y número de inventario. Cada registro muestra portada cuando existe y un icono genérico cuando no existe. La ficha bibliográfica incluye título, autor, materia, ISBN, serie, editor, número de páginas, clasificación CCD y número de inventario.

Los favoritos, las búsquedas recientes y las preferencias de vista se guardan localmente en el navegador. Esto permite validar la experiencia sin inventar una persistencia remota que todavía no existe.

## 3. Requisitos funcionales normalizados

| ID | Requisito | Criterio de aceptación | Estado actual |
|---|---|---|---|
| RF01 | Buscar información | El usuario puede buscar por palabras clave, autor o título. El portal diferencia Catálogo y Biblioteca virtual. | **Frontend parcial cumplido.** La Biblioteca virtual está implementada como vista preparada; su fuente real requiere integración institucional. |
| RF02 | Gestionar noticias | El usuario puede listar noticias y abrir una noticia ampliada mediante modal. El alta, modificación y eliminación requieren un panel administrativo y backend. | **Consulta cumplida; administración pendiente.** |
| RF03 | Nuestra Universidad | Deben existir accesos a Conócenos, Servicios al usuario, Salas, Misión y Visión, Acceso a recursos, Contacto, Horario, Localización, Pregúntanos y Formación. | **Frontend cumplido como contenido institucional inicial.** El contenido definitivo debe ser validado por la biblioteca. |
| RF04 | Acceso a recursos | Deben mostrarse Repositorio Ninive, Revistas UMOA, Normas bibliográficas, Bibliotecas digitales especializadas y Bibliografías recomendadas. | **Frontend cumplido como catálogo de recursos.** Los enlaces reales y documentos finales están pendientes de URLs y archivos institucionales. |
| RF05 | Gestionar catálogo | Deben existir operaciones de listar, adicionar, modificar, mostrar y eliminar libros con los campos bibliográficos definidos. | **Consulta y ficha cumplidas; administración pendiente.** Requiere base de datos, permisos y conexión futura con KOHA. |
| RF06 | Buscar por criterios en el catálogo | El usuario debe poder buscar por título, autor, tema, ISBN, serie y número de inventario, viendo cantidad y listado de resultados. | **Frontend cumplido con datos de demostración.** Debe conectarse a KOHA o a una API para datos reales. |
| RF07 | Formación de usuarios | Deben mostrarse tutoriales, cursos y preguntas frecuentes, y debe existir un canal de solicitud. | **Flujo frontend cumplido de forma inicial.** Falta cargar contenido institucional definitivo y, si se requiere, un gestor editorial. |
| RF08 | Normas bibliográficas | El usuario debe consultar las normas y guías aprobadas por la biblioteca. | **Acceso visual cumplido; contenido final pendiente.** |
| RF09 | Bibliografías recomendadas | El usuario debe consultar bibliografías organizadas por área o tema. | **Estructura frontend cumplida; corpus y criterios de selección pendientes de aprobación.** |

## 4. Requisitos no funcionales y trazabilidad

| ID | Requisito | Evaluación del sitio actual | Acción necesaria |
|---|---|---|---|
| RNF01 | Interfaz simple, interactiva e intuitiva | Cumplido en el frontend mediante navegación lateral, filtros, estados y formularios. | Validar con usuarios reales. |
| RNF02 | Uso por usuarios de distintos niveles y áreas | Parcialmente cumplido por lenguaje claro y búsqueda por criterios. | Realizar pruebas de usabilidad y accesibilidad. |
| RNF03 | Autenticación | No implementado. El usuario actual es visitante. | Crear backend de cuentas, sesiones y recuperación de acceso. |
| RNF04 | Contraseñas protegidas | No aplica al frontend actual porque no existe autenticación. | Usar hash seguro en backend y transporte HTTPS. |
| RNF05 | Control por cuenta, contraseña y nivel de acceso | No implementado. | Definir roles de visitante, bibliotecario y administrador. |
| RNF06 | Copias incrementales y restauración | No implementado. | Definir política de backup y restauración de la base de datos. |
| RNF07 | Historial auditable de navegación | El frontend no guarda trazabilidad remota. | Incorporar analítica institucional con política de privacidad y retención. |
| RNF08 | Rendimiento | El build de producción compila correctamente y los recursos visuales se sirven localmente. | Medir Core Web Vitals, carga en red institucional y consultas contra datos reales. |
| RNF09 | Interoperabilidad y consultas a otros sistemas | La interfaz queda preparada, pero no existe integración con KOHA ni biblioteca virtual. | Definir API, formatos, autenticación entre servicios y límites de consulta. |
| RNF10 | Versionado y mantenimiento | Cumplido: repositorio Git, rama de trabajo y Pull Request. | Establecer flujo de releases, revisión y mantenimiento institucional. |
| RNF11 | Identidad visual | Cumplido: logo, fondos, colores, tipografía y composición alineados con UMOA. | Aprobar manual visual definitivo. |
| RNF12 | Multiplataforma | Cumplido como aplicación web moderna en navegadores de escritorio y móvil. | Validar navegadores disponibles en la entidad. |
| RNF13 | Hardware y plataforma de instalación | Pendiente de decisión institucional. | Confirmar servidor, sistema operativo, dominio, HTTPS y estrategia de despliegue. |
| RNF14 | Documentación de desarrollo | Parcialmente cumplido con esta tarea técnica y documentación frontend. | Mantener manual de instalación, operación, API y despliegue en la fase backend. |
| RNF15 | Componentes reutilizables | Cumplido mediante componentes UI, vistas y estilos centralizados. | Consolidar biblioteca de componentes durante la evolución. |
| RNF16 | Integración con identidad corporativa | Cumplido con la referencia visual de UMOA. | Validar con Comunicación Institucional. |
| RNF17 | Conectividad de estaciones de trabajo | No verificable en sandbox. | Validar acceso desde la red institucional al despliegue final. |
| RNF18 | Propiedad y derechos | Debe quedar definido contractualmente que la aplicación y documentación pertenecen a la UMOA según el documento base. | Incorporar cláusula en contrato y acta de aceptación. |
| RNF19 | Formación del personal | El portal incluye flujos intuitivos, pero la capacitación formal no está entregada. | Preparar manual breve y sesión de capacitación antes de la puesta en producción. |

## 5. Pendientes que no deben declararse como cumplidos

La administración de libros y noticias, la autenticación, los permisos por rol, la auditoría, los respaldos, la conexión con KOHA, la biblioteca virtual real y la publicación de documentos institucionales requieren backend, infraestructura o validación del cliente. El frontend actual deja los puntos de integración identificados y no simula una conexión que no existe.

Antes de la segunda fase se deben entregar las URLs oficiales de Repositorio Ninive, las tres revistas, las bibliotecas digitales y los documentos aprobados. También deben confirmarse los campos definitivos del catálogo, especialmente serie, editor, paginación, clasificación CCD y número de inventario.

## 6. Criterios de aceptación de la fase frontend

La fase frontend se considera aceptable cuando el cliente puede navegar por las vistas institucionales, buscar en el catálogo de demostración, aplicar filtros, abrir fichas, ver portadas o iconos genéricos, guardar favoritos, consultar recursos, abrir noticias, utilizar los formularios de preguntas y visitas, revisar confirmaciones, cambiar preferencias y usar el portal desde un viewport móvil.

La aceptación técnica se respalda con `pnpm check`, `pnpm build`, revisión de rutas de imágenes desde `frontend/public`, revisión de ausencia de referencias a la antigua carpeta `client` y comprobación del estado limpio del repositorio.

## 7. Distribución propuesta de los 100.000 CUP

La distribución se realiza según las labores descritas: una persona realizó el análisis y documento de requisitos, mientras la otra realizó la implementación frontend, adaptación visual, interacciones, pruebas, reorganización del repositorio y publicación de cambios. Es una propuesta de reparto interno y debe ser confirmada por ambas personas; no sustituye una valoración contractual o laboral oficial.

| Participante | Labor | Peso propuesto | Importe |
|---|---|---:|---:|
| Desarrollador frontend | Arquitectura del frontend, adaptación del sistema visual UMOA, implementación del portal, catálogo, recursos, formularios, estados, responsive, portadas, rutas de assets, pruebas, Git y publicación. | 70% | **70.000 CUP** |
| Analista de requisitos | Levantamiento y redacción del catálogo inicial de requisitos, organización de requisitos funcionales y no funcionales, identificación del alcance del sistema. | 30% | **30.000 CUP** |
| **Total** |  | **100%** | **100.000 CUP** |

El reparto del desarrollador se puede justificar internamente de la siguiente forma: 25.000 CUP por arquitectura y adaptación visual; 30.000 CUP por implementación de funcionalidades y flujos; 10.000 CUP por pruebas, correcciones y verificación de recursos; y 5.000 CUP por reorganización, versionado y publicación. El reparto de la analista puede dividirse en 20.000 CUP por levantamiento y estructuración de requisitos y 10.000 CUP por documentación, revisión y trazabilidad.

La proporción 70/30 es razonable para el estado actual porque la implementación técnica representa la mayor parte del trabajo material entregado, mientras que el documento de requisitos es un insumo indispensable para orientar el desarrollo. Si ambas partes acuerdan valorar más la fase de análisis o incluir entrevistas adicionales, la proporción puede modificarse antes del acta de aceptación.

## 8. Fase siguiente recomendada

La siguiente contratación debe tratarse como una fase separada. Debe incluir diseño de base de datos, integración con KOHA, autenticación y roles, administración de catálogo y noticias, API de biblioteca virtual, respaldos, auditoría, despliegue en infraestructura institucional, pruebas de seguridad, manual de usuario y capacitación.

La aprobación del frontend no implica la aprobación automática de esas funciones futuras. Cada una debe tener un criterio de aceptación y una estimación independiente.

## Referencias

[1]: https://github.com/immushudev/Pagina_Web_BibliotecaUMOa "Repositorio del frontend Biblioteca UMOA"
[2]: https://github.com/immushudev/Pagina_Web_BibliotecaUMOa/pull/1 "Pull Request de adaptación visual y funcional Biblioteca UMOA"
[3]: https://github.com/immushudev/UMOA "Repositorio de referencia visual Universidad de Moa"
