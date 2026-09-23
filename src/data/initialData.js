export const INITIAL_PORTFOLIO_DATA = {
  profile: {
    name: "Siddharth Khot",
    title: "Generative AI Engineer | RAG Engineer | Python Backend Developer",
    subtitle: "MCA Student @ Vishwakarma University, Pune | Class of 2026",
    status: "Actively seeking Generative AI, RAG, and Python Backend Engineering roles in Pune (Target 2026)",
    location: "Pune, Maharashtra, India",
    githubUser: "siddhu9009",
    githubUrl: "https://github.com/siddhu9009",
    linkedinUrl: "https://www.linkedin.com/in/siddharth-khot-4ab69433b",
    email: "khotsiddharth96k@gmail.com",
    resumeUrl: "/Siddharth_Khot_Resume.pdf",
    targetRoles: [
      "Generative AI Engineer",
      "RAG Engineer",
      "AI Engineer",
      "LLM Engineer",
      "Python Backend Developer",
      "AI Developer / Intern"
    ],
    bio: "Python backend developer and MCA student at Vishwakarma University, Pune (BCA background). Specialized in developing production-ready Generative AI systems, RAG pipelines with vector databases, async FastAPI backends, and Django web platforms."
  },

  projects: [
    {
      id: "rag-system",
      type: "flagship",
      title: "Multi-Format Document RAG System",
      badge: "Flagship AI Project",
      shortDescription: "End-to-end document intelligence platform utilizing FastEmbed vectorization, MongoDB Atlas Vector Search, and Groq LLM grounded generation with source citations.",
      fullDescription: "An end-to-end Retrieval-Augmented Generation (RAG) system engineered to ingest multi-format documents (PDF, DOCX, TXT), extract clean text chunks, compute dense embeddings via FastEmbed, perform vector similarity search in MongoDB Atlas, and synthesize grounded answers using Groq LLM with exact source citations.",
      techTags: ["Python", "FastAPI", "MongoDB Atlas", "FastEmbed", "Groq LLM", "RAG", "REST API"],
      githubUrl: "https://github.com/siddhu9009/Multi-Format-Document-RAG-System"
    },

    {
      id: "feedback-iq",
      type: "real",
      title: "FeedbackIQ — AI Feedback Analytics Platform",
      badge: "Built Project",
      shortDescription: "AI-driven customer feedback classification application built with Django, TextBlob NLP sentiment engine, glassmorphism dashboard, and custom Django admin.",
      fullDescription: "A fully functional Django backend platform that categorizes customer feedback into sentiment classifications (Positive, Neutral, Negative) using TextBlob NLP algorithms. Features interactive analytical charts, a custom dark-themed Django Admin workspace, and ngrok remote deployment integration.",
      techTags: ["Python", "Django", "TextBlob", "REST API", "Chart.js", "MySQL", "SQLite", "ngrok"],
      githubUrl: "https://github.com/siddhu9009"
    },

    {
      id: "event-management",
      type: "real",
      title: "Event Management System",
      badge: "Built Project",
      shortDescription: "Web backend application developed with Django and REST APIs for event scheduling, attendee registration, ticket management, and admin oversight.",
      fullDescription: "A comprehensive event orchestration backend platform built using Django, SQL databases, and RESTful APIs. Enables organizers to create events, manage schedules, process attendee registrations, issue digital passes, and manage permissions.",
      techTags: ["Python", "Django", "REST API", "MySQL", "SQLite", "HTML5", "CSS3", "JavaScript"],
      githubUrl: "https://github.com/siddhu9009/event-management"
    }
  ],

  skillsGrouped: {
    coreStack: [
      { name: "Python", detail: "Core language, AsyncIO, OOP, Data Structures, Package management" },
      { name: "Django & REST Framework", detail: "Custom Admin, ORM models, Authentication, Serializers, Views" },
      { name: "FastAPI", detail: "Async REST APIs, Pydantic validation, OpenAPI specs, Middleware" },
      { name: "Retrieval-Augmented Generation (RAG)", detail: "Document chunking, FastEmbed vectorization, Groq LLM inference, Source citations" },
      { name: "MongoDB & Atlas Vector Search", detail: "384-d dense vector indexing, HNSW index, Cosine similarity queries" },
      { name: "MySQL & SQLite", detail: "Relational database modeling, SQL queries, Indexing, Django ORM" }
    ],
    comfortableWith: [
      { name: "NLP & Sentiment Analysis", detail: "TextBlob classification, Rule-based filters, Polarity scoring" },
      { name: "React.js & JavaScript", detail: "Modern ES6+, UI component development, State management" },
      { name: "Data Visualization", detail: "ApexCharts, Chart.js analytical dashboards" },
      { name: "Git & GitHub", detail: "Version control, Repositories, Feature branching (github: siddhu9009)" },
      { name: "API Testing & Utilities", detail: "Postman, ngrok tunneling, CORS, Environment config" }
    ],
    exploring: [
      { name: "LLM Agentic Frameworks", detail: "Autonomous ReAct reasoning loops, Function calling, Tool selection" },
      { name: "Advanced Vector Embeddings", detail: "High-dimensional dense vector embeddings, Multi-modal RAG" },
      { name: "LLM Fine-Tuning & Quantization", detail: "Open-source model tuning, Local inference optimization" }
    ]
  },

  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Vishwakarma University, Pune",
      period: "Pursuing (Target Graduation: 2026)",
      details: "Advanced study in Software Architecture, Database Management Systems, Machine Learning, and Cloud Computing.",
      badge: "In Progress"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "A S C College Palus, Kolhapur University",
      period: "Completed",
      details: "Computer Science fundamentals: Data Structures & Algorithms, C/C++, OOP, Relational Databases, Web Technologies.",
      badge: "Graduated"
    }
  ]
};
