# EdTech Platform Backend

This repository is structured as a deployable microservice monorepo.

## Layout

- `packages/shared-types`: shared TypeScript contracts
- `packages/db-client`: shared database connection helper
- `packages/logger`: shared logging helper
- `packages/auth-middleware`: shared JWT middleware package placeholder
- `services/api-gateway`: gateway service
- `services/iam-service`: authentication and profiles
- `services/academic-service`: subjects, exams, questions, and CMS
- `services/commerce-service`: payments, registrations, orders, and books
- `services/live-exam-service`: active exam sessions and answers
- `services/notification-service`: email, PDF, and async notifications
- `db/schema/edtech_platform.sql`: initial database schema

## Commands

```bash
npm install
npm run build
docker compose up --build
```

Copy each service `.env.example` to `.env` for local Docker or standalone service runs.
