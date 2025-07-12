# Essay System

This system allows you to create and manage essays using markdown files in the `_posts` directory. Essays are processed at build time and bundled with the application, making it perfect for static hosting like GitHub Pages.

## How it works

1. **Essay Files**: Place markdown files in the `_posts` directory with the naming convention: `YYYY-MM-DD-title.markdown`
2. **Build-time Processing**: Essays are automatically processed and bundled when you build the app
3. **Static Hosting**: No server required - works perfectly on GitHub Pages
4. **Reference Linking**: Use `[1]`, `[2]`, etc. for citations and create corresponding references at the bottom

## Adding a new essay

### Option 1: Using the helper script
```bash
node scripts/add-essay.js "2025-01-15-my-new-essay.markdown" "My New Essay" "2025-01-15" "AI" "Machine Learning"
```

### Option 2: Manual creation
1. Create a new file in `_posts/` with the format: `YYYY-MM-DD-title.markdown`
2. Add frontmatter at the top:
```markdown
---
layout: post
title: "Your Essay Title"
date: 2025-01-15
categories: [Category1, Category2]
tags: [Tag1, Tag2, Tag3]
---
```

3. Write your essay content in markdown
4. Add references at the bottom:
```markdown
## References 
<span id="ref-1">[1] Reference 1</span>
<span id="ref-2">[2] Reference 2</span>
```

5. **Rebuild the app** to include your new essay:
```bash
npm run build
```

## Running the system

### Development mode
```bash
npm install  # Install dependencies first
npm run dev  # Start development server
```

### Build for production
```bash
npm run build  # Process essays and build the app
```

### Process essays only
```bash
npm run process-essays  # Just process markdown files without building
```

## Features

- ✅ **Static hosting**: No server required - works on GitHub Pages
- ✅ **Build-time processing**: Essays are bundled at build time
- ✅ **Reference linking**: Click `[1]`, `[2]`, etc. to jump to references
- ✅ **Clickable links**: URLs in references are clickable
- ✅ **Responsive design**: Works on all devices
- ✅ **SEO friendly**: Each essay has its own URL
- ✅ **Fast loading**: All content is pre-bundled

## File structure

```
_posts/
├── 2025-06-01-interpretability_for_science.markdown
├── 2025-01-15-my-new-essay.markdown
└── ...

src/
├── pages/
│   ├── Essays.tsx          # Essay listing page
│   └── Essay.tsx           # Individual essay page
├── utils/
│   ├── markdown.ts         # Markdown parsing utilities
│   └── essayLoader.ts      # Auto-generated essay data
└── scripts/
    └── process-essays.js   # Build script for processing essays
```

## Workflow

1. **Add essay**: Create markdown file in `_posts/`
2. **Process essays**: Run `npm run process-essays` (or it runs automatically during build)
3. **Build app**: Run `npm run build` to create production files
4. **Deploy**: Upload the `dist/` folder to GitHub Pages

## Adding to the Essays listing page

To add your new essay to the Essays listing page, update `src/pages/Essays.tsx` and add an entry to the `essays` array:

```typescript
{
  title: "Your Essay Title",
  excerpt: "Brief description of your essay...",
  date: "2025-01-15",
  readTime: "5 min read",
  category: "Your Category",
  featured: false,
  link: "/essays/your-essay-slug",
  image: "",
  internal: true
}
```

The slug is derived from the filename: `YYYY-MM-DD-title.markdown` becomes `title`.

## GitHub Pages Deployment

1. Build the app: `npm run build`
2. The `dist/` folder contains all files needed for GitHub Pages
3. Configure GitHub Pages to serve from the `dist/` folder
4. Your essays will be available at `yourusername.github.io/repository/essays/slug`

## Benefits of this approach

- **No server costs**: Static hosting is free
- **Better performance**: All content is pre-bundled
- **SEO friendly**: Search engines can crawl all content
- **Reliable**: No server downtime or API failures
- **Simple deployment**: Just upload static files 