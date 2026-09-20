# Flujos frontend de Biblioteca UMOA

Esta revisión completa la propuesta como SPA frontend lista para validación del cliente. Las vistas y acciones se mantienen dentro del mismo sistema de navegación y no dependen de backend.

## Vistas implementadas

- Catálogo con filtros, búsqueda, recomendaciones y vista cuadrícula/lista.
- Ficha detallada de libro con favoritos y acceso al formulario de orientación.
- Recursos digitales con filtro por tipo y ficha detallada.
- Noticias con lectura en modal.
- Mis favoritos para libros y recursos.
- Preferencias locales de vista compacta y animaciones.
- Formación de usuarios con enlaces funcionales a consulta y recursos.
- Pregúntanos con formulario validado y estado de confirmación.
- Visítanos con acción de preparación de visita.
- Centro de notificaciones con estado leído/no leído.
- Estados de confirmación y error.

## Límite intencional

Las consultas, favoritos, preferencias y búsquedas se almacenan o simulan únicamente en el navegador. Esto permite demostrar la experiencia completa antes de conectar autenticación, catálogo remoto, agenda, correo o persistencia en backend.

La vista **Preparar mi visita** incluye ahora un formulario frontend con nombre, correo institucional, fecha, motivo y notas, y termina en el estado de confirmación. Los filtros de material del catálogo también actualizan resultados y el formulario de consultas valida todos sus campos obligatorios.
