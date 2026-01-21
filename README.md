# Budget Bride Studio

A beautiful, fully static website for affiliate marketing focused on DIY/crafts and weddings. Perfect for hosting on GitHub Pages.

## Features

- ✨ Aesthetic landing page with hero section
- 📝 Blog support with manual post creation
- 📱 Fully responsive layout (mobile-first design)
- 📌 Pinterest-optimized featured image areas
- 🎨 Beautiful, modern design with custom color scheme
- 🔍 SEO-friendly structure
- 🚀 Fast loading static site

## Site Structure

```
├── index.html          # Landing page
├── blog.html          # Blog listing page
├── posts/             # Individual blog posts
│   ├── diy-wedding-centerpieces.html
│   └── rustic-wedding-decor.html
├── css/
│   └── style.css      # Main stylesheet
└── js/
    ├── main.js        # Main JavaScript functionality
    └── blog.js        # Blog-specific functionality
```

## Adding New Blog Posts

1. Create a new HTML file in the `posts/` directory
2. Use one of the existing posts as a template
3. Add the post data to the `blogPosts` array in both `js/main.js` and `js/blog.js`
4. Include a Pinterest-optimized featured image (1200x630px recommended)
5. Add proper meta tags for SEO and social sharing

## Pinterest Optimization

- Featured images are optimized for Pinterest (1200x630px ratio)
- Click-to-pin functionality on featured images
- Proper meta tags for Pinterest sharing

## GitHub Pages Setup

1. Push this repository to GitHub
2. Go to Settings > Pages
3. Select the main branch as the source
4. Your site will be available at `https://yourusername.github.io/budgetbridestudio.github.io/`

## Customization

### Colors
Edit the CSS variables in `css/style.css`:
- `--primary-color`: Main brand color
- `--secondary-color`: Accent color
- `--text-dark`: Main text color

### Content
- Update the hero section in `index.html`
- Modify the about section
- Add your own blog posts following the existing structure

## License

This project is open source and available for personal and commercial use.