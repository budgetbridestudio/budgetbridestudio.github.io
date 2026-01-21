// Navigation Toggle
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking on a link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });
}

// Blog Posts Data
// Make it available globally for blog.js
window.blogPosts = [
    {
        id: 1,
        title: "DIY Wedding Centerpieces Under $20",
        excerpt: "Create stunning centerpieces that look expensive but cost less than $20 each. Complete with supply lists and step-by-step tutorials.",
        category: "diy",
        date: "2024-12-15",
        image: "💐",
        featured: true,
        slug: "diy-wedding-centerpieces-under-20"
    },
    {
        id: 2,
        title: "Dollar Tree Wedding Decor That Looks High-End",
        excerpt: "Transform Dollar Tree finds into elegant wedding decor that your guests will never guess came from a dollar store. Budget-friendly and beautiful.",
        category: "decor",
        date: "2024-12-10",
        image: "✨",
        featured: true,
        slug: "dollar-tree-wedding-decor"
    },
    {
        id: 3,
        title: "Wedding Signage You Can Make in One Afternoon",
        excerpt: "Beautiful, customizable wedding signs you can create in just a few hours. Perfect for welcome signs, seating charts, and more.",
        category: "crafts",
        date: "2024-12-05",
        image: "📋",
        featured: true,
        slug: "wedding-signage-one-afternoon"
    },
    {
        id: 4,
        title: "Beginner-Friendly DIY Wedding Crafts",
        excerpt: "Simple wedding crafts that anyone can make, even if you're not crafty. Step-by-step guides with photos and supply lists.",
        category: "crafts",
        date: "2024-11-28",
        image: "🎨",
        featured: true,
        slug: "beginner-friendly-diy-wedding-crafts"
    }
];

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Create post card HTML
function createPostCard(post) {
    return `
        <a href="posts/${post.slug}.html" class="post-card">
            <div class="post-image">
                ${post.image}
            </div>
            <div class="post-content">
                <span class="post-category">${post.category}</span>
                <h3 class="post-title">${post.title}</h3>
                <p class="post-excerpt">${post.excerpt}</p>
                <div class="post-meta">
                    <span class="post-date">📅 ${formatDate(post.date)}</span>
                </div>
            </div>
        </a>
    `;
}

// Load featured posts on homepage
function loadFeaturedPosts() {
    const featuredContainer = document.getElementById('featuredPosts');
    if (featuredContainer) {
        const featuredPosts = window.blogPosts.filter(post => post.featured);
        featuredContainer.innerHTML = featuredPosts.map(createPostCard).join('');
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedPosts();
});

// Export for use in blog.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { blogPosts, createPostCard, formatDate };
}
