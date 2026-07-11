# markito.io

Personal site for William Markito Oliveira — a custom Hugo theme with a
terminal-editorial look, a dark/light toggle, and a Markdown blog.

Everything in this folder is the site source. No external Hugo theme is used;
the templates live in `layouts/` and the styles in `static/css/main.css`.

---

## Quick start (local)

You need **Hugo Extended** (0.128+). On macOS:

```bash
brew install hugo
hugo server -D          # -D also renders draft posts
```

Then open http://localhost:1313/. The site rebuilds live as you edit.

---

## Writing a blog post

```bash
hugo new posts/my-post-title.md
```

That scaffolds `content/posts/my-post-title.md` from `archetypes/default.md`:

```toml
+++
title = "My Post Title"
date = 2026-07-06
draft = true
summary = "One-sentence summary shown in the writing index."
tags = ["ai", "platform"]
+++

Write your post here in Markdown.
```

- Set `draft = false` when it's ready to publish.
- `summary` is the line shown under the title in the `ls ./writing` list.
- `tags` render as the `foo · bar · baz` line.
- The post URL becomes `/writing/my-post-title/` (see `[permalinks]` in `hugo.toml`).

Posts are sorted newest-first automatically.

---

## Editing the rest of the page

The home page is data-driven — no HTML editing required:

| What                         | Where                          |
|------------------------------|--------------------------------|
| Name, tagline, bio, links    | `hugo.toml` → `[params]`       |
| Experience / roles           | `data/experience.yaml`         |
| Books                        | `data/books.yaml`              |
| Articles                     | `data/articles.yaml`           |
| Talks & videos               | `data/talks.yaml`              |
| Portrait                     | `static/images/profile.png`    |
| Résumé (linked in footer)    | drop `resume.pdf` in `static/` |

Colors and type live in `static/css/main.css` (the `[data-theme="dark"]` and
`[data-theme="light"]` blocks at the top).

---

## Deploying (GitHub Pages via Actions)

This repo ships a workflow at `.github/workflows/hugo.yml` that builds Hugo and
publishes on every push to `master`.

**One-time setup:** in the repo on GitHub, go to
**Settings → Pages → Build and deployment → Source** and choose
**GitHub Actions**. (This replaces the old "deploy from branch" mode that served
the pre-built files.)

After that, just:

```bash
git add -A
git commit -m "New post"
git push
```

The custom domain is set via `static/CNAME` (`markito.io`).

---

## Migrating this into the existing repo

The current `markito.github.io` repo holds pre-built HTML at its root. Replace
those with this source:

1. Copy the **contents** of `hugo-site/` into the repo root.
2. Delete the old generated files (`index.html`, `css/`, `js/`, `sass/`,
   `fonts/`, `sitemap.xml`, etc.) — Hugo regenerates all of that.
3. Keep `static/CNAME` so the custom domain sticks.
4. Switch Pages source to **GitHub Actions** (above), commit, and push.
