
import { PortfolioData } from "../types";

export const portfolioData: PortfolioData = {
  bio: {
    name: "Mohan Kumar Paluru",
    title: "Python & AWS Data Engineer\nData Alchemist — Turning Data into Insight",
    description: [
      "I am a tech enthusiast specializing in Python web development, data engineering, and AWS cloud technologies.",
      "My expertise lies in designing and optimizing robust data pipelines, crafting Python backends, and implementing efficient automation scripts.",
      "I excel in solving intricate data problems by delivering efficient solutions with clean, easy-to-maintain code.",
      "My goal is to continually grow as a developer and bring creativity and precision to every project I undertake.",
    ],
    contacts: {
      email: "mohankumarpaluru@gmail.com",
      phone: "+91 984 87 88 984",
      location: "Tirupati, Andhra Pradesh, India",
      social: {
        linkedin: "https://linkedin.com/in/mohankumarpaluru",
        github: "https://github.com/mohankumarpaluru",
        twitter: "https://x.com/trixter127",
        instagram: "https://instagram.com/mohankumarpaluru",
        telegram: "https://telegram.dog/trixter127",
        whatsapp: "https://wa.me/919848788984",
      },
    },
  },
  resume: {
    label: "Download Resume",
    url: "https://mohankumarpaluru.github.io/assets/resume/Mohan_Kumar_Paluru-Python_Developer.pdf"
  },
  sections: {
    hero: {
      id: "01 / SCHEMA",
      label: "INTRO",
      navLabel: "Intro",
      clarityHint: "Portfolio Initialization",
      title: "", // Generated dynamically from bio
      tagline: "INITIALIZING SCROLL SYSTEM ↓"
    },
    about: {
      id: "02 / MINDSET",
      label: "ABOUT",
      navLabel: "About",
      clarityHint: "Philosophy & Background",
      title: "Thinking in Systems. Not in Syntax.",
      highlight: "Systems",
    },
    experience: {
      id: "03 / PROCESSOR",
      label: "EXPERIENCE",
      navLabel: "Experience",
      clarityHint: "Professional Track Record",
      title: "Built for Scale. Proven in Production.",
      subtitle: "Engineering reliable data systems.",
      highlight: "Scale",
    },
    projects: {
      id: "04 / OUTPUT",
      label: "PROJECTS",
      navLabel: "Projects",
      clarityHint: "Selected Engineering Work",
      title: "Where Ideas Become Systems.",
      highlight: "Systems",
    },
    knowledge: {
      id: "05 / BLUEPRINT",
      label: "TECH STACK",
      navLabel: "Tech",
      clarityHint: "Tools & Technologies",
      title: "The Tools Behind the Systems.",
      tagline: "STACK.JSON",
      highlight: "Tools",
    },
    writing: {
      id: "06 / ARCHIVE",
      label: "BLOG",
      navLabel: "Blog",
      clarityHint: "Notes & Technical Writing",
      title: "Notes from the Data Layer",
      tagline: "WRITING & THOUGHTS",
      highlight: "Data Layer",
    },
    personal: {
      id: "07 / SOUL",
      label: "PERSONAL",
      navLabel: "Personal",
      clarityHint: "Interests & Side Quests",
      title: "Data is structured. Life is organic.",
      subtitle: "Move your cursor to disrupt the flow.",
      highlight: "organic",
    },
    signal: {
      id: "INITIATE_UPLINK",
      label: "CONNECT",
      navLabel: "Connect",
      clarityHint: "Contact Information",
      title: "Let's Connect",
      cta: "Let's Connect",
      highlight: "Connect",
    }
  },
  techStack: [
    { name: "Python", logo: "/Assets/original/python-original.svg" },
    { name: "AWS", logo: "/Assets/original/amazonwebservices-original-wordmark.svg" },
    { name: "Airflow", logo: "/Assets/original/apacheairflow-original.svg" },
    { name: "Snowflake", logo: "/Assets/original/snowflake.svg" },
    { name: "dbt", logo: "/Assets/original/dbt-icon.svg" },
    { name: "Power BI", logo: "/Assets/original/powerbi.svg" },
    { name: "PostgreSQL", logo: "/Assets/original/postgresql-original.svg" },
    { name: "Bazel", logo: "/Assets/original/bazel-original.svg" },
    { name: "Git", logo: "/Assets/original/git-original.svg" },
    { name: "GitHub Actions", logo: "/Assets/original/githubactions-original.svg" },
    { name: "Pandas", logo: "/Assets/original/pandas-original.svg" },
    { name: "Docker", logo: "/Assets/original/docker-original.svg" },
    { name: "Flask", logo: "/Assets/original/flask-original.svg" },
    { name: "FastAPI", logo: "/Assets/original/fastapi-original.svg" },
    { name: "OpenCV", logo: "/Assets/original/opencv-original.svg" },
    { name: "MySQL", logo: "/Assets/original/mysql-original.svg" },
    { name: "MongoDB", logo: "/Assets/original/mongodb-original.svg" },
    { name: "Django REST", logo: "/Assets/original/djangorest-original.svg" },
  ],
  personalEndeavors: [
    {
      title: "Open-Source Explorations",
      description: "Experimenting with self-hosted open-source applications and customizing Android operating systems",
      icon: "/Assets/icon-open-source.svg",
    },
    {
      title: "Automation Scripting",
      description: "Creating Python and shell scripts to automate tasks",
      icon: "/Assets/icon-dev.svg",
    },
    {
      title: "Tech Blogging",
      description: "Sharing tech insights through blog posts",
      icon: "/Assets/icon-tech-blog.svg",
    },
    {
      title: "Manga and Anime",
      description: "Enjoying manga and anime as creative inspiration",
      icon: "/Assets/icon-mangekyou-sharingan.svg",
    },
  ],
  skills: [
    { name: "Python Programming", level: 80 },
    { name: "AWS Cloud Solutions Architecture", level: 70 },
    { name: "Data Integration & Analytics", level: 70 },
    { name: "Database Management", level: 70 },
    { name: "Backend/API Development", level: 80 },
    { name: "CI/CD & DevOps", level: 80 },
    { name: "Frontend Development", level: 35 },
  ],
  projects: [
    {
      title: "Oracle Freetier Instance",
      description: "Script to create free Oracle Cloud instances",
      link: "https://github.com/mohankumarpaluru/oracle-freetier-instance-creation",
      tags: ["Python", "Cloud"],
    },
    {
      title: "Holiday Calendar",
      description: "Next.js calendar app using ShadCN",
      link: "https://mohan.is-a.dev/calendar.html",
      tags: ["Web Development"],
    },
    {
      title: "Blog OG Image Gen",
      description: "Automated blog cover image generator",
      link: "https://github.com/mohankumarpaluru/blog-cover-generator",
      tags: ["Python"],
    },
    {
      title: "JSON ↔️ Base64",
      description: "Vanilla JS encoding/decoding tool",
      link: "https://mohankumarpaluru.github.io/json-2-byte/",
      tags: ["JavaScript"],
    },
    {
      title: "Transaction Processor",
      description: "Extracts transaction data from screenshots",
      link: "https://github.com/mohankumarpaluru/transactions-extractor",
      tags: ["Python"],
    },
    {
      title: "Trix-V (Tube)",
      description: "Private YouTube alternative",
      link: "https://github.com/mohankumarpaluru/TrixV",
      tags: ["Go"],
    },
  ],
  blogPosts: [
    {
      title: "Python Updates Demystified",
      category: "Python",
      date: "2024-09-01",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Key-Changes-from-3.7-to-Today",
      excerpt: "From 3.7 to Today: Navigating Python's Most Important Updates",
    },
    {
      title: "Python's Match-Case",
      category: "Python",
      date: "2024-09-01",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Match-Case-Statement",
      excerpt: "Unlocking the Power of Python Match-Case",
    },
    {
      title: "Supercharging VS Code",
      category: "Development",
      date: "2024-09-08",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Supercharging-VS-Code",
      excerpt: "Customizing VS Code with CSS & JS",
    },
    {
      title: "Coreference Resolution",
      category: "NLP",
      date: "2023-11-21",
      url: "https://curiosity.trixtertempdrive.eu.org/NLP/Coreference-Resolution",
      excerpt: "A What, Why, and How Guide",
    },
  ],
  experience: [
    {
      title: "Senior Software Engineer",
      company: "Inovalon India Pvt Ltd",
      period: "July 2025 — Present",
      description:
        "Led end-to-end Data ETL initiatives using Apache Airflow and Python for ingestion, transformation, and loading into Snowflake. Implemented modular data transformations with dbt and Power BI.",
    },
    {
      title: "Data Engineering Senior Analyst",
      company: "Accenture",
      period: "May 2021 — June 2025",
      description:
        "Designed Python parsers for data ingestion, managed AWS-based data pipelines, contributed to Life Science Analysis Application. Managed 5TB+ data migrations.",
    },
    {
      title: "Programmer Analyst",
      company: "Cognizant",
      period: "May 2020 — May 2021",
      description:
        "Developed NLP-based data extraction POC, trained image classification models, created microservices",
    },
  ],
  education: [
    {
      degree: "B.Tech in ECE",
      institution: "SRM Institute of Science and Technology",
      year: "2015-2019",
    },
    {
      degree: "Intermediate",
      institution: "Narayana Sri Chaitanya Junior College",
      year: "2013-2015",
    },
    {
      degree: "SSC",
      institution: "NARAYANA CONCEPT SCHOOL",
      year: "2012-2013",
    },
  ],
  certifications: [
    {
      title: "AWS Certified Data Engineer - Associate",
      issuer: "AWS",
      year: "2025",
    },
    {
      title: "Azure AI Fundamentals",
      issuer: "Microsoft",
      year: "2024",
    },
    {
      title: "AWS Certified Data Analytics - Specialty",
      issuer: "AWS",
      year: "2023",
    },
    {
      title: "AWS Certified Solutions Architect - Associate",
      issuer: "AWS",
      year: "2022",
    },
  ],
};
