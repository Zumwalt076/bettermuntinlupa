# bettermuntinlupa
An open-source, community-led civic technology initiative making Muntinlupa City government information more accessible, transparent, and citizen-friendly.

# Better Muntinlupa

Building a better, more transparent, and more accessible Muntinlupa through civic technology.

## About the Project

Better Muntinlupa is an open-source, community-led initiative inspired by BetterGov.ph.

Our goal is to make local government information easier for citizens to access, understand, and use.

## What We Aim to Build

- Accessible public government information
- Local budget and expenditure transparency
- Public infrastructure and project monitoring
- City ordinances and resolutions directory
- Government services and citizen resources
- Opportunities for civic participation

## Get Involved

We welcome developers, designers, researchers, writers, data contributors, and civic-minded citizens.

Explore our GitHub Issues to suggest improvements and contribute.

## Project Status

🟡 Initial setup — The static BetterSolano template has been imported. Branding, local content, and Vercel deployment are being prepared.

The imported pages still contain Solano branding and sample data. They are a development starting point and are not ready for public deployment.

## Run Locally

Use Node.js 22 LTS or newer and Python 3. Install the development tools:

```sh
npm ci
```

Start the site with clean URL support:

```sh
npm run dev
```

Open http://localhost:8000. Stop the server with Ctrl+C.

To copy the public site into `dist/` and preview it:

```sh
npm run build
npm run serve:dist
```

Open http://localhost:8080. The copy build does not need installed npm dependencies. Vercel configuration will be added in issue #4.

The imported Playwright tests cover the volunteer popup; broader release checks are planned in issue #5. Use `npm run test:chrome` with Chrome installed, or install a Playwright browser with `npx playwright install firefox` and run `npm test -- --project=firefox`.

## Template Credits

Adapted from [BetterSolano](https://github.com/BetterSolano/bettersolano), main commit `9e96474dd2e0e968a8975a6b1da20f9ca36cc636`, by Ramon Logan Jr.

The static pages, assets, JSON data, and existing popup tests were imported. The React application, admin tools, Facebook/FTP workflows, and cPanel deployment tools were excluded. Local run scripts and a basic static copy build were added for this project.

Our original [MIT license](LICENSE) remains in place. The template's code is MIT and its non-code content is [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). The upstream notices are preserved in [LICENSE.upstream](LICENSE.upstream), which is also included in the build output.

## Disclaimer

Better Muntinlupa is an independent civic technology initiative and is not an official website of the City Government of Muntinlupa.
