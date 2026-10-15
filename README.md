# Prime Growth LLC — Corporate Website (v2)

Static corporate website (HTML/CSS/JS + local assets). No build step, no external requests (fonts are self-hosted).

## Company data used

| Field | Value | Source |
|---|---|---|
| Legal name | Prime Growth LLC | Previous site (not yet checked against Articles/EIN) |
| Domain | primegrowthllc.com | Previous site / README |
| Public e-mail | contact@primegrowthllc.com | Previous site |
| State of formation | Wyoming | Previous site |
| Principal office | 525 Randall Ave, Ste 100-1251, Cheyenne, WY 82001 | Previous site |
| Registered Agent | Registered Agents Inc — 30 N Gould St, Ste R, Sheridan, WY 82801 | Previous site |
| Business category | Business consulting / advisory | Previous site |
| DNS provider | GoDaddy | Previous README |

Not published: EIN, member names, phone number, BOIR data.

## File structure

```
/
├── index.html
├── about.html
├── privacy.html
├── terms.html
├── style.css
├── script.js
├── vercel.json
├── README.md
└── assets/
    ├── logo-transparent.png     (original logo, dark text — for light backgrounds)
    ├── logo-light.png           (white text version — footer / dark backgrounds)
    ├── logo-mark-light.png      (icon only — header)
    ├── favicon.png
    ├── apple-touch-icon.png
    ├── og-image.png             (1200×630 social preview)
    ├── hero-consulting.svg
    ├── about-consulting.svg
    └── fonts/                   (Libre Caslon Text + Inter, SIL OFL)
```

The previous AI-generated photos (`hero-consulting.jpg`, `about-consulting.jpg`, `strategy-meeting.jpg`) are no longer used and should be removed from the repository.

## Deploy on Vercel

1. Push the contents of this folder to the root of a GitHub repository.
2. Vercel → Add New → Project → import the repository.
3. Settings:
   - **Framework Preset:** Other
   - **Root Directory:** ./
   - **Build Command:** leave empty
   - **Output Directory:** leave empty
   - **Install Command:** leave empty
4. Deploy.

## Domains

- `www.primegrowthllc.com` → connected to **Production**
- `primegrowthllc.com` → **308 Permanent Redirect** to `www.primegrowthllc.com`

## GoDaddy DNS for Vercel

GoDaddy → My Products → primegrowthllc.com → DNS → Manage DNS:

| Type | Name | Value |
|---|---|---|
| A | @ | 216.198.79.1 |
| CNAME | www | cname.vercel-dns.com |

- Delete only a conflicting existing **A @** record (e.g. GoDaddy "Parked") and a conflicting **CNAME www**.
- Remove GoDaddy **Forwarding** for the domain if it is enabled.

**Use the exact DNS values shown by Vercel if Vercel provides project-specific records.**

**Do not delete MX, SPF, DKIM, DMARC or Google verification records used for email.**

## Notes

- Cookie preference is stored in `localStorage` under `pg_cookie_consent`.
- Canonical and Open Graph URLs point to `https://www.primegrowthllc.com/`.
- Legal pages are general website notices and do not constitute legal advice.
