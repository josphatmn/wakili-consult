# M-Wakili AI

**Your Full-Time AI Kenyan Lawyer**

Specialised AI Agents trained on Kenyan law to help individuals, advocates, businesses, NGOs, and government institutions complete legal work faster.

## Tech Stack

- **Frontend**: Next.js 15 (App Router), TypeScript, TailwindCSS, shadcn/ui, Framer Motion
- **Backend**: Next.js Route Handlers, Server Actions, Prisma ORM
- **Database**: MySQL (via Prisma)
- **Auth**: Better Auth (email/password)
- **AI**: OpenAI GPT-5.5 with streaming
- **Payments**: Paystack
- **Deployment**: Vercel, PlanetScale/MySQL

## Getting Started

### Prerequisites

- Node.js 20+
- MySQL database
- OpenAI API key
- Paystack API keys (for payments)

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd lawfirm-ai

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Edit .env.local with your credentials:
# - DATABASE_URL (MySQL connection string)
# - OPENAI_API_KEY
# - PAYSTACK_SECRET_KEY & PAYSTACK_PUBLIC_KEY
# - BETTER_AUTH_SECRET (generate using: openssl rand -hex 32)

# Generate Prisma client
npx prisma generate

# Run database migrations
npx prisma migrate dev --name init

# Seed AI agents
npm run db:seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Database Setup

```bash
# Push schema directly (no migration history)
npx prisma db push

# Or use migrations
npx prisma migrate dev --name init

# Open Prisma Studio to manage data
npm run db:studio
```

## Project Structure

```
src/
├── app/
│   ├── (landing)/       # Public pages (home, login, register)
│   │   ├── page.tsx     # Landing page
│   │   ├── login/       # Login page
│   │   └── register/    # Registration page
│   ├── (dashboard)/     # Authenticated pages
│   │   ├── layout.tsx   # Dashboard layout with sidebar
│   │   ├── dashboard/   # Main dashboard
│   │   ├── research/    # Legal research mode
│   │   ├── chat/        # AI chat workspace
│   │   ├── documents/   # Document management
│   │   ├── contracts/   # Contract review
│   │   ├── cases/       # Case law research
│   │   ├── billing/     # Subscription & payments
│   │   ├── settings/    # User settings
│   │   └── admin/       # Admin panel
│   ├── api/             # API routes
│   │   ├── auth/        # Auth endpoints
│   │   ├── chat/        # AI chat streaming
│   │   ├── research/    # Legal research
│   │   ├── upload/      # Document upload
│   │   ├── payments/    # Payment initialization
│   │   └── webhooks/    # Paystack webhooks
│   ├── layout.tsx       # Root layout
│   ├── providers.tsx    # Theme & toast providers
│   └── globals.css      # Global styles
├── components/
│   ├── ui/              # shadcn-style UI components
│   ├── landing/         # Landing page components
│   ├── dashboard/       # Dashboard components
│   └── agents/          # AI agent components
├── lib/
│   ├── prisma.ts        # Prisma client
│   ├── auth.ts          # Authentication helpers
│   ├── openai.ts        # OpenAI integration
│   ├── agents.ts        # AI agent system
│   ├── paystack.ts      # Payment integration
│   ├── constants.ts     # App constants
│   └── utils.ts         # Utility functions
├── store/               # Zustand stores
└── types/               # TypeScript types
```

## Features

### AI Agents

- **Research Agent**: Deep legal research across Kenyan Acts, Constitution, case law
- **Drafting Agent**: Draft contracts, pleadings, affidavits and legal documents
- **Contract Review Agent**: Upload DOCX/PDF for AI-powered review
- **Case Law Agent**: Find precedents with relevance scoring
- **Compliance Agent**: KRA, NSSF, SHA, Data Protection compliance
- **Employment Law Agent**: Hiring, termination, employee rights
- **Family Law Agent**: Divorce, custody, succession
- **Criminal Law Agent**: Charges, bail, sentencing
- **Land Law Agent**: Title verification, land disputes
- **Immigration Agent**: Visas, work permits, citizenship
- **Business Registration Agent**: Company registration, NGOs
- **Litigation Assistant**: Case preparation, evidence organization

### Authentication

- Email/password registration and login
- Session management with JWT tokens
- Protected routes with middleware

### Payment Integration

- Paystack payment initialization
- Subscription management
- Webhook handling for payment confirmations

## Environment Variables

| Variable | Description |
|---|---|
| `DATABASE_URL` | MySQL connection string |
| `BETTER_AUTH_SECRET` | JWT signing secret |
| `OPENAI_API_KEY` | OpenAI API key |
| `OPENAI_MODEL` | OpenAI model (default: gpt-5.5) |
| `PAYSTACK_SECRET_KEY` | Paystack secret key |
| `PAYSTACK_PUBLIC_KEY` | Paystack public key |
| `PAYSTACK_WEBHOOK_SECRET` | Paystack webhook secret |
| `NEXT_PUBLIC_APP_URL` | Application URL |

## Deployment

### Vercel

1. Push to GitHub
2. Import project to Vercel
3. Set environment variables
4. Configure MySQL database (PlanetScale recommended)
5. Deploy

### Database Migration

```bash
# Generate migration
npx prisma migrate dev --name <migration-name>

# Apply in production
npx prisma migrate deploy
```

## License

MIT
# wakili-consult
