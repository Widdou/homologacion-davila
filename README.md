# Integración Homologada de Clínica Dávila

Dávila funciona con ENIAX, lo bueno es que tienen su API de AgendaWeb la cual ya se encarga de implementarla.
Su aplicación de agendamiento esta construida enteramente en jQuery con AJAX, lo cual permite tener una vision sin restricción de su funcionamiento del lado cliente.

La API de Dávila tampoco usa ningún mecanismo de autenticación por lo cual no hay impedimentos.
Junto con devolver como data la información como HTML (Server-Side-Rendering), de la cual podemos minar sus identificadores.

```
API_URL=https://agendaweb.davila.cl/api/v1/
API_URL_SEARCH=https://agendaweb.davila.cl/api/v1/search/681121301d132deb2fbcc9a8
API_URL_ENROLL_PATIENT=


```

### Diccionario conceptos Starbien-Dávila

Sede => office_id
Practicante =>
Especialidad =>

### Flujos para realizar la búsqueda y reserva de horas

#### Autenticar/Dar de alta un paciente

#### Búsqueda de disponibilidad

#### Consulta de fechas disponibles

#### Crear reserva de la cita

#### Anular reserva

####
