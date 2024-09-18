# Surface Workflow app

## Deployment
https://surface-workflow-project.vercel.app/

## Project description

This is a **T3 Stack** project using **Next.js** with **TypeScript** and **Prisma**. It includes **Redux Toolkit** for state management, **Tailwind CSS** for styling, and additional useful packages like **zod**, **date-fns**, and **clsx**.

Prompt the user to add the Surface Tag to their website in order for us to start tracking incoming events. 

This will be similar to [Segment.com](http://Segment.com) website JavaScript snippet instructions

This is a [T3 Stack](https://create.t3.gg/) project bootstrapped with `create-t3-app`.

## Prerequisites

Before starting, ensure you have the following installed:

- **Node.js** (v18+)
- **pnpm** (v9+)
- **PostgreSQL** or another Prisma-compatible database

## Set up environment variables:

Create a `.env` file in the root directory and add the necessary environment variables. For example:

```bash
DATABASE_URL="postgresql://user:password@localhost:5432/dbname"


## Database Setup:

Run the following commands to generate Prisma client and apply migrations:

```bash
pnpm db:generate
pnpm db:migrate

Alternatively, to push the schema directly to the database:


```bash

pnpm db:push



## Available Scripts

- `pnpm build` - Build the project for production.
- `pnpm dev` - Start the development server.
- `pnpm start` - Start the production server.
- `pnpm lint` - Run the linter.
- `pnpm db:studio` - Open Prisma Studio for database management.
- `pnpm db:generate` - Generate Prisma client.
- `pnpm db:migrate` - Run database migrations.

