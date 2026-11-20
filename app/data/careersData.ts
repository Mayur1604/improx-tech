export interface JobPosition {
  id: string;
  title: string;
  department: 'Application Engineering' | 'Cloud & DevOps' | 'Data & AI' | 'Quality Engineering';
  location: string;
  type: string;
  experience: string;
  summary: string;
  techStack: string[];
  responsibilities: string[];
  requirements: string[];
}

export const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'senior-fullstack-engineer',
    title: 'Senior Full-Stack Engineer',
    department: 'Application Engineering',
    location: 'Pune Delivery Hub / Hybrid',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Lead the architecture and implementation of scalable web applications and distributed APIs using TypeScript, Next.js, and Node.js.',
    techStack: ['TypeScript', 'Next.js', 'React', 'Node.js', 'PostgreSQL', 'Docker'],
    responsibilities: [
      'Design modular front-end architectures and type-safe backend microservices.',
      'Work directly with client engineering teams in shared Git repositories with two-week sprint cadences.',
      'Conduct rigorous peer code reviews with an emphasis on performance, security, and clean domain boundaries.',
      'Mentor junior engineers and champion clean code standards across application pods.',
    ],
    requirements: [
      'Demonstrated experience building production-grade web applications in TypeScript and React / Next.js.',
      'Strong backend knowledge with Node.js, Go, or Python and relational databases (PostgreSQL/MySQL).',
      'Solid grasp of RESTful APIs, GraphQL schema modeling, and caching strategies (Redis).',
      'Commitment to automated testing (unit, integration, end-to-end) and clean architecture.',
    ],
  },
  {
    id: 'cloud-devsecops-engineer',
    title: 'Cloud & DevSecOps Engineer',
    department: 'Cloud & DevOps',
    location: 'Pune Delivery Hub / Remote Available',
    type: 'Full-Time',
    experience: '3+ Years',
    summary: 'Build and maintain automated continuous integration pipelines, container orchestration, and multi-cloud infrastructure using Terraform and Kubernetes.',
    techStack: ['AWS', 'Kubernetes', 'Terraform', 'Docker', 'GitHub Actions', 'Prometheus'],
    responsibilities: [
      'Author and audit Infrastructure as Code (IaC) using Terraform for reproducible multi-region deployments.',
      'Deploy, monitor, and scale Kubernetes clusters (EKS/GKE) with zero-downtime rolling upgrades.',
      'Implement automated security scanning (SAST/DAST) and vulnerability auditing in CI/CD pipelines.',
      'Configure enterprise observability dashboards, distributed tracing, and SLA alerting with Prometheus & Grafana.',
    ],
    requirements: [
      'Hands-on expertise managing cloud infrastructure on AWS, Google Cloud, or Azure.',
      'Proficiency with Docker containerization, Helm charts, and Kubernetes orchestration in production.',
      'Experience authoring modular Terraform configurations and GitOps workflows.',
      'Strong Linux administration, networking fundamentals (TCP/IP, DNS, TLS), and bash scripting.',
    ],
  },
  {
    id: 'data-platform-engineer',
    title: 'Data Platform & Analytics Engineer',
    department: 'Data & AI',
    location: 'Pune Delivery Hub / Hybrid',
    type: 'Full-Time',
    experience: '4+ Years',
    summary: 'Architect high-throughput streaming pipelines, data lakehouse architectures, and analytics cockpits for data-intensive enterprise platforms.',
    techStack: ['Python', 'PostgreSQL', 'Apache Kafka', 'Redis', 'dbt', 'ClickHouse'],
    responsibilities: [
      'Develop real-time data ingestion and transformation pipelines using Python, Kafka, and modern ETL tooling.',
      'Optimize complex SQL schemas, query execution plans, and indexing strategies for high-volume transactions.',
      'Collaborate with AI engineers to engineer feature stores and semantic retrieval pipelines (RAG).',
      'Ensure data governance, field-level encryption, and strict regulatory compliance (GDPR/HIPAA).',
    ],
    requirements: [
      'Deep fluency in Python and advanced SQL database optimization (PostgreSQL/ClickHouse/Snowflake).',
      'Experience with distributed streaming or message brokers such as Apache Kafka or RabbitMQ.',
      'Familiarity with data modeling, dimensional schemas, and data orchestration tools.',
      'Understanding of modern data security practices and zero-trust data access controls.',
    ],
  },
  {
    id: 'senior-qa-automation-engineer',
    title: 'Senior QA Automation Engineer',
    department: 'Quality Engineering',
    location: 'Pune Delivery Hub / Hybrid',
    type: 'Full-Time',
    experience: '3+ Years',
    summary: 'Ensure rock-solid software quality by developing comprehensive end-to-end, API, and regression test suites integrated into daily delivery cadences.',
    techStack: ['Playwright', 'TypeScript', 'Jest', 'Postman', 'k6', 'CI/CD'],
    responsibilities: [
      'Design, author, and maintain reliable automated end-to-end test suites using Playwright and TypeScript.',
      'Implement API contract testing and performance/load benchmarks using tools like k6.',
      'Integrate test execution into GitHub Actions CI workflows with automated artifact reports.',
      'Partner closely with development pods to define clear acceptance criteria and edge-case test matrices.',
    ],
    requirements: [
      'Strong programming skills in TypeScript or JavaScript for test automation.',
      'Extensive hands-on experience with modern automation frameworks (Playwright, Cypress, or Selenium).',
      'Proficiency in REST/GraphQL API testing, JSON schema validation, and mocking techniques.',
      'Analytical mindset with sharp attention to detail, performance regressions, and security boundaries.',
    ],
  },
];

export const CULTURE_PILLARS = [
  {
    title: 'Direct Repository Ownership',
    description: 'You will work directly inside production client repositories with two-week sprint cadences, visible pull requests, and direct technical collaboration.',
  },
  {
    title: 'Modern Technology Stack',
    description: 'We do not build on deprecated frameworks. Our stack is modern, type-safe, and cloud-native: TypeScript, Next.js, Go, Python, Terraform, and Kubernetes.',
  },
  {
    title: 'Dual-Hub Engineering Cadence',
    description: 'Our Delaware corporate office aligns with international business requirements while our Pune technology center executes with high velocity and discipline.',
  },
  {
    title: 'Focus on Technical Mastery',
    description: 'We invest in our engineers with continuous learning allowances, book budgets, cloud certification sponsorships, and internal architectural seminars.',
  },
];

export const HIRING_STEPS = [
  {
    step: '01',
    title: 'Initial Technical Discussion',
    timeEstimate: '30 mins',
    description: 'A conversation with an engineering lead to discuss your technical background, projects you have shipped, and what you are looking for in your next role.',
  },
  {
    step: '02',
    title: 'Practical Coding / System Pairing',
    timeEstimate: '60 mins',
    description: 'A collaborative, real-world coding or system design exercise. No obscure trivia or algorithmic tricks—we solve genuine engineering problems together.',
  },
  {
    step: '03',
    title: 'Pod Alignment & Culture Chat',
    timeEstimate: '45 mins',
    description: 'Meet future teammates and pod leads. We discuss daily sprint workflows, communication practices, code review expectations, and team dynamics.',
  },
  {
    step: '04',
    title: 'Offer & Transparent Onboarding',
    timeEstimate: '2-3 days',
    description: 'A competitive, clear offer package with comprehensive benefits, followed by structured onboarding and direct pairing with a senior pod engineer.',
  },
];
