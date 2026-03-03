const menuData = [
    {
        category: "coffee",
        categoryTitle: "Coffee",
        sections: [
            {
                name: "SIGNATURE",
                color: "brand-coral", 
                items: [
                    { name: "Iced Coffee Lesstresso", desc: "House Blend Special", s: "22k", m: "26k", l: "29k" },
                    { name: "Choco Delight", desc: "Premium Cocoa Blend", s: "25k", m: "29k", l: "32k" }
                ]
            },
            {
                name: "CLASSIC COFFEE",
                color: "brand-blue",
                items: [
                    { name: "Hot Americano", s: "15k", m: "-", l: "-" },
                    { name: "Iced Americano", s: "20k", m: "24k", l: "27k" },
                    { name: "Hot Coffee Latte", s: "20k", m: "-", l: "-" },
                    { name: "Iced Coffee Latte", s: "20k", m: "24k", l: "27k" }
                ]
            },
            {
                name: "FLAVOR COFFEE",
                color: "brand-blue",
                items: [
                    { name: "Iced Vanilla Latte", s: "20k", m: "24k", l: "27k" },
                    { name: "Iced Hazelnut Latte", s: "20k", m: "24k", l: "27k" },
                    { name: "Iced Caramel Latte", s: "20k", m: "24k", l: "27k" }
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
                    { name: "Matcha (Hot/Ice)", s: "19k", m: "23k", l: "26k" },
                    { name: "Taro (Hot/Ice)", s: "19k", m: "23k", l: "26k" },
                    { name: "Chocolate (Hot/Ice)", s: "19k", m: "23k", l: "26k" },
                    { name: "Red Velvet (Hot/Ice)", s: "19k", m: "23k", l: "26k" }
                ]
            },
            {
                name: "REFRESHER",
                color: "brand-blue",
                items: [
                    { name: "Ruby Rush", s: "18k", m: "22k", l: "25k" },
                    { name: "Pixel Potion", s: "18k", m: "22k", l: "25k" },
                    { name: "Pristine Pop", s: "18k", m: "22k", l: "25k" },
                    { name: "Crystal Odyssey", s: "18k", m: "22k", l: "25k" }
                ]
            },
            {
                name: "TEA",
                color: "brand-blue",
                items: [
                    { name: "Black Tea", s: "-", m: "-", l: "13k" },
                    { name: "Lychee Tea", s: "-", m: "-", l: "20k" },
                    { name: "Lemon Tea", s: "-", m: "-", l: "18k" },
                    { name: "Strawberry Tea", s: "-", m: "-", l: "18k" },
                    { name: "Milk Tea", s: "-", m: "-", l: "22k" }
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
                    { name: "Spring Roll (4pcs / 6pcs / 9pcs)", s: "15k", m: "20k", l: "25k" },
                    { name: "Crispy Chicken Skin", s: "18k", m: "-", l: "-" },
                    { name: "French Fries (Balado / BBQ)", s: "13k", m: "-", l: "-" }
                ]
            },
            {
                name: "QUICK BITES",
                color: "brand-blue",
                items: [
                    { name: "Burger (Chicken/Beef)", s: "22k", m: "-", l: "-" },
                    { name: "Hotdog (Chicken/Beef)", s: "20k", m: "-", l: "-" },
                    { name: "Chicken Nugget (4pcs/6pcs/9pcs)*", s: "13k", m: "17k", l: "20k" },
                    { name: "Chicken Sausage (4pcs/6pcs/9pcs)", s: "15k", m: "19k", l: "22k" },
                    { name: "Chicken Wings", s: "25k", m: "-", l: "-" }
                ]
            },
            {
                name: "SPHAGETTI", 
                color: "brand-blue",
                items: [
                    { name: "Sphagetti Bolognese*", s: "22k", m: "-", l: "-" }
                ]
            },
            {
                name: "RICE BOWL",
                color: "brand-blue",
                items: [
                    { 
                        name: "Chicken Katsu", 
                        desc: "(Teriyaki Sauce/Black Pepper Sauce)", 
                        s: "25k", m: "-", l: "-" 
                    },
                    { 
                        name: "Chicken Karage", 
                        desc: "(Teriyaki Sauce/Black Pepper Sauce)", 
                        s: "25k", m: "-", l: "-" 
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

let currentCategory = 'coffee'; 

function renderMenu(categoryFilter = currentCategory) {
    const container = document.getElementById('menu-container');
    if (!container) return;

    const isDesktop = window.innerWidth > 900;

    let filteredData;
    if (isDesktop) {
        filteredData = menuData;
        container.className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center";
    } else {
        filteredData = menuData.filter(cat => cat.category === categoryFilter);
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
                            ${section.items.map(item => `
                                <div class="grid grid-cols-12 gap-0 items-center group cursor-default">
                                    <div class="col-span-6 text-left">
                                        <h6 class="font-bold text-[13px] leading-tight group-hover:text-brand-blue transition-colors">${item.name}</h6>
                                        ${item.desc ? `<p class="text-[9px] text-slate-400 uppercase mt-1 tracking-wider">${item.desc}</p>` : ''}
                                    </div>
                                    <div class="col-span-2 text-center font-bold text-xs ${item.s === '-' ? 'text-slate-200' : 'text-slate-600'}">${item.s}</div>
                                    <div class="col-span-2 text-center font-bold text-xs border-x border-slate-50 ${item.m === '-' ? 'text-slate-200' : 'text-slate-600'}">${item.m}</div>
                                    <div class="col-span-2 text-center font-bold text-xs ${item.l === '-' ? 'text-slate-200' : 'text-brand-blue bg-blue-50/50 rounded-lg py-1'}">${item.l}</div>
                                </div>
                            `).join('')}
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

        if (btnCategory === category) {
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
    renderMenu();
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
});