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

## Dependencies

Project
`npm i express axios`

Global dependency for development:
`npm install -g nodemon`

## Diccionario conceptos Starbien-Dávila

Sede => office_id
Practicante => doc_id
Especialidad =>

## Flujos para realizar la búsqueda y reserva de horas

### Autenticar/Dar de alta un paciente

### Búsqueda de disponibilidad

### Consulta de fechas disponibles

### Crear reserva de la cita

    Requiere una validación por telefono, envian un SMS, que podriamos redirigr

### Anular reserva

---

Parseado del listado de especialidades:
https://regexr.com/8eao8

```
Pattern:
">([-\w ()áéíóú\u00f1\u00ed]+)<\/a>.*?data-id=\\"(\d+)\\"

Replace:
{\n\t"name": "$1",\n\t"data-id": $2,\n\t"snomed_code": "123456XXXX"\n},\n
```

---

## AgendaWeb endpoints

<details>
<summary>Listado de endpoints presentes en la aplicación de Dávila</summary>

```
/api/v1/enroll_patient/{company_short_name}/{rut}: For patient enrollment/login.
/api/v1/search/{agenda_id}: For searching doctors, specialties, clinics.
/api/v1/create_calendar/{agenda_id}: For generating the calendar.
/api/v1/propose_hours/{agenda_id}: For fetching available hours for a selected date.
/api/v1/save_contact_data/{agenda_id}: To get contact data.
/api/v1/make_reservation/{agenda_id}: To make the final reservation.
/api/v1/get_profile/{company_short_name}/{doc_id}/{spec_id}/TODOS?spec_name={spec_name}: To retrieve doctor's profile.
/api/v1/get_office_detail/{company_short_name}/{code}: To get office details.
/api/agenda/cancel_hour/{chat_id}: To cancel an existing appointment.
/api/v1/patient_appointments/{agenda_id}/{access_code}: To get the patient's appointments.
/api/v1/patient_appointments/{agenda_id}/{appointment_id}: To cancel or confirm an appointment.
/api/v1/custom_function/interesado_producto/{agenda_id}
/api/v1/custom_function/clic_to_whatsapp/{agenda_id}
/api/v1/event_tracker/{agenda_id}
```

OBS: Parece que `chat_id` corresponde a lo mismo que `agenda_id` en `/cancel_hour`

</details>
