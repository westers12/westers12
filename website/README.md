# semwester.nl

Personal portfolio and CV, styled as a component datasheet. Built with [Astro](https://astro.build), fully static.

## Editing content

- `src/data/profile.ts`: name, summary, features, skills, work, education, contact. Anything left `undefined` shows up on the site as a yellow **TBD** marker.
- `src/content/notes/*.md`: projects ("application notes"). One Markdown file each; set `placeholder: false` once a note is finished.
- Portrait: put it in `public/img/` and set `person.photo` in `profile.ts`.

## Commands

| Command | What it does |
|---|---|
| `npm install` | Install dependencies |
| `npm run dev` | Dev server at http://localhost:4321 |
| `npm run build` | Build the site to `dist/` |
| `npm run preview` | Serve the built site locally |
| `npm run cv` | Rebuild `public/cv.pdf` from the `/cv` page (needs Edge or Chrome installed), then rebuild the site |

Run `npm run cv` and commit `public/cv.pdf` whenever the CV content changes.

## Deploying to Cloudflare Pages

The site lives in the `website/` folder of the [westers12/westers12](https://github.com/westers12/westers12) repository (the repo root holds the GitHub profile README).

1. In Cloudflare: Workers & Pages, Create, Pages, Connect to Git, pick `westers12/westers12`.
2. Framework preset: Astro. Root directory `website`, build command `npm run build`, output directory `dist`.
3. Set build watch paths to `website/*` so editing the profile README doesn't trigger a deploy.
4. Add `semwester.nl` (and `www.semwester.nl`) under Custom domains.

Security and cache headers come from `public/_headers`. `404.html` is used automatically.

## Self-hosting (fallback)

```sh
cd website
docker build -t semwester .
docker run -p 8080:80 semwester
```

`nginx.conf` sets the same headers as `_headers`.
