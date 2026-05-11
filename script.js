// ========================================
// Video Tools Navigator - Data & Logic
// ========================================

// Video Tools Database
const toolsData = [
    // COMPRESS Tools
    {
        id: 1,
        name: "Cloudinary",
        icon: "☁️",
        category: "compress",
        categoryName: "Compress",
        description: "Free cloud-based video compression with quality control. Supports MP4, MOV, AVI and more.",
        tags: ["Cloud", "MP4", "Quality Control"],
        price: "Free tier available",
        badge: "popular",
        featured: true,
        isNew: false,
        link: "https://cloudinary.com/tools/video-compress"
    },
    {
        id: 2,
        name: "Veed.io",
        icon: "🎬",
        category: "compress",
        categoryName: "Compress",
        description: "Easy video compressor with preview. Reduce file size while maintaining quality.",
        tags: ["Online", "Preview", "Easy"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://www.veed.io/tools/video-compressor"
    },
    {
        id: 3,
        name: "Kapwing",
        icon: "🎨",
        category: "compress",
        categoryName: "Compress",
        description: "Compress videos for social media. Perfect for Instagram, TikTok and YouTube.",
        tags: ["Social Media", "MP4", "Fast"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://www.kapwing.com/resources/compress-video-file/"
    },
    {
        id: 4,
        name: "Ezgif Compressor",
        icon: "🗜️",
        category: "compress",
        categoryName: "Compress",
        description: "Simple browser-based video compressor. No upload needed, works locally.",
        tags: ["Local", "No Upload", "Simple"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://ezgif.com-optimize"
    },
    {
        id: 5,
        name: "VideoSmaller",
        icon: "📉",
        category: "compress",
        categoryName: "Compress",
        description: "Fast video file size reducer. Supports MP4, AVI, MOV, MPEG and more formats.",
        tags: ["MP4", "AVI", "Fast"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.videosmaller.com"
    },

    // CONVERT Tools
    {
        id: 6,
        name: "CloudConvert",
        icon: "🔄",
        category: "convert",
        categoryName: "Convert",
        description: "Convert between 200+ formats. MP4, AVI, MOV, MKV, WebM, GIF and more.",
        tags: ["200+ Formats", "MP4", "MKV"],
        price: "Free tier available",
        badge: "popular",
        featured: true,
        isNew: false,
        link: "https://cloudconvert.com/video-converter"
    },
    {
        id: 7,
        name: "Convertio",
        icon: "⚡",
        category: "convert",
        categoryName: "Convert",
        description: "High-quality video converter. Supports all major video formats.",
        tags: ["High Quality", "All Formats", "Fast"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://convertio.co/video-converter/"
    },
    {
        id: 8,
        name: "Zamzar",
        icon: "🌐",
        category: "convert",
        categoryName: "Convert",
        description: "Simple file converter since 2006. No software download required.",
        tags: ["Simple", "Reliable", "Email Notification"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://www.zamzar.com/converter/video/"
    },
    {
        id: 9,
        name: "Online-Convert",
        icon: "📁",
        category: "convert",
        categoryName: "Convert",
        description: "Free online video converter. Convert to MP4, AVI, MOV, WebM and more.",
        tags: ["MP4", "AVI", "MOV"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.online-convert.com/video-converter"
    },
    {
        id: 10,
        name: " HandBrake",
        icon: "📼",
        category: "convert",
        categoryName: "Convert",
        description: "Free open source video converter. Most popular desktop converter.",
        tags: ["Open Source", "Desktop", "Powerful"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://handbrake.fr"
    },

    // DOWNLOAD Tools
    {
        id: 11,
        name: "YTMP5",
        icon: "📺",
        category: "download",
        categoryName: "Download",
        description: "Download YouTube videos in HD quality. Free and no registration required.",
        tags: ["YouTube", "HD", "No Signup"],
        price: "Free",
        badge: "popular",
        featured: true,
        isNew: false,
        link: "https://ytmp5x.com"
    },
    {
        id: 12,
        name: "SSSTikTok",
        icon: "🎵",
        category: "download",
        categoryName: "Download",
        description: "Download TikTok videos without watermark. Fast and easy.",
        tags: ["TikTok", "No Watermark", "Fast"],
        price: "Free",
        badge: "popular",
        featured: true,
        isNew: false,
        link: "https://ssstiktok.io"
    },
    {
        id: 13,
        name: "SnapSave",
        icon: "📸",
        category: "download",
        categoryName: "Download",
        description: "Universal video downloader. Supports YouTube, TikTok, Instagram, Facebook and more.",
        tags: ["Universal", "Multi-Platform", "MP3"],
        price: "Free",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://snapsave.app"
    },
    {
        id: 14,
        name: "Twitter Video Downloader",
        icon: "🐦",
        category: "download",
        categoryName: "Download",
        description: "Download Twitter/X videos in high quality. No watermarks.",
        tags: ["Twitter", "X", "HD"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://twitsave.com"
    },
    {
        id: 15,
        name: "Instagram Downloader",
        icon: "📷",
        category: "download",
        categoryName: "Download",
        description: "Download Instagram reels, stories and posts. Photos and videos.",
        tags: ["Instagram", "Reels", "Stories"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://instavideosave.net"
    },

    // EDIT Tools
    {
        id: 16,
        name: "Kapwing Studio",
        icon: "🎬",
        category: "edit",
        categoryName: "Edit",
        description: "Online video editor with all features. Trim, cut, add text, music and subtitles.",
        tags: ["Editor", "Subtitles", "Music"],
        price: "Free tier available",
        badge: "popular",
        featured: true,
        isNew: false,
        link: "https://www.kapwing.com/studio"
    },
    {
        id: 17,
        name: "Veed.io Editor",
        icon: "✂️",
        category: "edit",
        categoryName: "Edit",
        description: "Easy video editing in browser. Auto subtitles, filters, effects and more.",
        tags: ["Auto Subtitles", "Filters", "Effects"],
        price: "Free tier available",
        badge: "freemium",
        featured: true,
        isNew: false,
        link: "https://www.veed.io"
    },
    {
        id: 18,
        name: "Clipchamp",
        icon: "🎥",
        category: "edit",
        categoryName: "Edit",
        description: "Microsoft's free video editor. Built-in stock library and effects.",
        tags: ["Microsoft", "Stock Library", "Free"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.clipchamp.com"
    },
    {
        id: 19,
        name: "OpenShot",
        icon: "🚀",
        category: "edit",
        categoryName: "Edit",
        description: "Free, open-source video editor. Cross-platform, lightweight and easy to use.",
        tags: ["Open Source", "Cross-Platform", "Lightweight"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.openshot.org"
    },
    {
        id: 20,
        name: "Shotcut",
        icon: "🎞️",
        category: "edit",
        categoryName: "Edit",
        description: "Free, open source video editor with professional features.",
        tags: ["Open Source", "Professional", "4K"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://shotcut.org"
    },

    // AUDIO Tools
    {
        id: 21,
        name: "Kapwing Audio Extractor",
        icon: "🎵",
        category: "audio",
        categoryName: "Audio",
        description: "Extract audio from any video. Download as MP3 or WAV.",
        tags: ["MP3", "WAV", "Extract"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://www.kapwing.com/resources/how-to-extract-audio-from-video-in-kapwing/"
    },
    {
        id: 22,
        name: "VEED Audio Extractor",
        icon: "🔊",
        category: "audio",
        categoryName: "Audio",
        description: "Extract audio from video files online. Free and instant.",
        tags: ["Online", "Fast", "MP3"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.veed.io/tools/audio-extractor"
    },
    {
        id: 23,
        name: "Audacity",
        icon: "🎙️",
        category: "audio",
        categoryName: "Audio",
        description: "Free, open source audio editor. Record, edit and enhance audio.",
        tags: ["Open Source", "Record", "Editor"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://www.audacityteam.org"
    },

    // GIF Tools
    {
        id: 24,
        name: "Kapwing GIF Maker",
        icon: "🎞️",
        category: "gif",
        categoryName: "GIF",
        description: "Create GIFs from videos. Trim, resize and customize your GIFs.",
        tags: ["GIF Maker", "Trim", "Resize"],
        price: "Free tier available",
        badge: "freemium",
        featured: false,
        isNew: false,
        link: "https://www.kapwing.com/tools/gif-maker"
    },
    {
        id: 25,
        name: "Ezgif",
        icon: "🎬",
        category: "gif",
        categoryName: "GIF",
        description: "Create and edit GIFs online. Video to GIF, GIF to video, and more.",
        tags: ["GIF", "Video to GIF", "Edit"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://ezgif.com"
    },
    {
        id: 26,
        name: "Giphy GIF Maker",
        icon: "🌟",
        category: "gif",
        categoryName: "GIF",
        description: "Create GIFs from YouTube, videos or upload your own.",
        tags: ["YouTube", "Upload", "GIPHY"],
        price: "Free",
        badge: "free",
        featured: false,
        isNew: false,
        link: "https://giphy.com/create/gifmaker"
    }
];

// Categories with icons
const categories = [
    { name: "Compress", icon: "🗜️", count: 5 },
    { name: "Convert", icon: "🔄", count: 5 },
    { name: "Download", icon: "⬇️", count: 5 },
    { name: "Edit", icon: "✂️", count: 5 },
    { name: "Audio", icon: "🎵", count: 3 },
    { name: "GIF", icon: "🎞️", count: 3 }
];

// DOM Elements
const categoryGrid = document.getElementById('categoryGrid');
const featuredGrid = document.getElementById('featuredGrid');
const allToolsGrid = document.getElementById('allToolsGrid');
const compressGrid = document.getElementById('compressGrid');
const convertGrid = document.getElementById('convertGrid');
const downloadGrid = document.getElementById('downloadGrid');
const editGrid = document.getElementById('editGrid');
const searchInput = document.getElementById('searchInput');
const filterBtns = document.querySelectorAll('.filter-btn');

// Render Tool Card
function renderToolCard(tool) {
    const badgeClass = tool.badge === 'new' ? 'new' : (tool.badge === 'free' ? 'free' : (tool.badge === 'popular' ? 'popular' : 'freemium'));
    const badgeText = tool.badge === 'freemium' ? 'Freemium' : (tool.badge === 'new' ? 'NEW' : (tool.badge === 'popular' ? 'Popular' : 'Free'));
    
    return `
        <div class="tool-card" data-category="${tool.category}">
            <div class="tool-image">
                ${tool.icon}
                <span class="tool-badge ${badgeClass}">${badgeText}</span>
            </div>
            <div class="tool-content">
                <div class="tool-category">${tool.categoryName}</div>
                <div class="tool-name">${tool.name}</div>
                <div class="tool-description">${tool.description}</div>
                <div class="tool-tags">
                    ${tool.tags.map(tag => `<span class="tool-tag">${tag}</span>`).join('')}
                </div>
                <div class="tool-footer">
                    <span class="tool-price">${tool.price}</span>
                    <a href="${tool.link}" target="_blank" class="tool-link">Visit →</a>
                </div>
            </div>
        </div>
    `;
}

// Render Categories
function renderCategories() {
    categoryGrid.innerHTML = categories.map(cat => `
        <div class="category-card" onclick="scrollToSection('${cat.name.toLowerCase()}')">
            <div class="category-icon">${cat.icon}</div>
            <div class="category-name">${cat.name}</div>
            <div class="category-count">${cat.count} tools</div>
        </div>
    `).join('');
}

// Render Featured Tools
function renderFeaturedTools() {
    const featured = toolsData.filter(tool => tool.featured);
    featuredGrid.innerHTML = featured.map(renderToolCard).join('');
}

// Render by Category
function renderByCategory(category, gridElement) {
    const filtered = toolsData.filter(tool => tool.category === category);
    gridElement.innerHTML = filtered.map(renderToolCard).join('');
}

// Render All Tools
function renderAllTools(filter = 'all') {
    let tools = toolsData;
    
    if (filter !== 'all') {
        tools = toolsData.filter(tool => tool.category === filter);
    }
    
    allToolsGrid.innerHTML = tools.map(renderToolCard).join('');
}

// Scroll to section
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    
    if (searchTerm.length < 2) {
        renderAllTools();
        return;
    }
    
    const filtered = toolsData.filter(tool => 
        tool.name.toLowerCase().includes(searchTerm) ||
        tool.description.toLowerCase().includes(searchTerm) ||
        tool.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );
    
    allToolsGrid.innerHTML = filtered.map(renderToolCard).join('');
});

// Filter buttons
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderAllTools(filter);
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderFeaturedTools();
    renderAllTools();
    renderByCategory('compress', compressGrid);
    renderByCategory('convert', convertGrid);
    renderByCategory('download', downloadGrid);
    renderByCategory('edit', editGrid);
});
