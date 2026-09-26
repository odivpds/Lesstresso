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
                        s: "25k", m: "-", l: "-" ,
                        isAvailable: true
                    },
                    { 
                        name: "Chicken Karage", 
                        desc: "(Teriyaki Sauce/Black Pepper Sauce)", 
                        s: "25k", m: "-", l: "-" ,
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
    { text: "NAIKIN GAJI KARYAWANNYA!!!!! Pelayanannya itu lohhh best bgtttttt💙", author: "Customer Anonymous" },
    { text: "Cozy place, affordable price, good service keep it up 😊", author: "Reviewer" },
    { text: "Love the ambience and the staff was really friendly!", author: "Local Guide" },
    { text: "Tempat favorit buat nugas di Denpasar. WiFi kenceng.", author: "Budi Sudarsono" },
    { text: "Kopinya beneran less stress, harganya bersahabat.", author: "Siska Millenia" },
    { text: "Interior lantai 2-nya estetik parah.", author: "Instagrammer Bali" }
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

// Load dynamic data from CMS (PocketBase / LocalStorage)
async function loadCMSData() {
    const pbUrl = localStorage.getItem('lesstresso_pb_url') || 'http://127.0.0.1:8090';
    let dataLoaded = false;

    // 1. Try PocketBase REST API
    try {
        const res = await fetch(`${pbUrl}/api/collections/menu_items/records?perPage=200`, { method: 'GET' });
        if (res.ok) {
            const json = await res.json();
            if (json.items && json.items.length > 0) {
                activeMenuData = transformFlatItemsToMenu(json.items);
                dataLoaded = true;
            }
        }
    } catch(err) {
        // PocketBase server is offline, fallback gracefully
    }

    // 2. Try LocalStorage if PocketBase is not connected
    if (!dataLoaded) {
        const localMenu = localStorage.getItem('lesstresso_menu_items');
        if (localMenu) {
            try {
                const parsed = JSON.parse(localMenu);
                if (Array.isArray(parsed) && parsed.length > 0) {
                    activeMenuData = transformFlatItemsToMenu(parsed);
                    dataLoaded = true;
                }
            } catch(e) {
                console.error("Error parsing local menu data", e);
            }
        }
    }

    // 3. Fallback to default static menu data if nothing found
    if (!dataLoaded) {
        activeMenuData = defaultMenuData;
    }

    // Apply store settings (Phone, Hours, Announcement)
    applyStoreSettings();

    // Render menu with loaded data
    renderMenu(currentCategory);
}

// Apply Store Settings (Contact, Operating Hours, Announcement)
function applyStoreSettings() {
    const localSettings = localStorage.getItem('lesstresso_store_settings');
    if (!localSettings) return;

    try {
        const settings = JSON.parse(localSettings);

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
    } catch(e) {
        console.error("Error applying store settings", e);
    }
}

function renderMenu(categoryFilter = currentCategory) {
    const container = document.getElementById('menu-container');
    if (!container) return;

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

    container.innerHTML = filteredData.map(cat => `
        <div class="w-full flex flex-col h-full transition-all duration-500 animate-fadeIn ${isDesktop ? '' : 'max-w-md'}">
            <div class="bg-stone-50 p-8 rounded-[2rem] shadow-sm border border-stone-200 h-full flex flex-col">
                
                <div class="grid grid-cols-12 gap-0 mb-6 pb-2 border-b border-slate-100 text-slate-400 font-bold text-[10px] uppercase tracking-[0.2em]">
                    <div class="col-span-6">${cat.categoryTitle}</div>
                    <div class="col-span-2 text-center">S</div>
                    <div class="col-span-2 text-center">M</div>
                    <div class="col-span-2 text-center">L</div>
                </div>

                ${cat.sections.map(section => `
                    <div class="mb-10">
                        <h4 class="text-brand-blue font-black text-base mb-6 flex items-center gap-2">
                            <span class="w-2.5 h-2.5 rounded-full ${section.color === 'brand-coral' ? 'bg-brand-coral' : 'bg-brand-blue'}"></span> 
                            ${section.name}
                        </h4>
                        <div class="space-y-5">
                            ${section.items.map(item => {
                                const isAvail = item.isAvailable !== false;
                                return `
                                    <div class="grid grid-cols-12 gap-0 items-center group cursor-default ${!isAvail ? 'menu-item-soldout' : ''}">
                                        <div class="col-span-6 text-left">
                                            <h6 class="font-bold text-[13px] leading-tight group-hover:text-brand-blue transition-colors flex items-center flex-wrap">
                                                <span>${item.name}</span>
                                                ${!isAvail ? '<span class="sold-out-tag">Habis</span>' : ''}
                                            </h6>
                                            ${item.desc ? `<p class="text-[9px] text-slate-400 uppercase mt-1 tracking-wider">${item.desc}</p>` : ''}
                                        </div>
                                        <div class="col-span-2 text-center font-bold text-xs ${item.s === '-' || !isAvail ? 'text-slate-300' : 'text-slate-600'}">${item.s}</div>
                                        <div class="col-span-2 text-center font-bold text-xs border-x border-slate-50 ${item.m === '-' || !isAvail ? 'text-slate-300' : 'text-slate-600'}">${item.m}</div>
                                        <div class="col-span-2 text-center font-bold text-xs ${item.l === '-' || !isAvail ? 'text-slate-300' : 'text-brand-blue bg-blue-50/50 rounded-lg py-1'}">${item.l}</div>
                                    </div>
                                `;
                            }).join('')}
                        </div>
                    </div>
                `).join('')}

                ${cat.addons && cat.addons.length > 0 ? `
                    <div class="mt-auto p-5 bg-white rounded-2xl border-l-4 border-brand-coral">
                        <span class="font-black text-brand-coral text-[9px] tracking-widest uppercase block mb-2">* ADD ON</span>
                        <div class="space-y-2">
                            ${cat.addons.map(extra => `
                                <div class="flex justify-between items-center text-left border-b border-dashed border-slate-100 pb-1 last:border-0">
                                    <h6 class="font-bold text-[13px] text-slate-800">${extra.name}</h6>
                                    <div class="text-sm font-black text-brand-blue">${extra.price}</div>
                                </div>
                            `).join('')}
                        </div>
                    </div>` : ''}
            </div>
        </div>
    `).join('');
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

function renderReviews() {
    const track1 = document.getElementById('marquee-track-1');
    const track2 = document.getElementById('marquee-track-2');
    if (!track1 || !track2) return;
    const reviewsHtml = reviewsData.map(rvw => `
        <div class="mx-4 w-[300px] md:w-[400px] flex-shrink-0 whitespace-normal">
            <div class="bg-white p-8 rounded-3xl shadow-sm border-l-4 border-brand-blue h-full flex flex-col justify-between">
                <p class="italic text-gray-700 leading-relaxed text-sm md:text-base">"${rvw.text}"</p>
                <div class="mt-6 font-bold text-brand-blue flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span class="w-4 h-[2px] bg-brand-blue"></span> ${rvw.author}
                </div>
            </div>
        </div>
    `).join('');
    track1.innerHTML = reviewsHtml;
    track2.innerHTML = reviewsHtml;
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
            if(navLogo) {
                navLogo.classList.add('text-brand-blue');
                navLogo.classList.remove('text-white');
            }
            if(menuToggle) menuToggle.classList.replace('text-white', 'text-slate-800');
        } else {
            if(navLogo) {
                navLogo.classList.remove('text-brand-blue');
                navLogo.classList.add('text-white');
            }
            if(menuToggle) menuToggle.classList.replace('text-slate-800', 'text-white');
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