# Penqwin Landing Page

This is the official landing page and marketing site for [Penqwin](https://app.penqwin.com) — an intelligent platform that transforms code changes into a self-updating developer knowledge base.

## About Penqwin

Most engineering knowledge never reaches documentation. PRs, commits, AI code review insights, and developer context slowly scatter across tools, channels, and memory. Penqwin solves this by building a structured code wiki directly from your GitHub repository.

- **Bootstrap in Seconds**: Connect your repository and Penqwin builds a complete developer knowledge base across your architecture, APIs, modules, workflows, and technical systems.
- **Self-Updating Docs**: Penqwin acts as an autonomous agent that continuously tracks pull requests and code changes. It generates PR documentation and updates relevant guides, keeping your GitHub documentation perfectly accurate as code evolves.
- **Security & Trust**: Built with developer trust in mind. We only request minimum GitHub permissions, process data securely in an isolated environment, and never use your code to train public AI models.

## Tech Stack

- **Framework**: [Astro](https://astro.build/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) v4
- **Typography**: Instrument Serif & System UI

## Local Development

All commands are run from the root of the project:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |

## Project Structure

```text
/
├── public/               # Static assets (images, favicons, og-images)
├── src/
│   ├── assets/           # UI assets like SVG icons
│   ├── components/       # Reusable Astro UI components (Hero, Features, Pricing, etc.)
│   ├── layouts/          # Global layout wrappers and SEO tags
│   ├── pages/            # Routing pages (index, about, faq, alternatives)
│   └── styles/           # Global CSS (Tailwind imports)
└── package.json          # Project dependencies
```
