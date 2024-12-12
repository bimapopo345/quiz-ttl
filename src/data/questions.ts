import { Question } from '../types/quiz';

export const questions: Question[] = [
  // **A. Pilih Jawaban yang Paling Tepat!**
  {
    id: 1,
    type: 'multipleChoice',
    question: "Berikut merupakan cara menambahkan caption pada tabel…",
    options: {
      a: "Klik tabel 🡪 klik insert caption 🡪 pilih label table 🡪 edit tabel 🡪 pilih lokasi caption 🡪 ok",
      b: "Klik tabel 🡪 klik insert caption 🡪 pilih label table 🡪 pilih lokasi caption 🡪 ok",
      c: "Klik tabel 🡪 pilih label table 🡪 edit tabel 🡪 pilih lokasi caption 🡪 ok",
      d: "Klik tabel 🡪 klik insert caption 🡪 edit tabel 🡪 pilih label table 🡪 pilih lokasi caption 🡪 ok"
    },
    correctAnswer: "b",
    explanation: "Langkah yang benar adalah dengan mengklik tabel, kemudian memilih 'Insert Caption', memilih label 'Table', memilih lokasi caption, dan akhirnya mengklik 'OK'."
  },
  {
    id: 2,
    type: 'multipleChoice',
    question: "Bagaimanakah cara yang tepat dalam membuat daftar isi?",
    options: {
      a: "Tab references 🡪 klik table of content 🡪 pilih satu desain daftar isi 🡪 selesai",
      b: "klik table of content 🡪 Tab references 🡪 pilih satu desain daftar isi 🡪 selesai",
      c: "Tab references 🡪 pilih satu desain daftar isi 🡪 klik table of content 🡪 selesai",
      d: "Tab references 🡪 pilih satu desain daftar isi 🡪 selesai"
    },
    correctAnswer: "a",
    explanation: "Cara yang tepat adalah dengan membuka 'Tab References', kemudian mengklik 'Table of Content', memilih satu desain daftar isi, dan menyelesaikannya."
  },
  {
    id: 3,
    type: 'multipleChoice',
    question: "Berdasarkan diksi di bawah ini, manakah yang merupakan kata baku?",
    options: {
      a: "Budi daya",
      b: "Budidaya",
      c: "Mengkonfigurasi",
      d: "Sistematika"
    },
    correctAnswer: "b",
    explanation: "'Budidaya' adalah bentuk kata baku sesuai kaidah bahasa Indonesia."
  },
  {
    id: 4,
    type: 'multipleChoice',
    question: "Menu apakah yang diklik untuk kustomisasi daftar halaman?",
    options: {
      a: "Custom Table of content",
      b: "Table of content",
      c: "Custom Table",
      d: "Table"
    },
    correctAnswer: "a",
    explanation: "Untuk mengkustomisasi daftar halaman, pilih 'Custom Table of Contents'."
  },
  {
    id: 5,
    type: 'multipleChoice',
    question: "Ringkasan dari sebuah laporan atau dokumen yang mencakup tujuan, metode, hasil, dan kesimpulan penelitian atau proyek adalah",
    options: {
      a: "Laporan magang",
      b: "Abstrak",
      c: "Jurnal",
      d: "Thesis"
    },
    correctAnswer: "b",
    explanation: "'Abstrak' adalah ringkasan yang mencakup tujuan, metode, hasil, dan kesimpulan penelitian atau proyek."
  },
  {
    id: 6,
    type: 'multipleChoice',
    question: "Hal yang tidak boleh dilakukan dalam membuat presentasi",
    options: {
      a: "Menggunakan animasi",
      b: "Visualisasi menarik",
      c: "Warna tidak kontras",
      d: "Grafik dan tabel jelas"
    },
    correctAnswer: "c",
    explanation: "Warna yang tidak kontras membuat presentasi sulit dibaca dan dipahami."
  },
  {
    id: 7,
    type: 'multipleChoice',
    question: "Berdasarkan diksi di bawah ini, manakah yang merupakan kata baku?",
    options: {
      a: "Napas",
      b: "Aktifitas",
      c: "Trilyun",
      d: "Multi strata"
    },
    correctAnswer: "a",
    explanation: "'Napas' adalah kata baku, sementara opsi lainnya tidak sesuai dengan kaidah bahasa Indonesia."
  },
  {
    id: 8,
    type: 'multipleChoice',
    question: "Bagaimanakah memperbarui daftar tabel?",
    options: {
      a: "Edit tabel",
      b: "Update tabel",
      c: "Import tabel",
      d: "Export tabel"
    },
    correctAnswer: "b",
    explanation: "Untuk memperbarui daftar tabel, pilih 'Update Table'."
  },
  {
    id: 9,
    type: 'multipleChoice',
    question: "Jenis penomoran yang manakah yang termasuk dalam halaman abstrak menurut PPKI?",
    options: {
      a: "i, ii, iii, iv…..",
      b: "1, 2, 3, 4….",
      c: "I, II, III…..",
      d: "a, b, c…"
    },
    correctAnswer: "a",
    explanation: "Halaman abstrak menggunakan penomoran angka romawi kecil (i, ii, iii, iv…)."
  },
  {
    id: 10,
    type: 'multipleChoice',
    question: "Bagaimana cara menambahkan referensi dari Google Scholar atau jurnal online?",
    options: {
      a: "Mendeley Google Scholar",
      b: "Mendeley Find Google Scholar",
      c: "Mendeley Update",
      d: "Mendeley Web Importer"
    },
    correctAnswer: "d",
    explanation: "Menggunakan 'Mendeley Web Importer' adalah cara untuk menambahkan referensi dari Google Scholar atau jurnal online."
  },
  {
    id: 11,
    type: 'multipleChoice',
    question: "Dampak apa yang terjadi jika presentasi terlalu banyak animasi?",
    options: {
      a: "Overstimulated",
      b: "Mengganggu audiens",
      c: "Menarik",
      d: "Berguna"
    },
    correctAnswer: "b",
    explanation: "Animasi yang berlebihan dapat mengganggu audiens dan mengalihkan perhatian dari isi utama."
  },
  {
    id: 12,
    type: 'multipleChoice',
    question: "Peluluhan kata yang paling tepat adalah",
    options: {
      a: "Mengkombinasikan",
      b: "Mensintesis",
      c: "Memublikasi",
      d: "Mentaati"
    },
    correctAnswer: "b",
    explanation: "'Mensintesis' adalah kata baku yang tepat."
  },
  {
    id: 13,
    type: 'multipleChoice',
    question: "Manakah hal yang tidak dianjurkan dalam ppt?",
    options: {
      a: "Isi yang ringkas dan jelas",
      b: "Menggunakan animasi",
      c: "Visualisasi yang menarik",
      d: "Tidak terstruktur"
    },
    correctAnswer: "d",
    explanation: "Presentasi yang tidak terstruktur sulit diikuti dan kurang efektif."
  },
  {
    id: 14,
    type: 'multipleChoice',
    question: "Berikut ini yang tidak dimuat dalam abstrak adalah…",
    options: {
      a: "Tujuan penelitian",
      b: "Latar belakang",
      c: "Metode hasil",
      d: "Gambar dan tabel"
    },
    correctAnswer: "d",
    explanation: "Abstrak tidak memuat gambar dan tabel."
  },
  {
    id: 15,
    type: 'multipleChoice',
    question: "Visualisasi dapat membantu pemahaman, menunjukkan poin penting apakah dalam penyusunan bahan presentasi?",
    options: {
      a: "Interesting",
      b: "Useful",
      c: "Accurate",
      d: "Simple"
    },
    correctAnswer: "b",
    explanation: "Visualisasi yang berguna membantu pemusatan perhatian pada poin-poin penting."
  },
  {
    id: 16,
    type: 'multipleChoice',
    question: "Pedoman Penulisan Karya Ilmiah Untuk Tugas Akhir di Sekolah Vokasi IPB. Pada kalimat untuk judul bab ini, kata manakah yang tidak sesuai dengan PPKI?",
    options: {
      a: "Penulisan",
      b: "Untuk",
      c: "di",
      d: "IPB"
    },
    correctAnswer: "c",
    explanation: "'di' sering kali dianggap kurang baku dalam konteks judul bab dibandingkan bentuk lain seperti 'di'."
  },
  {
    id: 17,
    type: 'multipleChoice',
    question: "Pemisah jam dan menit yang tepat sesuai PPKI IPB adalah…",
    options: {
      a: "12.20",
      b: "12:20",
      c: "12,20",
      d: "12’20"
    },
    correctAnswer: "b",
    explanation: "Pemisah jam dan menit yang tepat adalah menggunakan tanda titik dua (:), seperti 12:20."
  },
  {
    id: 18,
    type: 'multipleChoice',
    question: "Berapakah maksimal kata/frasa yang digunakan pada bagian kata kunci abstrak?",
    options: {
      a: "3",
      b: "5",
      c: "6",
      d: "7"
    },
    correctAnswer: "b",
    explanation: "Maksimal lima kata atau frasa digunakan pada bagian kata kunci abstrak."
  },
  {
    id: 19,
    type: 'multipleChoice',
    question: "Bagaimana cara menambahkan referensi di Mendeley?",
    options: {
      a: "Add new 🡪 Edit 🡪 Save",
      b: "Add new 🡪 Add Entry 🡪 save",
      c: "Add new 🡪 Add Entry Manually 🡪 save",
      d: "Add new 🡪 Update 🡪 save"
    },
    correctAnswer: "c",
    explanation: "Cara menambahkan referensi secara manual adalah dengan memilih 'Add new', kemudian 'Add Entry Manually', dan 'save'."
  },
  {
    id: 20,
    type: 'multipleChoice',
    question: "Penulisan nama orang dan gelar akademik yang tepat sesuai PPKI adalah...",
    options: {
      a: "Prof Dr Ir Suryadi, MM",
      b: "Prof. Dr. Ir Suryadi M.M.",
      c: "Prof Dr. Ir. Suryadi, M.M.",
      d: "Prof. Dr. Ir. Suryadi, M.M."
    },
    correctAnswer: "d",
    explanation: "Penulisan nama dan gelar akademik harus menggunakan titik setelah singkatan gelar, seperti 'Prof. Dr. Ir. Suryadi, M.M.'."
  },
  {
    id: 21,
    type: 'multipleChoice',
    question: "Manakah yang tidak termasuk hal penting dalam penyusunan bahan presentasi?",
    options: {
      a: "Structure",
      b: "Accurate",
      c: "Legitimate",
      d: "Unique"
    },
    correctAnswer: "c",
    explanation: "'Legitimate' tidak termasuk hal penting dalam penyusunan bahan presentasi menurut materi."
  },
  {
    id: 22,
    type: 'multipleChoice',
    question: "Manakah yang tidak termasuk fungsi abstrak?",
    options: {
      a: "Memudahkan pemilihan",
      b: "Menyediakan ringkasan",
      c: "Memberikan informasi",
      d: "Menyimpulkan isi penelitian"
    },
    correctAnswer: "d",
    explanation: "Fungsi abstrak adalah memudahkan pemilihan, menyediakan ringkasan, dan memberikan informasi. 'Menyimpulkan isi penelitian' bukan fungsi utama abstrak."
  },
  {
    id: 23,
    type: 'multipleChoice',
    question: "Manakah yang termasuk unsur desain?",
    options: {
      a: "Garis, bentuk, tekstur, warna",
      b: "Ruang, garis, posisi, bentuk",
      c: "Posisi, warna, bentuk, tekstur",
      d: "a, b, c benar semua"
    },
    correctAnswer: "d",
    explanation: "Garis, bentuk, tekstur, warna, ruang, dan posisi semuanya adalah unsur desain."
  },
  {
    id: 24,
    type: 'multipleChoice',
    question: "Bagaimana cara membuat daftar pustaka otomatis di Microsoft Word?",
    options: {
      a: "Insert biography di tab references",
      b: "Insert bibliography di tab references",
      c: "Insert profile di tab references",
      d: "Insert citation di tab references"
    },
    correctAnswer: "b",
    explanation: "Untuk membuat daftar pustaka otomatis, pilih 'Insert Bibliography' di tab References."
  },
  {
    id: 25,
    type: 'multipleChoice',
    question: "Manakah yang tidak termasuk kriteria visualisasi yang baik?",
    options: {
      a: "Fakta",
      b: "Mudah dibaca",
      c: "Menarik perhatian",
      d: "konstruksi"
    },
    correctAnswer: "d",
    explanation: "'Konstruksi' tidak termasuk dalam kriteria visualisasi yang baik."
  },

  // **B. Tulis (B) jika pernyataan benar, dan (S) jika pernyataan tidak tepat.**
  {
    id: 26,
    type: 'trueFalse',
    question: "Abstrak ditulis dalam bahasa indonesia dan tidak dalam bahasa inggris.",
    correctAnswer: false,
    explanation: "Abstrak harus ditulis dalam dua bahasa: Bahasa Indonesia dan Bahasa Inggris."
  },
  {
    id: 27,
    type: 'trueFalse',
    question: "Bentuk huruf yang naik turun dapat membantu pemilihan huruf lebih menarik.",
    correctAnswer: true,
    explanation: "Variasi huruf seperti bolding, italic, atau perubahan warna dapat membantu menarik perhatian audiens."
  },
  {
    id: 28,
    type: 'trueFalse',
    question: "Penggunaan kata “dimana” sebagai kata hubung harus dihindari.",
    correctAnswer: true,
    explanation: "Penggunaan kata 'dimana' sebagai kata hubung dianggap kurang baku dan disarankan untuk dihindari."
  },
  {
    id: 29,
    type: 'trueFalse',
    question: "Warna tidak boleh dibuat kontras terhadap background untuk ppt.",
    correctAnswer: false,
    explanation: "Warna yang kontras sangat membantu dalam membuat presentasi lebih jelas dan mudah dibaca."
  },
  {
    id: 30,
    type: 'trueFalse',
    question: "Narasi disusun dalam satu kalimat, isi tidak lebih dari 200 kata.",
    correctAnswer: false,
    explanation: "Narasi abstrak disusun dalam satu paragraf, isi tidak lebih dari 200 kata."
  },
  {
    id: 31,
    type: 'trueFalse',
    question: "Memberi penekanan pada hal yang dipresentasikan dengan memberikan graying out, bolding atau warna.",
    correctAnswer: true,
    explanation: "Memberi penekanan pada poin penting dapat dilakukan dengan memberikan graying out, bolding, atau perubahan warna."
  },
  {
    id: 32,
    type: 'trueFalse',
    question: "References 🡪 Insert citation adalah cara menyisipkan sitasi di dokumen Word menggunakan Mendeley.",
    correctAnswer: true,
    explanation: "'References → Insert Citation' digunakan untuk menyisipkan sitasi di dokumen Word menggunakan Mendeley."
  },
  {
    id: 33,
    type: 'trueFalse',
    question: "Abstrak biasanya memiliki panjang antara 150-250 kata.",
    correctAnswer: true,
    explanation: "Narasi abstrak disusun dalam satu paragraf, isi tidak lebih dari 200 kata."
  },
  {
    id: 34,
    type: 'trueFalse',
    question: "Penggunaan Animasi dapat membantu presentasi.",
    correctAnswer: true,
    explanation: "Penggunaan animasi yang tepat dapat membantu menarik perhatian audiens dan memperjelas poin-poin penting."
  },
  {
    id: 35,
    type: 'trueFalse',
    question: "Menulis abstrak lebih baik setelah menyelesaikan laporan agar lebih mudah.",
    correctAnswer: true,
    explanation: "Menulis abstrak setelah menyelesaikan laporan membantu merangkum isi laporan dengan lebih efektif."
  },
  {
    id: 36,
    type: 'trueFalse',
    question: "Judul Subbab (Kata dalam judul diawali dengan huruf kapital dan dicetak tebal).",
    correctAnswer: true,
    explanation: "Judul subbab diawali dengan huruf kapital dan dicetak tebal sesuai pedoman penulisan."
  },
  {
    id: 37,
    type: 'trueFalse',
    question: "Susunan kata pada judul membentuk segitiga terbalik dan tidak lebih dari 3 baris 1 dengan jarak 1 spasi.",
    correctAnswer: true,
    explanation: "Susunan kata pada judul membentuk segitiga terbalik dan tidak lebih dari 3 baris dengan jarak 1 spasi sesuai pedoman."
  },
  {
    id: 38,
    type: 'trueFalse',
    question: "Nomor halaman diketik di pojok atas kanan atau kiri (mirror) dengan batas kanan atau kiri 3 cm dan batas atas 2 cm.",
    correctAnswer: true,
    explanation: "Nomor halaman diketik di pojok atas kanan atau kiri dengan batas kanan/kiri 3 cm dan batas atas 2 cm sesuai pedoman penulisan."
  },
  {
    id: 39,
    type: 'trueFalse',
    question: "Tidak menggunakan fasilitas notes page pada ppt adalah hal yang membantu presentasi.",
    correctAnswer: false,
    explanation: "Penggunaan notes page dapat membantu presenter dalam menyampaikan informasi tambahan tanpa mengganggu visualisasi utama."
  },
  {
    id: 40,
    type: 'trueFalse',
    question: "Caption pada tabel disimpan di bagian bawah tabel.",
    correctAnswer: true,
    explanation: "Caption pada tabel biasanya ditempatkan di bawah tabel."
  },
  {
    id: 41,
    type: 'trueFalse',
    question: "Penulisan nilai uang yang tepat menurut PPKI adalah Rp. 10 000,-.",
    correctAnswer: false,
    explanation: "Penulisan nilai uang yang tepat menurut PPKI adalah Rp 10.000,- tanpa titik setelah Rp."
  },
  {
    id: 42,
    type: 'trueFalse',
    question: "Visualisasi membantu pemusatan perhatian (focus).",
    correctAnswer: true,
    explanation: "Visualisasi yang baik dapat membantu pemusatan perhatian audiens pada poin-poin penting."
  },
  {
    id: 43,
    type: 'trueFalse',
    question: "Kata depan atau awal kalimat disalahkan jika menggunakan imbuhan seperti: diantaranya.",
    correctAnswer: false,
    explanation: "Penggunaan imbuhan pada kata depan harus sesuai dengan kaidah bahasa Indonesia, tetapi tidak disalahgunakan."
  },
  {
    id: 44,
    type: 'trueFalse',
    question: "Makna visualisasi tidak harus sama antara presenter dan audiens.",
    correctAnswer: false,
    explanation: "Visualisasi harus jelas dan dapat dipahami oleh audiens agar maknanya sama dengan yang diinginkan presenter."
  },
  {
    id: 45,
    type: 'trueFalse',
    question: "Slide yang efektif nyaris tidak ada isinya (simpel).",
    correctAnswer: false,
    explanation: "Slide yang efektif harus ringkas namun tetap informatif, bukan nyaris tidak ada isinya."
  },
  {
    id: 46,
    type: 'trueFalse',
    question: "Pemberian nomor pada bab menggunakan angka romawi, sedangkan subbab menggunakan angka arab.",
    correctAnswer: true,
    explanation: "Pemberian nomor pada bab menggunakan angka romawi, sedangkan subbab menggunakan angka arab."
  },
  {
    id: 47,
    type: 'trueFalse',
    question: "Di tubuh tulisan, setiap bab baru ditulis di halaman baru, termasuk penulisan Daftar Pustaka.",
    correctAnswer: true,
    explanation: "Setiap bab baru harus dimulai di halaman baru, termasuk Daftar Pustaka."
  },
  {
    id: 48,
    type: 'trueFalse',
    question: "Nomor halaman dimulai dari Sampul sampai Daftar Lampiran dinyatakan dengan i, ii, iii, iv, dan seterusnya.",
    correctAnswer: true,
    explanation: "Halaman awal seperti Sampul dan Abstrak menggunakan angka romawi kecil (i, ii, iii, iv,…)."
  },
  {
    id: 49,
    type: 'trueFalse',
    question: "Laporan akhir tidak boleh lebih dari 5000 kata.",
    correctAnswer: true,
    explanation: "Laporan akhir tidak boleh lebih dari 5000 kata sesuai pedoman penulisan."
  },
  {
    id: 50,
    type: 'trueFalse',
    question: "Logo IPB sesuai Statuta berdiameter 2.5 cm, warna Biru.",
    correctAnswer: false,
    explanation: "Logo IPB sesuai Statuta berdiameter 2.5 cm, warna hitam."
  },
];
