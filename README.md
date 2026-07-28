# Developer Offshore

SEO lead-generation site for `developeroffshore.com`. Built with Next.js, Docker, Coolify, Cloudflare, and Hermes site factory.

## Daily routines

Automated content routines are available for this repository:

- `scripts/update-fleet-data.py` updates `app/fleet-data.ts` when source research data is present.
- `scripts/generate-visuals.py` generates canonical `public/visuals/*.svg` assets.

A scheduled GitHub Action runs these routines every day at 07:00 UTC via `.github/workflows/daily-routines.yml`, commits any generated changes, and pushes to the production branch for Coolify deploy.
