# Akash Singh — Portfolio

A premium, production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Quick start

```bash
npm i
npm run dev
```

Open http://localhost:3000.

That's it for browsing the site — the UI, animations, theming, and layout all work out of the box with zero configuration.

## Optional: enable the contact form's email + database

The contact form works without any setup (it validates and responds normally), but to actually **store messages in MongoDB** and **send yourself an email via Brevo**, add a `.env.local` file:

```bash
cp .env.example .env.local
```

Then fill in:

- `MONGODB_URI` — a MongoDB Atlas connection string
- `BREVO_API_KEY` — your Brevo (Sendinblue) transactional API key
- `CONTACT_TO_EMAIL` — where you want to receive messages
- `CONTACT_FROM_EMAIL` — a sender address verified in Brevo

Restart `npm run dev` after adding the file.

## Add your resume file

Drop your resume PDF into `public/resume.pdf` — the header, hero, and footer download buttons already point to `/resume.pdf`.

## Add your real social links

Update `github`, `linkedin`, and other fields in `lib/data.ts`.

## Project structure

```
app/                 Routes (home, project case studies, API, sitemap, robots)
components/          UI components (Header, Hero, About, Skills, Experience, Projects, Contact, Footer, etc.)
lib/data.ts          All resume-derived content — edit this to update copy
lib/mongodb.ts        MongoDB connection helper
lib/models/Message.ts Mongoose schema for contact messages
lib/email.ts          Brevo email sender
lib/rateLimit.ts       In-memory rate limiter for the contact API
```

## Deploy

Deploy directly to [Vercel](https://vercel.com/new). Add the same environment variables from `.env.local` in your Vercel project settings.

## Tech stack

Next.js · TypeScript · Tailwind CSS · Framer Motion · React Hook Form · Zod · Mongoose · MongoDB Atlas · Brevo
