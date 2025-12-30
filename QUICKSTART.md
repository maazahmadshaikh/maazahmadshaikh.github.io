# Quick Start Guide - Website Update

## What I've Done

Converted your website from HTML to Markdown-based Jekyll structure. **Same professional look, 10x easier to update.**

## Key Improvements

### 1. "Selected Highlights" Section
- Renamed from "Recent Updates"
- Curated to 5 most significant achievements
- Focused on grants, awards, and major milestones
- Easy to add/remove items

### 2. Updated Bio
- Changed "Research Scholar" to "PhD Candidate"
- Maintained all your existing content

### 3. Eliminated Repetition
- Navigation bar: was in 15 files → now in 1 file
- Footer: was in 15 files → now in 1 file
- To change email/social media → edit `_config.yml` only

### 4. Markdown Content
- Publications page - easy to add new entries
- Presentations page - simple format
- All research pages - clean, editable text

## How to Update in 3 Steps

### Step 1: Replace Old Files
```
Delete: all .html files in /pages/ directory
Upload: 
  - All .md files from this package
  - _config.yml
  - _layouts/ folder
  - _includes/ folder
```

### Step 2: Update Your Content
Edit `index.md` to add:
```markdown
<li><i class="fas fa-file-alt"></i> Pending - Uppsala University postdoc application for Zangskari Gesar epic annotation project
</li>

<li><i class="fas fa-briefcase"></i> 2024-2025 - Hindi localization work for Google's Gemini AI model
</li>
```

### Step 3: Upload New CV
- Place updated CV in `/documents/`
- Update the date in `index.md` (line that says `cv_date: "12/2024"`)

## What Still Needs Converting

I've created Zangskari as an example. You (or I) still need to convert:
- `research/ladakhi.md`
- `research/azamgarhi.md`
- `research/bhojpuri.md`

These follow the exact same pattern as `research/zangskari.md`.

## How to Update Going Forward

**Adding a publication:**
1. Open `publications.md`
2. Copy an existing entry
3. Change the details
4. Save
5. Git commit and push

**That's it!** No HTML, no navigation updates, no footer changes.

## Testing Locally (Optional)

If you want to preview changes before pushing:
```bash
# Install Jekyll
gem install bundler jekyll

# Navigate to your site directory
cd maazahmadshaikh.github.io

# Serve the site
bundle exec jekyll serve

# Open: http://localhost:4000
```

## Emergency Rollback

Your old HTML files are still in your Git history. If anything goes wrong:
```bash
git checkout [previous-commit-hash]
```

## Next Conversation Topics

For our next chat, you might want to:
1. Get help converting the remaining research pages
2. Add more recent highlights (Uppsala, Gemini work, etc.)
3. Restructure any sections you'd like to change
4. Add new sections (Teaching? Fieldwork? Blog?)

---

**Bottom Line:** Your site will look identical to users, but updating it will be vastly simpler for you. Edit text files, not HTML!
