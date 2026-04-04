// ╔══════════════════════════════════════════════════╗
// ║  ALUMNI.JS — Data Seluruh Alumni                 ║
// ║  Tambah data lulusan baru di sini setiap tahun   ║
// ╚══════════════════════════════════════════════════╝

// FORMAT setiap alumni:
// { nama, tahun, smp, prestasi: [] }
//
// - tahun    : tahun lulus (angka, bukan teks)
// - smp      : nama SMP/MTs tujuan
// - prestasi : daftar prestasi. Kosongkan dengan [] kalau tidak ada.
//
// Contoh dengan prestasi:
// { nama: "Budi Santoso", tahun: 2025, smp: "SMP Negeri 1 Buduran", prestasi: ["Juara 1 Olimpiade Matematika"] },
//
// Contoh tanpa prestasi:
// { nama: "Siti Aminah", tahun: 2025, smp: "MTs Al-Hidayah", prestasi: [] },

const ALUMNI = [

  // ── ANGKATAN 2025 ─────────────────────────────────
  { nama: "Andi Firmansyah",  tahun: 2024, smp: "SMP Negeri 1 Buduran",  prestasi: ["Juara 1 Olimpiade Matematika Kecamatan", "Siswa Teladan 2024"] },
  { nama: "Siti Nuraini",     tahun: 2024, smp: "SMP Negeri 2 Sidoarjo", prestasi: ["Juara 2 Lomba Baca Puisi Kabupaten"] },
  { nama: "Rizky Pratama",    tahun: 2024, smp: "MTs Al-Hidayah",        prestasi: [] },

  // ── ANGKATAN 2023 ─────────────────────────────────
  { nama: "Dewi Lestari",     tahun: 2023, smp: "SMP Negeri 1 Buduran",  prestasi: ["Juara 1 Lomba Menggambar Kabupaten"] },
  { nama: "Budi Santoso",     tahun: 2023, smp: "SMP IT Harapan Bangsa", prestasi: ["Juara 3 Olimpiade IPA Kecamatan"] },
  { nama: "Farah Aulia",      tahun: 2023, smp: "SMP Negeri 2 Sidoarjo", prestasi: [] },

  // ── ANGKATAN 2022 ─────────────────────────────────
  { nama: "Muhammad Ilham",   tahun: 2022, smp: "MTs Negeri 1 Sidoarjo", prestasi: ["Finalis Lomba Cerdas Cermat Kabupaten"] },
  { nama: "Putri Maharani",   tahun: 2022, smp: "SMP Negeri 1 Buduran",  prestasi: ["Juara 2 Lomba Tilawah Kecamatan"] },

  // ── ANGKATAN 2021 ─────────────────────────────────
  { nama: "Nurul Hidayah",    tahun: 2021, smp: "SMP Negeri 3 Sidoarjo", prestasi: ["Juara 1 Olimpiade Bahasa Indonesia"] },
  // ── Angkatan anomali ─────────────────────────────────
   { nama: "cacaa", tahun: 2025, smp: "SMP 1 buduran", prestasi: ["vdd"] },
  { nama: "ilham", tahun: 2025, smp: "SMP 1 buduran", prestasi: ["dvsd"] },
  { nama: "oden", tahun: 2025, smp: "SMP 1 buduran", prestasi: ["dsdf"] },
  { nama: "dvsd", tahun: 2025, smp: "smp 1 sidaoarj", prestasi: ["fdsdf"] },
  { nama: "", tahun: 2025, smp: "sj", prestasi: ["dfd"] },
  { nama: "dfs", tahun: 2025, smp: "j", prestasi: ["sasd"] },
  // Tambah angkatan baru di atas baris ini 👆
];
