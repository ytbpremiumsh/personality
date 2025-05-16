
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
    description: "ISTJ adalah pribadi yang praktis, faktual, dan dapat diandalkan. Mereka sangat terorganisir dan mementingkan tradisi serta keamanan.",
    strengths: ["Dapat diandalkan", "Terorganisir dengan baik", "Faktual dan logis"],
    challenges: ["Terlalu kaku", "Kesulitan beradaptasi dengan perubahan", "Terkadang terlalu kritis"],
    careers: ["Akuntan", "Auditor", "Manager Operasional", "Insinyur", "Hakim"],
    compatibility: "ESFP atau ESTP"
  },
  "ISFJ": {
    type: "ISFJ",
    title: "Si Pelindung",
    description: "ISFJ adalah pribadi yang hangat, perhatian, dan sangat mengingat detail. Mereka setia dan mendedikasikan diri untuk melayani orang lain.",
    strengths: ["Sangat perhatian", "Teliti dan detail", "Setia dan dapat diandalkan"],
    challenges: ["Sulit menolak permintaan", "Terlalu kritis pada diri sendiri", "Kesulitan menerima perubahan"],
    careers: ["Perawat", "Guru SD", "Administrator", "Pekerja Sosial", "Konselor"],
    compatibility: "ESFP atau ESTP"
  },
  // Shortened for brevity, would include all 16 types
};
