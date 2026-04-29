export const profile = {
  name: "Nebyat H. Hailu",
  role: "AI/ML Engineer",
  email: "nebyathhailu@gmail.com",
  statement: "How do people learn to trust digital systems around them? This question drew me to explore how technology can be built responsibly and used for the common good. I believe technology is most powerful when guided by values like accountability and equity.",
  github: "https://github.com/nebyathhailu",
  linkedin: "https://www.linkedin.com/in/nebyat-h-hailu-h-hailu-494394395",
};

export interface ProjectType {
  title: string;
  description: string;
  longDescription: string;
  tools: string[];
  image: string;
  githubLink: string;
  accentColor?: string;
}

export const projects: ProjectType[] = [
  {
    title: "Recos: AI Interview Assistant",
    description: "AI-based interview assistant that helps recruiters identify the best candidates through intelligent evaluation.",
    longDescription: "Developed an AI-powered interview assistant that enables recruiters to identify the right candidates more efficiently. Integrated with Odoo ERP via secure APIs for automatic syncing of job postings and candidate profiles. Evaluated multiple speech-to-text models (OpenAI Whisper, AssemblyAI, and Google Speech-to-Text) and selected Google Speech-to-Text for its superior latency, accent accuracy, and stability. Optimized prompting strategies and integrated Google Generative AI SDK to generate concise skill summaries and job insights, significantly improving candidate-job matching quality.",
    tools: ["Python", "Django REST Framework", "Odoo ERP", "Google Speech-to-Text", "Google Generative AI", "PostgreSQL"],
    image: "/images/recos.png",
    githubLink: "https://github.com/akirachix/recos-backend",
    accentColor: "#D4AF37",
  },
  {
    title: "Vocelera",
    description: "AI-powered citizen feedback analysis platform that transforms unstructured public input into actionable policy insights in under an hour.",
    longDescription: "Vocelera is a full-stack civic-tech platform built to solve a problem in participatory governance. Vocelera automates the entire pipeline: citizens send feedback via WhatsApp, SMS, or web portal, and the platform uses AI to extract themes, sentiment, and priority scores, generate response drafts, and produce executive-ready reports with policy recommendations. The platform includes a multi-project dashboard with role-based access control, real-time message delivery via Django Channels WebSockets, AI-powered document analysis for CSV, PDF, and Excel uploads, collaborative discussion threads linked to specific insights, and a public-facing citizen page with a shareable QR code.",
    tools: ["Next.js 14", "TypeScript", "Tailwind CSS", "Django REST Framework", "PostgreSQL", "Django Channels", "WebSockets", "Celery", "Redis", "Twilio"],
    image: "/images/vocelera.png",
    githubLink: "",
    accentColor: "#6366F1",
  },
  {
    title: "Movie Recommendation Agent",
    description: "Intelligent movie recommendation system using semantic search and natural language understanding.",
    longDescription: "Built a personalized movie recommendation system that delivers highly relevant suggestions through semantic search and NLP. Processed and cleaned a 1000-movie IMDB dataset using Pandas and NumPy, applied lemmatization for better text quality, and created a recommendation pipeline with NLTK and Tiktoken embeddings. Integrated Google ADK for automated data loading, top-K retrieval, and natural language explanations. Added fallback mechanisms, caching, and robust error handling for reliable performance.",
    tools: ["Python", "Pandas", "NumPy", "NLTK", "Tiktoken", "Google ADK"],
    image: "/images/movie-recommendation.jpeg",
    githubLink: "https://github.com/nebyathhailu/movie-recommendation-agent",
    accentColor: "#10B981",
  },
  {
    title: "Breast Cancer Image Classification",
    description: "Deep learning model for classifying breast ultrasound images as benign, malignant, or normal.",
    longDescription: "Developed a deep learning model to classify breast ultrasound images into benign, malignant, or normal categories to support early detection. Automated dataset preparation for 1,500+ images, applied extensive data augmentation, and used transfer learning with MobileNetV2. Achieved ~93% validation accuracy — an 11% improvement over baseline CNN models. Built an end-to-end pipeline for preprocessing and classifying new scans with interpretable clinical outputs.",
    tools: ["Python", "TensorFlow", "Keras", "MobileNetV2", "Pandas", "NumPy", "Matplotlib"],
    image: "/images/breast-cancer.jpg",
    githubLink: "https://github.com/nebyathhailu/breast-cancer-classifier",
    accentColor: "#F43F5E",
  },
  {
    title: "Safi Greens - Mama Mboga Platform",
    description: "Digital platform designed to increase visibility and sales for local women vegetable vendors.",
    longDescription: "Worked on a case study to support local women vendors (Mama Mbogas) by building a digital solution to boost their visibility and customer reach. Developed a responsive informational website using HTML, CSS, and JavaScript. Designed system architecture, built internal APIs with Django REST Framework, created a React.js admin dashboard for real-time analytics, and implemented comprehensive unit and integration tests. Used GitHub for version control and team collaboration.",
    tools: ["Django REST Framework", "React.js", "HTML", "CSS", "JavaScript", "Python", "Git"],
    image: "/images/safi-greens.png",
    githubLink: "https://github.com/akirachix/big-minds-backend",
    accentColor: "#22C55E",
  }
];

export const skills = {
  languages: [
    { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
    { name: "SQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "Kotlin", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kotlin/kotlin-original.svg" },
    { name: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
  ],
  frameworks: [
    { name: "Django REST", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg" },
    { name: "React.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
    { name: "Next.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" },
    { name: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Jetpack Compose", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-original.svg" },
    { name: "Laravel", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg" },
  ],
  tools: [
    { name: "Google Cloud", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" },
    { name: "PostgreSQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
    { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
    { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
    { name: "Postman", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
  ],
  libraries: [
    { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
    { name: "NumPy", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
    { name: "TensorFlow", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
    { name: "NLTK", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  ],
};
