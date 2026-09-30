// Default Hardcoded Menu Data (Fallback)
const defaultMenuData = [
    {
        category: "coffee",
        categoryTitle: "Coffee",
        sections: [
            {
                name: "SIGNATURE",
                color: "brand-coral",
                items: [
                    { name: "Iced Coffee Lesstresso", desc: "House Blend Special", s: "22k", m: "26k", l: "29k", isAvailable: true },
                    { name: "Choco Delight", desc: "Premium Cocoa Blend", s: "25k", m: "29k", l: "32k", isAvailable: true }
                ]
            },
            {
                name: "CLASSIC COFFEE",
                color: "brand-blue",
                items: [
                    { name: "Hot Americano", s: "15k", m: "-", l: "-", isAvailable: true },
                    { name: "Iced Americano", s: "20k", m: "24k", l: "27k", isAvailable: true },
                    { name: "Hot Coffee Latte", s: "20k", m: "-", l: "-", isAvailable: true },
                    { name: "Iced Coffee Latte", s: "20k", m: "24k", l: "27k", isAvailable: true }
                ]
            },
            {
                name: "FLAVOR COFFEE",
                color: "brand-blue",
                items: [
                    { name: "Iced Vanilla Latte", s: "20k", m: "24k", l: "27k", isAvailable: true },
                    { name: "Iced Hazelnut Latte", s: "20k", m: "24k", l: "27k", isAvailable: true },
                    { name: "Iced Caramel Latte", s: "20k", m: "24k", l: "27k", isAvailable: true }
                ]
            }
        ],
        addons: [
            { name: "Extra Shot Espresso", price: "+5k" }
        ]
    },
    {
        category: "non-coffee",
        categoryTitle: "NON-COFFEE",
        sections: [
            {
                name: "POWDER BASED",
                color: "brand-blue",
                items: [
                    { name: "Matcha (Hot/Ice)", s: "19k", m: "23k", l: "26k", isAvailable: true },
                    { name: "Taro (Hot/Ice)", s: "19k", m: "23k", l: "26k", isAvailable: true },
                    { name: "Chocolate (Hot/Ice)", s: "19k", m: "23k", l: "26k", isAvailable: true },
                    { name: "Red Velvet (Hot/Ice)", s: "19k", m: "23k", l: "26k", isAvailable: true }
                ]
            },
            {
                name: "REFRESHER",
                color: "brand-blue",
                items: [
                    { name: "Ruby Rush", s: "18k", m: "22k", l: "25k", isAvailable: true },
                    { name: "Pixel Potion", s: "18k", m: "22k", l: "25k", isAvailable: true },
                    { name: "Pristine Pop", s: "18k", m: "22k", l: "25k", isAvailable: true },
                    { name: "Crystal Odyssey", s: "18k", m: "22k", l: "25k", isAvailable: true }
                ]
            },
            {
                name: "TEA",
                color: "brand-blue",
                items: [
                    { name: "Black Tea", s: "-", m: "-", l: "13k", isAvailable: true },
                    { name: "Lychee Tea", s: "-", m: "-", l: "20k", isAvailable: true },
                    { name: "Lemon Tea", s: "-", m: "-", l: "18k", isAvailable: true },
                    { name: "Strawberry Tea", s: "-", m: "-", l: "18k", isAvailable: true },
                    { name: "Milk Tea", s: "-", m: "-", l: "22k", isAvailable: true }
                ]
            }
        ],
        addons: null
    },
    {
        category: "Food",
        categoryTitle: "FOOD",
        sections: [
            {
                name: "SNACK",
                color: "brand-blue",
                items: [
                    { name: "Spring Roll (4pcs / 6pcs / 9pcs)", s: "15k", m: "20k", l: "25k", isAvailable: true },
                    { name: "Crispy Chicken Skin", s: "18k", m: "-", l: "-", isAvailable: true },
                    { name: "French Fries (Balado / BBQ)", s: "13k", m: "-", l: "-", isAvailable: true }
                ]
            },
            {
                name: "QUICK BITES",
                color: "brand-blue",
                items: [
                    { name: "Burger (Chicken/Beef)", s: "22k", m: "-", l: "-", isAvailable: true },
                    { name: "Hotdog (Chicken/Beef)", s: "20k", m: "-", l: "-", isAvailable: true },
                    { name: "Chicken Nugget (4pcs/6pcs/9pcs)*", s: "13k", m: "17k", l: "20k", isAvailable: true },
                    { name: "Chicken Sausage (4pcs/6pcs/9pcs)", s: "15k", m: "19k", l: "22k", isAvailable: true },
                    { name: "Chicken Wings", s: "25k", m: "-", l: "-", isAvailable: true }
                ]
            },
            {
                name: "SPAGHETTI",
                color: "brand-blue",
                items: [
                    { name: "Spaghetti Bolognese*", s: "22k", m: "-", l: "-", isAvailable: true }
                ]
            },
            {
                name: "RICE BOWL",
                color: "brand-blue",
                items: [
                    {
                        name: "Chicken Katsu",
                        desc: "(Teriyaki Sauce/Black Pepper Sauce)",
                        s: "25k", m: "-", l: "-",
                        isAvailable: true
                    },
                    {
                        name: "Chicken Karage",
                        desc: "(Teriyaki Sauce/Black Pepper Sauce)",
                        s: "25k", m: "-", l: "-",
                        isAvailable: true
                    }
                ]
            }
        ],
        addons: [
            { name: "Mozzarella Cheese", price: "+5k" },
            { name: "Cheese Sauce", price: "+5k" }
        ]
    }
];

const reviewsData = [
    {
        text: "NAIKIN GAJI KARYAWANNYA!!!!! Pelayanannya itu lohhh best bgtttttt💙 Baristanya ramah banget, tempatnya super bersih, kopinya selalu pas nemenin nugas.",
        author: "Customer Anonymous",
        role: "Pelanggan Terverifikasi",
        initials: "CA",
        avatarBg: "from-blue-500 to-indigo-600",
        rating: 5,
        tag: "Pelayanan Terbaik",
        tagIcon: "fa-heart",
        date: "3 hari lalu"
    },
    {
        text: "Cozy place, affordable price, good service keep it up 😊 Cocok banget buat yang cari tempat kerja tenang di Denpasar Barat. Stopkontak melimpah.",
        author: "Devina Maharani",
        role: "Local Guide · Level 5",
        initials: "DM",
        avatarBg: "from-amber-500 to-orange-600",
        rating: 5,
        tag: "Laptop Friendly",
        tagIcon: "fa-laptop",
        date: "1 minggu lalu"
    },
    {
        text: "Love the ambience and the staff was really friendly! Iced Coffee Lesstresso-nya creamy pas, aroma kopinya mantap dan ga bikin asam lambung.",
        author: "Kevin Sanjaya",
        role: "Coffee Enthusiast",
        initials: "KS",
        avatarBg: "from-emerald-500 to-teal-600",
        rating: 5,
        tag: "Signature Coffee",
        tagIcon: "fa-mug-hot",
        date: "2 minggu lalu"
    },
    {
        text: "Tempat favorit buat nugas dan meeting online di Denpasar. WiFi kenceng stabil, AC adem, playlist lagunya juga enak ga berisik.",
        author: "Budi Sudarsono",
        role: "Remote Software Engineer",
        initials: "BS",
        avatarBg: "from-purple-500 to-pink-600",
        rating: 5,
        tag: "WiFi 100 Mbps",
        tagIcon: "fa-wifi",
        date: "3 minggu lalu"
    },
    {
        text: "Kopinya beneran less stress, harganya bersahabat mulai 15rb. Makanannya juga enak terutama French Fries BBQ & Crispy Skin.",
        author: "Siska Millenia",
        role: "Mahasiswi Denpasar",
        initials: "SM",
        avatarBg: "from-rose-500 to-red-600",
        rating: 5,
        tag: "Affordable Price",
        tagIcon: "fa-tag",
        date: "1 bulan lalu"
    },
    {
        text: "Interior lantai 2-nya estetik parah! Buat foto IG story cantik banget, ada area outdoor yang adem buat nongkrong sore bareng teman.",
        author: "Gede Arya",
        role: "Content Creator Bali",
        initials: "GA",
        avatarBg: "from-cyan-500 to-blue-600",
        rating: 5,
        tag: "Estetik Lantai 2",
        tagIcon: "fa-camera",
        date: "1 bulan lalu"
    }
];

let activeMenuData = [...defaultMenuData];
let currentCategory = 'coffee';

// Transform flat items from CMS/PocketBase to structured nested menu
function transformFlatItemsToMenu(flatItems) {
    const categoryConfigs = [
        { category: "coffee", categoryTitle: "Coffee" },
        { category: "non-coffee", categoryTitle: "NON-COFFEE" },
        { category: "Food", categoryTitle: "FOOD" }
    ];

    const addonsMap = {
        "coffee": [{ name: "Extra Shot Espresso", price: "+5k" }],
        "Food": [
            { name: "Mozzarella Cheese", price: "+5k" },
            { name: "Cheese Sauce", price: "+5k" }
        ]
    };

    return categoryConfigs.map(catCfg => {
        const catItems = flatItems.filter(item => item.category.toLowerCase() === catCfg.category.toLowerCase());

        // Group by section
        const sectionMap = {};
        catItems.forEach(item => {
            const secName = item.section || 'MENU';
            if (!sectionMap[secName]) {
                sectionMap[secName] = {
                    name: secName,
                    color: secName === 'SIGNATURE' ? 'brand-coral' : 'brand-blue',
                    items: []
                };
            }
            sectionMap[secName].items.push(item);
        });

        return {
            category: catCfg.category,
            categoryTitle: catCfg.categoryTitle,
            sections: Object.values(sectionMap),
            addons: addonsMap[catCfg.category] || null
        };
    });
}

// Load dynamic data from CMS (Node.js + SQLite REST API with Fallback)
async function loadCMSData() {
    let dataLoaded = false;

    // 1. Fetch directly from SQLite REST API
    try {
        const res = await fetch('/api/menu');
        if (res.ok) {
            const json = await res.json();
            if (json.items && json.items.length > 0) {
                activeMenuData = transformFlatItemsToMenu(json.items);
                dataLoaded = true;
            }
        }
    } catch (err) {
        // API server offline or running as static file, try local cache
    }

    // 2. Try LocalStorage fallback
    if (!dataLoaded) {
        const localMenu = localStorage.getItem('lesstresso_menu_items');
        if (localMenu) {
            try {
                const parsed = JSON.parse(localMenu);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    activeMenuData = transformFlatItemsToMenu(parsed);
                    dataLoaded = true;
                }
            } catch (e) {
                console.error("Error parsing local menu data", e);
            }
        }
    }

    // 3. Fallback to default static menu data if nothing found
    if (!dataLoaded) {
        activeMenuData = defaultMenuData;
    }

    // Apply store settings (Phone, Hours, Announcement)
    await applyStoreSettings();

    // Render menu with loaded data
    renderMenu(currentCategory);
}

// Apply Store Settings (Contact, Operating Hours, Announcement)
async function applyStoreSettings() {
    let settings = null;

    // 1. Fetch settings from SQLite REST API
    try {
        const res = await fetch('/api/settings');
        if (res.ok) {
            const data = await res.json();
            if (data.settings) settings = data.settings;
        }
    } catch (e) { }

    // 2. Fallback to localStorage settings
    if (!settings) {
        const localSettings = localStorage.getItem('lesstresso_store_settings');
        if (localSettings) {
            try { settings = JSON.parse(localSettings); } catch (err) { }
        }
    }

    if (!settings) return;

    try {
        // Update WhatsApp Floating CTA Link
        if (settings.whatsapp) {
            const cleanWa = settings.whatsapp.replace(/\D/g, '');
            const waBtn = document.getElementById('whatsappFloatingBtn');
            if (waBtn) waBtn.href = `https://wa.me/${cleanWa}`;
        }

        // Announcement Banner
        const announcementBar = document.getElementById('announcementBar');
        const announcementText = document.getElementById('announcementText');
        if (announcementBar && announcementText && settings.announcement && settings.announcement.trim() !== '') {
            announcementText.textContent = settings.announcement;
            announcementBar.classList.remove('hidden');
        }

        // Update Year
        const yearEl = document.getElementById('footerYear');
        if (yearEl) yearEl.textContent = new Date().getFullYear();
    } catch (e) {
        console.error("Error applying store settings", e);
    }
}

function createMenuItem(template, item) {
    const clone = template.content.cloneNode(true);
    const row = clone.querySelector('.menu-item-row');
    const isAvail = item.isAvailable !== false;

    if (!isAvail) {
        row.classList.add('menu-item-soldout');
    }

    // Name & Sold Out Tag
    const nameText = clone.querySelector('.item-name-text');
    if (nameText) nameText.textContent = item.name;

    const soldOut = clone.querySelector('.sold-out-tag');
    if (soldOut) {
        if (isAvail) {
            soldOut.remove();
        }
    }

    // Description (if available)
    const descEl = clone.querySelector('.menu-item-desc');
    if (descEl) {
        if (item.desc) {
            descEl.textContent = item.desc;
        } else {
            descEl.remove();
        }
    }

    // Sizes S, M, L
    const sEl = clone.querySelector('.menu-item-s');
    if (sEl) {
        sEl.textContent = item.s;
        sEl.className += (item.s === '-' || !isAvail) ? ' text-slate-300' : ' text-slate-600';
    }

    const mEl = clone.querySelector('.menu-item-m');
    if (mEl) {
        mEl.textContent = item.m;
        mEl.className += (item.m === '-' || !isAvail) ? ' text-slate-300' : ' text-slate-600';
    }

    const lEl = clone.querySelector('.menu-item-l');
    if (lEl) {
        lEl.textContent = item.l;
        if (item.l === '-' || !isAvail) {
            lEl.className += ' text-slate-300';
        } else {
            lEl.className += ' text-brand-blue bg-blue-50/50 rounded-lg py-1';
        }
    }

    return clone;
}

function createMenuSection(sectionTemplate, itemTemplate, section) {
    const clone = sectionTemplate.content.cloneNode(true);

    // Section Dot Color & Name
    const dot = clone.querySelector('.menu-section-dot');
    if (dot) {
        dot.classList.add(section.color === 'brand-coral' ? 'bg-brand-coral' : 'bg-brand-blue');
    }

    const name = clone.querySelector('.menu-section-name');
    if (name) name.textContent = section.name;

    // Items list
    const itemsList = clone.querySelector('.menu-items-list');
    if (itemsList && section.items) {
        const fragment = document.createDocumentFragment();
        section.items.forEach(item => {
            fragment.appendChild(createMenuItem(itemTemplate, item));
        });
        itemsList.appendChild(fragment);
    }

    return clone;
}

function createMenuCategoryCard(templates, cat, isDesktop) {
    const clone = templates.catTemplate.content.cloneNode(true);
    const card = clone.querySelector('.menu-category-card');

    if (!isDesktop) {
        card.classList.add('max-w-md');
    }

    // Category Title
    const title = clone.querySelector('.menu-category-title');
    if (title) title.textContent = cat.categoryTitle;

    // Sections
    const sectionsContainer = clone.querySelector('.menu-sections-container');
    if (sectionsContainer && cat.sections) {
        const secFragment = document.createDocumentFragment();
        cat.sections.forEach(sec => {
            secFragment.appendChild(createMenuSection(templates.secTemplate, templates.itemTemplate, sec));
        });
        sectionsContainer.appendChild(secFragment);
    }

    // Addons
    const addonsWrapper = clone.querySelector('.menu-addons-wrapper');
    if (cat.addons && cat.addons.length > 0) {
        const addonsList = clone.querySelector('.menu-addons-list');
        if (addonsWrapper && addonsList) {
            const addonFragment = document.createDocumentFragment();
            cat.addons.forEach(extra => {
                const addClone = templates.addonTemplate.content.cloneNode(true);
                const addName = addClone.querySelector('.addon-name');
                if (addName) addName.textContent = extra.name;
                const addPrice = addClone.querySelector('.addon-price');
                if (addPrice) addPrice.textContent = extra.price;
                addonFragment.appendChild(addClone);
            });
            addonsList.appendChild(addonFragment);
        }
    } else if (addonsWrapper) {
        addonsWrapper.remove();
    }

    return clone;
}

function renderMenu(categoryFilter = currentCategory) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    const catTemplate = document.getElementById('menu-category-template');
    const secTemplate = document.getElementById('menu-section-template');
    const itemTemplate = document.getElementById('menu-item-row-template');
    const addonTemplate = document.getElementById('menu-addon-row-template');

    if (!catTemplate || !secTemplate || !itemTemplate || !addonTemplate) return;

    const templates = { catTemplate, secTemplate, itemTemplate, addonTemplate };
    const isDesktop = window.innerWidth > 900;

    let filteredData;
    if (isDesktop) {
        filteredData = activeMenuData;
        container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center";
    } else {
        filteredData = activeMenuData.filter(cat => cat.category.toLowerCase() === categoryFilter.toLowerCase());
        container.className = "flex justify-center w-full";
        currentCategory = categoryFilter;
    }

    container.textContent = '';
    const mainFragment = document.createDocumentFragment();
    filteredData.forEach(cat => {
        mainFragment.appendChild(createMenuCategoryCard(templates, cat, isDesktop));
    });
    container.appendChild(mainFragment);
}

function filterMenu(category) {
    const buttons = document.querySelectorAll('.category-btn');
    const container = document.getElementById('menu-container');

    if (container) container.style.opacity = '0';

    buttons.forEach(btn => {
        const btnCategory = btn.getAttribute('data-category');

        if (btnCategory.toLowerCase() === category.toLowerCase()) {
            btn.classList.add('active');
            btn.classList.remove('text-slate-500', 'border-slate-200');
        } else {
            btn.classList.remove('active');
            btn.classList.add('text-slate-500', 'border-slate-200');
        }
    });

    setTimeout(() => {
        renderMenu(category);
        if (container) container.style.opacity = '1';
    }, 300);
}

function createReviewCard(template, rvw) {
    const clone = template.content.cloneNode(true);

    // Avatar initials & background gradient
    const avatar = clone.querySelector('.review-avatar');
    if (avatar) {
        avatar.textContent = rvw.initials;
        avatar.className += ` ${rvw.avatarBg}`;
    }

    // Author & Role (XSS safe via textContent)
    const authorEl = clone.querySelector('.review-author');
    if (authorEl) authorEl.textContent = rvw.author;

    const roleEl = clone.querySelector('.review-role');
    if (roleEl) roleEl.textContent = rvw.role;

    // Date
    const dateEl = clone.querySelector('.review-date');
    if (dateEl) dateEl.textContent = rvw.date;

    // Review Text Quote
    const textEl = clone.querySelector('.review-text');
    if (textEl) textEl.textContent = `"${rvw.text}"`;

    // Tag Badge & Icon
    const tagIcon = clone.querySelector('.review-tag-icon');
    if (tagIcon && rvw.tagIcon) tagIcon.classList.add(rvw.tagIcon);

    const tagText = clone.querySelector('.review-tag-text');
    if (tagText) tagText.textContent = rvw.tag;

    return clone;
}

function renderReviews() {
    const track1 = document.getElementById('marquee-track-1');
    const track2 = document.getElementById('marquee-track-2');
    const template = document.getElementById('review-card-template');
    if (!track1 || !track2 || !template) return;

    // Reset tracks efficiently
    track1.textContent = '';
    track2.textContent = '';

    // DocumentFragments for atomic, single-pass DOM insertion
    const fragment1 = document.createDocumentFragment();
    const fragment2 = document.createDocumentFragment();

    reviewsData.forEach(rvw => {
        fragment1.appendChild(createReviewCard(template, rvw));
        fragment2.appendChild(createReviewCard(template, rvw));
    });

    track1.appendChild(fragment1);
    track2.appendChild(fragment2);
}

document.addEventListener('DOMContentLoaded', () => {
    // Load CMS Data and initial render
    loadCMSData();
    renderReviews();

    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('mainNavbar');
    const navLogo = document.getElementById('navLogo');
    const toggleIcon = menuToggle ? menuToggle.querySelector('i') : null;
    const navLinks = document.querySelectorAll('#navMenu .nav-link');
    const overlay = document.getElementById('overlay');

    const closeMenu = () => {
        navMenu.classList.remove('show-menu');
        if (overlay) overlay.classList.remove('active');
        if (toggleIcon) {
            toggleIcon.classList.replace('fa-times', 'fa-bars');
            toggleIcon.style.transform = "rotate(0deg)";
        }
    };

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            const isOpen = navMenu.classList.toggle('show-menu');
            if (overlay) overlay.classList.toggle('active');

            if (toggleIcon) {
                toggleIcon.style.transition = "transform 0.4s ease";
                toggleIcon.style.transform = isOpen ? "rotate(90deg)" : "rotate(0deg)";

                if (isOpen) {
                    toggleIcon.classList.replace('fa-bars', 'fa-times');

                    navLinks.forEach((link, index) => {
                        link.style.opacity = "0";
                        link.style.transform = "translateX(-20px)";
                        link.style.transition = "none";

                        setTimeout(() => {
                            link.style.transition = "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)";
                            link.style.opacity = "1";
                            link.style.transform = "translateX(0)";
                        }, 100 * (index + 1));
                    });
                } else {
                    toggleIcon.classList.replace('fa-times', 'fa-bars');
                }
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    navLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    const handleScroll = () => {
        const isScrolled = window.scrollY > 50;

        navbar.classList.toggle('scrolled', isScrolled);

        if (isScrolled) {
            if (navLogo) {
                navLogo.classList.add('text-brand-blue');
                navLogo.classList.remove('text-white');
            }
            if (menuToggle) menuToggle.classList.replace('text-white', 'text-slate-800');
        } else {
            if (navLogo) {
                navLogo.classList.remove('text-brand-blue');
                navLogo.classList.add('text-white');
            }
            if (menuToggle) menuToggle.classList.replace('text-slate-800', 'text-white');
        }

        document.querySelectorAll('.reveal').forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('load', () => {
        document.body.classList.add('is-loaded');
    });

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    // Debounced window resize handler for menu layout
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            renderMenu(currentCategory);
        }, 200);
    });
});