
export type Question = {
  id: number;
  text: string;
  options: {
    a: {
      text: string;
      type: string;
    };
    b: {
      text: string;
      type: string;
    };
  };
};

export const questions: Question[] = [
  {
    id: 1,
    text: "Kalau akhir pekan tiba, kamu lebih suka?",
    options: {
      a: {
        text: "Nongkrong bareng teman",
        type: "E"
      },
      b: {
        text: "Me time di rumah",
        type: "I"
      }
    }
  },
  {
    id: 2,
    text: "Ketika belajar sesuatu yang baru, kamu lebih suka?",
    options: {
      a: {
        text: "Memahami langkah-langkah praktisnya",
        type: "S"
      },
      b: {
        text: "Memahami konsep besarnya dulu",
        type: "N"
      }
    }
  },
  {
    id: 3,
    text: "Ketika menghadapi masalah, kamu cenderung?",
    options: {
      a: {
        text: "Mempertimbangkan solusi paling logis",
        type: "T"
      },
      b: {
        text: "Memikirkan dampaknya pada semua orang",
        type: "F"
      }
    }
  },
  {
    id: 4,
    text: "Bagaimana cara kamu merencanakan liburan?",
    options: {
      a: {
        text: "Membuat itinerary detail dan terstruktur",
        type: "J"
      },
      b: {
        text: "Menyiapkan beberapa opsi dan memutuskan di tempat",
        type: "P"
      }
    }
  },
  {
    id: 5,
    text: "Dalam sebuah diskusi kelompok, kamu biasanya?",
    options: {
      a: {
        text: "Aktif berbicara dan mengutarakan pendapat",
        type: "E"
      },
      b: {
        text: "Mendengarkan dulu, baru bicara jika perlu",
        type: "I"
      }
    }
  },
  {
    id: 6,
    text: "Kamu lebih tertarik dengan?",
    options: {
      a: {
        text: "Fakta dan pengalaman nyata",
        type: "S"
      },
      b: {
        text: "Ide-ide abstrak dan kemungkinan di masa depan",
        type: "N"
      }
    }
  },
  {
    id: 7,
    text: "Ketika teman curhat, kamu cenderung?",
    options: {
      a: {
        text: "Memberikan solusi praktis untuk masalahnya",
        type: "T"
      },
      b: {
        text: "Memberikan dukungan emosional",
        type: "F"
      }
    }
  },
  {
    id: 8,
    text: "Kamu merasa lebih nyaman ketika?",
    options: {
      a: {
        text: "Segala sesuatu sudah terencana dengan baik",
        type: "J"
      },
      b: {
        text: "Ada ruang untuk spontanitas dan fleksibilitas",
        type: "P"
      }
    }
  },
  {
    id: 9,
    text: "Setelah interaksi sosial yang panjang, kamu biasanya?",
    options: {
      a: {
        text: "Merasa berenergi dan ingin lanjut",
        type: "E"
      },
      b: {
        text: "Perlu waktu sendiri untuk mengisi ulang energi",
        type: "I"
      }
    }
  },
  {
    id: 10,
    text: "Kamu lebih suka membaca buku yang?",
    options: {
      a: {
        text: "Berdasarkan kisah nyata atau fakta historis",
        type: "S"
      },
      b: {
        text: "Berisi fantasi, fiksi ilmiah atau ide-ide inovatif",
        type: "N"
      }
    }
  },
  {
    id: 11,
    text: "Saat membuat keputusan penting, kamu lebih memprioritaskan?",
    options: {
      a: {
        text: "Pertimbangan objektif dan logika",
        type: "T"
      },
      b: {
        text: "Nilai pribadi dan dampak pada hubungan",
        type: "F"
      }
    }
  },
  {
    id: 12,
    text: "Dalam mengelola tugas sehari-hari, kamu lebih suka?",
    options: {
      a: {
        text: "Membuat daftar dan mengikutinya",
        type: "J"
      },
      b: {
        text: "Mengalir sesuai kebutuhan saat itu",
        type: "P"
      }
    }
  },
  {
    id: 13,
    text: "Di tempat baru, kamu cenderung?",
    options: {
      a: {
        text: "Berkenalan dengan orang-orang baru",
        type: "E"
      },
      b: {
        text: "Mengamati situasi terlebih dahulu",
        type: "I"
      }
    }
  },
  {
    id: 14,
    text: "Kamu lebih menghargai orang yang?",
    options: {
      a: {
        text: "Realistis dan praktis",
        type: "S"
      },
      b: {
        text: "Inovatif dan penuh ide",
        type: "N"
      }
    }
  },
  {
    id: 15,
    text: "Kritik lebih mudah kamu terima jika?",
    options: {
      a: {
        text: "Disampaikan secara jelas dan langsung",
        type: "T"
      },
      b: {
        text: "Disampaikan dengan lembut dan penuh pengertian",
        type: "F"
      }
    }
  },
  {
    id: 16,
    text: "Kamu lebih nyaman dalam situasi yang?",
    options: {
      a: {
        text: "Terstruktur dengan jadwal yang jelas",
        type: "J"
      },
      b: {
        text: "Fleksibel dan bisa berubah sesuai keadaan",
        type: "P"
      }
    }
  }
];

export type MbtiResult = {
  type: string;
  title: string;
  description: string;
  strengths: string[];
  challenges: string[];
  careers: string[];
  compatibility: string;
};

export const mbtiResults: Record<string, MbtiResult> = {
  "ISTJ": {
    type: "ISTJ",
    title: "Si Logistik",
    description: "ISTJ adalah pribadi yang praktis, faktual, dan dapat diandalkan. Mereka sangat terorganisir dan mementingkan tradisi serta keamanan. Mereka memiliki rasa tanggung jawab yang kuat dan bekerja dengan penuh dedikasi untuk mencapai tujuan.",
    strengths: [
      "Dapat diandalkan dan bertanggung jawab",
      "Terorganisir dan teliti dalam detil",
      "Logis dan objektif dalam keputusan",
      "Setia dan berkomitmen pada tugas"
    ],
    challenges: [
      "Terlalu kaku dan sulit beradaptasi",
      "Kesulitan menerima perubahan mendadak",
      "Terkadang terlalu kritis pada diri sendiri dan orang lain",
      "Cenderung menekan emosi"
    ],
    careers: [
      "Akuntan", 
      "Auditor", 
      "Manager Operasional", 
      "Insinyur", 
      "Hakim",
      "Analis Sistem"
    ],
    compatibility: "ESFP atau ESTP"
  },
  "ISFJ": {
    type: "ISFJ",
    title: "Si Pelindung",
    description: "ISFJ adalah pribadi yang hangat, perhatian, dan sangat mengingat detail. Mereka setia dan mendedikasikan diri untuk melayani orang lain. Mereka memiliki ingatan yang kuat tentang informasi pribadi orang lain dan sangat menjaga hubungan.",
    strengths: [
      "Sangat perhatian dan peduli pada orang lain",
      "Teliti dan memperhatikan detail kecil",
      "Setia dan dapat diandalkan",
      "Memiliki ingatan kuat tentang fakta personal"
    ],
    challenges: [
      "Sulit menolak permintaan bantuan",
      "Terlalu kritis pada diri sendiri",
      "Kesulitan menerima perubahan",
      "Terlalu mengorbankan diri untuk orang lain"
    ],
    careers: [
      "Perawat",
      "Guru SD",
      "Administrator",
      "Pekerja Sosial",
      "Konselor",
      "Terapis"
    ],
    compatibility: "ESFP atau ESTP"
  },
  "ISTP": {
    type: "ISTP",
    title: "Si Virtuoso",
    description: "ISTP adalah pribadi yang tenang, analitis, dan sangat terampil dalam memecahkan masalah praktis. Mereka suka bekerja dengan tangan dan memiliki kemampuan teknis yang kuat. Mereka fleksibel dan adaptif, menikmati tantangan baru.",
    strengths: [
      "Sangat terampil dalam hal teknis dan praktis",
      "Tenang dan rasional dalam menghadapi krisis",
      "Adaptif dan fleksibel",
      "Pandai menganalisis logika dan fakta"
    ],
    challenges: [
      "Kesulitan berkomitmen jangka panjang",
      "Cenderung mengambil risiko yang tidak perlu",
      "Kurang ekspresif secara emosional",
      "Kesulitan memahami perasaan orang lain"
    ],
    careers: [
      "Teknisi",
      "Mekanik",
      "Insinyur",
      "Pilot",
      "Ahli Forensik",
      "Programmer"
    ],
    compatibility: "ESFJ atau ESTJ"
  },
  "ISFP": {
    type: "ISFP",
    title: "Si Petualang",
    description: "ISFP adalah pribadi yang artistik, sensitif, dan spontan. Mereka menikmati momen saat ini dan sangat menghargai kebebasan pribadi. Mereka memiliki kepekaan estetika yang tinggi dan cenderung menghindari konflik.",
    strengths: [
      "Sensitif terhadap kebutuhan orang lain",
      "Kreatif dan memiliki jiwa seni",
      "Praktis dan realistis",
      "Fleksibel dan menikmati saat ini"
    ],
    challenges: [
      "Terlalu sensitif terhadap kritik",
      "Kesulitan dalam perencanaan jangka panjang",
      "Cenderung menghindari konflik",
      "Sulit mengekspresikan perasaan secara verbal"
    ],
    careers: [
      "Seniman",
      "Desainer",
      "Pekerja Sosial",
      "Chef",
      "Fotografer",
      "Terapis Fisik"
    ],
    compatibility: "ENFJ atau ESFJ"
  },
  "INFJ": {
    type: "INFJ",
    title: "Si Pembela",
    description: "INFJ adalah pribadi yang idealis, empatik, dan memiliki visi masa depan yang kuat. Mereka peduli pada kesejahteraan orang lain dan memiliki kemampuan intuitif yang tajam untuk memahami orang dan situasi kompleks.",
    strengths: [
      "Sangat empatik dan intuitif",
      "Visioner dan idealis",
      "Berkomitmen pada nilai-nilai personal",
      "Kreatif dan inovatif dalam pemecahan masalah"
    ],
    challenges: [
      "Terlalu perfeksionis",
      "Sulit membuka diri",
      "Cenderung menyimpan perasaan",
      "Kesulitan menolak membantu orang lain"
    ],
    careers: [
      "Konselor",
      "Psikolog",
      "Penulis",
      "Guru",
      "Terapis",
      "Aktivis Sosial"
    ],
    compatibility: "ENFP atau ENTP"
  },
  "INFP": {
    type: "INFP",
    title: "Si Mediator",
    description: "INFP adalah pribadi yang idealis, empatis, dan sangat menghargai keharmonisan. Mereka memiliki keinginan kuat untuk hidup sesuai nilai-nilai mereka dan sangat menghargai keautentikan dalam diri mereka dan orang lain.",
    strengths: [
      "Sangat idealis dan punya nilai kuat",
      "Kreativitas dan imajinasi tinggi",
      "Empatik dan memahami orang lain",
      "Adaptif dan fleksibel dalam berbagai situasi"
    ],
    challenges: [
      "Terlalu idealis dan perfeksionis",
      "Kesulitan berhadapan dengan kritik",
      "Cenderung mengabaikan realitas praktis",
      "Sulit menyelesaikan proyek rutin"
    ],
    careers: [
      "Penulis",
      "Seniman",
      "Psikolog",
      "Konselor",
      "Pekerja Sosial",
      "Pengajar Humaniora"
    ],
    compatibility: "ENFJ atau ENTJ"
  },
  "INTJ": {
    type: "INTJ",
    title: "Si Arsitek",
    description: "INTJ adalah pribadi yang strategis, mandiri, dan visioner. Mereka memiliki pemikiran analitis yang kuat dan kemampuan perencanaan jangka panjang yang baik. Mereka terus mencari cara untuk meningkatkan sistem dan proses.",
    strengths: [
      "Pemikir strategis dan visioner",
      "Independen dan mandiri",
      "Analitis dan objektif",
      "Inovatif dan selalu mencari perbaikan"
    ],
    challenges: [
      "Terlalu kritis dan perfeksionis",
      "Kesulitan mengekspresikan emosi",
      "Terkadang terlalu percaya diri",
      "Kesulitan bekerja dalam tim"
    ],
    careers: [
      "Ilmuwan",
      "Analis Sistem",
      "Peneliti",
      "Pengembang Perangkat Lunak",
      "Konsultan Strategi",
      "Arsitek"
    ],
    compatibility: "ENFP atau ENTP"
  },
  "INTP": {
    type: "INTP",
    title: "Si Pemikir",
    description: "INTP adalah pribadi yang logis, analitis, dan menyukai eksplorasi ide-ide abstrak. Mereka mencari pemahaman mendalam tentang bagaimana segala sesuatu bekerja dan sangat menghargai pengetahuan serta kecerdasan.",
    strengths: [
      "Sangat logis dan analitis",
      "Inovatif dan kreatif dalam pemikiran",
      "Mandiri dan objektif",
      "Terbuka pada ide-ide baru"
    ],
    challenges: [
      "Kesulitan dengan rutinitas",
      "Cenderung menunda-nunda",
      "Kurang empati dalam beberapa situasi",
      "Kesulitan mengekspresikan emosi"
    ],
    careers: [
      "Ilmuwan",
      "Peneliti",
      "Programmer",
      "Profesor",
      "Analis Data",
      "Filosofer"
    ],
    compatibility: "ENFJ atau ENTJ"
  },
  "ESTJ": {
    type: "ESTJ",
    title: "Si Eksekutif",
    description: "ESTJ adalah pribadi yang terorganisir, tegas, dan berorientasi pada hasil. Mereka menghargai tradisi, ketertiban, dan memiliki kemampuan organisasi yang kuat. Mereka dapat diandalkan untuk menyelesaikan tugas dengan efisien.",
    strengths: [
      "Terorganisir dan efisien",
      "Tegas dan dapat diandalkan",
      "Praktis dan berorientasi fakta",
      "Memiliki etika kerja yang kuat"
    ],
    challenges: [
      "Terkadang terlalu keras kepala",
      "Kesulitan dengan fleksibilitas",
      "Kurang sensitif terhadap perasaan orang lain",
      "Terlalu fokus pada aturan dan prosedur"
    ],
    careers: [
      "Manager",
      "Eksekutif Bisnis",
      "Administrator",
      "Militer",
      "Polisi",
      "Hakim"
    ],
    compatibility: "ISTP atau ISFP"
  },
  "ESTP": {
    type: "ESTP",
    title: "Si Pengusaha",
    description: "ESTP adalah pribadi yang energik, spontan, dan menyukai petualangan. Mereka sangat baik dalam menyelesaikan masalah praktis dan beradaptasi dengan situasi baru. Mereka hidup di masa sekarang dan menikmati aksi.",
    strengths: [
      "Energik dan spontan",
      "Praktis dan cepat bertindak",
      "Adaptif dalam situasi baru",
      "Pemecah masalah yang baik"
    ],
    challenges: [
      "Kesulitan dengan komitmen jangka panjang",
      "Cenderung mengambil risiko berlebih",
      "Kurang perencanaan masa depan",
      "Bosan dengan rutinitas"
    ],
    careers: [
      "Pengusaha",
      "Sales",
      "Marketing",
      "Atlet",
      "Paramedis",
      "Event Organizer"
    ],
    compatibility: "ISFJ atau ISTJ"
  },
  "ESFJ": {
    type: "ESFJ",
    title: "Si Konsul",
    description: "ESFJ adalah pribadi yang hangat, peduli, dan sangat memperhatikan kebutuhan orang lain. Mereka setia, kooperatif, dan menjunjung tinggi tradisi serta nilai-nilai sosial. Mereka bekerja keras untuk menciptakan harmoni.",
    strengths: [
      "Sangat perhatian dan peduli",
      "Loyal dan dapat diandalkan",
      "Pandai berinteraksi sosial",
      "Praktis dan terorganisir"
    ],
    challenges: [
      "Terlalu sensitif terhadap kritik",
      "Terlalu membutuhkan persetujuan orang lain",
      "Kesulitan beradaptasi dengan perubahan",
      "Terkadang terlalu mengatur orang lain"
    ],
    careers: [
      "Perawat",
      "Guru",
      "Konselor",
      "Human Resources",
      "Customer Service",
      "Event Planner"
    ],
    compatibility: "ISTP atau ISFP"
  },
  "ESFP": {
    type: "ESFP",
    title: "Si Penghibur",
    description: "ESFP adalah pribadi yang spontan, energik, dan sangat menikmati hidup. Mereka suka menjadi pusat perhatian dan memiliki kemampuan alamiah untuk menghibur orang lain. Mereka praktis, fleksibel, dan berorientasi pada pengalaman.",
    strengths: [
      "Energik dan antusias",
      "Praktis dan spontan",
      "Pandai bersosialisasi",
      "Fleksibel dan adaptif"
    ],
    challenges: [
      "Kesulitan dengan perencanaan jangka panjang",
      "Cenderung menghindari konflik",
      "Mudah bosan dengan rutinitas",
      "Terkadang terlalu impulsif"
    ],
    careers: [
      "Entertainer",
      "Event Organizer",
      "Sales",
      "Public Relations",
      "Tour Guide",
      "Seniman Pertunjukan"
    ],
    compatibility: "ISTJ atau ISFJ"
  },
  "ENFJ": {
    type: "ENFJ",
    title: "Si Protagonis",
    description: "ENFJ adalah pribadi yang karismatik, empatik, dan sangat memahami orang lain. Mereka memiliki kemampuan alamiah untuk menginspirasi dan memotivasi orang lain. Mereka berorientasi pada hubungan dan menghargai harmoni.",
    strengths: [
      "Karismatik dan menginspirasi",
      "Sangat empatik dan perhatian",
      "Pandai berkomunikasi",
      "Terorganisir dan terarah"
    ],
    challenges: [
      "Terlalu idealis",
      "Terkadang terlalu mengatur orang lain",
      "Kesulitan menerima kritik",
      "Terlalu sensitif terhadap konflik"
    ],
    careers: [
      "Konselor",
      "Pelatih",
      "Guru",
      "HR Manager",
      "Pemimpin Organisasi",
      "Public Relations"
    ],
    compatibility: "ISFP atau INFP"
  },
  "ENFP": {
    type: "ENFP",
    title: "Si Juru Kampanye",
    description: "ENFP adalah pribadi yang antusias, kreatif, dan memiliki jiwa bebas. Mereka melihat banyak kemungkinan dan sangat terampil menghubungkan ide-ide. Mereka sangat menghargai kebebasan pribadi dan memiliki kemampuan berkomunikasi yang baik.",
    strengths: [
      "Sangat kreatif dan imajinatif",
      "Antusias dan energik",
      "Empatik dan perhatian",
      "Fleksibel dan adaptif"
    ],
    challenges: [
      "Kesulitan fokus pada satu hal",
      "Cenderung menunda-nunda",
      "Terlalu idealis",
      "Mudah stress saat terlalu banyak tekanan"
    ],
    careers: [
      "Penulis",
      "Konselor",
      "Pengajar",
      "Pemasaran",
      "Pengembangan Produk",
      "Jurnalis"
    ],
    compatibility: "INTJ atau INFJ"
  },
  "ENTJ": {
    type: "ENTJ",
    title: "Si Komandan",
    description: "ENTJ adalah pribadi yang tegas, logis, dan memiliki jiwa kepemimpinan alami. Mereka sangat terorganisir, strategis, dan berorientasi pada tujuan. Mereka mencari efisiensi dan selalu mencari cara untuk meningkatkan sistem.",
    strengths: [
      "Pemikir strategis dan visioner",
      "Tegas dan percaya diri",
      "Terorganisir dan efisien",
      "Pemimpin alami"
    ],
    challenges: [
      "Terkadang terlalu dominan",
      "Kurang sensitif terhadap perasaan orang lain",
      "Cenderung tidak sabar",
      "Terlalu berorientasi pada hasil"
    ],
    careers: [
      "Eksekutif Perusahaan",
      "Pengusaha",
      "Konsultan Manajemen",
      "Pengacara",
      "Project Manager",
      "Politikus"
    ],
    compatibility: "INTP atau INFP"
  },
  "ENTP": {
    type: "ENTP",
    title: "Si Pendebat",
    description: "ENTP adalah pribadi yang cerdas, inovatif, dan pandai berdebat. Mereka menyukai tantangan intelektual dan selalu mencari kemungkinan baru. Mereka fleksibel, adaptif, dan sangat menikmati diskusi yang menggugah pemikiran.",
    strengths: [
      "Sangat inovatif dan kreatif",
      "Adaptif dan cepat berpikir",
      "Penuh semangat untuk ide baru",
      "Pandai berargumentasi dan berdebat"
    ],
    challenges: [
      "Kesulitan menyelesaikan proyek",
      "Cenderung terlalu banyak menganalisis",
      "Terkadang tidak sensitif",
      "Tidak menyukai struktur dan aturan kaku"
    ],
    careers: [
      "Pengusaha",
      "Pengacara",
      "Konsultan",
      "Analis Sistem",
      "Insinyur",
      "Jurnalis"
    ],
    compatibility: "INFJ atau INTJ"
  }
};
