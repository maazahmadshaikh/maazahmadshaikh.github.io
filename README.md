# Website Update - Markdown-Based Jekyll Structure

## Overview

Your website has been converted from pure HTML to a Markdown-based Jekyll structure. This makes updating content **much easier** while maintaining the exact same professional appearance.

## What Changed?

### Before (HTML):
- Every page repeated 100+ lines of navigation and footer code
- Content mixed with HTML formatting
- Updating required editing raw HTML
- Hard to maintain consistency

### After (Markdown):
- Navigation and footer in single reusable files
- Content in clean Markdown format
- Update content by editing simple text files
- Automatically consistent across all pages

## Directory Structure

```
website-update/
├── _config.yml                 # Site configuration
├── _layouts/                   # Page templates
│   ├── default.html           # Standard page layout
│   └── home.html              # Homepage layout with sidebar
├── _includes/                  # Reusable components
│   ├── navigation.html        # Navigation bar
│   └── footer.html            # Footer section
├── index.md                    # Homepage
├── publications.md             # Publications page
├── presentations.md            # Presentations page
├── resources.md                # Resources overview
├── resources/                  # Resource pages
│   ├── general-linguistics.md
│   ├── documentation-description.md
│   └── language-learning.md
├── research/                   # Research pages
│   ├── index.md               # Language families overview
│   ├── zangskari.md
│   ├── ladakhi.md             # (to be created)
│   ├── azamgarhi.md           # (to be created)
│   └── bhojpuri.md            # (to be created)
├── assets/                     # Stylesheets, JavaScript, images
└── documents/                  # CV and other documents
```

## How to Update Content

### Simple Text Changes

1. **Update your bio or about section:**
   - Open `index.md`
   - Find the text you want to change
   - Edit it like a normal text document
   - Save

2. **Add a new publication:**
   - Open `publications.md`
   - Copy the format of an existing publication
   - Paste and modify with new details
   - Save

3. **Update contact information:**
   - Open `_config.yml`
   - Change email, ORCID, etc.
   - These automatically update everywhere on the site

### Add a New Page

1. Create a new `.md` file (e.g., `teaching.md`)
2. Add this header:
   ```yaml
   ---
   layout: default
   title: Teaching - Maaz Ahmad Shaikh
   ---
   ```
3. Write your content in Markdown below the header
4. Add a link to it in `_includes/navigation.html`

## Markdown Basics

```markdown
# Main Heading
## Subheading
### Smaller Heading

**Bold text**
*Italic text*

[Link text](https://example.com)

- Bullet point
- Another bullet

1. Numbered list
2. Second item

![Image description](/images/photo.jpg)
```

## What's Already Updated

✅ Homepage with "Selected Highlights" instead of "Recent Updates"
✅ Updated title from "Research Scholar" to "PhD Candidate"
✅ Publications and presentations pages
✅ Resources section (all three pages)
✅ Research overview (language families)
✅ Zangskari research page (as example)
✅ Automatic copyright year updating
✅ Cleaner, more maintainable code

## Next Steps

1. **Complete the remaining research pages:**
   - Convert `ladakhi.html` → `research/ladakhi.md`
   - Convert `azamgarhi.html` → `research/azamgarhi.md`
   - Convert `bhojpuri.html` → `research/bhojpuri.md`

2. **Update content to current status:**
   - Add Uppsala postdoc application to highlights
   - Add Gemini localization work
   - Update CV date in `index.md` (currently set to 12/2024)
   - Upload new CV to `/documents/` folder

3. **Replace files in GitHub:**
   - Delete old `.html` files from `/pages/` directory
   - Upload all new `.md` files
   - Upload `_config.yml`, `_layouts/`, `_includes/` folders
   - Keep `assets/`, `images/`, `documents/` folders as-is

## Benefits of This Structure

1. **Easier Updates:** Edit text files, not HTML code
2. **Less Repetition:** Navigation/footer defined once, used everywhere
3. **Consistency:** Changes to header/footer automatically apply to all pages
4. **AI-Friendly:** You can ask AI to update Markdown much more easily than HTML
5. **Version Control:** Clean diffs make it easy to see what changed
6. **Professional:** Same look, better maintainability

## File I Need from You

For the most complete update, please provide:
- Updated CV (PDF) to replace in `/documents/`
- Any new images for recent projects
- Details on any new publications/presentations since November 2023

## Questions?

The structure is designed to be intuitive. If you want to:
- **Change something site-wide** (like your email): Edit `_config.yml`
- **Update page content**: Edit the relevant `.md` file
- **Change the design**: Modify files in `_layouts/` or `_includes/`

---

*Note: Jekyll will automatically convert these Markdown files to HTML when GitHub Pages builds your site. You just need to edit the simple Markdown files!*
