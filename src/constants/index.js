import project2 from "../assets/projects/SPOTBNB.png";

import project3 from "../assets/projects/Chingus.png";
import project4 from "../assets/projects/VidToScore.png";
import project5 from "../assets/projects/PennPlates.png";

export const HERO_TAGLINE = "Software Engineer / AI Researcher / Musician";

export const ABOUT_TEXT = `I am a senior pursuing a Master's in Robotics (AI focus) and Bachelor's in Computer Science at the University of Pennsylvania. I'm passionate about the intersection of software engineering and artificial intelligence. Outside work, I play keys, jam with my band, produce music, and travel the world.

I was born in Seoul, South Korea and lived in Singapore for 4 years, where I learned to appreciate cultural diversity. At Penn, I've been a Teaching Assistant for AI courses, pitched a startup that won Best AI for Business at Wharton Venture Lab ($10k prize), and contributed to research published at NeurIPS workshop and ICASSP. I've been a part of numerous clubs such as Penn Jazz Combo, Kapacity (rock band), and Wharton Undergraduate Finance Club. I've interned at numerous companies, working on a diverse array of projects from compilers to chatbots.`;

export const ABOUT_PULLQUOTE = "Pitched a startup that won Best AI for Business at Wharton Venture Lab — $10k prize. Research published at NeurIPS workshop and ICASSP.";

export const EDUCATION = [
  {
    school: "University of Pennsylvania",
    degrees: [
      {
        title: "M.S.E. in Robotics, AI Focus",
        gpa: "4.0/4.0",
        expected: "Dec 2026"
      },
      {
        title: "B.A.S. in Computer Science, Minor in Data Science",
        gpa: "3.95/4.0",
        expected: "May 2026"
      }
    ]
  },
  {
    school: "Korean Minjok Leadership Academy",
    degrees: [
      {
        title: "Youngjae Merit Scholar",
        gpa: "5.0/5.0",
        expected: "Feb 2020"
      }
    ]
  }
];

export const AWARDS = [
  {
    title: "Wharton Venture Lab Startup Challenge",
    award: "Best AI for Business Team Award",
    prize: "$10,000",
    year: "March 2024",
    description: "Co-founded and pitched Walnut Research, an AI evaluation company for LLM developers which standardizes and streamlines evaluation process for foundational and multi-step models."
  }
];

export const EXPERIENCES = [
  {
    year: "May 2025 - August 2025",
    role: "Software Engineer Intern",
    company: "Sigma Computing",
    location: "San Francisco, CA",
    description: `Delivered high-demand compiler features now driving 5k daily active users. Designed pipe-style SQL syntax support for BigQuery and Databricks, reducing runtime and SQL length by 30%. Contributed to browser fetch-management logic, reducing redundant query recalculations by 20%. Built an AI workbook migrator that converts competitor dashboards to Sigma workbooks.`,
    technologies: ["Rust", "TypeScript", "Protobufs", "Docker", "SQL"],
  },
  {
    year: "August 2024 - May 2025",
    role: "Research Assistant",
    company: "Drexel University METLAB",
    location: "Philadelphia, PA",
    description: `Processed 20,000+ audio files for predominant instrument classification. Experimented with pretraining and layer-freezing strategies. Created OpenPIR, an enhanced dataset with improved class balance. Co-authored a paper accepted at NeurIPS 2025 Workshop on AI for Music and ICASSP 2026.`,
    technologies: ["Python", "PyTorch", "Scikit-learn", "Huggingface"],
  },
  {
    year: "June 2024 - August 2024",
    role: "Software Development Intern",
    company: "Weavers Brain",
    location: "Seoul, South Korea",
    description: `Led development of a personalized chatbot assistant for English education app. Architected PostgreSQL database and FastAPI backend deployed on Linux to support 1k+ daily active users. Built personalized reminders, weekly quizzes, and intelligent Q&A, improving engagement by 20%.`,
    technologies: ["Python", "FastAPI", "PostgreSQL", "Docker", "OpenAI"],
  },
  {
    year: "May 2023 - August 2023",
    role: "AI Engineering Intern",
    company: "Riiid",
    location: "Seoul, South Korea",
    description: `Spearheaded quality control framework for Q&A chatbot that garnered 100,000+ responses; improved correlation rate from 30% to 90%. Created answer analyzer to categorize responses. Developed score extractor for 500+ student data using OCR, enhancing business dev speed by 80%.`,
    technologies: ["Python", "Pandas", "NumPy", "OpenAI", "Scikit-learn"],
  },
  {
    year: "May 2021 - November 2022",
    role: "Squad Leader",
    company: "Republic of Korea Army, 55th Division",
    location: "South Korea",
    description: `Managed 2000+ reserve forces; organized military training; aided COVID-19 testing centers and supported construction for flooded areas.`,
    technologies: [],
  },
];

export const LEADERSHIP = [
  {
    year: "January 2025 - Present",
    role: "Teaching Assistant",
    organization: "CIS 5210: Intro to Artificial Intelligence",
    description: "Developed assignments and course materials from scratch; led weekly recitations; organized TA meetings."
  },
  {
    year: "September 2023 - Present",
    role: "Project Leader, Consulting Committee",
    organization: "Wharton Korea Undergraduate Business Society",
    description: "Led a team of 3 to conduct comprehensive research on university MBA programs for liquidMBA."
  }
];

export const PROJECTS = [
  {
    title: "Penn Plates",
    image: project5,
    description:
      "Built a meal-matching platform for Penn students to meet new people over dinner. Students sign up for dining hall or restaurant slots, get grouped into small parties, and receive a group chat to coordinate.",
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "Vercel"],
    github: null,
    demo: "https://pennplates.org",
  },
  {
    title: "VidToScore",
    image: project4,
    description:
      "Built a full-stack web app that extracts sheet music from YouTube videos into PDF format. Features video cropping, time-range selection, frame extraction at custom intervals, and customizable PDF layouts with A4 formatting.",
    technologies: ["React", "TypeScript", "Flask", "Python", "OpenCV", "yt-dlp", "Docker"],
    github: "https://github.com/Aiden-YH-Lee/vidtoscore",
    demo: null,
  },
  {
    title: "Netschingus",
    image: project3,
    description:
      "Led a team of 4 to build an Instagram-like social media web app with features like hashtag retrieval, user authentication, profile and post creation. Designed database schema and implemented backend routes.",
    technologies: ["Node.js", "Express", "MySQL", "AWS RDS", "AWS S3", "React"],
    github: "https://github.com/Aiden-YH-Lee/chingus",
    demo: null,
  },
  {
    title: "SPOTBNB",
    image: project2,
    description:
      "Directed a team of 4 in developing an interactive data portal integrating 1M+ rows from Airbnb, Spotify, and Ticketmaster. Reduced query runtime from 15s to <1s through restructuring, indexing, and caching.",
    technologies: ["Node.js", "Express", "PostgreSQL", "AWS RDS", "React"],
    github: "https://github.com/Aiden-YH-Lee/cis5500spotify",
    demo: null,
  },
];

export const SKILLS = {
  languages: ["Java", "Python", "Rust", "JavaScript", "TypeScript", "SQL", "OCaml", "Kotlin"],
  frameworks: ["React", "Next.js", "Node.js", "FastAPI", "Flask", "Express"],
  infrastructure: ["AWS", "Docker", "Git", "Linux", "PostgreSQL", "MongoDB"],
};

export const CONTACT = {
  address: "Philadelphia, PA",
  email: "aidenlee@sas.upenn.edu",
};

export const SOCIAL_LINKS = {
  linkedin: "https://www.linkedin.com/in/yeongheon-lee",
  github: "https://github.com/Aiden-YH-Lee",
  instagram: "https://www.instagram.com/__aiden.lee__/",
  soundcloud: "https://on.soundcloud.com/tmBEGQ4nPyNKmNzd6",
};

// Daily rotating track list for the LP Player.
// Each entry: { id: Spotify track ID, title, artist, genre }
// To get a track ID: open song in Spotify → Share → Copy Song Link → the ID is the part after /track/
// Example: https://open.spotify.com/track/4cOdK2wGLETKBW3PvgPWqT → ID is "4cOdK2wGLETKBW3PvgPWqT"
export const LP_TRACKS = [
  // ── Pop ─────────────────────────────────────────────────────────────────
  { id: "4cOdK2wGLETKBW3PvgPWqT", title: "Never Gonna Give You Up", artist: "Rick Astley", genre: "Pop" },
  { id: "7qiZfU4dY1lWllzX7mPBI3", title: "Shape of You", artist: "Ed Sheeran", genre: "Pop" },
  { id: "6dGnYIeXmHdcikdzNNDMm2", title: "Thinking Out Loud", artist: "Ed Sheeran", genre: "Pop" },
  { id: "0VjIjW4GlUZAMYd2vXMi3b", title: "Blinding Lights", artist: "The Weeknd", genre: "Pop" },
  { id: "1dGr1c8CrMLDpV6mPbImSI", title: "Lover", artist: "Taylor Swift", genre: "Pop" },
  { id: "4Dvkj6JhhA12EX05fT7y2e", title: "As It Was", artist: "Harry Styles", genre: "Pop" },
  { id: "6UelLqGlWMcVH1E5c4H7lY", title: "Watermelon Sugar", artist: "Harry Styles", genre: "Pop" },
  { id: "0JNyKDhe89gqtfiiyJh0nN", title: "Levitating", artist: "Dua Lipa", genre: "Pop" },
  { id: "5Q0frOaufGk2tGXTqaTS3X", title: "Don't Start Now", artist: "Dua Lipa", genre: "Pop" },
  { id: "6RhFjNc5RPjQBs6M6NZvse", title: "good 4 u", artist: "Olivia Rodrigo", genre: "Pop" },
  { id: "21AnJxT70z4QNkFXDNWz7Y", title: "drivers license", artist: "Olivia Rodrigo", genre: "Pop" },
  { id: "32OlwWuMpZ6b0aN2RZOeMS", title: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", genre: "Pop" },
  { id: "47Slg6LuqLaX0VodpSCvPt", title: "Just the Way You Are", artist: "Bruno Mars", genre: "Pop" },

  // ── Rock ─────────────────────────────────────────────────────────────────
  { id: "3n3Ppam7vgaVa1iaRUc9Lp", title: "Mr. Brightside", artist: "The Killers", genre: "Rock" },
  { id: "7GhIk7Il098yCjg4BQjzvb", title: "New Person, Same Old Mistakes", artist: "Tame Impala", genre: "Rock" },

  // ── Punk / Alternative Rock ───────────────────────────────────────────────
  { id: "0zWuOowhDnhikrtBH5w9eT", title: "Basket Case", artist: "Green Day", genre: "Punk Rock" },
  { id: "5GorCbAP4aL0EJ16frG2hd", title: "Boulevard of Broken Dreams", artist: "Green Day", genre: "Punk Rock" },
  { id: "2m1hi0nfMR9vdGC8UcrnwU", title: "All The Small Things", artist: "blink-182", genre: "Punk Rock" },
  { id: "1varVHMGqGeI6QMBaOJz67", title: "What's My Age Again?", artist: "blink-182", genre: "Punk Rock" },
  { id: "6SpLc7EXZIPpy0sVko0aoU", title: "Misery Business", artist: "Paramore", genre: "Punk Rock" },
  { id: "5wQnmLuC1W7ATsArWACrgW", title: "Welcome to the Black Parade", artist: "My Chemical Romance", genre: "Punk Rock" },
  { id: "1rjzvmOUy8XxfsnBYbwjTG", title: "Centuries", artist: "Fall Out Boy", genre: "Punk Rock" },
  { id: "7iFhZNcYZJ16csG8OUPSqa", title: "Fat Lip", artist: "Sum 41", genre: "Punk Rock" },

  // ── Classic Rock ─────────────────────────────────────────────────────────
  { id: "4kkko2WzZECCNAVWcWk6Im", title: "Bohemian Rhapsody", artist: "Queen", genre: "Classic Rock" },
  { id: "5T8EDUDqKcs6OSOwEsfqG7", title: "Don't Stop Me Now", artist: "Queen", genre: "Classic Rock" },
  { id: "703BT1NQsfIwPFv8MXQ47m", title: "Dreams", artist: "Fleetwood Mac", genre: "Classic Rock" },
  { id: "5AYwKPn8NM7yp9KsUH3QMG", title: "Back in Black", artist: "AC/DC", genre: "Classic Rock" },
  { id: "78Az0Z1vNJgqv9QSB0ULLV", title: "Paint It Black", artist: "The Rolling Stones", genre: "Classic Rock" },
  { id: "6yEUiL5pQomd6zow9YSxIk", title: "Sympathy for the Devil", artist: "The Rolling Stones", genre: "Classic Rock" },

  // ── City Pop ─────────────────────────────────────────────────────────────
  { id: "7rU6Iebxzlvqy5t857bKFq", title: "Plastic Love", artist: "Mariya Takeuchi", genre: "City Pop" },
  { id: "2BHj31ufdEqVK5CkYDp9mA", title: "Mayonaka no Door / Stay With Me", artist: "Miki Matsubara", genre: "City Pop" },
  { id: "38LUbz74v3nmP8x0efElw2", title: "Last Summer Whisper", artist: "Anri", genre: "City Pop" },
  { id: "3FYDqY5BRtx3IVSaiQZSze", title: "I CAN'T STOP THE LONELINESS", artist: "Anri", genre: "City Pop" },
  { id: "5RSpR665UGsu1FFEq1pG8R", title: "I'm in Love", artist: "Tomoko Aran", genre: "City Pop" },
  { id: "3nByGKtrUugm8bfsNGazAV", title: "Telephone Number", artist: "Junko Ohashi", genre: "City Pop" },

  // ── J-Pop ────────────────────────────────────────────────────────────────
  { id: "2dHkHPOeMNBJlJsJQX5mKZ", title: "Pretender", artist: "Official HIGE DANdism", genre: "J-Pop" },
  { id: "49F3htNmwzPKFycPdOrDvf", title: "Subtitle", artist: "Official HIGE DANdism", genre: "J-Pop" },
  { id: "2hSlHAvJkDiQQpGcwrzVaX", title: "Mixed Nuts", artist: "Official HIGE DANdism", genre: "J-Pop" },
  { id: "6habFhsAe1HWPVV4UKceFt", title: "Lemon", artist: "Kenshi Yonezu", genre: "J-Pop" },
  { id: "3khEEPRyBeOUabbmOPJzAG", title: "KICK BACK", artist: "Kenshi Yonezu", genre: "J-Pop" },
  { id: "1YcrPcT05eI3ojtTpJO8cE", title: "Pale Blue", artist: "Kenshi Yonezu", genre: "J-Pop" },
  { id: "170XOP1T4MvY9TLTgPw07D", title: "Magic", artist: "Mrs. GREEN APPLE", genre: "J-Pop" },
  { id: "4ER5mnbHqsvggEcoVMdFSk", title: "ANTENNA", artist: "Mrs. GREEN APPLE", genre: "J-Pop" },
  { id: "3VtnlGpRuSlEBAu5VVaNlQ", title: "Inferno", artist: "Mrs. GREEN APPLE", genre: "J-Pop" },
  { id: "1zVsw1SqQKgtzE4aqmE8nE", title: "Idol", artist: "YOASOBI", genre: "J-Pop" },
  { id: "3dPtXHP0oXQ4HCWHsOA9js", title: "夜に駆ける", artist: "YOASOBI", genre: "J-Pop" },
  { id: "6EDMJJv0969vIJhWdx1dJw", title: "Shinunoga E-Wa", artist: "Fujii Kaze", genre: "J-Pop" },
  { id: "7AMGgAPFczs3wJgMqu6Eqi", title: "Matsuri", artist: "Fujii Kaze", genre: "J-Pop" },

  // ── Korean R&B / Indie ───────────────────────────────────────────────────
  { id: "2j1fFjWHCI9KJSwcuYAOyF", title: "Spring Day", artist: "BTS", genre: "K-Pop" },
  { id: "2g0LdZQce9xlcHb1mBJyuz", title: "strawberry moon", artist: "IU", genre: "K-Pop" },
  { id: "5xrtzzzikpG3BLbo4q1Yul", title: "LILAC", artist: "IU", genre: "K-Pop" },
  { id: "6z1kLsntE7FuzKZHZWrXYN", title: "instagram", artist: "DEAN", genre: "K-R&B" },
  { id: "18rxYVdlKgiVG3tCBVIsI3", title: "Bittersweet", artist: "Crush", genre: "K-R&B" },
  { id: "0haCeyoW7lP7PNRu3RnSZZ", title: "Desert Eagle", artist: "Silica Gel", genre: "K-Indie" },
  { id: "4N5PLI3puPr62sGcJbkiFL", title: "NO PAIN", artist: "Silica Gel", genre: "K-Indie" },
];
