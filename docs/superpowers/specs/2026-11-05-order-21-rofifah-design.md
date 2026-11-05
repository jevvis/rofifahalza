# ORDER 21: Portofolio Rofifah Alza (desain dan daftar perbedaan CV vs foto)

Tanggal: 2026-11-05. Sumber: `ROFIFAH ALZA.pdf`, 5 PDF sertifikat, 3 gambar dokumen, dan 20 foto di `drive-download-20261105T010503Z-1-001`.

## Tujuan
Situs portofolio dwibahasa (ID/EN) dari Template 1 (Next.js 14, situs apoteker). Isi hanya dari CV, sertifikat, dan foto klien. Tidak ada data karangan.

## Keputusan desain (pilihan pembuat situs)
- Bagian Organisasi dan Karya & Proyek dihapus: CV tidak memuat organisasi, dan dua "karya" CV (artikel jurnal, hak cipta poster) sudah tampil di Pencapaian.
- Bagian Pencapaian berisi tiga kartu: Lulusan Terbaik 1 (2024), Publikasi Jurnal Kolaboratif Sains (2026), Hak Cipta (2025). Semuanya dari bagian PENCAPAIAN di CV.
- Pengalaman memakai lima kartu PKPA (RSUD M. Natsir, PT Mutiara Mukti Farma, Puskesmas Payung Sekaki, Apotek Keluarga, PT Marga Nusantara Jaya), urut berdasarkan bulan mulai. Urutan CV berbeda (PBF di depan Apotek dan Puskesmas).
- Halaman `/projects` ("Lihat Semua Pengalaman") berisi 16 butir yang dipecah dari butir-butir CV, dua bahasa.
- Foto hero: `PDN_0340.jpeg` (cutout rembg, dipotong di atas watermark fotografer di bagian bawah).
- Pendidikan: dua kartu dengan tumpukan foto (klik untuk ganti). Profesi 4 foto, S1 2 foto.
- Sertifikasi: carousel 4 sertifikat (Kompetensi Apoteker, TOEFL, dua webinar) dengan tautan ke versi penuh.
- Kontak: email dan WhatsApp saja. LinkedIn dan lokasi dihapus karena tidak ada di CV.
- Teks buatan pembuat situs (diturunkan dari butir CV): judul Tentang Saya, kutipan, empat karakter kerja, deskripsi kemampuan personal dan software, tagline, serta lencana hero.
- Nama ditulis "Rofifah Alza, S.Farm" (gelar dari piagam). Gelar "apt." tidak dipakai karena tidak ada di CV.

## Daftar perbedaan CV vs foto/sertifikat (untuk klien)
1. CV berisi salah ketik ("beradatapsi", "konstibusi") dan karakter rusak (tanda "–" tampil sebagai "�"). Sudah diperbaiki di situs: "beradaptasi", "kontribusi".
2. Periode PKPA saling tumpuk di CV: Apotek Keluarga Maret–Mei 2026 mencakup Puskesmas (Maret 2026) dan PBF (Mei 2026). Ditampilkan apa adanya; perlu konfirmasi.
3. Skor TOEFL 473 tidak ada di CV (hanya "TOEFL TEST, LTI, Mei 2026 – Mei 2028"). Skor diambil dari sertifikat. Sertifikat memuat tanggal lahir klien.
4. Dua sertifikat webinar (30 Mar 2021 dan 2 Jun 2022) ada di folder tetapi tidak ada di CV. Ditampilkan di Sertifikasi (kategori WEBINAR); mudah dihapus bila tidak diinginkan. Halaman 2 sertifikat 2022 (daftar materi dan pemateri) tidak ditampilkan.
5. Foto sendiri memperlihatkan selempang "CUM LAUDE" pada acara Program Profesi Apoteker (spanduk menampilkan Oktober 2026), tetapi CV tidak mencantumkan predikat itu. Predikat tidak ditulis di teks; foto ditampilkan di kartu Pendidikan Profesi.
6. Tanggal Lulusan Terbaik: piagam menyebut wisuda angkatan XXIII "28 Oktober 2024" dan tanggal terbit 12 Desember 2024; foto berbingkai bertuliskan "Wisuda 2024 Periode II, 12 Desember 2024". Teks di situs hanya menulis 2024.
7. Surat Pencatatan Ciptaan menyebut jenis "Kompilasi Ciptaan / Data" dan pencipta "Ril Aisyah Nurhawa, Rofifah Alza dkk", sedangkan CV menyebutnya poster edukasi. Alamat pencipta lain di surat itu dikaburkan di gambar situs.
8. Artikel jurnal: penulis lain adalah Haiyul Fadhli dan Hesti Rahmatia (nama klien urutan kedua). Gambar situs dipotong sebelum baris surel penulis.
9. Surel di CV (`rofifahalza1202@gmail.com`) berbeda dari surel penulis di artikel (`rofifahalza25@gmail.com`). Situs memakai surel CV.
10. Alamat CV hanya "Prum. Bintan Sari Blok C No 2" tanpa kota, jadi tidak ditampilkan. Tidak ada lokasi domisili di situs.
11. Foto S1 `ABL_8977(1).jpeg` adalah potongan lain dari foto yang sama dengan `ABL_8977.jpeg`; hanya satu yang dipakai.
12. PBF hanya punya satu foto (`4763AE6E…`); kartunya tidak memiliki tumpukan foto.
13. Foto tidak berlabel: Puskesmas `33b422f5…` (kunjungan ke rumah seorang ibu dan bayi) dan `8a37c32b…` (loket) diasumsikan kegiatan Puskesmas Payung Sekaki. Foto `IMG_6260` (menata obat) diasumsikan Apotek Keluarga.
14. Tidak ada foto untuk poster "Tampil Cantik dengan Kosmetik Aman" (hanya surat pencatatannya), dan tidak ada foto STR atau sumpah apoteker.
