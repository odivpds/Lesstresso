require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const Database = require('better-sqlite3');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = process.env.PORT || 3000;
const JWT_SECRET = process.env.JWT_SECRET || 'lesstresso_secret_jwt_key_2026';

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Initialize SQLite with WAL Mode (Industry-Standard for high concurrency and corruption resilience)
const db = new Database(path.join(__dirname, 'database.sqlite'));
db.pragma('journal_mode = WAL');

// ==========================================
// DATABASE SCHEMA & INITIALIZATION
// ==========================================
function initDatabase() {
    db.exec(`
        CREATE TABLE IF NOT EXISTS admin_users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password_hash TEXT NOT NULL,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS menu_items (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            category TEXT NOT NULL,
            section TEXT NOT NULL,
            desc TEXT,
            price_s TEXT DEFAULT '-',
            price_m TEXT DEFAULT '-',
            price_l TEXT DEFAULT '-',
            is_available INTEGER DEFAULT 1,
            display_order INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
            updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS store_settings (
            key TEXT PRIMARY KEY,
            value TEXT
        );
    `);

    // Seed default admin if not exists
    const adminCount = db.prepare('SELECT COUNT(*) as count FROM admin_users').get().count;
    if (adminCount === 0) {
        const defaultUser = process.env.ADMIN_DEFAULT_USER || 'admin';
        const defaultPass = process.env.ADMIN_DEFAULT_PASS || 'admin123';
        const hash = bcrypt.hashSync(defaultPass, 10);
        db.prepare('INSERT INTO admin_users (username, password_hash) VALUES (?, ?)').run(defaultUser, hash);
        console.log(`[Database] Akun admin awal dibuat: Username "${defaultUser}", Password "${defaultPass}"`);
    }

    // Seed initial menu data if empty
    const menuCount = db.prepare('SELECT COUNT(*) as count FROM menu_items').get().count;
    if (menuCount === 0) {
        const seedMenu = [
            // Coffee - SIGNATURE
            { name: "Iced Coffee Lesstresso", category: "coffee", section: "SIGNATURE", desc: "House Blend Special", s: "22k", m: "26k", l: "29k" },
            { name: "Choco Delight", category: "coffee", section: "SIGNATURE", desc: "Premium Cocoa Blend", s: "25k", m: "29k", l: "32k" },
            // Coffee - CLASSIC COFFEE
            { name: "Hot Americano", category: "coffee", section: "CLASSIC COFFEE", desc: "", s: "15k", m: "-", l: "-" },
            { name: "Iced Americano", category: "coffee", section: "CLASSIC COFFEE", desc: "", s: "20k", m: "24k", l: "27k" },
            { name: "Hot Coffee Latte", category: "coffee", section: "CLASSIC COFFEE", desc: "", s: "20k", m: "-", l: "-" },
            { name: "Iced Coffee Latte", category: "coffee", section: "CLASSIC COFFEE", desc: "", s: "20k", m: "24k", l: "27k" },
            // Coffee - FLAVOR COFFEE
            { name: "Iced Vanilla Latte", category: "coffee", section: "FLAVOR COFFEE", desc: "", s: "20k", m: "24k", l: "27k" },
            { name: "Iced Hazelnut Latte", category: "coffee", section: "FLAVOR COFFEE", desc: "", s: "20k", m: "24k", l: "27k" },
            { name: "Iced Caramel Latte", category: "coffee", section: "FLAVOR COFFEE", desc: "", s: "20k", m: "24k", l: "27k" },
            // Non-Coffee - POWDER BASED
            { name: "Matcha (Hot/Ice)", category: "non-coffee", section: "POWDER BASED", desc: "", s: "19k", m: "23k", l: "26k" },
            { name: "Taro (Hot/Ice)", category: "non-coffee", section: "POWDER BASED", desc: "", s: "19k", m: "23k", l: "26k" },
            { name: "Chocolate (Hot/Ice)", category: "non-coffee", section: "POWDER BASED", desc: "", s: "19k", m: "23k", l: "26k" },
            { name: "Red Velvet (Hot/Ice)", category: "non-coffee", section: "POWDER BASED", desc: "", s: "19k", m: "23k", l: "26k" },
            // Non-Coffee - REFRESHER
            { name: "Ruby Rush", category: "non-coffee", section: "REFRESHER", desc: "", s: "18k", m: "22k", l: "25k" },
            { name: "Pixel Potion", category: "non-coffee", section: "REFRESHER", desc: "", s: "18k", m: "22k", l: "25k" },
            { name: "Pristine Pop", category: "non-coffee", section: "REFRESHER", desc: "", s: "18k", m: "22k", l: "25k" },
            { name: "Crystal Odyssey", category: "non-coffee", section: "REFRESHER", desc: "", s: "18k", m: "22k", l: "25k" },
            // Non-Coffee - TEA
            { name: "Black Tea", category: "non-coffee", section: "TEA", desc: "", s: "-", m: "-", l: "13k" },
            { name: "Lychee Tea", category: "non-coffee", section: "TEA", desc: "", s: "-", m: "-", l: "20k" },
            { name: "Lemon Tea", category: "non-coffee", section: "TEA", desc: "", s: "-", m: "-", l: "18k" },
            { name: "Strawberry Tea", category: "non-coffee", section: "TEA", desc: "", s: "-", m: "-", l: "18k" },
            { name: "Milk Tea", category: "non-coffee", section: "TEA", desc: "", s: "-", m: "-", l: "22k" },
            // Food - SNACK
            { name: "Spring Roll (4pcs / 6pcs / 9pcs)", category: "Food", section: "SNACK", desc: "", s: "15k", m: "20k", l: "25k" },
            { name: "Crispy Chicken Skin", category: "Food", section: "SNACK", desc: "", s: "18k", m: "-", l: "-" },
            { name: "French Fries (Balado / BBQ)", category: "Food", section: "SNACK", desc: "", s: "13k", m: "-", l: "-" },
            // Food - QUICK BITES
            { name: "Burger (Chicken/Beef)", category: "Food", section: "QUICK BITES", desc: "", s: "22k", m: "-", l: "-" },
            { name: "Hotdog (Chicken/Beef)", category: "Food", section: "QUICK BITES", desc: "", s: "20k", m: "-", l: "-" },
            { name: "Chicken Nugget (4pcs/6pcs/9pcs)*", category: "Food", section: "QUICK BITES", desc: "", s: "13k", m: "17k", l: "20k" },
            { name: "Chicken Sausage (4pcs/6pcs/9pcs)", category: "Food", section: "QUICK BITES", desc: "", s: "15k", m: "19k", l: "22k" },
            { name: "Chicken Wings", category: "Food", section: "QUICK BITES", desc: "", s: "25k", m: "-", l: "-" },
            // Food - SPAGHETTI
            { name: "Spaghetti Bolognese*", category: "Food", section: "SPAGHETTI", desc: "", s: "22k", m: "-", l: "-" },
            // Food - RICE BOWL
            { name: "Chicken Katsu", category: "Food", section: "RICE BOWL", desc: "(Teriyaki Sauce/Black Pepper Sauce)", s: "25k", m: "-", l: "-" },
            { name: "Chicken Karage", category: "Food", section: "RICE BOWL", desc: "(Teriyaki Sauce/Black Pepper Sauce)", s: "25k", m: "-", l: "-" }
        ];

        const insertStmt = db.prepare(`
            INSERT INTO menu_items (name, category, section, desc, price_s, price_m, price_l, is_available, display_order)
            VALUES (?, ?, ?, ?, ?, ?, ?, 1, ?)
        `);

        const insertMany = db.transaction((items) => {
            items.forEach((item, index) => {
                insertStmt.run(item.name, item.category, item.section, item.desc || '', item.s, item.m, item.l, index);
            });
        });

        insertMany(seedMenu);
        console.log(`[Database] ${seedMenu.length} menu bawaan berhasil dimigrasikan ke SQLite.`);
    }

    // Seed default settings if empty
    const settingsCount = db.prepare('SELECT COUNT(*) as count FROM store_settings').get().count;
    if (settingsCount === 0) {
        const defaultSettings = [
            ['storeName', 'Lesstresso Coffee'],
            ['tagline', 'Less Stress, More Espresso ◡̈'],
            ['whatsapp', '6285183194581'],
            ['hours', 'Setiap Hari: 08.00 AM - 12.00 AM'],
            ['address', 'Jl. Gunung Rinjani No.44A, Kec. Denpasar Bar., Bali 80119'],
            ['announcement', ''],
            ['isOpen', 'true']
        ];
        const insertSetting = db.prepare('INSERT INTO store_settings (key, value) VALUES (?, ?)');
        const insertAllSettings = db.transaction((settings) => {
            settings.forEach(([k, v]) => insertSetting.run(k, v));
        });
        insertAllSettings(defaultSettings);
        console.log('[Database] Pengaturan toko awal berhasil disimpan ke SQLite.');
    }
}

initDatabase();

// ==========================================
// AUTHENTICATION MIDDLEWARE (JWT)
// ==========================================
function authenticateToken(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) {
        return res.status(401).json({ success: false, message: 'Akses ditolak. Token tidak ditemukan.' });
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(403).json({ success: false, message: 'Sesi login telah kedaluwarsa atau tidak valid.' });
        }
        req.user = user;
        next();
    });
}

// ==========================================
// AUTH ROUTES
// ==========================================
app.post('/api/auth/login', (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ success: false, message: 'Username dan password wajib diisi.' });
    }

    const user = db.prepare('SELECT * FROM admin_users WHERE username = ?').get(username);
    if (!user || !bcrypt.compareSync(password, user.password_hash)) {
        return res.status(401).json({ success: false, message: 'Username atau password salah.' });
    }

    const token = jwt.sign({ id: user.id, username: user.username }, JWT_SECRET, { expiresIn: '7d' });
    res.json({
        success: true,
        message: 'Login berhasil!',
        token,
        username: user.username
    });
});

app.post('/api/auth/change-password', authenticateToken, (req, res) => {
    const { currentPassword, newPassword } = req.body;
    if (!currentPassword || !newPassword || newPassword.length < 6) {
        return res.status(400).json({ success: false, message: 'Password baru minimal 6 karakter.' });
    }

    const user = db.prepare('SELECT * FROM admin_users WHERE id = ?').get(req.user.id);
    if (!bcrypt.compareSync(currentPassword, user.password_hash)) {
        return res.status(400).json({ success: false, message: 'Password saat ini salah.' });
    }

    const newHash = bcrypt.hashSync(newPassword, 10);
    db.prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?').run(newHash, req.user.id);
    res.json({ success: true, message: 'Password berhasil diubah!' });
});

app.get('/api/auth/verify', authenticateToken, (req, res) => {
    res.json({ success: true, user: req.user });
});

// ==========================================
// MENU API ROUTES
// ==========================================

// GET all menu items (Public, FAST)
app.get('/api/menu', (req, res) => {
    try {
        const rows = db.prepare('SELECT * FROM menu_items ORDER BY display_order ASC, id ASC').all();
        // Convert integer is_available to boolean
        const items = rows.map(r => ({
            id: r.id,
            name: r.name,
            category: r.category,
            section: r.section,
            desc: r.desc || '',
            s: r.price_s,
            m: r.price_m,
            l: r.price_l,
            isAvailable: r.is_available === 1
        }));
        res.json({ success: true, count: items.length, items });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST new menu item (Protected)
app.post('/api/menu', authenticateToken, (req, res) => {
    try {
        const { name, category, section, desc, s, m, l, isAvailable } = req.body;
        if (!name || !category) {
            return res.status(400).json({ success: false, message: 'Nama dan kategori wajib diisi.' });
        }

        const stmt = db.prepare(`
            INSERT INTO menu_items (name, category, section, desc, price_s, price_m, price_l, is_available)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `);

        const info = stmt.run(
            name.trim(),
            category.trim(),
            (section || 'MENU').trim().toUpperCase(),
            (desc || '').trim(),
            (s || '-').trim(),
            (m || '-').trim(),
            (l || '-').trim(),
            isAvailable === false ? 0 : 1
        );

        res.status(201).json({
            success: true,
            id: info.lastInsertRowid,
            message: `Menu "${name}" berhasil ditambahkan.`
        });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PUT update menu item (Protected)
app.put('/api/menu/:id', authenticateToken, (req, res) => {
    try {
        const id = req.params.id;
        const { name, category, section, desc, s, m, l, isAvailable } = req.body;

        const stmt = db.prepare(`
            UPDATE menu_items 
            SET name = ?, category = ?, section = ?, desc = ?, price_s = ?, price_m = ?, price_l = ?, is_available = ?, updated_at = CURRENT_TIMESTAMP
            WHERE id = ?
        `);

        const info = stmt.run(
            name.trim(),
            category.trim(),
            (section || 'MENU').trim().toUpperCase(),
            (desc || '').trim(),
            (s || '-').trim(),
            (m || '-').trim(),
            (l || '-').trim(),
            isAvailable === false ? 0 : 1,
            id
        );

        if (info.changes === 0) {
            return res.status(404).json({ success: false, message: 'Menu tidak ditemukan.' });
        }

        res.json({ success: true, message: `Menu "${name}" berhasil diperbarui.` });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// PATCH 1-Click Toggle Habis / Tersedia (Protected)
app.patch('/api/menu/:id/toggle', authenticateToken, (req, res) => {
    try {
        const id = req.params.id;
        const current = db.prepare('SELECT is_available, name FROM menu_items WHERE id = ?').get(id);
        if (!current) {
            return res.status(404).json({ success: false, message: 'Menu tidak ditemukan.' });
        }

        const newStatus = current.is_available === 1 ? 0 : 1;
        db.prepare('UPDATE menu_items SET is_available = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?').run(newStatus, id);

        res.json({
            success: true,
            isAvailable: newStatus === 1,
            message: `Status "${current.name}" diubah menjadi ${newStatus === 1 ? 'Tersedia' : 'Habis'}.`
        });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// DELETE menu item (Protected)
app.delete('/api/menu/:id', authenticateToken, (req, res) => {
    try {
        const id = req.params.id;
        const info = db.prepare('DELETE FROM menu_items WHERE id = ?').run(id);
        if (info.changes === 0) {
            return res.status(404).json({ success: false, message: 'Menu tidak ditemukan.' });
        }
        res.json({ success: true, message: 'Menu berhasil dihapus.' });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// ==========================================
// STORE SETTINGS API ROUTES
// ==========================================

// GET Store Settings (Public)
app.get('/api/settings', (req, res) => {
    try {
        const rows = db.prepare('SELECT key, value FROM store_settings').all();
        const settings = {};
        rows.forEach(r => {
            if (r.key === 'isOpen') {
                settings[r.key] = r.value === 'true';
            } else {
                settings[r.key] = r.value;
            }
        });
        res.json({ success: true, settings });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// POST update Store Settings (Protected)
app.post('/api/settings', authenticateToken, (req, res) => {
    try {
        const settings = req.body;
        const upsert = db.prepare(`
            INSERT INTO store_settings (key, value) VALUES (?, ?)
            ON CONFLICT(key) DO UPDATE SET value = excluded.value
        `);

        const updateMany = db.transaction((data) => {
            for (const [key, value] of Object.entries(data)) {
                upsert.run(key, String(value));
            }
        });

        updateMany(settings);
        res.json({ success: true, message: 'Pengaturan cafe berhasil disimpan.' });
    } catch(err) {
        res.status(500).json({ success: false, message: err.message });
    }
});

// ==========================================
// STATIC FRONTEND SERVING
// ==========================================
app.use(express.static(path.join(__dirname)));

app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'admin.html'));
});

app.use((req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Start Server
app.listen(PORT, () => {
    console.log(`====================================================`);
    console.log(`🚀 Lesstresso CMS Server Running!`);
    console.log(`📍 URL Website: http://localhost:${PORT}`);
    console.log(`🔐 URL CMS Admin: http://localhost:${PORT}/admin`);
    console.log(`💾 Database: SQLite (WAL Mode) -> database.sqlite`);
    console.log(`👤 Default Admin: admin / admin123`);
    console.log(`====================================================`);
});
