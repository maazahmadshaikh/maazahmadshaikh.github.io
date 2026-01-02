# Maaz Ahmad Shaikh — Personal Academic Website

This repository contains the source files for my personal academic website, built with Jekyll and hosted via GitHub Pages.

The site is written primarily in Markdown and rendered to HTML using reusable layouts and includes. This structure is intended to keep content easy to update while maintaining a consistent design.

---

## Site structure

├── _config.yml # Site-wide configuration
├── _layouts/ # Page layouts
│ ├── default.html
│ └── home.html
├── _includes/ # Reusable components
│ ├── navigation.html
│ └── footer.html
├── index.md # Homepage
├── publications.md # Publications
├── presentations.md # Presentations
├── research/ # Research pages
│ ├── index.md
│ ├── zangskari.md
│ ├── ladakhi.md
│ ├── azamgarhi.md
│ └── bhojpuri.md
├── resources/ # Resource pages
│ ├── general-linguistics.md
│ ├── documentation-description.md
│ └── language-learning.md
├── assets/ # CSS, JS
├── images/ # Images used on the site
└── documents/ # CV, resume, and other PDFs


---

## Updating content

### Homepage
- Edit `index.md`

### Publications
- Edit `publications.md`
- BibTeX entries are stored inline using `<details>` blocks

### Presentations
- Edit `presentations.md`
- Talks are grouped into:
  - Refereed conference talks
  - Invited talks and workshops
  - Other presentations

### Research pages
- Edit or add files under `/research/`
- Each language or project has its own Markdown page

### CV / resume
- Upload PDFs to `/documents/`
- Update links in the sidebar (layout or include file)

