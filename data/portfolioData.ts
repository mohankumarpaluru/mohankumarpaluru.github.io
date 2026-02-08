
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
    url: "https://mohan.is-a.dev/resume"
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
  // Current active tech stack (shown in orbital - 10 items, uneven distribution)
  currentTechStack: [
    // Core (2) - Foundation
    { name: "Python", logo: "/assets/original/python-original.svg", orbit: "core" },
    { name: "PostgreSQL", logo: "/assets/original/postgresql-original.svg", orbit: "core" },

    // Logic (5) - Data processing & analytics (largest orbit)
    { name: "Airflow", logo: "/assets/original/apacheairflow-original.svg", orbit: "logic" },
    { name: "dbt", logo: "/assets/original/dbt-icon.svg", orbit: "logic" },
    { name: "Snowflake", logo: "/assets/original/snowflake.svg", orbit: "logic" },
    { name: "Power BI", logo: "/assets/original/powerbi.svg", orbit: "logic" },
    { name: "Git", logo: "/assets/original/git-original.svg", orbit: "logic" },

    // Infra (3) - Deployment & orchestration
    { name: "AWS", logo: "/assets/original/amazonwebservices-original-wordmark.svg", orbit: "infra" },
    { name: "Docker", logo: "/assets/original/docker-original.svg", orbit: "infra" },
    { name: "Terraform", logo: "/assets/original/terraform-original.svg", orbit: "infra" },
  ],

  // Complete tech portfolio (shown in ticker - all technologies)
  completeTechStack: [
    { name: "Python", logo: "/assets/original/python-original.svg" },
    { name: "AWS", logo: "/assets/original/amazonwebservices-original-wordmark.svg" },
    { name: "Airflow", logo: "/assets/original/apacheairflow-original.svg" },
    { name: "Snowflake", logo: "/assets/original/snowflake.svg" },
    { name: "dbt", logo: "/assets/original/dbt-icon.svg" },
    { name: "Power BI", logo: "/assets/original/powerbi.svg" },
    { name: "PostgreSQL", logo: "/assets/original/postgresql-original.svg" },
    { name: "Bazel", logo: "/assets/original/bazel-original.svg" },
    { name: "Git", logo: "/assets/original/git-original.svg" },
    { name: "GitHub Actions", logo: "/assets/original/githubactions-original.svg" },
    { name: "Pandas", logo: "/assets/original/pandas-original.svg" },
    { name: "Docker", logo: "/assets/original/docker-original.svg" },
    { name: "Flask", logo: "/assets/original/flask-original.svg" },
    { name: "FastAPI", logo: "/assets/original/fastapi-original.svg" },
    { name: "OpenCV", logo: "/assets/original/opencv-original.svg" },
    { name: "MySQL", logo: "/assets/original/mysql-original.svg" },
    { name: "MongoDB", logo: "/assets/original/mongodb-original.svg" },
    { name: "Django REST", logo: "/assets/original/djangorest-original.svg" },
    { name: "Terraform", logo: "/assets/original/terraform-original.svg" },
    { name: "AWS CDK", logo: "/assets/original/aws-cdk-original.svg" },
    { name: "Bash / Linux", logo: "/assets/original/linux-original.svg" },
    { name: "Next.js", logo: "/assets/original/nextjs-original.svg" },
  ],
  personalEndeavors: [
    {
      title: "Open-Source Explorations",
      description: "Experimenting with self-hosted open-source applications and customizing Android operating systems",
      icon: "/assets/icon-open-source.svg",
    },
    {
      title: "Automation Scripting",
      description: "Creating Python and shell scripts to automate tasks",
      icon: "/assets/icon-dev.svg",
    },
    {
      title: "Tech Blogging",
      description: "Sharing tech insights through blog posts",
      icon: "/assets/icon-tech-blog.svg",
    },
    {
      title: "Manga and Anime",
      description: "Enjoying manga and anime as creative inspiration",
      icon: "/assets/icon-mangekyou-sharingan.svg",
    },
  ],
  skills: [
    { "name": "Python Backend & API", "level": 80 },
    { "name": "Data Engineering & Warehousing", "level": 78 },
    { "name": "Advanced SQL & Query Optimization", "level": 85 },
    { "name": "Cloud Architecture & IaC (AWS / Terraform / CDK)", "level": 75 },
    { "name": "DevOps & Observability", "level": 80 },
    { "name": "Linux Systems & Bash Scripting", "level": 80 },
    { "name": "Frontend Development", "level": 35 }
  ],
  projects: [
    {
      title: "Oracle Cloud Free Tier Script",
      description: "Python/Bash script to create free-tier instances in Oracle Cloud via OCI API.",
      link: "https://github.com/mohankumarpaluru/oracle-freetier-instance-creation",
      tags: ["Python", "Cloud"],
      featured: true,
      image: "/assets/original/projects/project-1.jpg",
    },
    {
      title: "Holiday Calendar App",
      description: "A Next.js calendar app using ShadCN UI to display holidays.",
      link: "https://mohan.is-a.dev/holiday-calendar",
      tags: ["WebDev", "React"],
      featured: true,
      image: "/assets/original/projects/project-2.jpg",
    },
    {
      title: "Wedding invitation",
      description: "A wedding invitation website using next js",
      link: "https://mohan.is-a.dev/keerthi-wedding-invitation/",
      tags: ["Web Development"],
      featured: true,
      image: "/assets/original/projects/project-7.jpg",
    },
    {
      title: "Blog OG Image Generator",
      description: "Python script to auto-generate aesthetic blog cover images.",
      link: "https://github.com/mohankumarpaluru/blog-og-generator",
      tags: ["Python"],
      image: "/assets/original/projects/project-3.jpg",
    },
    {
      title: "JSON ↔️ Base64 Encoder/Decoder",
      description: "Vanilla JS app to encode/decode JSON to Base64.",
      link: "#",
      tags: ["WebDev", "JavaScript"],
      image: "/assets/original/projects/project-4.jpg",
    },
    {
      title: "Transaction Processor",
      description: "Automates extraction of transaction data from payment screenshots.",
      link: "https://github.com/mohankumarpaluru/transaction-processor",
      tags: ["Python"],
      image: "/assets/original/projects/project-5.jpg",
    },
    {
      title: "Trix-V (Tube)",
      description: "Go-based private YouTube alternative app.",
      link: "https://github.com/mohankumarpaluru/trix-v",
      tags: ["Go"],
      image: "/assets/original/projects/project-6.jpg",
    },
    {
      title: "Curiosity Chronicles",
      description: "Static site generator for personal blogs.",
      link: "https://github.com/mohankumarpaluru/curiosity-chronicles",
      tags: ["Python"],
      image: "/assets/original/projects/project-8.jpg",
    },
    {
      title: "Flowershow Blog",
      description: "Another static site generator for personal blogs.",
      link: "https://github.com/mohankumarpaluru/flowershow-blog",
      tags: ["Python"],
      image: "/assets/original/projects/project-9.jpg",
    },
    {
      title: "Thunder (Android App)",
      description: "Android app to stream and download media from Google Drive.",
      link: "https://github.com/anujd64/Thunder",
      tags: ["Android"],
      image: "/assets/original/projects/project-8.jpg",
    },
  ],
  blogPosts: [
    {
      title: "Python Updates Demystified",
      category: "Python",
      date: "2024-09-01",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Key-Changes-from-3.7-to-Today",
      excerpt: "From 3.7 to Today: Navigating Python's Most Important Updates",
      image: "/assets/original/blogs/python-updates-demystified.jpg",
    },
    {
      title: "Python's Match-Case",
      category: "Python",
      date: "2024-09-01",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Python/Python-Match-Case-Statement",
      excerpt: "Unlocking the Power of Python Match-Case",
      image: "/assets/original/blogs/pythons-match-case.jpg",
    },
    {
      title: "Supercharging VS Code",
      category: "Development",
      date: "2024-09-08",
      url: "https://curiosity.trixtertempdrive.eu.org/Development/Supercharging-VS-Code",
      excerpt: "Customizing VS Code with CSS & JS",
      image: "/assets/original/blogs/supercharging-vs-code.jpg",
    },
    {
      title: "Coreference Resolution",
      category: "NLP",
      date: "2023-11-21",
      url: "https://curiosity.trixtertempdrive.eu.org/NLP/Coreference-Resolution",
      excerpt: "A What, Why, and How Guide",
      image: "/assets/original/blogs/coreference-resolution.jpg",
    },
    {
      title: "Blog Post 5",
      category: "Tech",
      date: "2024-01-15",
      url: "#",
      excerpt: "Additional blog content placeholder",
      image: "/assets/original/blogs/blog-5.jpg",
    },
    {
      title: "Blog Post 6",
      category: "Tech",
      date: "2024-01-20",
      url: "#",
      excerpt: "More interesting tech insights",
      image: "/assets/original/blogs/blog-6.jpg",
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
