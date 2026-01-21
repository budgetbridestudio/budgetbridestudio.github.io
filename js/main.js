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
        title: "How to Plan a Wedding on a Budget: Step-by-Step Guide",
        excerpt: "Learn how to plan a beautiful wedding on a budget with our step-by-step guide. Tips on prioritizing spending, DIY ideas, and smart planning tools.",
        category: "planning",
        date: "2026-01-21",
        image: "💰",
        featured: true,
        slug: "how-to-plan-a-wedding-on-a-budget"
    },
    {
        id: 2,
        title: "Top 10 DIY Wedding Decorations Under $50",
        excerpt: "Create beautiful wedding decorations on a budget with these 10 DIY ideas under $50 each. Budget-friendly, stylish, and customizable for any theme.",
        category: "diy",
        date: "2026-01-21",
        image: "✨",
        featured: true,
        slug: "top-10-diy-wedding-decorations-under-50"
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
