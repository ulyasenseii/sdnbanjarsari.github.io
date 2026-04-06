// ╔══════════════════════════════════════════════════╗
// ║  INFO.JS — Profil & Identitas Sekolah            ║
// ║  Edit file ini untuk mengubah info sekolah       ║
// ╚══════════════════════════════════════════════════╝

const INFO_SEKOLAH = {
  nama:         "SD Negeri Banjarsari",
  npsn:         "20502407",                        
  alamat:       "Banjarsari, Kec. Buduran, Kabupaten Sidoarjo, Jawa Timur 61252",
  kecamatan:    "Buduran",
  kabupaten:    "Sidoarjo",
  provinsi:     "Jawa Timur",
  kode_pos:     "61252",
  telp:         "",                         // isi nomor telepon/WA
  email:        "sdnbanjarsari55@gmail.com",                         // isi email sekolah
  tahun_berdiri:"1970",                         // isi tahun berdiri
  akreditasi:   "B",                        // isi akreditasi: A / B / C
  status:       "Negeri",
};

const VISI =
  "Terwujudnya insan yang beriman, bertaqwa, berakhlak mulia, cerdas, terampil, " +
  "dan berwawasan luas demi terciptanya generasi penerus bangsa yang berkualitas.";

const MISI = [
  "Melaksanakan pembelajaran dan bimbingan secara efektif sehingga setiap siswa berkembang optimal sesuai potensinya.",
  "Menumbuhkan semangat keunggulan secara intensif kepada seluruh warga sekolah.",
  "Mendorong setiap siswa mengenali potensi dirinya agar dapat berkembang secara optimal.",
  "Menumbuhkan penghayatan terhadap ajaran agama dan budaya bangsa sebagai sumber kearifan dalam bertindak.",
  "Menerapkan manajemen partisipatif dengan melibatkan seluruh warga sekolah dan kelompok kepentingan.",
];

const SEJARAH =
  "SD Negeri Banjarsari merupakan sekolah dasar negeri yang berlokasi di wilayah Banjarsari, " +
  "Kecamatan Buduran, Kabupaten Sidoarjo, Jawa Timur. Sekolah ini berkomitmen dalam membentuk " +
  "generasi penerus bangsa yang berkarakter dan berprestasi.";
  // Ganti teks di atas dengan sejarah lengkap sekolah.

// ── PENGUMUMAN ─────────────────────────────────────
// Tambah / hapus pengumuman di sini.
// Format: { tanggal: "DD Mon", judul, isi }
const PENGUMUMAN = [
  {
    tanggal: "01 Jul",
    judul:   "Penerimaan Peserta Didik Baru (PPDB) 2025/2026",
    isi:     "Pendaftaran siswa baru untuk tahun ajaran 2025/2026 telah dibuka. Segera daftarkan putra-putri Anda!",
  },
  {
    tanggal: "15 Jun",
    judul:   "Pengumuman Kenaikan Kelas",
    isi:     "Hasil keputusan kenaikan kelas tahun ajaran 2024/2025 telah ditetapkan. Hubungi wali kelas masing-masing.",
  },
  {
    tanggal: "10 Jun",
    judul:   "Pelepasan Siswa Kelas 6",
    isi:     "Selamat kepada seluruh siswa kelas 6 yang telah menyelesaikan pendidikan di SDN Banjarsari!",
  },
];
