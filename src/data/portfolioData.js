export const profileData = {
  name: "Jhon Prima",
  greeting: "I'm Jhon Prima!",
  tagline: "Full Stack Developer & AI Engineer", 
  // Kita gunakan satu foto ini sebagai foto utama di seluruh website (Hero & About)
  aboutPhoto: "/images/1.jpg" 
};

export const aboutData = {
  description: `Diploma student in Computer Technology at the Del Institute of Technology with expertise in Web Development and Artificial Intelligence (AI). 
Experienced in building AI-powered applications including Fine-Tuning, LoRA, Qwen 2.5-Coder 1.5B Instruct, and Natural Language Processing (NLP). 
Possesses strong problem-solving, team leadership, and time management skills. Highly motivated to continuously learn and apply the latest technologies in AI and full-stack web development.`
};

export const testimonials = [];

export const skills = [
  { name: "PHP", level: 95 },
  { name: "JavaScript", level: 90 },
  { name: "React", level: 85 },
  { name: "Node.js", level: 88 },
  { name: "Python", level: 80 },
  { name: "C++", level: 75 },
  { name: "Go", level: 70 },
  { name: "C#", level: 72 }
];

export const education = [
  {
    id: 1,
    degree: "D3 Teknologi Komputer",
    school: "Institut Teknologi Del",
    location: "Toba, Sumatera Utara",
    year: "2023 - 2026",
    status: "Ongoing",
    description: "Fokus pada pengembangan software, AI, sistem informasi, dan teknologi web modern. Mempelajari berbagai bahasa pemrograman dan framework untuk membangun aplikasi yang scalable dan efficient.",
    achievements: [
      "Aktif dalam organisasi mahasiswa",
      "Mengikuti sertifikasi keahlian di bidang software",
      "Proyek akhir dengan nilai akhir A"
    ],
    image: "/images/5.jpg",
    gallery: [
      "/images/1.jpg",
      "/images/2.jpg",
      "/images/3.jpg",
      "/images/4.jpg",
      "/images/5.jpg"
    ]
  }
];

// --- EXPERIENCE SECTION (RIWAYAT POSISI/JABATAN) ---
export const experience = [
  {
    id: 1,
    position: "AI Software Engineer (Research Project)",
    company: "Institut Teknologi Del (Tugas Akhir)",
    period: "Aug 2025 - Present",
    description: "Proyek ini bertujuan untuk mengembangkan Platform E-Learning Adaptif yang canggih dengan mengintegrasikan kekuatan Artificial Intelligence (AI) dan Cloud Computing. Inti dari sistem ini terletak pada pemanfaatan teknik Low-Rank Adaptation (LoRA) untuk fine-tuning Large Language Models (LLMs), memastikan model AI dapat memahami konteks dan materi kursus secara spesifik. Platform ini menawarkan empat fitur utama yang merevolusi pengalaman belajar: Pembangkitan Soal Otomatis dari modul yang tersedia untuk menciptakan variasi soal tak terbatas; Pembelajaran Adaptif di mana materi dan tingkat kesulitan soal (Mudah, Sedang, Tinggi) disesuaikan secara real-time berdasarkan tingkat pemahaman individu siswa; Penilaian Otomatis yang tidak hanya mencakup soal pilihan ganda tetapi juga esai, menyediakan grading yang cepat dan umpan balik instan; serta AI Chatbot (RAG - Retrieval-Augmented Generation) yang berfungsi sebagai asisten belajar cerdas, mampu memberikan jawaban dan penjelasan kontekstual yang akurat berdasarkan dokumen dan materi kursus.",
    githublink:"https://github.com/jhonprima/codveda-fullstack-project",
    image: "/images/proyek_5/1.png", 
    gallery: [
      "/images/proyek_5/2.png",
      "/images/proyek_5/3.png",
      "/images/proyek_5/4.png",
      "/images/proyek_5/5.png",
       "/images/proyek_5/6.png",
        "/images/proyek_5/7.png",
         "/images/proyek_5/8.png",
          "/images/proyek_5/9.png",
           "/images/proyek_5/11.png",
            "/images/proyek_5/22.png",
             "/images/proyek_5/33.png",
              "/images/proyek_5/44.png",
               "/images/proyek_5/55.png"
      
    ]
  },
  {
    id: 2,
    position: "Full Stack Web Developer",
    company: "CODVEDA TECHNOLOGIES",
    period: "2025", 
    description: "Mengembangkan solusi aplikasi web Full Stack yang responsif dan fungsional. Bertanggung jawab atas integrasi frontend dan backend serta manajemen database.",
    // Gambar diambil dari folder codveda (Sesuai screenshot file explorer)
    image: "/images/codveda/0.png", 
    gallery: [
      "/images/codveda/1.png",
      "/images/codveda/2.png",
      "/images/codveda/3.png",
      "/images/codveda/4.png",
      "/images/codveda/5.png",
      "/images/codveda/6.png",
      "/images/codveda/7.png",
      "/images/codveda/8.png",
      "/images/codveda/9.png",
      "/images/codveda/12.png",
      "/images/codveda/13.png",
      "/images/codveda/14.png",
      "/images/codveda/15.png",
      "/images/codveda/16.png",
      "/images/codveda/17.png",
      "/images/codveda/18.png",
      "/images/codveda/19.png",
      "/images/codveda/20.png"


      

    ]
  }
];

// --- PORTFOLIO SECTION (DAFTAR PROYEK) ---
export const portfolio = [
  {
    id: 1, 
    title: "E-Commerce Website UMKM Toba",
    description: "Full-stack web application dengan Wordpress, PHP, dan MySQL untuk UMKM kecil sampai menengah di daerah Kabupaten Toba. UI rensponsif dan kemudahan mengakses fitur-fitur modern .Website ini mampu menampung setiap usaha dan bisnis masyarakat Toba dengan efisien.",
    tech: ["PHP", "CSS", "Wordpress", "MySQL"],
    image: "/images/ecomerce.jpg",
    link:"https://github.com/jhonprima/ecommerce-dibangun-dengan-wordpress-php-dan-css",
    demoLink:"",
    gallery: [
      "/images/ecomerce.jpg", 
      "/images/10.jpg",
      "/images/12.jpg",
      "/images/13.jpg",
      "/images/14.jpg",
      "/images/15.jpg",
      "/images/16.jpg",
      "/images/17.jpg",
      "/images/18.jpg",
      "/images/19.jpg"
    ]
  },
  {
    id: 2, 
    title: "(CYBERFOX)-Chatbot keamanan cyber yang ramah untuk anak dan remaja",
    description: "WEB-AI dengan Metode RAG,NLP, LLM dan integrasi dengan COHERE_API_KEY yang mendukung vectorEmbedding untuk pencarian dokumen yang lebih cepat.",
    tech: ["Node.js", "Next.js", "React", "PostgreSQL", "Express.Js", "Pinecone", "COHERE_AI"," LangChain", "TypeScript"],
    image: "/images/chatbot.jpg",
    link:"https://github.com/jhonprima/cyberfox_RAG",
    demoLink:"https://chatbot-rag-deploy-fxqe-g4s9pxinv-jhonprimas-projects.vercel.app/login",
    gallery: [
      "/images/chatbot.jpg",
      "/images/8.png",
      "/images/9.png",
      "/images/10.png",
      "/images/11.png"
    ]
  },
  {
    id: 3, 
    title: "Distributed & Event-Driven E-Commerce Platform with Kafka, MongoDB, and Express",
    description: "Menerapkan sistem e-commerce dengan docker untuk kemudahan integrasi antar laptop dalam menjalankan tugas dan layanan masing-masing. Saling terhubung antara beberapa Device dalam jaringan local dan MongoDB sebagai pusat data",
    tech: ["React", "Docker", "Microservice", "Kafka", "MongoDB","Express.Js"],
    image: "/images/fakestore.png",
    link:"https://github.com/jhonprima/fake_store_app/tree/main/fakestore-app",
    demoLink:"",
    gallery: [
      "/images/fakestore.png",
      "/images/fakestore_detail.png" 
    ]
  },
  {
    id: 4, 
    title: "AIbat | Sahabat Pencari Obat |",
    description: "Dibangun menggunakan Model COHERE_A dan Model Embedding multi-qa-mpnet-base-dot-v1, memastikan para pengguna menemukan obat yang tepat jika sedang dalam keadaaan sakit. Di design dengan RAG dan Langchain, untuk pencarian vector dan dokumen yang cepat",
    tech: ["Python", "RAG", "LangChain", "CSS", "Streamlit"], 
    image: "/images/ai4.png",
    link:"https://github.com/jhonprima/fake_store_app/tree/main/fakestore-app",
    demoLink:"https://aibat-rag-pbn77vxhot6ajcrm7hnkhn.streamlit.app/",
    gallery: [
      "/images/fakestore_detail.png",
      "/images/ai2.jpg",
      "/images/ai1.jpg",
      "/images/ai3.jpg",
      "/images/ai4.png"
    ]
  },
  {
    id: 5, 
    title: "IMPLEMENTATION OF LOW RANK ADAPTION (LoRA) FOR FINE-TUNING LLMS IN AN AUTOMATED ASSESMENTS AND ADAPTIVE LEARNING SYSTEM FOR CYBERSECURITY",
    description: "Proyek ini bertujuan untuk mengembangkan Platform E-Learning Adaptif yang canggih dengan mengintegrasikan kekuatan Artificial Intelligence (AI) dan Cloud Computing. Inti dari sistem ini terletak pada pemanfaatan teknik Low-Rank Adaptation (LoRA) untuk fine-tuning Large Language Models (LLMs), memastikan model AI dapat memahami konteks dan materi kursus secara spesifik. Platform ini menawarkan empat fitur utama yang merevolusi pengalaman belajar: Pembangkitan Soal Otomatis dari modul yang tersedia untuk menciptakan variasi soal tak terbatas; Pembelajaran Adaptif di mana materi dan tingkat kesulitan soal (Mudah, Sedang, Tinggi) disesuaikan secara real-time berdasarkan tingkat pemahaman individu siswa; Penilaian Otomatis yang tidak hanya mencakup soal pilihan ganda tetapi juga esai, menyediakan grading yang cepat dan umpan balik instan; serta AI Chatbot (RAG - Retrieval-Augmented Generation) yang berfungsi sebagai asisten belajar cerdas, mampu memberikan jawaban dan penjelasan kontekstual yang akurat berdasarkan dokumen dan materi kursus.",
    tech: ["Python", "RAG", "LangChain", "CSS", "PINECONE", "Bootsrap", "Next.js", "TypeScript", "Numpy", "Pandas", "Zustand","Matpotlib", "FireBase", "NoSQL", "NLP" , "QWEN/QWEN 2.4-CODER 1.5 B INSTRUCT", "HUGGING FACE", "VECTORSTORE"],
    image: "/images/proyek_5/1.png",
    link : "",
    gallery: [
      "/images/proyek_5/2.png",
      "/images/proyek_5/3.png",
      "/images/proyek_5/4.png",
      "/images/proyek_5/5.png",
      "/images/proyek_5/6.png",
      "/images/proyek_5/7.png",
      "/images/proyek_5/8.png",
      "/images/proyek_5/9.png",
      "/images/proyek_5/11.png",
      "/images/proyek_5/22.png",
      "/images/proyek_5/33.png",
      "/images/proyek_5/44.png",
      "/images/proyek_5/55.png",
      "/images/proyek_5/66.png",
      "/images/proyek_5/77.png"
    ]
  },
  {
    id: 6, 
    title: "Full Stack Project - Codveda Technologies",
    description: "Aplikasi web Full Stack yang dikembangkan sebagai bagian dari pengalaman di Codveda Technologies. Fokus pada arsitektur yang bersih, responsif, dan fungsionalitas pengguna yang optimal.",
    tech: ["Full Stack", "Web Development", "React", "Node.js"], 
    image: "/images/codveda/0.png", 
    link: "https://github.com/jhonprima/codveda-fullstack-project",
    demoLink: "",
    gallery: [
      "/images/codveda/0.png",
      "/images/codveda/1.png",
      "/images/codveda/2.png",
      "/images/codveda/3.png",
      "/images/codveda/4.png",
      "/images/codveda/5.png",
      "/images/codveda/6.png",
      "/images/codveda/7.png",
      "/images/codveda/8.png"
    ]
  }
];

export const achievements = [];

export const contactData = {
  quote: "Hidup tanpa seni adalah mati",
  quoteAuthor: "Jhon Prima Panjaitan",
  socialMedia: [
    {
      name: "LinkedIn",
      icon: "linkedin",
      username: "Jhon Prima Panjaitan",
      url: "https://www.linkedin.com/in/jhon-prima-panjaitan-650654369/overlay/contact-info/",
      color: "#0A66C2",
      description: "Connect professionally"
    },
    {
      name: "Instagram",
      icon: "instagram",
      username: "@Pr4im",
      url: "https://www.instagram.com/pr4i.m/",
      color: "#E4405F",
      description: "Follow my journey"
    },
    {
      name: "Facebook",
      icon: "facebook",
      username: "Jhon Prima Panjaitan",
      url: "",
      color: "#1877F2",
      description: "Stay connected"
    },
    {
      name: "TikTok",
      icon: "tiktok",
      username: "Primapanjaitan",
      url: "https://www.tiktok.com/@jhonpjtn2005",
      color: "#000000",
      description: "Watch my content"
    },
    {
      name: "X (Twitter)",
      icon: "twitter",
      username: "Jhon",
      url: "https://x.com/markchoi",
      color: "#000000",
      description: "Read my thoughts"
    },
    {
      name: "WhatsApp",
      icon: "whatsapp",
      username: "Jhon",
      url: "https://wa.me/082275836328",
      color: "#25D366",
      description: "Chat with me"
    },
    {
      name: "Email",
      icon: "email",
      username: "Jhon Prima Panjaitan",
      url: "jhonprimapanjaitan2022@gmail.com",
      color: "#EA4335",
      description: "Send me an email"
    }
  ]
};

export const certificates = [
  {
    id: 1,
    title: "AWS Cloud Practitioner Essential",
    issuer: "Amazon Web Services | SimpliLearn",
    date: "SEPTEMBER 2025",
    description: "",
    image: "/images/images2/aws_page-0001.jpg"
  },
  {
    id: 2,
    title: "Intro Full Stack Web Development",
    issuer: "PURWADIKA",
    date: "JUNE 2025",
    description: "",
    image: "/images/images2/FullStack.jpg"
  },
  {
    id: 3,
    title: "Python Fundamental",
    issuer: "Aguna Course",
    date: "October 2023",
    description: "",
    image: "/images/images2/python.jpg"
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    issuer: "Bisa AI Academy",
    date: "JUNE 2025",
    description: "Menegenal Artificial Inteligence",
    image: "/images/images2/close.png"
  },
  {
    id: 5,
    title: "UI/UX EXPERIENCE",
    issuer: "FIGMA CAMP INDONESIA BATCH 4",
    date: "JULY 2025",
    description: "Have completed the UI/UX Design Training Program with Figma held byFigma Camp and Ousean Indonesia on dates 1 - 8 July 2025",
    image: "/images/images2/figma_page-0001.jpg"
  },
  {
    id: 6,
    title: "Transformer Models and BERT Model",
    issuer: "GOOGLE",
    date: "SEPTEMBER 2025",
    description: "Data analysis, visualization, and machine learning with Python",
    image: "/images/images2/Simplilearn Certificate.jpg"
  },
  {
    id: 7,
    title: "INTRODUCTION_TO_PHP",
    issuer: "SIMPLI LEARN",
    date: "SEPTEMBER 2025",
    description: "Network security, cryptography, and security best practices",
    image: "/images/images2/Jhon_Introduction to PHP.jpg"
  },
  {
    id: 8,
    title: "SQL PROJECTS",
    issuer: "SIMPLI LEARN",
    date: "SEPTEMBER 2025",
    description: "",
    image: "/images/images2/SQL_Project-1.jpg"
  },
  {
    id: 9,
    title: "Dasar Dasar Implementasi Kecerdasa Artifisial",
    issuer: "Digitalent X KOMDIGI",
    date: "Oktober 2025",
    desciption: " ",
    image: "/images/images2/komdigi1.jpg"
  },
  {
    id: "10",
    title: "Belajar BackEnd JAVASCRIPT untuk pemula",
    issuer: "Dicoding",
    date: "Oktober 2025",
    description: "",
    image: "/images/images2/javas.jpg"
  },
  {
    id: "11",
    title: "Belajar Dasar AI",
    issuer: "Dicoding",
    date: "Oktober 2025",
    description: " ",
    image: "/images/images2/dicodingai.jpg"
  },
  {
    id: "12",
    title: "Dasar Dasar Implementasi Kecerdasan Artificial",
    issuer: "Digitalent X KOMDIGI",
    date: "Oktober 2025",
    description: " ",
    image: "/images/images2/komdigi1.jpg"
  }
];