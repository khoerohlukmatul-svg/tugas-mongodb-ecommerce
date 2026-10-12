// ==========================================
// SCRIPT QUERY MONGODB - E-COMMERCE
// Database: e_commerce | Collection: produk
// ==========================================

use e_commerce;

// 1. Insert 10 Data Produk
db.produk.insertMany([
  { id_produk: "P001", nama: "Sepatu Sneakers Pria", kategori: "Sepatu", harga: 350000, stok: 15 },
  { id_produk: "P002", nama: "Sepatu Running Wanita", kategori: "Sepatu", harga: 420000, stok: 10 },
  { id_produk: "P003", nama: "Kemeja Flanel Casual", kategori: "Pakaian", harga: 175000, stok: 25 },
  { id_produk: "P004", nama: "Kaos Polos Cotton Combed", kategori: "Pakaian", harga: 65000, stok: 50 },
  { id_produk: "P005", nama: "Tas Ransel Laptop", kategori: "Aksesoris", harga: 250000, stok: 12 },
  { id_produk: "P006", nama: "Dompet Kulit Asli", kategori: "Aksesoris", harga: 120000, stok: 20 },
  { id_produk: "P007", nama: "Jam Tangan Chronograph", kategori: "Aksesoris", harga: 750000, stok: 8 },
  { id_produk: "P008", nama: "Celana Jeans Slim Fit", kategori: "Pakaian", harga: 230000, stok: 18 },
  { id_produk: "P009", nama: "Topi Baseball Distro", kategori: "Aksesoris", harga: 45000, stok: 30 },
  { id_produk: "P010", nama: "Sandal Kulit Pria", kategori: "Sepatu", harga: 110000, stok: 5 }
]);

// 2. Query Read (Filter Harga > 200.000)
db.produk.find({ harga: { $gt: 200000 } });

// 3. Query Update (Ubah Stok P001 menjadi 25)
db.produk.updateOne(
  { id_produk: "P001" },
  { $set: { stok: 25 } }
);

// 4. Query Delete (Hapus Produk P010)
db.produk.deleteOne({ id_produk: "P010" });

// 5. Query Aggregation (Total Stok Berdasarkan Kategori)
db.produk.aggregate([
  {
    $group: {
      _id: "$kategori",
      totalStok: { $sum: "$stok" }
    }
  }
]);
