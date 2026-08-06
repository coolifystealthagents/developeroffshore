# Developer Offshore

SEO lead-generation site for `developeroffshore.com`. Built with Next.js, Docker, Coolify, Cloudflare, and Hermes site factory.

## Daily publishing

Daily Blog Publishing and Daily Research Publishing are operated by the PaperclipAI
control plane under the v2.4 playbook. Each routine validates its batch, commits it,
and pushes to the `main` production branch. Deployment is handled separately; these
publishing routines do not call Coolify.
