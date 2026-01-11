// ==========================================
// PORTFOLIO DATA - EDIT YOUR INFORMATION HERE
// ==========================================

export const personalInfo = {
  name: "N Siva Kumar Reddy",
  role: "Software Engineer",
  tagline: "I'm a",
  greeting: "Hello, It's me",
  description: "A passionate Engineer curious about how systems work and having an experience building scalable services leveraging various tech and cloud. I learn through by doing cool projects.",
  location: "San Jose, California, USA",
  openForOpportunities: true,
  resumeUrl: "https://drive.google.com/file/d/1Yq5FyVTeD8DBwhCAa0ljtpv-mzBrSCP5/view?usp=sharing",
}

export const socialLinks = {
  github: "https://github.com/sivakumarreddy447",
  linkedin: "https://www.linkedin.com/in/sivakumarreddy1961/",
  email: "sivakumarreddy940@gmail.com",
}

// Skills organized by category
// TODO: Add/remove skills as needed
export const skills = {
  programmingLanguages: [
    { name: "Go", icon: "go" },
    { name: "Python", icon: "python" },
    { name: "JavaScript", icon: "javascript" },
    { name: "Java", icon: "java" },
  ],
  backend: [
    { name: "NodeJS", icon: "nodejs" },
    { name: "Django", icon: "django" },
    { name: "Spring Boot", icon: "springboot" },
    { name: "Apache Kafka", icon: "kafka" },
  ],
  cloud: [
    { name: "Git", icon: "git" },
    { name: "Docker", icon: "docker" },
    { name: "AWS", icon: "aws" },
    { name: "Kubernetes", icon: "kubernetes" },
    { name: "Terraform", icon: "terraform" },
  ],
  databases: [
    { name: "MongoDB", icon: "mongodb" },
    { name: "PostgreSQL", icon: "postgresql" },
    { name: "MySQL", icon: "mysql" },
    { name: "DynamoDB", icon: "dynamodb" },
  ],
  machineLearning: [
    { name: "Numpy", icon: "numpy" },
    { name: "Pandas", icon: "pandas" },
    { name: "SciKit-Learn", icon: "sklearn" },
    { name: "TensorFlow", icon: "tensorflow" },
  ],
  frontend: [
    { name: "HTML", icon: "html" },
    { name: "CSS", icon: "css" },
    { name: "ReactJS", icon: "react" },
    { name: "NextJS", icon: "nextjs" },
  ],
  monitoring: [
    { name: "Grafana", icon: "grafana" },
    { name: "NewRelic", icon: "newrelic" },
    { name: "Datadog", icon: "datadog" },
    { name: "CloudWatch", icon: "cloudwatch" },
  ],
  dataEngineering: [
    { name: "Apache Spark", icon: "spark" },
    { name: "Airflow", icon: "airflow" },
    { name: "Hadoop", icon: "hadoop" },
    { name: "Batch Processing", icon: "batch" },
  ],
}

// TODO: Replace with your education details
export const education = [
  {
    id: 1,
    institution: "San Jose State University",
    location: "San Jose, CA, USA",
    degree: "Master of Science in Software Engineering",
    startDate: "August 2023",
    endDate: "June 2025",
    logo: "/sjsu-logo.svg",
  },
  {
    id: 2,
    institution: "Jawaharlal Nehru Technological University Hyderabad",
    location: "Telangana, India",
    degree: "Bachelor of Technology in Computer Science",
    startDate: "Aug 2018",
    endDate: "June 2022",
    logo: "/jntuh-logo.svg",
  },
]

export const experience = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "Symetra",
    startDate: "May 2025",
    endDate: "Present",
    bullets: [
      "Built and launched a customer-facing platform supporting high-volume requests, owning system design from data modeling to production rollout, improving end-to-end processing throughput by 45%.",
      "Designed and operated event-driven and batch workflows to automate critical business processes, applying idempotency, deduplication, and fault-tolerance patterns to achieve 99% system reliability.",
      "Implemented a comprehensive observability and monitoring strategy, enabling rapid root-cause analysis, anomaly detection, and reducing mean time to recovery (MTTR) by 30%.",
      "Led the integration of secure billing and payment workflows, including lifecycle events and reconciliation, reducing payment-related customer support issues by 38%.",
    ],
    logo: "/symetra-logo.svg",
  },
  {
    id: 2,
    title: "Software Engineer",
    company: "DAZN",
    startDate: "Oct 2022",
    endDate: "Dec 2023",
    bullets: [
      "Engineered low-latency microservices for video ad delivery using Java/Spring and scalable API layers, applying distributed-systems patterns to power LIVE/VOD features across Web and CTV globally.",
      "Automated batch + streaming ETL pipelines using AWS Lambda, DynamoDB → S3 → PostgreSQL, reducing manual effort by 50% and ETL latency by 30%.",
      "Built scalable REST/GraphQL Microservices in Node.js, integrating Redis, MongoDB, DynamoDB, and SNS to support high-traffic ad, playback, and metadata operations.",
      "Improved targeting and analytics accuracy by integrating Salesforce, Optimizely, and ELK, contributing to $20M+ annual revenue uplift through better measurement and segmentation.",
    ],
    logo: "/dazn-logo.svg",
  },
  {
    id: 3,
    title: "Associate Software Engineer",
    company: "Goldman Sachs",
    startDate: "Sep 2021",
    endDate: "Oct 2022",
    bullets: [
      "Supported large-scale internal platforms by managing source control, build systems, and automated deployment pipelines across multiple services and environments.",
      "Improved delivery reliability and deployment consistency, reducing release failures by 25% through pipeline optimization and standardization.",
      "Operated and maintained containerized services and orchestration platforms, supporting scalable workloads in production environments.",
      "Automated security and operational workflows, reducing manual intervention by 60% while strengthening auditability and platform safety.",
    ],
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Goldman_Sachs.svg/200px-Goldman_Sachs.svg.png",
  },
  {
    id: 4,
    title: "Software Engineer Intern",
    company: "Savart",
    startDate: "Jan 2021",
    endDate: "May 2021",
    bullets: [
      "Built a secure admin system with Spring Boot, Spring Security and JWT (MVC) to manage 5,000+ users.",
      "Configured an SMTP server with Haraka in Docker and used Grafana for monitoring, boosting email delivery to 95%.",
      "Reduced response times from 5 seconds to 800ms by implementing Redis caching in the P3 application.",
      "Deployed the application on AWS ECS Fargate and leveraged AWS Parameter Store for secure secrets management.",
    ],
    logo: "/savart-logo.svg",
  },
  {
    id: 5,
    title: "MS in Software Engineering",
    company: "San Jose State University",
    startDate: "January 2024",
    endDate: "Present",
    bullets: [
      "Specialization: Software Engineering",
    ],
    logo: "/sjsu-logo.svg",
  },
]

export const projects = [
  {
    id: 1,
    title: "AWS Three-Tier Web Application",
    description: "Architected and deployed a production-ready, highly available 3-tier cloud infrastructure on AWS. Features multi-AZ deployment with auto-scaling EC2 instances running Apache and Node.js, Amazon Aurora MySQL for the database layer, and comprehensive VPC networking with public/private subnets, NAT Gateways, and Application Load Balancers for fault-tolerant operations.",
    techStack: ["AWS EC2", "Aurora MySQL", "VPC", "ALB", "S3", "IAM", "Auto Scaling"],
    githubUrl: "https://github.com/sivakumarreddy447", // TODO: Update with actual project URL
  },
  {
    id: 2,
    title: "Family Travel Tracker",
    description: "Built an interactive travel history application featuring world map visualization to track family adventures. Achieved 20% faster loading times with Node.js/EJS backend, integrated Google OAuth with 100% login success rate, and optimized PostgreSQL queries for 30% faster data access. Implemented full CI/CD pipeline with Jenkins and Kubernetes (Helm) deployment, improving deployment speed by 40%.",
    techStack: ["Node.js", "PostgreSQL", "Docker", "Kubernetes", "Jenkins", "Helm", "Google OAuth"],
    githubUrl: "https://github.com/sivakumarreddy447", // TODO: Update with actual project URL
  },
  {
    id: 3,
    title: "Full Stack E-Commerce Platform",
    description: "Developed a complete e-commerce solution using the MERN stack with 35% improved page load performance. Features include dynamic product catalog, shopping cart, secure user authentication, and RESTful APIs. Deployed on AWS with EC2 and Elastic Load Balancer, achieving 99.9% uptime with horizontally scalable architecture.",
    techStack: ["MongoDB", "Express.js", "React", "Node.js", "AWS EC2", "ELB"],
    githubUrl: "https://github.com/sivakumarreddy447", // TODO: Update with actual project URL
  },
]

export const certifications = [
  {
    id: 1,
    title: "AWS Certified Developer - Associate",
    provider: "Amazon Web Services (AWS)",
    skills: "AWS Services | Cloud Development | Serverless | CI/CD",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    id: 2,
    title: "AWS Agentic AI Essentials",
    provider: "Amazon Web Services (AWS)",
    skills: "Agentic AI | AWS AI Services | Generative AI",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Amazon_Web_Services_Logo.svg/200px-Amazon_Web_Services_Logo.svg.png",
  },
  {
    id: 3,
    title: "Data Science, Machine Learning, DL, NLP Bootcamp",
    provider: "Udemy",
    skills: "Machine Learning | Deep Learning | NLP | Python | Transformers",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png",
  },
  {
    id: 4,
    title: "The Complete Full Stack Development Bootcamp",
    provider: "Udemy",
    skills: "React.js | Node.js | Express.js | PostgreSQL | TypeScript",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png",
  },
  {
    id: 5,
    title: "Introduction to Data Science in Python",
    provider: "Coursera - University of Michigan",
    skills: "Data Science | Python | Pandas | Data Analysis",
    credentialUrl: "https://www.coursera.org/account/accomplishments/verify/KS2J7F4N28AV",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Coursera-Logo_600x600.svg/200px-Coursera-Logo_600x600.svg.png",
  },
  {
    id: 6,
    title: "Python Programming",
    provider: "Udemy",
    skills: "Python | Data Structures | Programming Fundamentals",
    credentialUrl: "https://www.udemy.com/certificate/UC-22e05a2f-2909-4145-8dfd-cf585e231614/",
    logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Udemy_logo.svg/200px-Udemy_logo.svg.png",
  },
]

// Navigation links (these match the section IDs)
export const navLinks = [
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Certifications", href: "#certifications" },
  { name: "Contact", href: "#contact" },
]
