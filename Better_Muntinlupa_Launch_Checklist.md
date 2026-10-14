# Better Muntinlupa — Launch Checklist

**Prepared:** 12 October 2026 (Philippine time)  
**Repository:** https://github.com/Zumwalt076/bettermuntinlupa  
**contributor:** @markccalugay (per supplied screenshots)  
**co-contributor:** @Zumwalt076  
**Status:** Working toward first public preview; not yet independently verified as deployed.

> **Verification note:** This checklist uses the screenshots of PR #10 and Issue #8 and the BetterGov guide. A live GitHub issue/repository audit was unavailable. Treat unchecked items as tasks to verify, not as confirmed failures.

## TONIGHT — P0: Get a working website preview and avoid a premature launch

### A. Merge initial website foundation — Owner: Zumwalt076, reviewer: contributor
- [ ] Open [PR #10](https://github.com/Zumwalt076/bettermuntinlupa/pull/10).
- [ ] Confirm **base: main** and **compare: feat/initial-deployment** in your own repository.
- [ ] Review **Files changed (126)**, especially README, LICENSE, any build configuration, assets, placeholder data, and deleted/changed files.
- [ ] Confirm there are no credentials, private keys, personal records, or unnecessary analytics/tracking scripts.
- [ ] Ask the contributor to confirm exactly how to build and preview the site and that inherited upstream license credits are intact.
- [ ] If ready, click **Files changed → Review changes → Approve → Submit review** (if GitHub offers these controls to you).
- [ ] Return to **Conversation → Merge pull request → Confirm merge** (if GitHub reports it is mergeable and you approve the change).
- [ ] Open the repository's **main** branch to confirm the files have arrived.
- [ ] Check [Issue #2](https://github.com/Zumwalt076/bettermuntinlupa/issues/2) for automatic closure; the PR description claims to close it.

**Done when:** Template and branding foundation exists in `main`, reviewed and merge-confirmed.

### B. Deploy a staging/preview site — Owner: contributor with co-contributor
- [ ] Open [Issue #4](https://github.com/Zumwalt076/bettermuntinlupa/issues/4).
- [ ] Ask the contributor whether the project is a static build and which output folder and build command it uses.
- [ ] Choose a host from the BetterGov guide (Vercel, Netlify, or GitHub Pages). Vercel steps: open https://vercel.com/new, sign in, import the GitHub repository, confirm build settings with the contributor, then click Deploy.
- [ ] Do not paste secrets into repository files or commit `.env` files. Configure environment secrets in the host if required.
- [ ] Obtain and save the working preview URL.
- [ ] Confirm that a new commit to `main` can update the deployed site as intended.

**Done when:** Both collaborators can open the preview URL on desktop and mobile.

### C. Verify that the inherited content is safe and accurate — Owner: Zumwalt076 with contributor
- [ ] Open [Issue #3](https://github.com/Zumwalt076/bettermuntinlupa/issues/3).
- [ ] Review every section of the preview for leftover **Muntinlupa** names, facts, officials, budgets, projects, contact numbers, location text, coordinates, maps, weather, social links, and images.
- [ ] Remove any incorrect inherited local-government figures rather than relabeling them as Muntinlupa.
- [ ] Confirm that all published claims have an original source link and an as-of date.
- [ ] For information not yet verified, hide the item, use a clear 'Data being verified' state, or clearly mark it as a demo placeholder.
- [ ] Confirm that the website clearly says it is **independent of the City Government of Muntinlupa and not an official government website**.

**Done when:** No copied Muntinlupa-specific data is being presented as Muntinlupa facts.

### D. Release and usability checks — Owner: contributor, reviewed by Zumwalt076
- [ ] Open [Issue #5](https://github.com/Zumwalt076/bettermuntinlupa/issues/5).
- [ ] contributor runs existing repo build, JavaScript/JSON linting, and any smoke tests and reports whether each passes. Do not assume GitHub's 'Ready to merge' status means tests have passed.
- [ ] Open every menu and important link; check for missing pages/404 errors.
- [ ] Review the website on phone and desktop, including navigation, typography, logo positions, and readability.
- [ ] Confirm map, weather, language switcher, search, forms, and links either function or are hidden/labeled under development.
- [ ] Check browser console/network errors and ensure the site loads without exposed credentials.
- [ ] Decide on **preview only** versus **public launch**. Do not advertise as launched until the release checks and basic data review pass.

**Done when:** Preview passes visible checks and contributor confirms a successful build.

## TONIGHT — P1: Register properly with BetterGov and clean up public copy

### E. Verify BetterGov directory registration — Owner: Zumwalt076
- [ ] Visit https://github.com/jmacj/better-lgu-directory/pulls and locate your submission under author `Zumwalt076` or find whether Muntinlupa is already in the directory.
- [ ] If you only committed the directory row in your own fork, open the fork and click **Contribute → Open pull request**, targeting `jmacj/better-lgu-directory` on `main`.
- [ ] Ensure your entry links to `https://github.com/Zumwalt076/bettermuntinlupa` and the maintainer handle.
- [ ] While developing but not yet launched, status should be **🟡 Work in Progress**. If the PR is open, edit the entry in the fork to update that PR. If already merged, send a separate 'Update Muntinlupa City — status change to Work in Progress' PR.
- [ ] Only after a genuine public launch, change status to **🟢 Active** and add your live domain.
- [ ] Do **not** submit all website code as a PR to the BetterGov directory; the directory PR is only for listing metadata.

**Done when:** A directory PR is submitted or Muntinlupa is visibly listed accurately; note that maintainers must merge it.

### F. Legal/disclaimer and public content — Owner: Zumwalt076 with contributor
- [ ] Open [Issue #9](https://github.com/Zumwalt076/bettermuntinlupa/issues/9).
- [ ] Review About, Contact, Privacy, Terms, Disclaimer, and Contribute links; remove stale template language.
- [ ] Confirm repository license and credit for the upstream template are preserved in accordance with the original template's terms.
- [ ] Publish project-specific contact method; avoid listing private phone numbers and email addresses without consent.
- [ ] Add 'Data last reviewed' or 'Source last accessed' metadata where public records are displayed.
- [ ] Document an error/correction route (GitHub Issue or email) for citizens to flag inaccurate information.

**Done when:** No false endorsement, misleading claims, or stale inherited legal/contact copy appears.

## TONIGHT — P2: Branding (do not block preview deployment)

### G. Replace all three SVG assets — Owner: Zumwalt076
- [ ] Open [Issue #8](https://github.com/Zumwalt076/bettermuntinlupa/issues/8).
- [ ] Design a recognizable independent Better Muntinlupa symbol and wordmark (avoid appearing to be the official city seal).
- [ ] Export **standard SVG** with **421.6 × 151.7 viewBox** named `better-muntinlupa-logo.svg`.
- [ ] Export **white SVG** with **421.6 × 151.7 viewBox** named `better-muntinlupa-logo-white.svg`.
- [ ] Export **square favicon SVG** with **250 × 250 viewBox** named `favicon.svg`.
- [ ] Upload/replace the files under `assets/images/logo/` in a new branch and open a PR, or ask the contributor to do the replacements. Keep exact filenames.
- [ ] Check standard logo on light background, white logo on dark background, and favicon in browser tab. Check desktop/mobile sizes.
- [ ] Merge the logo PR and close Issue #8 only after all three assets work.

**Done when:** Three working SVG assets are in `main` and shown correctly in preview. **This is explicitly low-priority according to your contributor.**

## NEXT — Data collection and first release content

### H. Seed a transparent, documented Muntinlupa dataset — Owner: Zumwalt076/research contributors
- [ ] Create a small source catalogue of official records: Muntinlupa City Full Disclosure Board, ordinances, COA, DBM, PhilGEPS, and government office directories.
- [ ] Start with a modest set of confirmed records (e.g., official city budget, 5–10 sourced projects, department contacts) rather than an unverified large scrape.
- [ ] For each entry record: `title`, `year`, `barangay`, `agency`, `amount`, `budget_stage`, `project_status`, `source_url`, `document_date`, `last_verified`, `reviewer`, and `notes`.
- [ ] Separate **national** and **local** budget sources, and distinguish **proposed**, **amended**, **enacted**, **obligated**, **awarded**, **paid**, and **completed** when evidence permits.
- [ ] For FY 2027, compare the executive NEP with the House-approved version before claiming a specific Muntinlupa amendment or 'insertion'. Do not infer misconduct from a change in appropriations alone.
- [ ] Check data extraction/scraping conditions and rate-limit requests; retain document URLs and human review before publishing extracted amounts.
- [ ] Have the contributor import the verified records and expose original-source links, publication/as-of dates, and filters.

**Done when:** Citizens can trace published figures back to the cited official documents.

### I. Domain, ownership, and maintainability — Owner: Zumwalt076 with contributor
- [ ] Check availability and decide whether to register `bettermuntinlupa.org` or use a temporary preview URL.
- [ ] Connect domain to hosting and enable HTTPS once the site is ready.
- [ ] Check page titles, share preview, favicon, `robots.txt`, and sitemap for old Muntinlupa domains.
- [ ] Decide who controls the domain, DNS, Vercel account, GitHub repository, and billing; document access and recovery.
- [ ] Require PR review for future significant changes to `main` when contributors join, and enable checks when available.
- [ ] Add contribution instructions and issue labels; document how data corrections and security reports are handled.
- [ ] Schedule periodic review of budgets, officials, projects, ordinances, hotlines, and broken links.
- [ ] After launching, update BetterGov directory status to Active and add site URL.

## Clear division of responsibility

| Work | Owner | contributor |
|---|---|---|
| Project vision and launch approval | Accountable | Consulted |
| Site code, build, preview deployment | Review | Responsible |
| Logos, wording, civic identity | Responsible | Integrates assets |
| Public records sourcing and validation | Responsible | Creates import/display tooling |
| Test results and technical issues | Reviews | Responsible |
| BetterGov directory registration | Responsible | Optional help |
| Domain/DNS/billing access | Accountable | Configures deployment |

## Direct links

- Your repository: https://github.com/Zumwalt076/bettermuntinlupa
- Pull request #10: https://github.com/Zumwalt076/bettermuntinlupa/pull/10
- Your issues: https://github.com/Zumwalt076/bettermuntinlupa/issues
- BetterGov guide: https://lgu.bettergov.ph/GUIDE
- BetterGov contribution instructions: https://lgu.bettergov.ph/CONTRIBUTING.html
- BetterGov directory: https://lgu.bettergov.ph/
- BetterGov directory pull requests: https://github.com/jmacj/better-lgu-directory/pulls
- Hosting: https://vercel.com/new
