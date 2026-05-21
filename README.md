# Nexus Media

High-converting Social Media Marketing Agency website — MERN monorepo with a bold black, white, and yellow minimalist design.

## Directory Structure

```
nexus-media/
├── package.json                 # Root workspace scripts
├── README.md
├── .gitignore
│
├── client/                      # React + Vite frontend
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── index.html
│   ├── public/
│   │   ├── favicon.svg
│   │   └── assets/
│   │       ├── logo.png         # Primary logo (slab-serif)
│   │       ├── logo-pixel.png   # Pixel / 8-bit logo variant
│   │       └── logo.svg         # Legacy placeholder
│   └── src/
│       ├── main.jsx
│       ├── App.jsx
│       ├── index.css
│       ├── components/
│       │   ├── layout/
│       │   │   ├── Layout.jsx
│       │   │   ├── Header.jsx
│       │   │   └── Footer.jsx
│       │   ├── ui/
│       │   │   ├── Button.jsx
│       │   │   ├── InputField.jsx
│       │   │   ├── Accordion.jsx
│       │   │   └── Logo.jsx
│       │   └── home/
│       │       ├── Hero.jsx
│       │       ├── SocialProofTicker.jsx
│       │       ├── ServicesGrid.jsx
│       │       └── MetricsSection.jsx
│       ├── pages/
│       │   ├── Home.jsx
│       │   ├── Services.jsx
│       │   ├── CaseStudies.jsx
│       │   └── Contact.jsx
│       └── utils/
│           ├── api.js
│           └── constants.js
│
└── server/                      # Express + MongoDB backend
    ├── package.json
    ├── server.js
    ├── .env.example
    └── src/
        ├── config/
        │   ├── db.js
        │   └── constants.js
        ├── models/
        │   └── Contact.js
        ├── routes/
        │   └── contactRoutes.js
        ├── controllers/
        │   └── contactController.js
        ├── middleware/
        │   └── validateContact.js
        └── services/
            └── emailService.js
```

## Prerequisites

- Node.js 18+
- MongoDB running locally (or MongoDB Atlas URI)

## Setup

```bash
# Install all dependencies
npm run install:all

# Configure server environment
cp server/.env.example server/.env
# Edit server/.env with your MongoDB URI and SMTP credentials
```

### Logo

Brand assets live in `client/public/assets/`:

| File | Description |
|------|-------------|
| `logo.png` | Primary slab-serif lockup (header & footer) |
| `logo-pixel.png` | Pixel / 8-bit variant (`variant="pixel"` on `<Logo />`) |

Logos are inverted in CSS so black-on-white artwork reads as white on the dark site theme.

### SMTP (Nodemailer)

For Gmail, enable 2FA and create an [App Password](https://myaccount.google.com/apppasswords). Set in `server/.env`:

```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

Inquiries are emailed to **nexusinevents@gmail.com** automatically on each form submission.

## Development

```bash
# Run client + server concurrently
npm run dev

# Or separately:
npm run dev:client   # http://localhost:5173
npm run dev:server   # http://localhost:5001
```

## API Endpoints

| Method | Endpoint           | Description                    |
|--------|--------------------|--------------------------------|
| GET    | `/api/health`      | Server health check            |
| GET    | `/api/contact-info`| Agency contact details         |
| POST   | `/api/contact`     | Submit discovery form inquiry  |

### Contact POST body

```json
{
  "fullName": "Jane Doe",
  "email": "jane@brand.com",
  "phone": "0727488914",
  "company": "Brand Co",
  "website": "https://brand.com",
  "monthlyBudget": "5k-15k",
  "services": ["Paid Acquisition", "Short-Form Content"],
  "goals": "Scale Meta ads to $50k/mo profitably...",
  "timeline": "asap",
  "message": "Optional notes"
}
```

## Deploy frontend (Vercel)

Repo: [github.com/din3th/nexus-media](https://github.com/din3th/nexus-media)

1. Sign in at [vercel.com](https://vercel.com) and **Add New Project**.
2. Import **din3th/nexus-media** from GitHub.
3. Set **Root Directory** to `client` (Edit → Root Directory → `client`).
4. Framework should auto-detect **Vite**. Defaults are fine:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
5. **Environment variables** (Project → Settings → Environment Variables):

   | Name | Value |
   |------|--------|
   | `VITE_API_URL` | Your deployed API URL including `/api`, e.g. `https://your-api.onrender.com/api` |

   Leave unset only if the API is not live yet — the contact form will not work until this points to your backend.

6. Deploy. Vercel will assign a URL like `https://nexus-media.vercel.app`.

`client/vercel.json` rewrites all routes to `index.html` so React Router works on refresh.

**Backend CORS:** When the API is hosted elsewhere, set `CLIENT_URL` in server `.env` to your Vercel URL (e.g. `https://nexus-media.vercel.app`).

## Production Build

```bash
npm run build        # Builds client to client/dist
npm start            # Starts Express server
```

Serve `client/dist` as static files from Express in production (add static middleware as needed).

## Brand Colors (Tailwind)

| Token            | Hex       |
|------------------|-----------|
| `brand-black`    | `#000000` |
| `brand-dark`     | `#0A0A0A` |
| `brand-white`    | `#FFFFFF` |
| `brand-yellow`   | `#FFDE4D` |
| `brand-muted`    | `#737373` |

## Contact (Hardcoded)

- **Email:** nexusinevents@gmail.com
- **Phone:** 0727488914
