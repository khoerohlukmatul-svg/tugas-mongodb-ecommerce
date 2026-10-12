// ==========================================
// SCRIPT QUERY MONGODB - E-COMMERCE (KATALOG PRODUK)
// Database: e_commerce | Collection: produk
// ==========================================

use e_commerce;

// 1. INSERT DATA PRODUK (10 Dokumen dengan Nested Document & Array)
db.produk.insertMany([
  {
    "sku": "P001",
    "nama_produk": "Laptop Gaming X",
    "kategori": "Elektronik",
    "harga": 15000000,
    "stok": 25,
    "spesifikasi": { "ram": "16GB", "penyimpanan": "512GB SSD" },
    "tag": ["laptop", "gaming"]
  },
  {
    "sku": "P002",
    "nama_produk": "Smartphone Y",
    "kategori": "Elektronik",
    "harga": 5000000,
    "stok": 40,
    "spesifikasi": { "ram": "8GB", "penyimpanan": "128GB" },
    "tag": ["hp", "android"]
  },
  {
    "sku": "P003",
    "nama_produk": "Kemeja Flanel",
    "kategori": "Pakaian",
    "harga": 150000,
    "stok": 100,
    "spesifikasi": { "bahan": "Katun", "ukuran": ["M", "L", "XL"] },
    "tag": ["baju", "pria"]
  },
  {
    "sku": "P004",
    "nama_produk": "Celana Jeans",
    "kategori": "Pakaian",
    "harga": 250000,
    "stok": 60,
    "spesifikasi": { "bahan": "Denim", "ukuran": ["30", "32", "34"] },
    "tag": ["celana"]
  },
  {
    "sku": "P005",
    "nama_produk": "Sepatu Sneakers",
    "kategori": "Sepatu",
    "harga": 600000,
    "stok": 30,
    "spesifikasi": { "bahan": "Kanvas", "ukuran": ["40", "41", "42"] },
    "tag": ["sepatu", "sport"]
  },
  {
    "sku": "P006",
    "nama_produk": "Mouse Wireless",
    "kategori": "Elektronik",
    "harga": 200000,
    "stok": 80,
    "spesifikasi": { "koneksi": "Bluetooth", "dpi": "1600" },
    "tag": ["aksesoris"]
  },
  {
    "sku": "P007",
    "nama_produk": "Keyboard Mechanical",
    "kategori": "Elektronik",
    "harga": 750000,
    "stok": 45,
    "spesifikasi": { "switch": "Blue", "rgb": true },
    "tag": ["aksesoris", "gaming"]
  },
  {
    "sku": "P008",
    "nama_produk": "Jaket Hoodie",
    "kategori": "Pakaian",
    "harga": 300000,
    "stok": 50,
    "spesifikasi": { "ukuran": ["L", "XL"] },
    "tag": ["jaket"]
  },
  {
    "sku": "P009",
    "nama_produk": "Tas Ransel",
    "kategori": "Aksesoris",
    "harga": 400000,
    "stok": 35,
    "spesifikasi": { "kapasitas": "20L", "anti_air": true },
    "tag": ["tas"]
  },
  {
    "sku": "P010",
    "nama_produk": "Topi Baseball",
    "kategori": "Aksesoris",
    "harga": 75000,
    "stok": 90,
    "spesifikasi": { "bahan": "Drill" },
    "tag": ["topi"]
  }
]);

// 2. QUERY READ (Mencari produk dengan harga di atas 1.000.000)
db.produk.find({ harga: { $gt: 1000000 } });

// 3. QUERY UPDATE (Mengubah stok produk P001 menjadi 30)
db.produk.updateOne(
  { sku: "P001" },
  { $set: { stok: 30 } }
);

// 4. QUERY DELETE (Menghapus produk dengan SKU P010)
db.produk.deleteOne({ sku: "P010" });

// 5. QUERY AGGREGATION (Menghitung total stok berdasarkan kategori produk)
db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      totalStok: { $sum: "$stok" },
      rataRataHarga: { $avg: "$harga" }
    }
  }
]);
