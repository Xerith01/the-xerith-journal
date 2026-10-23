# The Xerith Journal — Netlify edition

A clean, responsive, animated static blog with a browser-based content manager powered by Decap CMS and Eleventy.

## What this version does

- Responsive editorial-style home page and article pages
- Subtle motion, mobile navigation, search, categories and tags
- Browser-based CMS at `/admin/` for writing, editing, previewing and publishing posts
- Markdown posts, featured images, summaries, tags, SEO descriptions and publish dates
- Netlify builds a new version when CMS changes are committed to your Git repository
- No server or database required for the public blog

## Important before publishing

**Do not place private notes, credentials, personal records, or sensitive security research in `src/posts/` or `static/uploads/`.** This is a public static site and Git repository. Posts marked “draft” are not normally rendered to the public site, but draft content is still stored in your repository. Treat the repository as content you are comfortable storing with your Git provider.

## Deploy to Netlify

### 1. Put the project in GitHub
1. Extract this ZIP.
2. Create a new, empty GitHub repository, for example `the-xerith-journal`.
3. Upload the *contents* of this folder to the repository root (so `package.json`, `netlify.toml`, `src/` and `admin/` are at the top level).
4. Keep the repository private if you prefer, but remember that Netlify CMS authentication must be configured for the repository.

### 2. Connect Netlify
1. In Netlify, choose **Add new site → Import an existing project**.
2. Connect the GitHub repository.
3. Build command: `npm run build`
4. Publish directory: `_site`
5. Deploy the site.

You can also test locally first:
```bash
npm install
npm run start
```
Open the local URL printed by Eleventy. The public site is generated into `_site/` when you run `npm run build`.

### 3. Configure the admin CMS login

This project uses Decap CMS with the **GitHub backend**. That means you sign in with GitHub and the account must have write access to the content repository.

1. Open `admin/config.yml` and replace `YOUR_GITHUB_USERNAME/the-xerith-journal` with your exact GitHub username and repository name.
2. Follow Decap's current GitHub authentication setup for Netlify: https://decapcms.org/docs/github-backend/
3. Confirm the GitHub account you use has write access to the repository.
4. Deploy the updated configuration to Netlify.
5. Visit `https://YOUR-SITE.netlify.app/admin/` and sign in.

**Authentication note:** Netlify's older Git Gateway service is deprecated for new configurations, so this starter does not rely on it. If you prefer an editor login that does not require GitHub repository write access, choose a currently supported hosted backend and follow its setup instructions before using `/admin/`.

### 4. Publish and edit
- Open `/admin/`, sign in, then choose **Blog Posts**.
- Create or edit a post. Use the preview pane, set the publish date, and save/publish.
- CMS commits content to Git. Netlify then builds and deploys the updated site automatically.
- Upload images through the post's Featured image field. They are stored in `static/uploads/`.

## Content fields
Each post has a title, slug, date, summary, featured image, category, tags, SEO description, and Markdown body. Published posts are rendered to the public blog. Draft posts are kept in Git and excluded from the public build.

## Change the branding
Search the project for `The Xerith Journal`, `hello@xerith.example`, and `Xerith Journal`. Update the brand copy, author name and contact address to your own details before launch.

## Current scope and limitations
- This is a static blog, not a private notes vault or full analytics dashboard.
- No visitor analytics are installed by default. Add a privacy-conscious analytics service separately if wanted.
- Scheduled dates are displayed and sorted by date; automatic publication at a future date depends on Netlify's build workflow, so trigger a build at the intended time or use a scheduled build workflow.
- The CMS login depends on configuring GitHub authentication and repository access. The files alone cannot create or secure your accounts.
- Run a test deploy and test `/admin/` before sharing the public URL.
