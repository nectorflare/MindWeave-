# Academic Service

Owns subjects, syllabi, exams, questions, eligibility, registrations, admit
cards, results, and certificate references.

## Public APIs

| Method | Endpoint |
|---|---|
| GET | `/api/v1/subjects` |
| GET | `/api/v1/subjects/:id` |
| GET | `/api/v1/subjects/:id/syllabus` |
| GET | `/api/v1/exams/schedules` |
| GET | `/api/v1/exams/:id` |
| GET | `/api/v1/exams/:id/eligibility?studentId=...` |

## Internal APIs

Internal routes use `/internal/v1` and require the `x-internal-api-key` header
when `INTERNAL_API_KEY` is configured.

| Area | Endpoints |
|---|---|
| Subjects | `GET/POST /subjects`, `PUT /subjects/:id`, `PUT /subjects/:id/syllabus` |
| Exams | `GET/POST /exams`, `GET/PUT /exams/:id`, `PATCH /exams/:id/status` |
| Questions | `GET/POST /questions`, `PUT/DELETE /questions/:id`, `POST /questions/import` |
| Exam delivery | `GET /exams/:examId/questions`, `GET /exams/:examId/answer-key` |
| Registrations | `GET/POST /registrations`, `POST /registrations/bulk`, `GET /registrations/:id`, `PATCH /registrations/:id/status` |
| Payments | `POST /registrations/payment-status` |
| Admit cards | `GET /admit-cards`, `PUT /admit-cards/:registrationId`, `POST /admit-cards/publish` |
| Results | `GET /results`, `GET/PUT /results/:registrationId`, `POST /results/publish` |
| Certificates | `GET /certificates?studentId=...` |
| Operations | `GET /summary` |

## Environment

```text
PORT=3002
MYSQL_HOST=mysql
MYSQL_PORT=3306
MYSQL_DATABASE=edtech_platform
MYSQL_USER=root
MYSQL_PASSWORD=root
INTERNAL_API_KEY=replace-with-a-long-random-secret
```

New databases use `db/schema/edtech_platform.sql`. Existing databases must
apply `db/migrations/002_academic_service.sql`.
