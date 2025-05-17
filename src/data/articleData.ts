
type ArticleSection = {
  title: string;
  content: string[];
  list?: string[];
};

export type Article = {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  slug: string;
  type: string;
  publishDate?: string;
  content: string[];
  sections?: ArticleSection[];
};

// Create articles data for all 16 MBTI types
export const articleData: Article[] = [
  // The Analysts
  {
    id: 1,
    title: "INTJ: Si Arsitek Strategis",
    excerpt: "INTJ adalah salah satu dari 16 tipe kepribadian MBTI. Dikenal sebagai 'Si Arsitek' atau 'Si Pemikir Strategis', INTJ dikenal dengan kemampuan analitis yang tajam dan pemikiran yang visioner.",
    image: "/placeholder.svg",
    slug: "mbti-intj",
    type: "INTJ",
    publishDate: "10 Mei 2025",
    content: [
      "INTJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering disebut sebagai 'Si Arsitek' atau 'Si Pemikir Strategis' karena kemampuan mereka yang luar biasa dalam merencanakan sistem dan melihat gambaran besar.",
      "Orang dengan tipe kepribadian INTJ dikenal memiliki pikiran analitis yang tajam, pemikiran independen yang kuat, dan kemampuan untuk melihat pola dan koneksi yang mungkin tidak terlihat oleh orang lain. Mereka menghargai logika di atas segalanya dan cenderung memiliki standar yang sangat tinggi untuk diri mereka sendiri dan orang lain."
    ],
    sections: [
      {
        title: "Karakteristik INTJ",
        content: [
          "INTJ memiliki kombinasi preferensi berikut: Introvert, Intuitive, Thinking, dan Judging. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada gambaran besar dan kemungkinan, membuat keputusan berdasarkan logika, dan lebih suka lingkungan yang teratur dan terencana."
        ],
        list: [
          "Pemikir strategis yang tajam",
          "Mandiri dan percaya diri",
          "Standar tinggi untuk diri sendiri dan orang lain",
          "Sangat analitis dan skeptis",
          "Cenderung perfeksionis",
          "Menghargai pengetahuan dan kompetensi"
        ]
      },
      {
        title: "Kekuatan INTJ",
        content: [
          "INTJ memiliki berbagai kekuatan yang membuat mereka menjadi pemimpin yang efektif dan pemikir yang luar biasa:"
        ],
        list: [
          "Kemampuan luar biasa dalam perencanaan jangka panjang",
          "Pemikiran original dan inovatif",
          "Mampu melihat gambaran besar",
          "Pembelajar seumur hidup yang berdedikasi",
          "Kemampuan analitis yang kuat",
          "Mampu bekerja mandiri dengan efektif"
        ]
      },
      {
        title: "Tantangan INTJ",
        content: [
          "Meskipun memiliki banyak kekuatan, INTJ juga menghadapi beberapa tantangan:"
        ],
        list: [
          "Kadang terlalu perfeksionis",
          "Dapat tampak dingin atau terpisah secara emosional",
          "Kesulitan dalam komunikasi dengan tipe yang lebih berorientasi pada perasaan",
          "Cenderung terlalu kritis terhadap ide-ide yang mereka anggap tidak logis",
          "Dapat mengabaikan aspek emosional dalam pengambilan keputusan"
        ]
      },
      {
        title: "Karir yang Cocok untuk INTJ",
        content: [
          "Dengan pikiran analitis dan kemampuan strategis mereka, INTJ sering bersinar dalam karir yang membutuhkan pemikiran kompleks dan perencanaan jangka panjang:"
        ],
        list: [
          "Arsitek atau perencana kota",
          "Ilmuwan atau peneliti",
          "Insinyur sistem",
          "Analis keuangan atau strategi bisnis",
          "Pengacara atau hakim",
          "Dokter spesialis",
          "Pengembang perangkat lunak atau arsitek IT"
        ]
      }
    ]
  },
  {
    id: 2,
    title: "INTP: Si Logis Yang Penuh Ide",
    excerpt: "INTP sering disebut sebagai 'Si Pemikir' atau 'Si Logis'. Mereka adalah pemikir abstrak yang briliant dengan kemampuan logika yang kuat dan ketertarikan pada ide teoritis.",
    image: "/placeholder.svg",
    slug: "mbti-intp",
    type: "INTP",
    publishDate: "11 Mei 2025",
    content: [
      "INTP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Pemikir' atau 'Si Logis' karena kecintaan mereka pada logika dan ide-ide abstrak.",
      "Orang dengan tipe kepribadian INTP adalah pemikir yang mendalam, analitis, dan objektif. Mereka terus-menerus mencari pengetahuan baru dan menikmati memecahkan masalah kompleks yang membutuhkan pemikiran mendalam."
    ],
    sections: [
      {
        title: "Karakteristik INTP",
        content: [
          "INTP memiliki kombinasi preferensi: Introvert, Intuitive, Thinking, dan Perceiving. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada pola dan kemungkinan, membuat keputusan berdasarkan logika, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Pemikir analitis dan logis",
          "Penasaran dan selalu mencari pengetahuan",
          "Mandiri dan orisinal",
          "Menghargai presisi dalam komunikasi",
          "Objektif dan rasional",
          "Cenderung skeptis dan mempertanyakan otoritas"
        ]
      },
      {
        title: "Kekuatan INTP",
        content: [
          "INTP memiliki berbagai kekuatan yang membuat mereka menjadi pemikir dan problem solver yang hebat:"
        ],
        list: [
          "Kemampuan analitis yang sangat kuat",
          "Kreativitas dalam memecahkan masalah",
          "Pemahaman mendalam tentang sistem kompleks",
          "Kemampuan untuk melihat koneksi yang tidak jelas",
          "Berpikiran terbuka terhadap ide-ide baru",
          "Sangat objektif dan tidak bias"
        ]
      },
      {
        title: "Karir yang Cocok untuk INTP",
        content: [
          "Dengan pikiran analitis dan kemampuan problem-solving, INTP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Ilmuwan atau peneliti",
          "Analis data",
          "Programmer atau pengembang software",
          "Insinyur",
          "Matematikawan atau statistikawan",
          "Filsuf atau akademisi",
          "Arsitek atau perancang sistem"
        ]
      }
    ]
  },
  {
    id: 3,
    title: "ENTJ: Si Komandan Yang Visioner",
    excerpt: "ENTJ dikenal sebagai 'Si Komandan' atau 'Si Eksekutif'. Mereka adalah pemimpin alami dengan visi yang jelas dan kemampuan untuk mengorganisir orang dan sumber daya untuk mencapai tujuan.",
    image: "/placeholder.svg",
    slug: "mbti-entj",
    type: "ENTJ",
    publishDate: "12 Mei 2025",
    content: [
      "ENTJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering disebut sebagai 'Si Komandan' atau 'Si Eksekutif' karena bakat alami mereka dalam kepemimpinan dan visi strategis.",
      "Orang dengan tipe kepribadian ENTJ adalah pemimpin yang tegas, strategis, dan berorientasi pada hasil. Mereka memiliki kemampuan alami untuk melihat potensi dan inefisiensi dalam sistem dan mengembangkan rencana komprehensif untuk perbaikan."
    ],
    sections: [
      {
        title: "Karakteristik ENTJ",
        content: [
          "ENTJ memiliki kombinasi preferensi: Extrovert, Intuitive, Thinking, dan Judging. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada kemungkinan dan gambaran besar, membuat keputusan berdasarkan logika, dan lebih suka lingkungan yang terstruktur dan terencana."
        ],
        list: [
          "Pemimpin alami dan tegas",
          "Strategis dan berorientasi pada hasil",
          "Percaya diri dan asertif",
          "Efisien dan terorganisir",
          "Berorientasi pada tujuan jangka panjang",
          "Komunikator yang jelas dan langsung"
        ]
      },
      {
        title: "Karir yang Cocok untuk ENTJ",
        content: [
          "Dengan keterampilan kepemimpinan dan visi strategis mereka, ENTJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "CEO atau eksekutif perusahaan",
          "Entrepreneur atau pendiri bisnis",
          "Konsultan manajemen",
          "Pengacara korporat",
          "Pemimpin politik atau diplomat",
          "Manajer proyek senior",
          "Direktur atau administrator"
        ]
      }
    ]
  },
  {
    id: 4,
    title: "ENTP: Si Penemu Yang Inovatif",
    excerpt: "ENTP sering disebut sebagai 'Si Penemu' atau 'Si Visioner'. Mereka adalah pemikir kreatif dan inovatif yang selalu mencari ide-ide baru dan solusi non-konvensional.",
    image: "/placeholder.svg",
    slug: "mbti-entp",
    type: "ENTP",
    publishDate: "13 Mei 2025",
    content: [
      "ENTP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Penemu' atau 'Si Visioner' karena pikiran kreatif dan inovatif mereka.",
      "Orang dengan tipe kepribadian ENTP adalah pemikir cepat dan cerdas yang menikmati tantangan intelektual dan perdebatan. Mereka sangat kreatif dan selalu mencari cara-cara baru untuk memecahkan masalah dan mengembangkan ide-ide."
    ],
    sections: [
      {
        title: "Karakteristik ENTP",
        content: [
          "ENTP memiliki kombinasi preferensi: Extrovert, Intuitive, Thinking, dan Perceiving. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada kemungkinan dan ide-ide baru, membuat keputusan berdasarkan logika, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Inovatif dan kreatif",
          "Berbakat dalam perdebatan",
          "Cepat berpikir dan adaptif",
          "Menikmati tantangan intelektual",
          "Antusias dan energik",
          "Mampu melihat berbagai kemungkinan"
        ]
      },
      {
        title: "Karir yang Cocok untuk ENTP",
        content: [
          "Dengan kreativitas dan kemampuan inovasi mereka, ENTP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Entrepreneur atau pendiri startup",
          "Pengacara atau negosiator",
          "Konsultan strategi",
          "Ahli pemasaran atau periklanan",
          "Ilmuwan atau peneliti",
          "Analis sistem",
          "Pengembang produk atau inovator"
        ]
      }
    ]
  },
  
  // The Diplomats
  {
    id: 5,
    title: "INFJ: Si Pembimbing yang Bijaksana",
    excerpt: "INFJ dikenal sebagai 'Si Pembimbing' atau 'Si Idealis'. Mereka adalah pribadi yang kompleks, empatik, dan visioner dengan pemahaman mendalam tentang motivasi manusia.",
    image: "/placeholder.svg",
    slug: "mbti-infj",
    type: "INFJ",
    publishDate: "14 Mei 2025",
    content: [
      "INFJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI) dan juga merupakan tipe yang paling langka. Mereka sering dijuluki 'Si Pembimbing' atau 'Si Idealis' karena kombinasi luar biasa dari intuisi dan empati mereka.",
      "Orang dengan tipe kepribadian INFJ memiliki pemahaman mendalam tentang emosi manusia dan motivasi. Mereka sangat perhatian, insightful, dan memiliki komitmen kuat terhadap nilai-nilai mereka."
    ],
    sections: [
      {
        title: "Karakteristik INFJ",
        content: [
          "INFJ memiliki kombinasi preferensi: Introvert, Intuitive, Feeling, dan Judging. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada makna dan kemungkinan, membuat keputusan berdasarkan nilai dan emosi, dan lebih suka lingkungan yang terstruktur."
        ],
        list: [
          "Sangat empatik dan peka",
          "Idealis dengan visi yang kuat untuk masa depan",
          "Insightful tentang motivasi orang lain",
          "Kreatif dan imajinatif",
          "Berprinsip dan berkomitmen pada nilai-nilai",
          "Kompleks dan mendalam"
        ]
      },
      {
        title: "Karir yang Cocok untuk INFJ",
        content: [
          "Dengan empati dan visi mereka, INFJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Konselor atau psikolog",
          "Penulis atau editor",
          "Guru atau profesor",
          "Pekerja sosial",
          "Terapis",
          "Pemimpin organisasi keagamaan atau nirlaba",
          "Spesialis HR atau pengembangan organisasi"
        ]
      }
    ]
  },
  {
    id: 6,
    title: "INFP: Si Mediator yang Idealis",
    excerpt: "INFP dikenal sebagai 'Si Mediator' atau 'Si Pemimpi'. Mereka adalah pribadi yang penuh kasih, kreatif, dan idealis dengan keinginan kuat untuk membuat dunia menjadi tempat yang lebih baik.",
    image: "/placeholder.svg",
    slug: "mbti-infp",
    type: "INFP",
    publishDate: "15 Mei 2025",
    content: [
      "INFP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Mediator' atau 'Si Pemimpi' karena sifat idealis dan mencintai kedamaian.",
      "Orang dengan tipe kepribadian INFP memiliki kepekaan tinggi, nilai-nilai pribadi yang kuat, dan keinginan untuk membantu orang lain. Mereka juga sangat kreatif dan imajinatif, sering mengekspresikan diri melalui seni dan tulisan."
    ],
    sections: [
      {
        title: "Karakteristik INFP",
        content: [
          "INFP memiliki kombinasi preferensi: Introvert, Intuitive, Feeling, dan Perceiving. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada ide dan makna, membuat keputusan berdasarkan nilai dan emosi, dan memilih gaya hidup yang fleksibel."
        ],
        list: [
          "Idealis dan bermotivasi nilai",
          "Kreatif dan imajinatif",
          "Empati yang mendalam",
          "Loyal terhadap orang-orang terdekat",
          "Fleksibel dan adaptif (kecuali dengan nilai-nilai inti)",
          "Autentik dan mencari makna"
        ]
      },
      {
        title: "Karir yang Cocok untuk INFP",
        content: [
          "Dengan kreativitas dan nilai-nilai mereka yang kuat, INFP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Penulis atau penyair",
          "Psikolog atau konselor",
          "Seniman atau desainer",
          "Guru atau pendidik",
          "Pekerja kemanusiaan",
          "Pustakawan atau kurator",
          "Spesialis lingkungan atau aktivis"
        ]
      }
    ]
  },
  {
    id: 7,
    title: "ENFJ: Si Protagonis yang Inspiratif",
    excerpt: "ENFJ dikenal sebagai 'Si Protagonis' atau 'Si Pemberi'. Mereka adalah pemimpin karismatik dan inspiratif yang secara alami memahami dan mempengaruhi orang lain.",
    image: "/placeholder.svg",
    slug: "mbti-enfj",
    type: "ENFJ",
    publishDate: "16 Mei 2025",
    content: [
      "ENFJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Protagonis' atau 'Si Pemberi' karena kemampuan mereka untuk menginspirasi dan memimpin orang lain.",
      "Orang dengan tipe kepribadian ENFJ memiliki bakat alami dalam memahami dan mempengaruhi orang lain. Mereka sangat peduli tentang pertumbuhan dan kesejahteraan orang di sekitar mereka dan akan berusaha keras untuk membantu orang lain mencapai potensi mereka."
    ],
    sections: [
      {
        title: "Karakteristik ENFJ",
        content: [
          "ENFJ memiliki kombinasi preferensi: Extrovert, Intuitive, Feeling, dan Judging. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada kemungkinan dan hubungan, membuat keputusan berdasarkan nilai, dan lebih suka lingkungan yang terorganisir."
        ],
        list: [
          "Karismatik dan persuasif",
          "Sangat empati dan perhatian",
          "Altruistik dan berorientasi pada pertumbuhan",
          "Pemimpin alami",
          "Komunikator yang efektif",
          "Berkomitmen pada nilai-nilai dan hubungan"
        ]
      },
      {
        title: "Karir yang Cocok untuk ENFJ",
        content: [
          "Dengan karisma dan empati mereka, ENFJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Guru atau pendidik",
          "Konselor atau psikolog",
          "Pemimpin organisasi atau HR",
          "Pekerja sosial atau aktivis",
          "Pendeta atau pemimpin agama",
          "Pelatih atau motivator",
          "Public relations atau customer service"
        ]
      }
    ]
  },
  {
    id: 8,
    title: "ENFP: Si Petualang Yang Penuh Inspirasi",
    excerpt: "ENFP dikenal sebagai tipe kepribadian yang penuh energi, kreatif dan selalu mencari makna dalam setiap pengalaman. Mereka adalah pemimpin yang inspiratif dan inovatif.",
    image: "/placeholder.svg",
    slug: "mbti-enfp",
    type: "ENFP",
    publishDate: "17 Mei 2025",
    content: [
      "ENFP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Petualang' atau 'Si Inspirator' karena antusiasme dan semangat mereka yang menular.",
      "Orang dengan tipe kepribadian ENFP adalah individu yang penuh energi, kreatif, dan beorientasi pada kemungkinan. Mereka sangat antusias tentang ide-ide baru dan memiliki kemampuan alami untuk menginspirasi dan menghubungkan dengan orang lain."
    ],
    sections: [
      {
        title: "Karakteristik ENFP",
        content: [
          "ENFP memiliki kombinasi preferensi: Extrovert, Intuitive, Feeling, dan Perceiving. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada kemungkinan dan ide-ide baru, membuat keputusan berdasarkan nilai dan emosi, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Energik dan antusias",
          "Kreatif dan imajinatif",
          "Sangat empati dan memahami orang lain",
          "Spontan dan fleksibel",
          "Penuh ide dan kemungkinan",
          "Karismatik dan memotivasi"
        ]
      },
      {
        title: "Kekuatan ENFP",
        content: [
          "ENFP memiliki berbagai kekuatan yang membuat mereka menjadi teman, kolaborator, dan pemimpin yang luar biasa:"
        ],
        list: [
          "Kemampuan luar biasa dalam menjalin hubungan dengan orang lain",
          "Kreativitas dan inovasi",
          "Kemampuan adaptasi yang tinggi",
          "Kemampuan komunikasi yang kuat",
          "Antusiasme yang menular",
          "Pemecah masalah yang kreatif"
        ]
      },
      {
        title: "Tantangan ENFP",
        content: [
          "Meskipun memiliki banyak kekuatan, ENFP juga menghadapi beberapa tantangan:"
        ],
        list: [
          "Kesulitan untuk fokus pada satu tugas",
          "Kecenderungan untuk menunda-nunda",
          "Terkadang terlalu idealistis",
          "Kesulitan menangani kritik dan konflik",
          "Dapat kewalahan oleh terlalu banyak kemungkinan",
          "Kesulitan dengan detail dan tugas rutin"
        ]
      },
      {
        title: "Karir yang Cocok untuk ENFP",
        content: [
          "Dengan kreativitas dan kemampuan sosial mereka, ENFP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Konselor atau terapis",
          "Pengusaha atau inovator",
          "Pelatih atau motivator",
          "Seniman atau performer",
          "Pengarang atau jurnalis",
          "Guru atau profesor",
          "Pekerja kemanusiaan atau aktivis sosial"
        ]
      }
    ]
  },
  
  // The Sentinels
  {
    id: 9,
    title: "ISTJ: Si Logistik yang Dapat Diandalkan",
    excerpt: "ISTJ dikenal sebagai 'Si Logistik' atau 'Si Inspektur'. Mereka adalah pribadi yang praktis, faktual, dan sangat bertanggung jawab dengan perhatian terhadap detail.",
    image: "/placeholder.svg",
    slug: "mbti-istj",
    type: "ISTJ",
    publishDate: "18 Mei 2025",
    content: [
      "ISTJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Logistik' atau 'Si Inspektur' karena keterandalan dan perhatian mereka terhadap detail.",
      "Orang dengan tipe kepribadian ISTJ adalah individu yang praktis, faktual, dan sangat bertanggung jawab. Mereka menghargai tradisi, keamanan, dan memiliki etika kerja yang kuat."
    ],
    sections: [
      {
        title: "Karakteristik ISTJ",
        content: [
          "ISTJ memiliki kombinasi preferensi: Introvert, Sensing, Thinking, dan Judging. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada informasi faktual, membuat keputusan berdasarkan logika, dan lebih suka lingkungan yang terstruktur."
        ],
        list: [
          "Praktis dan berorientasi fakta",
          "Sangat dapat diandalkan dan bertanggung jawab",
          "Terorganisir dan metodis",
          "Setia dan konsisten",
          "Mengikuti aturan dan prosedur",
          "Bekerja keras dengan etika kerja yang kuat"
        ]
      },
      {
        title: "Karir yang Cocok untuk ISTJ",
        content: [
          "Dengan keandalan dan fokus pada detail mereka, ISTJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Akuntan atau auditor",
          "Manajer operasional",
          "Pengacara atau hakim",
          "Militer atau penegak hukum",
          "Insinyur atau teknisi",
          "Administrator atau manajer proyek",
          "Ahli logistik atau analis sistem"
        ]
      }
    ]
  },
  {
    id: 10,
    title: "ISFJ: Si Pelindung Yang Setia",
    excerpt: "ISFJ dikenal sebagai 'Si Pelindung' dan merupakan salah satu tipe kepribadian yang paling perhatian dan setia. Mereka selalu siap membantu orang lain dengan ketulusan.",
    image: "/placeholder.svg",
    slug: "mbti-isfj",
    type: "ISFJ",
    publishDate: "19 Mei 2025",
    content: [
      "ISFJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Pelindung' karena sifat mereka yang sangat peduli dan protektif terhadap orang yang mereka sayangi.",
      "Orang dengan tipe kepribadian ISFJ adalah individu yang hangat, perhatian, dan memiliki kemampuan observasi yang tajam. Mereka sangat bertanggung jawab, setia, dan memiliki keinginan tulus untuk membantu orang lain."
    ],
    sections: [
      {
        title: "Karakteristik ISFJ",
        content: [
          "ISFJ memiliki kombinasi preferensi: Introvert, Sensing, Feeling, dan Judging. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada informasi faktual, membuat keputusan berdasarkan nilai dan emosi, dan lebih suka lingkungan yang terstruktur."
        ],
        list: [
          "Sangat perhatian dan peduli",
          "Praktis dan bertanggung jawab",
          "Setia dan dapat diandalkan",
          "Detail-oriented dengan memori yang kuat",
          "Sabar dan teliti",
          "Rendah hati dan tidak suka mencari perhatian"
        ]
      },
      {
        title: "Karir yang Cocok untuk ISFJ",
        content: [
          "Dengan sifat peduli dan teliti mereka, ISFJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Perawat atau dokter",
          "Guru atau pendidik anak usia dini",
          "Pekerja sosial atau konselor",
          "Administrator kantor atau sekretaris",
          "Akuntan atau penasihat keuangan",
          "Interior designer atau konservator",
          "Pustakawan atau arsiparis"
        ]
      }
    ]
  },
  {
    id: 11,
    title: "ESTJ: Si Eksekutif yang Efisien",
    excerpt: "ESTJ dikenal sebagai 'Si Eksekutif' atau 'Si Administrator'. Mereka adalah pemimpin praktis, berorientasi pada hasil dengan kemampuan organisasi yang kuat.",
    image: "/placeholder.svg",
    slug: "mbti-estj",
    type: "ESTJ",
    publishDate: "20 Mei 2025",
    content: [
      "ESTJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Eksekutif' atau 'Si Administrator' karena kemampuan manajemen dan organisasi mereka yang luar biasa.",
      "Orang dengan tipe kepribadian ESTJ adalah individu yang praktis, berorientasi pada fakta, dan sangat terorganisir. Mereka menghargai tradisi, struktur, dan memiliki pendekatan langsung dalam menyelesaikan masalah."
    ],
    sections: [
      {
        title: "Karakteristik ESTJ",
        content: [
          "ESTJ memiliki kombinasi preferensi: Extrovert, Sensing, Thinking, dan Judging. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada informasi faktual, membuat keputusan berdasarkan logika, dan lebih suka lingkungan yang terstruktur."
        ],
        list: [
          "Terorganisir dan efisien",
          "Praktis dan berorientasi pada hasil",
          "Langsung dan tegas",
          "Dapat diandalkan dan bertanggung jawab",
          "Menjunjung tinggi tradisi dan aturan",
          "Berorientasi pada tujuan"
        ]
      },
      {
        title: "Karir yang Cocok untuk ESTJ",
        content: [
          "Dengan keterampilan manajemen dan organisasi mereka, ESTJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Manajer bisnis atau eksekutif",
          "Militer atau penegak hukum",
          "Hakim atau pengacara",
          "Akuntan atau auditor",
          "Manajer proyek atau administrasi",
          "Pengawas konstruksi atau manufaktur",
          "Analis keuangan atau banker"
        ]
      }
    ]
  },
  {
    id: 12,
    title: "ESFJ: Si Konsul yang Peduli",
    excerpt: "ESFJ dikenal sebagai 'Si Konsul' atau 'Si Pemberi Perawatan'. Mereka adalah individu yang ramah, kooperatif, dan sangat peduli tentang kebutuhan orang lain.",
    image: "/placeholder.svg",
    slug: "mbti-esfj",
    type: "ESFJ",
    publishDate: "21 Mei 2025",
    content: [
      "ESFJ adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Konsul' atau 'Si Pemberi Perawatan' karena sifat mereka yang sangat peduli dan memperhatikan orang lain.",
      "Orang dengan tipe kepribadian ESFJ adalah individu yang ramah, kooperatif, dan sangat memperhatikan kesejahteraan orang-orang di sekitar mereka. Mereka memiliki kemampuan sosial yang kuat dan senang berada dalam komunitas yang harmonis."
    ],
    sections: [
      {
        title: "Karakteristik ESFJ",
        content: [
          "ESFJ memiliki kombinasi preferensi: Extrovert, Sensing, Feeling, dan Judging. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada informasi faktual, membuat keputusan berdasarkan nilai dan emosi, dan lebih suka lingkungan yang terstruktur."
        ],
        list: [
          "Ramah dan mudah bergaul",
          "Sangat peduli dan perhatian",
          "Praktis dan berorientasi pada detail",
          "Bertanggung jawab dan dapat diandalkan",
          "Kooperatif dan berorientasi tim",
          "Terorganisir dan menjaga tradisi"
        ]
      },
      {
        title: "Karir yang Cocok untuk ESFJ",
        content: [
          "Dengan kemampuan sosial dan perhatian mereka, ESFJ sering bersinar dalam karir berikut:"
        ],
        list: [
          "Perawat atau dokter",
          "Guru atau administrator sekolah",
          "Pekerja sosial atau konselor",
          "HR atau manager office",
          "Customer service atau hospitality",
          "Event planner atau koordinator",
          "Sales atau marketing"
        ]
      }
    ]
  },

  // The Explorers
  {
    id: 13,
    title: "ISTP: Si Pengrajin Virtuoso",
    excerpt: "ISTP dikenal sebagai 'Si Pengrajin' atau 'Si Ahli'. Mereka adalah problem solver praktis dengan keterampilan teknis yang luar biasa dan kemampuan untuk beradaptasi dengan cepat.",
    image: "/placeholder.svg",
    slug: "mbti-istp",
    type: "ISTP",
    publishDate: "22 Mei 2025",
    content: [
      "ISTP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Pengrajin' atau 'Si Ahli' karena keterampilan praktis dan kemampuan teknis mereka yang luar biasa.",
      "Orang dengan tipe kepribadian ISTP adalah pengamat yang tajam dengan kemampuan luar biasa untuk memahami bagaimana sesuatu bekerja. Mereka sangat logis, adaptif, dan memiliki keterampilan pemecahan masalah yang hebat."
    ],
    sections: [
      {
        title: "Karakteristik ISTP",
        content: [
          "ISTP memiliki kombinasi preferensi: Introvert, Sensing, Thinking, dan Perceiving. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada informasi faktual, membuat keputusan berdasarkan logika, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Sangat terampil secara teknis",
          "Logis dan rasional",
          "Adaptif dan fleksibel",
          "Mandiri dan impulsif",
          "Tenang dalam krisis",
          "Berorientasi pada aksi dan hasil"
        ]
      },
      {
        title: "Karir yang Cocok untuk ISTP",
        content: [
          "Dengan keterampilan teknis dan kemampuan pemecahan masalah mereka, ISTP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Insinyur atau mekanik",
          "Pilot atau operator peralatan",
          "Programmer komputer atau teknisi IT",
          "Penegak hukum atau agen forensik",
          "Ahli analisis data",
          "Atlet atau pelatih olahraga",
          "Pengrajin atau artisan"
        ]
      }
    ]
  },
  {
    id: 14,
    title: "ISFP: Si Artis yang Penuh Perasaan",
    excerpt: "ISFP dikenal sebagai 'Si Artis' atau 'Si Petualang'. Mereka adalah pribadi yang sensitif, kreatif, dan hidup di masa sekarang dengan apresiasi mendalam terhadap keindahan.",
    image: "/placeholder.svg",
    slug: "mbti-isfp",
    type: "ISFP",
    publishDate: "23 Mei 2025",
    content: [
      "ISFP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Artis' atau 'Si Petualang' karena sensitivitas mereka terhadap estetika dan kecenderungan untuk hidup di masa sekarang.",
      "Orang dengan tipe kepribadian ISFP adalah pribadi yang hangat, sensitif, dan sangat menghargai kebebasan pribadi. Mereka memiliki rasa estetika yang kuat dan sering mengekspresikan diri melalui tindakan daripada kata-kata."
    ],
    sections: [
      {
        title: "Karakteristik ISFP",
        content: [
          "ISFP memiliki kombinasi preferensi: Introvert, Sensing, Feeling, dan Perceiving. Ini berarti mereka mendapatkan energi dari waktu sendiri, fokus pada pengalaman dan sensasi, membuat keputusan berdasarkan nilai dan emosi, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Kreatif dan artistik",
          "Sensitif dan empatik",
          "Hidup di masa sekarang",
          "Loyal dan berkomitmen pada nilai-nilai",
          "Fleksibel dan spontan",
          "Menghindari konflik dan tekanan"
        ]
      },
      {
        title: "Karir yang Cocok untuk ISFP",
        content: [
          "Dengan kreativitas dan sensitivitas mereka, ISFP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Seniman atau desainer",
          "Musisi atau performer",
          "Chef atau ahli kuliner",
          "Fotografer atau videografer",
          "Fashion designer atau stylist",
          "Perawat atau terapis fisik",
          "Guru seni atau musik"
        ]
      }
    ]
  },
  {
    id: 15,
    title: "ESTP: Sang Penggerak Yang Pragmatis",
    excerpt: "ESTP adalah tipe kepribadian yang energik, pragmatis, dan selalu siap untuk aksi. Mereka hidup di masa kini dan memiliki kemampuan adaptasi yang luar biasa.",
    image: "/placeholder.svg",
    slug: "mbti-estp",
    type: "ESTP",
    publishDate: "23 Mei 2025",
    content: [
      "ESTP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Penggerak' atau 'Si Wirausahawan' karena keberanian dan kecenderungan mereka untuk mengambil risiko.",
      "Orang dengan tipe kepribadian ESTP adalah individu yang energik, cerdas, dan sangat berorientasi pada aksi. Mereka adalah pemecah masalah praktis yang hidup di saat ini dan menikmati sensasi dan petualangan."
    ],
    sections: [
      {
        title: "Karakteristik ESTP",
        content: [
          "ESTP memiliki kombinasi preferensi: Extrovert, Sensing, Thinking, dan Perceiving. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada pengalaman langsung, membuat keputusan berdasarkan logika, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Energik dan berorientasi pada aksi",
          "Pragmatis dan realistis",
          "Adaptif dan cepat bereaksi",
          "Cerdas dan percaya diri",
          "Berani mengambil risiko",
          "Hidup di masa sekarang"
        ]
      },
      {
        title: "Karir yang Cocok untuk ESTP",
        content: [
          "Dengan energi dan pragmatisme mereka, ESTP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Entrepreneur atau pebisnis",
          "Sales atau marketing",
          "Broker saham atau trader",
          "Atlet atau pelatih olahraga",
          "Paramedis atau pemadam kebakaran",
          "Detektif atau agen kepolisian",
          "Pilot atau guide petualangan"
        ]
      }
    ]
  },
  {
    id: 16,
    title: "ESFP: Si Penghibur yang Penuh Semangat",
    excerpt: "ESFP dikenal sebagai 'Si Penghibur' atau 'Si Performer'. Mereka adalah pribadi yang spontan, energik, dan penuh kegembiraan yang mencintai pusat perhatian.",
    image: "/placeholder.svg",
    slug: "mbti-esfp",
    type: "ESFP",
    publishDate: "25 Mei 2025",
    content: [
      "ESFP adalah salah satu dari 16 tipe kepribadian dalam sistem Myers-Briggs Type Indicator (MBTI). Mereka sering dijuluki 'Si Penghibur' atau 'Si Performer' karena sifat mereka yang ekspresif dan mencintai pusat perhatian.",
      "Orang dengan tipe kepribadian ESFP adalah pribadi yang spontan, energik, dan penuh antusiasme. Mereka menikmati hidup di masa sekarang, sangat baik dalam berinteraksi dengan orang lain, dan memiliki ketertarikan yang kuat pada pengalaman sensoris."
    ],
    sections: [
      {
        title: "Karakteristik ESFP",
        content: [
          "ESFP memiliki kombinasi preferensi: Extrovert, Sensing, Feeling, dan Perceiving. Ini berarti mereka mendapatkan energi dari interaksi sosial, fokus pada pengalaman langsung, membuat keputusan berdasarkan nilai dan emosi, dan memilih gaya hidup yang fleksibel dan spontan."
        ],
        list: [
          "Ramah dan ekspresif",
          "Spontan dan penuh kegembiraan",
          "Praktis dan realistis",
          "Hidup di masa sekarang",
          "Suka bekerja dengan orang lain",
          "Adaptif dan mudah bergaul"
        ]
      },
      {
        title: "Karir yang Cocok untuk ESFP",
        content: [
          "Dengan energi dan kemampuan sosial mereka, ESFP sering bersinar dalam karir berikut:"
        ],
        list: [
          "Entertainer atau performer",
          "Event planner atau koordinator",
          "Tourism atau hospitality",
          "Sales atau customer service",
          "Public relations atau marketing",
          "Guru atau pelatih",
          "Konsultan lifestyle atau personal shopper"
        ]
      }
    ]
  }
];
