// Blog page functionality
// Use window.blogPosts from main.js, or define fallback
if (!window.blogPosts) {
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
}

const blogPosts = window.blogPosts;

let currentCategory = 'all';

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

// Filter posts by category
function filterPosts(category) {
    currentCategory = category;
    const blogContainer = document.getElementById('blogPosts');
    if (!blogContainer) {
        console.error('Blog posts container not found');
        return;
    }

    // Ensure blogPosts is available
    const posts = window.blogPosts || blogPosts;
    if (!posts || posts.length === 0) {
        console.error('No blog posts available');
        blogContainer.innerHTML = '<p style="text-align: center; color: var(--text-light); padding: 2rem;">No blog posts found. Please check back soon!</p>';
        return;
    }

    let filteredPosts = posts;
    if (category !== 'all') {
        filteredPosts = posts.filter(post => post.category === category);
    }

    // Sort by date (newest first)
    filteredPosts.sort((a, b) => new Date(b.date) - new Date(a.date));

    blogContainer.innerHTML = filteredPosts.map(createPostCard).join('');
}

// Initialize blog page
function initBlogPage() {
    // Wait a tiny bit to ensure main.js has loaded if it's being loaded
    setTimeout(() => {
        // Check for category in URL
        const urlParams = new URLSearchParams(window.location.search);
        const categoryParam = urlParams.get('category');
        if (categoryParam) {
            currentCategory = categoryParam;
        }

        // Load all posts initially
        filterPosts(currentCategory);

        // Set active filter button
        const filterButtons = document.querySelectorAll('.filter-btn');
        filterButtons.forEach(btn => {
            if (btn.dataset.category === currentCategory) {
                btn.classList.add('active');
            }
        });

        // Add event listeners to filter buttons
        filterButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Remove active class from all buttons
                filterButtons.forEach(b => b.classList.remove('active'));
                // Add active class to clicked button
                btn.classList.add('active');
                // Filter posts
                filterPosts(btn.dataset.category);
            });
        });
    }, 10);
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initBlogPage);
} else {
    // DOM is already ready
    initBlogPage();
}
