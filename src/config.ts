export const siteConfig = {
  name: "Kasen Benton",
  title: "MIS Student | Aspiring Systems Analyst | hobbist video game developer",
  description: "Portfolio website of Kasen Benton",
  accentColor: "#FF7300",

  social: {
    email: "kasen.benton@gmail.com",
    linkedin: "https://www.linkedin.com/in/kasen-benton-397905400/",
    resume: "/Resume.pdf",
    github: "https://github.com/Kasen-M-B",
  },

  aboutMe:
    "I'm Kasen, an MIS student at Oklahoma State University! I like to create games and other programs. When an idea gets into my head, chances are I'll create it.",

  skills: [
    "Python",
    "C#",
    "Unity",
    "Excel",
    "Graphic Design",
    "Video Editing",
    "Sound Design",
    "Project Management",
  ],

  projects: [
    {
      name: "Sub0ptimal",
      description:
        "Independent video game made in Unity. Worked with a team of five for part of development process with a 3 year developmenmt time. I was project lead. 22,000+ copies distributed as of 8/22/26",
      link: "https://store.steampowered.com/app/3256900/Sub0ptimal/",
      skills: ["C#", "Video editing", "Unity", "Graphic design", "Sound design"],
    },
    {
      name: "Unity item queue system",
      description:
        "Simple C# system I developed to queue state transitions in my Unity project. This can queue a ienumerator behind another ienumerator. ie Automatically puts a item away then pull out a new one",
      link: "https://github.com/Kasen-M-B/Unity-item-queue-system",
      skills: ["C#", "iEnumerator", "interfaces"],
    },
  ],

  // Will add when relevant experience is gained :)
  // Template
  /*
        company: "Tech Company",
      title: "Senior Software Engineer",
      dateRange: "Jan 2022 - Present",
      bullets: [
        "Led development of microservices architecture serving 1M+ users",
        "Reduced API response times by 40% through optimization",
        "Mentored team of 5 junior developers",
  */
  experience: [],

  education: [
    {
      school: "Oklahoma State University",
      degree: "Bachelor of Science in MIS",
      dateRange: "2026 - current",
      achievements: [],
    },
    {
      school: "Northern Oklahoma College",
      degree: "Associate of Science in MIS",
      dateRange: "2023 - 2026",
      achievements: [],
    },
  ],
};
