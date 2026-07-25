# treoa.github.io

Single-page motion portfolio. Next.js 16 static export, deployed to GitHub Pages.

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> out/
```

All copy lives in `src/content.ts`. Nothing else needs editing to change the text.

## Deploy order matters

This repo intentionally has **no `public/CNAME` file yet**.

GitHub Pages 301-redirects `treoa.github.io` to the custom domain as soon as one is
configured. Adding the CNAME before `treo.is-a.dev` resolves would leave no reachable URL,
and the is-a.dev registration PR requires a live link plus a screenshot.

Correct sequence:

1. Fill in every `TODO` in `src/content.ts`.
2. Push this repo, set **Settings → Pages → Source: GitHub Actions**.
3. Confirm `https://treoa.github.io` loads. Screenshot it.
4. Open the is-a.dev PR using that link and screenshot.
5. After the PR merges and `treo.is-a.dev` resolves, add `public/CNAME` containing
   `treo.is-a.dev` and push. Pages will issue a certificate within ~24h.

## Stack

- Next.js 16.2.12, `output: "export"`
- React 19.2.8
- motion 12.42.2, with `useReducedMotion` respected throughout
- Tailwind CSS 4.3.3
