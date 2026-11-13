export interface ServiceDetail {
  slug: string;
  title: string;
  category: 'Application Services' | 'Product Engineering' | 'Technology Services' | 'AI & Business Intelligence';
  categoryHref: string;
  tagline: string;
  description: string;
  iconName: string;
  stats: { label: string; value: string }[];
  overview: string[];
  keyCapabilities: { title: string; description: string }[];
  technologies: string[];
  benefits: string[];
  workflow: { step: string; title: string; description: string }[];
}

export const applicationServicesList: ServiceDetail[] = [
  {
    slug: 'custom-software-development',
    title: 'Custom Software Development',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Bespoke software engineered to solve your exact business complexities.',
    description: 'We architect and build tailored software solutions from the ground up, delivering scalable architectures, clean code, and robust security designed specifically around your operational workflows and growth goals.',
    iconName: 'Code2',
    stats: [
      { label: 'Tailored Fit', value: '100%' },
      { label: 'Time to Market', value: '2x Faster' },
      { label: 'Code Quality', value: 'Enterprise Grade' },
      { label: 'IP Ownership', value: 'Complete' }
    ],
    overview: [
      'Off-the-shelf software often forces organizations to compromise on workflows, scalability, and security. Our custom software development service engineers specialized systems tailored precisely to your operational needs.',
      'From complex domain logic to high-reliability transaction engines, our cross-functional engineering teams combine domain discovery with agile delivery to build resilient, maintainable software assets that give you a competitive edge.'
    ],
    keyCapabilities: [
      {
        title: 'Full-Cycle Solution Architecture',
        description: 'End-to-end engineering from requirements modeling and database design to deployment pipelines and continuous support.'
      },
      {
        title: 'Modular & Microservices Architecture',
        description: 'Decoupled, microservice-based or modular monolith architectures designed for zero-downtime scaling and easy feature extension.'
      },
      {
        title: 'Enterprise Security & Compliance',
        description: 'Built-in role-based access control (RBAC), data encryption in transit and at rest, and audit trail logging.'
      },
      {
        title: 'Cross-Platform Interoperability',
        description: 'Seamless integration with existing enterprise ecosystems, databases, legacy infrastructure, and modern cloud platforms.'
      }
    ],
    technologies: ['TypeScript', 'Node.js', 'Python', 'Go', 'React', 'Next.js', 'PostgreSQL', 'Redis', 'Docker', 'Kubernetes'],
    benefits: [
      'Eliminate recurring third-party license bottlenecks',
      'Optimize business operations with custom-tailored automation',
      'Full intellectual property and source code ownership',
      'Infinite scalability without forced vendor upgrades'
    ],
    workflow: [
      { step: '01', title: 'Discovery & Modeling', description: 'Deep architectural discovery, technical requirements analysis, and scope specification.' },
      { step: '02', title: 'Sprint Prototyping', description: 'Iterative sprint milestones with rapid feedback loops and working increment demos.' },
      { step: '03', title: 'Rigorous QA & Security', description: 'Automated unit, integration, stress, and penetration testing.' },
      { step: '04', title: 'Production Deployment', description: 'Zero-downtime release orchestration, observability setup, and knowledge transfer.' }
    ]
  },
  {
    slug: 'enterprise-applications',
    title: 'Enterprise Applications',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'High-availability platforms built for global enterprise scale.',
    description: 'We develop high-throughput enterprise systems capable of orchestrating complex corporate workflows, multi-regional operations, and transaction volumes with high reliability.',
    iconName: 'Building2',
    stats: [
      { label: 'Target Availability', value: 'High Availability' },
      { label: 'Data Throughput', value: 'High Scale' },
      { label: 'Enterprise Security', value: 'Encrypted' },
      { label: 'Multi-Tenant Support', value: 'Native' }
    ],
    overview: [
      'Enterprises require software that withstands scale, compliance audits, and multi-departmental coordination. We engineer scalable enterprise platforms that streamline operations and eliminate data silos.',
      'Our solutions seamlessly connect ERPs, CRMs, data warehouses, and custom operational hubs into unified digital command centers.'
    ],
    keyCapabilities: [
      {
        title: 'Enterprise Resource Orchestration',
        description: 'Comprehensive business process automation, document lifecycle management, and multi-tier approval engines.'
      },
      {
        title: 'High-Concurrency Transaction Engines',
        description: 'Fault-tolerant distributed systems engineered to process high-volume queries and transactions with microsecond latency.'
      },
      {
        title: 'Role-Based Governance & Audit Trails',
        description: 'Granular permissions, comprehensive event logging, and compliance reporting across global teams.'
      },
      {
        title: 'Resilient Cloud & Hybrid Deployment',
        description: 'Active-active multi-region deployments, automated failover, and disaster recovery architectures.'
      }
    ],
    technologies: ['Java / Spring Boot', 'C# / .NET Core', 'Go', 'PostgreSQL', 'Oracle', 'Kafka', 'Kubernetes', 'AWS', 'Azure'],
    benefits: [
      'Consolidate fragmented enterprise workflows into one unified platform',
      'Reduce operational friction and cross-departmental response times',
      'Ensure regulatory adherence with audit logging',
      'Maintain high availability during peak operational loads'
    ],
    workflow: [
      { step: '01', title: 'Enterprise Blueprinting', description: 'Governance planning, workflow mapping, and integration architecture design.' },
      { step: '02', title: 'Core Engine Engineering', description: 'Building high-throughput data processing and business logic cores.' },
      { step: '03', title: 'Integration & Testing', description: 'Interfacing with internal ERPs, CRMs, and enterprise data repositories.' },
      { step: '04', title: 'Rollout & Change Management', description: 'Staged migration, team training, and enterprise monitoring setup.' }
    ]
  },
  {
    slug: 'saas-development',
    title: 'SaaS Development',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Multi-tenant cloud SaaS products engineered for rapid adoption and compounding revenue.',
    description: 'Transform your vision into a production-grade software-as-a-service platform with multi-tenant data isolation, self-serve billing, tiered subscriptions, and automated tenant provisioning.',
    iconName: 'Layers',
    stats: [
      { label: 'Multi-Tenant Isolation', value: 'Strict' },
      { label: 'Billing Integration', value: 'Automated' },
      { label: 'Onboarding Flow', value: 'Self-Serve' },
      { label: 'Release Cadence', value: 'Continuous' }
    ],
    overview: [
      'Building a competitive SaaS product requires more than standard application code; it demands tenant isolation, metering, subscription billing, self-service onboarding, and continuous feature delivery.',
      'We partner with founders and enterprise innovators to build multi-tenant SaaS products from MVP to enterprise-ready tiers with frictionless customer experiences.'
    ],
    keyCapabilities: [
      {
        title: 'Multi-Tenant Architecture',
        description: 'Secure tenant isolation utilizing schema-per-tenant or pooled database strategies with row-level security.'
      },
      {
        title: 'Subscription & Usage-Based Billing',
        description: 'Turnkey integration with Stripe, Chargebee, and Paddle supporting tier upgrades, add-ons, and dynamic usage metering.'
      },
      {
        title: 'Tenant Admin & Self-Service Portals',
        description: 'Customer team management, invite flows, custom roles, API key issuance, and self-serve billing portals.'
      },
      {
        title: 'Product Analytics & Telemetry',
        description: 'Comprehensive telemetry tracking activation rates, user retention, feature adoption, and system health.'
      }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'Stripe', 'Supabase', 'PostgreSQL', 'Tailwind CSS', 'Redis', 'AWS / Vercel'],
    benefits: [
      'Accelerate launch timeline with proven SaaS architectural foundations',
      'Scale from hundreds to hundreds of thousands of users effortlessly',
      'Automate subscription management and revenue operations',
      'Deliver frictionless user onboarding that drives trial conversion'
    ],
    workflow: [
      { step: '01', title: 'SaaS Architecture & Modeling', description: 'Multi-tenancy strategy, billing tier mapping, and user journey design.' },
      { step: '02', title: 'Core Platform Build', description: 'Authentication, tenant workspace isolation, billing hooks, and core features.' },
      { step: '03', title: 'B2B Enterprise Readiness', description: 'SSO (SAML/Okta), audit trails, team management, and API access.' },
      { step: '04', title: 'Launch & Growth Instrumentation', description: 'Analytics setup, onboarding optimization, and production monitoring.' }
    ]
  },
  {
    slug: 'mobile-app-development',
    title: 'Mobile App Development',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'High-performance native and cross-platform apps that delight users.',
    description: 'We develop intuitive, high-performance mobile applications for iOS and Android utilizing React Native, Flutter, and native toolchains with fluid animations and offline-first capabilities.',
    iconName: 'Smartphone',
    stats: [
      { label: 'Platforms', value: 'iOS & Android' },
      { label: 'Frame Rate', value: '60 FPS Smooth' },
      { label: 'Store Approval', value: 'App Store Compliant' },
      { label: 'Offline Support', value: 'Native Cache' }
    ],
    overview: [
      'Mobile devices are the primary touchpoint for modern consumers and business users. We create mobile experiences that combine platform-native feel, fluid 60fps animations, and dependable offline performance.',
      'Whether building consumer-facing lifestyle apps or operational field agent tools, our mobile engineering emphasizes speed, battery efficiency, and intuitive ergonomics.'
    ],
    keyCapabilities: [
      {
        title: 'Cross-Platform Frameworks (React Native / Flutter)',
        description: 'Single codebase efficiency with 100% native performance across Apple App Store and Google Play.'
      },
      {
        title: 'Offline-First & Background Sync',
        description: 'Local SQLite/WatermelonDB storage with resilient background synchronization when connectivity resumes.'
      },
      {
        title: 'Hardware & Sensor Integration',
        description: 'Flawless hardware connectivity: Camera, Biometrics (FaceID/TouchID), Bluetooth LE, GPS, and Push Notifications.'
      },
      {
        title: 'App Store Optimization & Deployment',
        description: 'End-to-end guidance through Apple App Store and Google Play guidelines, certifications, and release management.'
      }
    ],
    technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'TypeScript', 'Firebase', 'GraphQL', 'Tailwind / React Native Paper'],
    benefits: [
      'Halve development costs with unified cross-platform codebases',
      'Boost retention with ultra-responsive 60fps user interactions',
      'Empower mobile teams with offline-ready data capture',
      'Streamline release cycles with automated CI/CD for app stores'
    ],
    workflow: [
      { step: '01', title: 'Mobile UX & Device Ergonomics', description: 'Touch ergonomics, gesture architecture, and native UI patterns.' },
      { step: '02', title: 'Component & State Engineering', description: 'Robust local caching, navigation graphs, and API client layers.' },
      { step: '03', title: 'Device Lab Testing', description: 'Automated testing across dozens of screen sizes and OS versions.' },
      { step: '04', title: 'App Store Submission', description: 'App Store and Google Play review preparation and launch support.' }
    ]
  },
  {
    slug: 'web-applications',
    title: 'Web Applications',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Modern, ultra-fast web applications built for engagement and conversion.',
    description: 'We engineer dynamic, secure, and lightning-fast web applications utilizing modern component frameworks, server-side rendering, and responsive design systems.',
    iconName: 'Globe',
    stats: [
      { label: 'Lighthouse Score', value: '95+' },
      { label: 'Responsive', value: 'Mobile to 4K' },
      { label: 'Rendering', value: 'SSR & Edge' },
      { label: 'Security', value: 'OWASP Compliant' }
    ],
    overview: [
      'The modern web demands lightning speed, intuitive interactivity, and seamless responsiveness across any screen size. We build web applications that deliver instant loads and desktop-app fluidity in the browser.',
      'Leveraging modern architectures like React 19, Next.js, and edge networks, our web apps rank high on Core Web Vitals and drive measurable user conversion.'
    ],
    keyCapabilities: [
      {
        title: 'Server-Side Rendering & Edge Delivery',
        description: 'Combining dynamic server-rendered speeds with instant edge caching for optimal SEO and real-time responsiveness.'
      },
      {
        title: 'Single-Page & Progressive Web Apps (PWA)',
        description: 'App-like offline experiences with service workers, instant caching, and desktop/home screen installation.'
      },
      {
        title: 'Accessible & Design-System Driven UI',
        description: 'Pixel-perfect UI built to WCAG 2.1 AA accessibility standards with reusable, themed component libraries.'
      },
      {
        title: 'Real-Time State & WebSockets',
        description: 'Live collaboration, instant messaging, and interactive dashboards powered by WebSockets and event streams.'
      }
    ],
    technologies: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'GraphQL', 'WebSockets', 'Vercel / Cloudflare'],
    benefits: [
      'Achieve top Core Web Vitals scores for superior organic search visibility',
      'Deliver fluid, frictionless user experiences that reduce drop-off',
      'Maintain unified brand consistency across all digital touchpoints',
      'Scale effortlessly across global users without latency degradation'
    ],
    workflow: [
      { step: '01', title: 'Information Architecture', description: 'User flow mapping, wireframing, and component library definition.' },
      { step: '02', title: 'Frontend & API Implementation', description: 'Full-stack Next.js build with optimized state and server actions.' },
      { step: '03', title: 'Cross-Browser Optimization', description: 'Rigorous cross-browser, responsive breakpoint, and performance tuning.' },
      { step: '04', title: 'Edge Deployment', description: 'Global CDN distribution, automated cache invalidation, and analytics.' }
    ]
  },
  {
    slug: 'cloud-applications',
    title: 'Cloud Applications',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Resilient, elastic cloud-native architectures engineered for infinite scale.',
    description: 'Design, develop, and migrate to cloud-native applications utilizing microservices, serverless functions, and managed cloud databases on AWS, Azure, and Google Cloud.',
    iconName: 'Cloud',
    stats: [
      { label: 'Scalability', value: 'Elastic Auto' },
      { label: 'Infra as Code', value: '100% Terraform' },
      { label: 'Cost Efficiency', value: 'Up to 40% Saved' },
      { label: 'Disaster Recovery', value: 'Multi-AZ' }
    ],
    overview: [
      'Cloud-native architectures liberate applications from hardware limitations, allowing resources to expand dynamically with traffic and contract during lulls to control expenditure.',
      'We build cloud-native applications engineered for containerized orchestration, infrastructure-as-code automation, and automated multi-zone failover.'
    ],
    keyCapabilities: [
      {
        title: 'Microservices & Containerization',
        description: 'Containerized workloads packaged with Docker and orchestrated with Kubernetes for portable, reliable scaling.'
      },
      {
        title: 'Serverless & Event-Driven Systems',
        description: 'Event-driven architectures using AWS Lambda, Azure Functions, and Cloud Events for high-scale, zero-idle-cost computation.'
      },
      {
        title: 'Infrastructure as Code (IaC)',
        description: 'Reproducible, version-controlled cloud environments provisioned via Terraform and AWS CDK.'
      },
      {
        title: 'Cloud Cost Optimization & FinOps',
        description: 'Architectural audits to right-size compute, eliminate idle capacity, and reduce cloud bills.'
      }
    ],
    technologies: ['AWS', 'Google Cloud', 'Microsoft Azure', 'Docker', 'Kubernetes', 'Terraform', 'Lambda', 'PostgreSQL Aurora'],
    benefits: [
      'Handle unpredictable traffic spikes without performance bottlenecks',
      'Pay only for the exact computing capacity your workloads consume',
      'Deploy reproducible environments in minutes with code-driven infra',
      'Achieve high resilience with automated cross-availability-zone failovers'
    ],
    workflow: [
      { step: '01', title: 'Cloud Architecture Design', description: 'Well-Architected Framework review, sizing, and security perimeter design.' },
      { step: '02', title: 'IaC & Containerization', description: 'Provisioning declarative cloud resources and container build pipelines.' },
      { step: '03', title: 'Microservice Deployment', description: 'Deploying service meshes, ingress controllers, and secret managers.' },
      { step: '04', title: 'Observability & FinOps', description: 'Distributed tracing (OpenTelemetry), log centralization, and cost alerts.' }
    ]
  },
  {
    slug: 'api-development',
    title: 'API Development',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Secure, high-speed RESTful and GraphQL APIs powering modern digital ecosystems.',
    description: 'We design and implement robust, versioned, and documented APIs that allow web, mobile, and third-party partners to communicate seamlessly with enterprise security.',
    iconName: 'Cpu',
    stats: [
      { label: 'P99 Latency', value: '<50ms' },
      { label: 'Documentation', value: 'OpenAPI 3.0' },
      { label: 'Rate Limiting', value: 'Distributed' },
      { label: 'Auth Protocols', value: 'OAuth2 / OIDC' }
    ],
    overview: [
      'APIs are the digital nervous system of modern software. We build fast, reliable, and strictly typed APIs that simplify integrations and empower developer ecosystems.',
      'With automated rate-limiting, comprehensive OpenAPI/Swagger documentation, and OAuth2 security, our APIs serve billions of requests securely.'
    ],
    keyCapabilities: [
      {
        title: 'RESTful & GraphQL API Architecture',
        description: 'Clean endpoint contracts with predictable resource modeling, semantic HTTP codes, and efficient GraphQL queries.'
      },
      {
        title: 'API Gateway & Traffic Management',
        description: 'Centralized token validation, distributed rate limiting, throttling, and request routing.'
      },
      {
        title: 'Interactive OpenAPI Documentation',
        description: 'Self-generating Swagger/OpenAPI documentation and client SDK generation for partner developers.'
      },
      {
        title: 'Zero-Trust API Security',
        description: 'mTLS, JWT validation, cryptographic signature verification, and automated vulnerability scanning.'
      }
    ],
    technologies: ['Node.js', 'Go', 'GraphQL', 'Express', 'FastAPI', 'Redis', 'PostgreSQL', 'Kong Gateway', 'Swagger'],
    benefits: [
      'Accelerate mobile and frontend teams with predictable API contracts',
      'Monetize data and services with partner-facing API developer portals',
      'Protect backend systems from abusive bursts with smart rate limiting',
      'Eliminate versioning chaos with backwards-compatible API evolutions'
    ],
    workflow: [
      { step: '01', title: 'Contract-First Specification', description: 'Design OpenAPI / schema specifications before writing backend code.' },
      { step: '02', title: 'High-Throughput Implementation', description: 'Building low-latency database queries and cached response layers.' },
      { step: '03', title: 'Stress & Vulnerability Testing', description: 'Fuzz testing, load testing up to thousands of RPS, and OWASP API audits.' },
      { step: '04', title: 'Gateway Orchestration', description: 'Deploying gateway filters, automated analytics, and monitoring.' }
    ]
  },
  {
    slug: 'system-integration',
    title: 'System Integration',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Connect disparate systems, SaaS tools, and databases into a synchronized ecosystem.',
    description: 'Break down operational silos by connecting ERPs, CRMs, custom databases, and external cloud services with reliable ETL pipelines, webhooks, and message brokers.',
    iconName: 'ShieldCheck',
    stats: [
      { label: 'Data Sync', value: 'Real-Time' },
      { label: 'Architecture', value: 'Decoupled' },
      { label: 'Reliability', value: 'High Delivery' },
      { label: 'Integrations', value: 'Standard & Custom' }
    ],
    overview: [
      'Organizations lose thousands of hours manually copying data between legacy ERPs, CRM platforms, accounting software, and modern cloud apps. We engineer robust integration pipelines that synchronize your systems in real-time.',
      'Our event-driven integration bridges ensure that when an action happens in one platform, every downstream system updates instantly with zero data loss.'
    ],
    keyCapabilities: [
      {
        title: 'Enterprise ERP & CRM Connectors',
        description: 'Bi-directional integrations for Salesforce, SAP, NetSuite, HubSpot, Microsoft Dynamics, and custom backends.'
      },
      {
        title: 'Event-Driven Message Brokers',
        description: 'Reliable asynchronous message queues using Apache Kafka and RabbitMQ with guaranteed message ordering and dead-letter queues.'
      },
      {
        title: 'Automated ETL & Data Harmonization',
        description: 'Data transformation engines that cleanse, map, and synchronize mismatched schemas between platforms.'
      },
      {
        title: 'Self-Healing Webhook Infrastructure',
        description: 'Resilient webhook listener systems with exponential backoff retries and idempotent payload processing.'
      }
    ],
    technologies: ['Apache Kafka', 'RabbitMQ', 'PostgreSQL', 'Python', 'Node.js', 'AWS EventBridge', 'Redis', 'Docker'],
    benefits: [
      'Eliminate redundant manual data entry and human operational errors',
      'Gain unified, real-time executive visibility across all departments',
      'Ensure zero data loss during network disruptions with message queues',
      'Accelerate business processes from days to seconds with instant sync'
    ],
    workflow: [
      { step: '01', title: 'Data Flow & Schema Mapping', description: 'Cataloging system endpoints, payload structures, and sync frequencies.' },
      { step: '02', title: 'Broker & Pipeline Construction', description: 'Building resilient message queues and idempotent data transformers.' },
      { step: '03', title: 'Failure Mode Testing', description: 'Simulating network outages and verifying automatic dead-letter recovery.' },
      { step: '04', title: 'Production Sync & Monitoring', description: 'Phased cutover, sync verification, and anomaly alert configurations.' }
    ]
  },
  {
    slug: 'legacy-modernization',
    title: 'Legacy Modernization',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Modernize legacy codebases and architectures with zero operational downtime.',
    description: 'De-risk and accelerate your legacy migration. We incrementally transform outdated monoliths into modular cloud-native services using proven strangler patterns.',
    iconName: 'RefreshCw',
    stats: [
      { label: 'Downtime', value: 'Zero Minutes' },
      { label: 'Maintenance Cost', value: '-60% Reduction' },
      { label: 'Dev Velocity', value: '3x Speedup' },
      { label: 'Architecture', value: 'Modern Cloud' }
    ],
    overview: [
      'Outdated systems drain maintenance budgets, create severe security vulnerabilities, and make hiring new engineers difficult. However, full "rip-and-replace" rewrites carry huge business risks.',
      'We use proven incremental refactoring methodologies—like the Strangler Fig pattern—to systematically replace legacy modules with modern services without disrupting ongoing business operations.'
    ],
    keyCapabilities: [
      {
        title: 'Strangler Fig Pattern Migration',
        description: 'Deconstruct monoliths piece by piece, routing traffic to new microservices while the legacy core runs uninterrupted.'
      },
      {
        title: 'Monolith to Microservices / Modular Code',
        description: 'Re-architecting spaghetti codebases into cleanly decoupled domains with strict interface contracts.'
      },
      {
        title: 'Database & Schema Modernization',
        description: 'Migrating legacy on-premise databases to modern cloud-native distributed databases with zero data loss.'
      },
      {
        title: 'Automated Test Harness Generation',
        description: 'Surrounding legacy logic with automated characterization tests to guarantee behavioral parity.'
      }
    ],
    technologies: ['Next.js', 'React', 'Node.js', 'TypeScript', 'Go', 'Docker', 'Kubernetes', 'PostgreSQL', 'AWS / Azure'],
    benefits: [
      'Slash ballooning maintenance costs and vendor legacy support fees',
      'Accelerate feature release velocity from months to days',
      'Eliminate critical security vulnerabilities in outdated runtimes',
      'Attract top engineering talent to a modern, productive tech stack'
    ],
    workflow: [
      { step: '01', title: 'Legacy Codebase Audit', description: 'Mapping technical debt, dependencies, business logic, and security risks.' },
      { step: '02', title: 'Migration Roadmap', description: 'Prioritizing modules for extraction based on business ROI and risk.' },
      { step: '03', title: 'Incremental Extraction', description: 'Building modern replacement microservices and routing live traffic.' },
      { step: '04', title: 'Legacy Sunset', description: 'Retiring outdated servers and celebrating fully modernized operations.' }
    ]
  },
  {
    slug: 'maintenance-support',
    title: 'Maintenance & Support',
    category: 'Application Services',
    categoryHref: '/application-services',
    tagline: 'Proactive 24/7 monitoring, security patching, and continuous performance tuning.',
    description: 'Keep your digital systems secure, fast, and continuously available with dedicated SLA-backed engineering support, proactive monitoring, and regular dependency upgrades.',
    iconName: 'Wrench',
    stats: [
      { label: 'SLA Response', value: '<15 Mins' },
      { label: 'System Uptime', value: 'High Availability' },
      { label: 'Monitoring', value: '24/7/365' },
      { label: 'Security Audits', value: 'Continuous' }
    ],
    overview: [
      'Launching software is only the beginning. Without proactive maintenance, applications suffer performance degradation, accumulating security vulnerabilities and library obsolescence.',
      'Our dedicated maintenance and support engineers provide continuous round-the-clock stewardship, ensuring your systems remain fast, secure, and fully aligned with evolving business needs.'
    ],
    keyCapabilities: [
      {
        title: '24/7 Incident Response & SLA Guarantees',
        description: 'Dedicated on-call engineers with rapid response SLAs to diagnose and resolve production incidents immediately.'
      },
      {
        title: 'Proactive Vulnerability & Dependency Patching',
        description: 'Continuous scanning for CVEs and proactive updates to frameworks, databases, and dependencies.'
      },
      {
        title: 'Performance Monitoring & Query Optimization',
        description: 'Continuous APM profiling to catch slow queries, memory leaks, and throughput bottlenecks before users notice.'
      },
      {
        title: 'Disaster Recovery & Backup Drills',
        description: 'Automated encrypted backups and periodic restoration drills ensuring complete operational peace of mind.'
      }
    ],
    technologies: ['Datadog', 'Sentry', 'Prometheus', 'Grafana', 'PagerDuty', 'New Relic', 'Docker', 'AWS CloudWatch'],
    benefits: [
      'Eliminate costly downtime with round-the-clock proactive monitoring',
      'Shield enterprise operations against evolving zero-day cyber threats',
      'Free your internal engineering teams to focus exclusively on new features',
      'Extend the operational lifespan and performance of existing software'
    ],
    workflow: [
      { step: '01', title: 'Telemetry & Alert Setup', description: 'Configuring APM monitoring, error logging, and on-call escalation policies.' },
      { step: '02', title: 'Routine Health Checks', description: 'Weekly patch applications, dependency audits, and database vacuuming.' },
      { step: '03', title: 'Incident Resolution', description: 'Immediate diagnosis, hotfix deployment, and blameless post-mortem analysis.' },
      { step: '04', title: 'Monthly Executive Reports', description: 'Transparent reporting on uptime, response metrics, and optimization recommendations.' }
    ]
  }
];

export const productEngineeringList: ServiceDetail[] = [
  {
    slug: 'product-strategy',
    title: 'Product Strategy',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Transform market insights into actionable product roadmaps and high-growth engineering blueprints.',
    description: 'We align user needs, business models, and technical feasibility to define winning product strategies that minimize launch risk and maximize long-term market traction.',
    iconName: 'Lightbulb',
    stats: [
      { label: 'Market Alignment', value: '100%' },
      { label: 'Risk Mitigation', value: 'Validated' },
      { label: 'Roadmap Clarity', value: 'Quarterly Sprints' },
      { label: 'Time to Value', value: 'Compressed' }
    ],
    overview: [
      'Great products are never built by accident. They emerge from a rigorous understanding of customer pain points, competitive positioning, and technical possibilities.',
      'Our product strategy discipline bridges vision and execution, transforming broad business objectives into concrete product requirements, prioritized roadmaps, and measurable KPIs.'
    ],
    keyCapabilities: [
      {
        title: 'Market Discovery & Competitor Benchmarking',
        description: 'In-depth analysis of target user segments, alternative solutions, and untapped market opportunities.'
      },
      {
        title: 'Product Vision & OKR Frameworks',
        description: 'Defining crisp value propositions, measurable Objectives and Key Results, and North Star metrics.'
      },
      {
        title: 'Feature Prioritization & MVP Scoping',
        description: 'Data-driven feature scoring (RICE / Kano models) ensuring high-impact value delivery with minimal initial waste.'
      },
      {
        title: 'Technical Feasibility & Architecture Sizing',
        description: 'Evaluating infrastructure costs, scalability requirements, and technology selections early in the lifecycle.'
      }
    ],
    technologies: ['ProductBoard', 'Jira', 'Figma', 'Miro', 'Mixpanel', 'Amplitude', 'Notion', 'Google Analytics 4'],
    benefits: [
      'Avoid building costly features that customers will not adopt',
      'Unite stakeholders, designers, and developers around a clear roadmap',
      'Accelerate investor buy-in with validated customer research',
      'Shorten time to product-market fit through rapid validation loops'
    ],
    workflow: [
      { step: '01', title: 'Stakeholder & User Interviews', description: 'Uncovering core business objectives and real customer friction points.' },
      { step: '02', title: 'Opportunity Space Mapping', description: 'Synthesizing insights into prioritized problem-solution matrices.' },
      { step: '03', title: 'Roadmap & Architecture Blueprint', description: 'Translating strategy into user stories, technical specs, and milestones.' },
      { step: '04', title: 'Iterative Review & Feedback', description: 'Continuous hypothesis testing and roadmap adjustments based on real usage data.' }
    ]
  },
  {
    slug: 'ui-ux-design',
    title: 'UI/UX Design',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Human-centric, visually compelling interfaces that make complex software intuitive.',
    description: 'We design modern, delightful user interfaces and frictionless digital journeys backed by cognitive research, design systems, and rapid user testing.',
    iconName: 'Palette',
    stats: [
      { label: 'Usability Score', value: 'Top 5%' },
      { label: 'Design System', value: 'Atomic & Tokens' },
      { label: 'User Retention', value: '+45% Boost' },
      { label: 'Accessibility', value: 'WCAG 2.1 AA' }
    ],
    overview: [
      'Exceptional software design makes complicated tasks feel effortless. We design digital products that captivate users, eliminate cognitive friction, and drive business conversion.',
      'From wireframes to production-ready design tokens in Figma, our UI/UX team delivers comprehensive design systems that engineers love to build and users love to explore.'
    ],
    keyCapabilities: [
      {
        title: 'User Journey & Interaction Architecture',
        description: 'Mapping user mental models, information architecture, and multi-step workflows to eliminate dead-ends.'
      },
      {
        title: 'Scalable Design Systems & Component Libraries',
        description: 'Atomic design tokens, typography scales, accessibility contrasts, and interactive components in Figma.'
      },
      {
        title: 'High-Fidelity Interactive Prototyping',
        description: 'Clickable, animated prototypes that feel like real applications for stakeholder validation and user testing.'
      },
      {
        title: 'Accessibility & Usability Audits',
        description: 'Comprehensive reviews ensuring full compliance with WCAG 2.1 AA standards and universal usability.'
      }
    ],
    technologies: ['Figma', 'FigJam', 'Adobe Creative Suite', 'Principle', 'Storybook', 'Tailwind CSS', 'Zeroheight'],
    benefits: [
      'Increase customer conversion and product adoption metrics',
      'Drastically reduce user onboarding time and support tickets',
      'Speed up development velocity with reusable component systems',
      'Elevate enterprise brand prestige with polished visual design'
    ],
    workflow: [
      { step: '01', title: 'User Research & Personas', description: 'Empathy mapping, workflow observation, and task analysis.' },
      { step: '02', title: 'Wireframing & Information Hierarchy', description: 'Low-fidelity layout exploration and interaction flow modeling.' },
      { step: '03', title: 'Visual Design & Design System', description: 'High-fidelity styling, typography, micro-interactions, and tokenization.' },
      { step: '04', title: 'Design Handoff & QA Support', description: 'Detailed developer specifications, asset exports, and design QA.' }
    ]
  },
  {
    slug: 'rapid-prototyping',
    title: 'Rapid Prototyping',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Validate product hypotheses in days, not months, with functional interactive prototypes.',
    description: 'We build high-velocity functional prototypes and clickable MVPs that let you test product concepts with real users and investors before committing to full-scale development.',
    iconName: 'Zap',
    stats: [
      { label: 'Turnaround', value: '1-2 Weeks' },
      { label: 'User Feedback', value: 'Direct' },
      { label: 'Cost Efficiency', value: 'High' },
      { label: 'Validation Rate', value: 'Accelerated' }
    ],
    overview: [
      'The biggest risk in product engineering is building the wrong thing. Rapid prototyping replaces speculation with tangible evidence by testing interactive solutions with actual end-users in days.',
      'We combine rapid design sprints with lightweight engineering frameworks to build functioning prototypes that prove market viability and unlock stakeholder capital.'
    ],
    keyCapabilities: [
      {
        title: 'Clickable Concept Proofs',
        description: 'Realistic interactive simulations of complex workflows for customer demonstrations and validation interviews.'
      },
      {
        title: 'Functional Proof of Concept (PoC)',
        description: 'Targeted code prototypes testing risky technical integrations, algorithm speeds, or data constraints.'
      },
      {
        title: 'User Testing & Telemetry Collection',
        description: 'Moderated and unmoderated user testing sessions capturing qualitative insights and interaction heatmaps.'
      },
      {
        title: 'MVP Scope Blueprinting',
        description: 'Refining the exact feature set required for a successful public beta based on prototype feedback.'
      }
    ],
    technologies: ['Figma', 'Next.js', 'React', 'Tailwind CSS', 'Vercel', 'Supabase', 'Maze', 'Loom'],
    benefits: [
      'De-risk major capital investments before committing engineering teams',
      'Win executive stakeholder and investor backing with working demos',
      'Identify and fix critical UX flaws early when changes cost pennies',
      'Cut time to market by entering development with validated specs'
    ],
    workflow: [
      { step: '01', title: 'Sprint Problem Definition', description: 'Pinpointing the exact questions, hypotheses, and assumptions to test.' },
      { step: '02', title: 'Rapid Prototype Construction', description: 'Rapid 3-to-5-day design and build sprint for interactive flows.' },
      { step: '03', title: 'User Testing Sessions', description: 'Testing the prototype with target users and recording friction points.' },
      { step: '04', title: 'Findings & Product Roadmap', description: 'Synthesizing takeaways into an engineering-ready MVP specification.' }
    ]
  },
  {
    slug: 'qa-testing',
    title: 'QA & Testing',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Comprehensive automated and manual quality engineering ensuring flawless releases.',
    description: 'Ensure bug-free, resilient software with end-to-end automated testing, load simulation, cross-platform regression suites, and continuous security validation.',
    iconName: 'CheckCircle2',
    stats: [
      { label: 'Test Coverage', value: '85%+' },
      { label: 'Defect Escape Rate', value: '<0.1%' },
      { label: 'Test Execution', value: 'Automated CI' },
      { label: 'Performance Audits', value: 'Continuous' }
    ],
    overview: [
      'Software defects harm user trust, derail sprint momentum, and cause costly operational outages. Our quality engineering practice embeds testing into every phase of development.',
      'From unit test suites and automated Cypress/Playwright integration tests to stress testing under simulated peak loads, we guarantee your applications perform reliably under all circumstances.'
    ],
    keyCapabilities: [
      {
        title: 'End-to-End Automated Testing',
        description: 'Resilient test suites built with Playwright and Cypress that catch regressions before they reach staging.'
      },
      {
        title: 'API & Contract Testing',
        description: 'Automated validation of API contracts, payload schemas, and response times with Postman and Jest.'
      },
      {
        title: 'Performance & Stress Simulation',
        description: 'High-concurrency load testing utilizing k6 and JMeter to identify database deadlocks and latency spikes.'
      },
      {
        title: 'Cross-Device & Browser Matrix',
        description: 'Comprehensive cross-browser and mobile OS verification ensuring pixel-perfect rendering everywhere.'
      }
    ],
    technologies: ['Playwright', 'Cypress', 'Jest', 'k6', 'JMeter', 'Postman', 'GitHub Actions', 'BrowserStack'],
    benefits: [
      'Deploy to production with confidence multiple times a day',
      'Prevent embarrassing regressions from ever reaching your users',
      'Drastically reduce manual testing overhead and QA bottlenecks',
      'Verify that systems remain rock-solid during high-traffic flash events'
    ],
    workflow: [
      { step: '01', title: 'Test Strategy & Test Plan', description: 'Mapping risk zones, compliance requirements, and test automation matrices.' },
      { step: '02', title: 'Automation Suite Engineering', description: 'Writing maintainable test scripts with Page Object Models in Playwright.' },
      { step: '03', title: 'CI/CD Pipeline Integration', description: 'Configuring automated test gates blocking pull requests with regressions.' },
      { step: '04', title: 'Load & Security Drills', description: 'Conducting periodic stress tests and vulnerability assessments.' }
    ]
  },
  {
    slug: 'devops-cicd',
    title: 'DevOps & CI/CD',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Streamline delivery pipelines, automate deployments, and build resilient infrastructure.',
    description: 'Empower your developers to ship features safely and continuously with automated testing pipelines, Infrastructure as Code, container orchestration, and zero-downtime releases.',
    iconName: 'GitMerge',
    stats: [
      { label: 'Deployment Time', value: '<10 Mins' },
      { label: 'Failure Rate', value: '<1%' },
      { label: 'Rollback Speed', value: 'Instant' },
      { label: 'Automation', value: '100% Code' }
    ],
    overview: [
      'Slow, manual deployments cause release anxiety and waste valuable developer hours. Modern software engineering thrives on automated, dependable deployment pipelines.',
      'We build high-performance CI/CD pipelines, containerized Kubernetes environments, and GitOps workflows that let your team ship code from commit to production with total confidence.'
    ],
    keyCapabilities: [
      {
        title: 'Automated CI/CD Delivery Pipelines',
        description: 'Fast, parallelized build, test, and container packaging pipelines using GitHub Actions, GitLab CI, and ArgoCD.'
      },
      {
        title: 'Zero-Downtime Deployment Strategies',
        description: 'Blue-green and canary release orchestration ensuring zero dropped connections during software updates.'
      },
      {
        title: 'Kubernetes & Container Orchestration',
        description: 'Production-ready Kubernetes clusters configured with auto-scaling, ingress routing, and secret management.'
      },
      {
        title: 'Complete GitOps & Infrastructure as Code',
        description: 'All cloud resources and infrastructure tracked as version-controlled code using Terraform and OpenTofu.'
      }
    ],
    technologies: ['GitHub Actions', 'Docker', 'Kubernetes', 'Terraform', 'ArgoCD', 'Helm', 'AWS', 'Datadog', 'Prometheus'],
    benefits: [
      'Accelerate release frequency from once a month to multiple times a day',
      'Roll back failed releases instantly with zero impact on end users',
      'Eliminate "works on my machine" issues with standardized containers',
      'Empower developers to self-serve preview environments on every PR'
    ],
    workflow: [
      { step: '01', title: 'DevOps Maturity Assessment', description: 'Auditing existing release workflows, bottlenecks, and manual steps.' },
      { step: '02', title: 'Pipeline Architecture & IaC', description: 'Writing reusable CI/CD workflows and declarative infrastructure scripts.' },
      { step: '03', title: 'Canary & Staging Setup', description: 'Configuring isolated environments with automated branch previews.' },
      { step: '04', title: 'Observability & Runbooks', description: 'Setting up monitoring, alerts, automated rollbacks, and team training.' }
    ]
  },
  {
    slug: 'opensource-engineering',
    title: 'Opensource Engineering',
    category: 'Product Engineering',
    categoryHref: '/product-engineering',
    tagline: 'Harness the power of open source to build enterprise-grade, lock-in-free technology.',
    description: 'We help enterprises integrate, customize, and contribute to cutting-edge open-source software, avoiding expensive vendor lock-in while ensuring strict governance and security.',
    iconName: 'Terminal',
    stats: [
      { label: 'Vendor Lock-In', value: '0%' },
      { label: 'License Compliance', value: '100%' },
      { label: 'Customization', value: 'Unrestricted' },
      { label: 'Ecosystem', value: 'Global Scale' }
    ],
    overview: [
      'Open-source technologies power the most innovative software ecosystems on earth. However, enterprise adoption requires careful license compliance, security vetting, and custom integration.',
      'We guide companies in adopting, adapting, and contributing to open-source platforms—giving you full control over your technology stack without paying crippling proprietary license fees.'
    ],
    keyCapabilities: [
      {
        title: 'Open-Source Stack Audits & Governance',
        description: 'Scanning dependencies for permissive (MIT, Apache 2.0) vs viral (GPL) licenses to protect intellectual property.'
      },
      {
        title: 'Custom Extensions & Internal Forks',
        description: 'Building custom plugins, upstream patches, and private forks tailored to unique enterprise business logic.'
      },
      {
        title: 'CVE Vulnerability Hardening',
        description: 'Proactively patching open-source libraries and implementing zero-trust perimeter firewalls.'
      },
      {
        title: 'Community Contribution & Upstreaming',
        description: 'Contributing fixes upstream to reduce technical debt and maintain compatibility with future releases.'
      }
    ],
    technologies: ['Linux', 'Kubernetes', 'PostgreSQL', 'Redis', 'Node.js', 'React', 'OpenTelemetry', 'Apache Kafka'],
    benefits: [
      'Free your organization from expensive proprietary vendor lock-in',
      'Gain full visibility and control down to the source code level',
      'Benefit from continuous innovation driven by millions of global developers',
      'Ensure strict enterprise compliance and zero license infringement'
    ],
    workflow: [
      { step: '01', title: 'Open-Source Landscape Analysis', description: 'Evaluating top open-source alternatives against business requirements.' },
      { step: '02', title: 'Security & License Vetting', description: 'Software Bill of Materials (SBOM) review and security hardening.' },
      { step: '03', title: 'Custom Extension Development', description: 'Writing integration layers, adapters, and custom enterprise modules.' },
      { step: '04', title: 'Ongoing Upstream Synchronization', description: 'Monitoring upstream releases and maintaining continuous security patches.' }
    ]
  }
];

export const technologyServicesList: ServiceDetail[] = [
  {
    slug: 'cloud-migration',
    title: 'Cloud Migration',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'Frictionless, secure enterprise migration to AWS, Azure, and Google Cloud.',
    description: 'We help organizations transition legacy on-premise infrastructure and workloads to modern cloud platforms with minimal disruption, enhanced security, and predictable costs.',
    iconName: 'Cloud',
    stats: [
      { label: 'Migration SLA', value: 'Zero Loss' },
      { label: 'Infrastructure Savings', value: 'Up to 35%' },
      { label: 'Certified Architects', value: 'Multi-Cloud' },
      { label: 'Security Baseline', value: 'Hardened' }
    ],
    overview: [
      'Migrating enterprise workloads requires meticulous planning, security auditing, and phased cutover execution. We provide proven 7-R migration frameworks that de-risk data transfer and optimize cloud computing spend.',
      'From re-hosting physical servers to re-architecting applications for cloud-native elasticity, our certified cloud architects guide your team at every stage.'
    ],
    keyCapabilities: [
      {
        title: 'Cloud Readiness Assessment & TCO Modeling',
        description: 'Comprehensive inventory auditing, dependency mapping, and financial total-cost-of-ownership modeling.'
      },
      {
        title: 'Database & Large-Scale Data Migration',
        description: 'Zero-downtime replication of terabyte-scale relational and non-relational databases to cloud-managed stores.'
      },
      {
        title: 'Hybrid Cloud & Landing Zone Architecture',
        description: 'Secure multi-account AWS Organizations / Azure Landing Zones with automated guardrails and IAM governance.'
      },
      {
        title: 'Post-Migration Optimization & FinOps',
        description: 'Continuous cost tracking, reservation purchasing strategies, and automated scaling policies.'
      }
    ],
    technologies: ['AWS', 'Microsoft Azure', 'Google Cloud', 'Terraform', 'AWS DMS', 'Velostrata', 'CloudEndure', 'Docker'],
    benefits: [
      'Retire aging data center contracts and capital hardware expenses',
      'Achieve enterprise elasticity during peak seasonal business loads',
      'Fortify data residency compliance and business continuity disaster recovery',
      'Accelerate feature deployment cycles on modern managed cloud services'
    ],
    workflow: [
      { step: '01', title: 'Discovery & Readiness', description: 'Mapping workloads, server dependencies, and security boundaries.' },
      { step: '02', title: 'Landing Zone Foundation', description: 'Building secure networks, VPN/Direct Connect, and IAM policies.' },
      { step: '03', title: 'Phased Migration Sprints', description: 'Piloting non-critical apps followed by core transactional engines.' },
      { step: '04', title: 'Cutover & FinOps Tuning', description: 'DNS cutovers, integrity verification, and cost rightsizing.' }
    ]
  },
  {
    slug: 'devsecops',
    title: 'DevSecOps',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'Embed security seamlessly into every phase of your software delivery pipeline.',
    description: 'Shift security left by integrating automated vulnerability scanning, container security, secret management, and compliance guardrails directly into your CI/CD pipelines.',
    iconName: 'ShieldCheck',
    stats: [
      { label: 'Vulnerability Catch', value: 'Pre-Production' },
      { label: 'Audit Readiness', value: 'Continuous' },
      { label: 'Pipeline Speed', value: 'Zero Slowdown' },
      { label: 'Compliance', value: 'Automated' }
    ],
    overview: [
      'Bolting security on as an afterthought causes release delays and leaves dangerous blind spots. DevSecOps embeds automated security gates directly into developers pull requests and build stages.',
      'Our DevSecOps engineers ensure code is continuously scanned for vulnerabilities, misconfigurations, and leaked secrets before reaching production.'
    ],
    keyCapabilities: [
      {
        title: 'Static & Dynamic Code Analysis (SAST / DAST)',
        description: 'Automated pipeline scanning with SonarQube, Snyk, and OWASP ZAP to eliminate code vulnerabilities early.'
      },
      {
        title: 'Secret Management & Zero-Trust IAM',
        description: 'Vault integration, automated certificate rotation, and eliminating hardcoded credentials across codebases.'
      },
      {
        title: 'Container & Supply Chain Security',
        description: 'Image signing, SBOM generation, and runtime vulnerability protection using Trivy and Falco.'
      },
      {
        title: 'Policy as Code & Compliance Auditing',
        description: 'Enforcing cloud security postures using Open Policy Agent (OPA) and Terraform compliance suites.'
      }
    ],
    technologies: ['SonarQube', 'Snyk', 'HashiCorp Vault', 'Trivy', 'GitHub Actions', 'OPA Gatekeeper', 'AWS IAM', 'OWASP'],
    benefits: [
      'Catch and fix security flaws when remediation costs minutes instead of weeks',
      'Support compliance audits with automated policy evidence and artifact tracking',
      'Protect codebases and customer data against software supply chain vulnerabilities',
      'Empower developers with automated security feedback inside pull requests'
    ],
    workflow: [
      { step: '01', title: 'Security Posture Audit', description: 'Assessing pipeline vulnerabilities, secrets sprawl, and compliance gaps.' },
      { step: '02', title: 'Toolchain Integration', description: 'Configuring SAST, DAST, SCA, and container scanners in CI/CD.' },
      { step: '03', title: 'Guardrail Enforcement', description: 'Establishing automated pull request blocking criteria and secret vaults.' },
      { step: '04', title: 'Continuous Monitoring', description: 'Setting up runtime alerts, SIEM integrations, and vulnerability triage.' }
    ]
  },
  {
    slug: 'data-engineering',
    title: 'Data Engineering',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'High-throughput pipelines, modern data lakes, and synchronized analytics warehouses.',
    description: 'We design and build reliable, scalable data architectures that ingest, cleanse, transform, and deliver accurate data for real-time analytics and decision-making.',
    iconName: 'Layers',
    stats: [
      { label: 'Data Freshness', value: 'Real-Time / Sub-sec' },
      { label: 'Pipeline Reliability', value: 'High Resilience' },
      { label: 'Scale', value: 'Terabytes Daily' },
      { label: 'Data Governance', value: 'End-to-End' }
    ],
    overview: [
      'Data is only valuable if it is accurate, accessible, and fast. Disconnected spreadsheets and slow batch jobs paralyze business decision-making.',
      'Our data engineers build modern data platforms using Snowflake, BigQuery, Databricks, and Apache Spark, turning chaotic operational streams into governed single-sources of truth.'
    ],
    keyCapabilities: [
      {
        title: 'Modern Data Warehousing (Snowflake / BigQuery)',
        description: 'High-performance analytical storage modeled for lightning-fast SQL queries and executive BI reporting.'
      },
      {
        title: 'Streaming & Batch ETL / ELT Pipelines',
        description: 'Automated ingestion pipelines using Apache Kafka, Airflow, and dbt with data validation and deduplication.'
      },
      {
        title: 'Data Lakehouse Architecture',
        description: 'Unifying structured and unstructured data using Delta Lake and Apache Iceberg for cost-efficient storage.'
      },
      {
        title: 'Data Quality & Lineage Monitoring',
        description: 'Automated anomaly detection, schema contract enforcement, and full audit lineage tracking.'
      }
    ],
    technologies: ['Snowflake', 'BigQuery', 'Apache Spark', 'dbt', 'Apache Kafka', 'Airflow', 'Databricks', 'PostgreSQL'],
    benefits: [
      'Empower leadership with accurate, real-time commercial dashboards',
      'Eliminate brittle, failing batch scripts with self-healing orchestrated pipelines',
      'Break cross-departmental data silos between CRM, ERP, and product logs',
      'Prepare enterprise datasets for high-impact AI and machine learning modeling'
    ],
    workflow: [
      { step: '01', title: 'Data Architecture Blueprint', description: 'Cataloging source systems, schemas, and analytics requirements.' },
      { step: '02', title: 'Warehouse & Lakehouse Setup', description: 'Provisioning cloud storage, clustering keys, and governance access.' },
      { step: '03', title: 'Pipeline Orchestration', description: 'Building resilient dbt transformation models and Airflow DAGs.' },
      { step: '04', title: 'Data Validation & BI Handoff', description: 'Testing data integrity and connecting BI visualization tools.' }
    ]
  },
  {
    slug: 'cyber-security',
    title: 'Cyber Security',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'Enterprise threat defense, penetration testing, and zero-trust security postures.',
    description: 'Protect your enterprise assets, customer data, and cloud perimeters against sophisticated cyber threats with proactive security assessments, zero-trust architectures, and incident response readiness.',
    iconName: 'ShieldCheck',
    stats: [
      { label: 'Defense Posture', value: 'Zero Trust' },
      { label: 'Audit Coverage', value: 'Full Stack' },
      { label: 'Threat Response', value: '24/7 Monitored' },
      { label: 'Security Baseline', value: 'Hardened' }
    ],
    overview: [
      'In an era of relentless ransomware and supply-chain threats, reactive security is insufficient. We design defensive perimeters that assume breach and enforce least-privilege verification across all network boundaries.',
      'From vulnerability assessments and code penetration testing to cloud security posture management (CSPM), our security engineers protect your business reputation and customer trust.'
    ],
    keyCapabilities: [
      {
        title: 'Zero-Trust Architecture & Identity Governance',
        description: 'Context-aware authentication, continuous session validation, and strict network micro-segmentation.'
      },
      {
        title: 'Penetration Testing & Vulnerability Assessments',
        description: 'Rigorous ethical hacking targeting web applications, mobile apps, network firewalls, and cloud APIs.'
      },
      {
        title: 'Cloud Security Posture Management (CSPM)',
        description: 'Automated continuous scanning of cloud resource misconfigurations, unencrypted buckets, and overly permissive IAM.'
      },
      {
        title: 'Incident Response & Threat Remediation',
        description: 'Established incident playbooks, root-cause forensic analysis, and rapid containment protocols.'
      }
    ],
    technologies: ['CrowdStrike', 'Splunk', 'AWS Security Hub', 'Wiz', 'Cloudflare', 'HashiCorp Vault', 'Burp Suite', 'Metasploit'],
    benefits: [
      'Defend critical proprietary data against unauthorized extraction and ransomware',
      'Fulfill strict vendor security questionnaires and enterprise customer audits',
      'Detect and neutralize anomalies before they cause operational business disruptions',
      'Maintain continuous compliance with global data privacy frameworks'
    ],
    workflow: [
      { step: '01', title: 'Threat Modeling & Gap Analysis', description: 'Evaluating external attack surfaces and critical asset exposures.' },
      { step: '02', title: 'Penetration Testing Drills', description: 'Executing simulated cyber attacks to uncover actionable vulnerabilities.' },
      { step: '03', title: 'Remediation & Hardening', description: 'Patching exploits, tightening IAM roles, and deploying WAF firewalls.' },
      { step: '04', title: 'Continuous Governance', description: 'Setting up automated alerting, audit logging, and team security hygiene.' }
    ]
  },
  {
    slug: 'infrastructure-mgmt',
    title: 'Infrastructure Mgmt',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'Reliable, automated management of multi-cloud and hybrid infrastructure.',
    description: 'Ensure high performance, optimal costs, and high uptime across servers, networks, containers, and databases with managed infrastructure services.',
    iconName: 'Building2',
    stats: [
      { label: 'System Uptime', value: 'High Availability' },
      { label: 'Automated Healing', value: 'Enabled' },
      { label: 'Coverage', value: '24/7 Monitoring' },
      { label: 'Cost Reduction', value: 'Up to 30%' }
    ],
    overview: [
      'Managing modern infrastructure requires balancing server uptime, database maintenance, networking firewalls, and spiraling cloud costs. Our managed infrastructure practice gives you total stability.',
      'We handle day-to-day patching, backups, capacity provisioning, and alert management so your internal engineering team can focus on product innovation.'
    ],
    keyCapabilities: [
      {
        title: '24/7 Network Operations Center (NOC) Monitoring',
        description: 'Real-time telemetry monitoring server health, CPU/memory thresholds, and network connectivity.'
      },
      {
        title: 'Automated Backup & Disaster Recovery Orchestration',
        description: 'Encrypted cross-region snapshots, RTO/RPO SLA management, and periodic disaster recovery drills.'
      },
      {
        title: 'Database Administration (DBA) & Tuning',
        description: 'Proactive index maintenance, connection pooling, slow-query elimination, and automated failover.'
      },
      {
        title: 'Patch Management & OS Hardening',
        description: 'Systematic vulnerability patching for Linux/Windows servers with zero operational downtime.'
      }
    ],
    technologies: ['Terraform', 'Ansible', 'Kubernetes', 'Prometheus', 'Grafana', 'Datadog', 'AWS Systems Manager', 'Linux'],
    benefits: [
      'Eliminate costly outages with proactive infrastructure health checks',
      'Prevent database lockups during unexpected high-traffic surges',
      'Achieve verifiable compliance with automated backup retention policies',
      'Free internal developers from exhausting on-call infrastructure firefighting'
    ],
    workflow: [
      { step: '01', title: 'Infrastructure Inventory & Baselines', description: 'Documenting servers, network routes, and resource utilization.' },
      { step: '02', title: 'IaC & Automation Rollout', description: 'Automating repetitive administrative tasks with Ansible and Terraform.' },
      { step: '03', title: 'Monitoring & Alert Escalation', description: 'Configuring Datadog/Grafana dashboards and PagerDuty escalation.' },
      { step: '04', title: 'Continuous Capacity Planning', description: 'Reviewing quarterly performance metrics and rightsizing resources.' }
    ]
  },
  {
    slug: 'iot-solutions',
    title: 'IoT Solutions',
    category: 'Technology Services',
    categoryHref: '/technology-services',
    tagline: 'Connect, monitor, and manage edge devices with industrial IoT architectures.',
    description: 'We develop end-to-end Internet of Things platforms connecting smart hardware, sensors, and edge gateways to secure cloud analytics platforms in real-time.',
    iconName: 'Cpu',
    stats: [
      { label: 'Telemetry Latency', value: '<100ms' },
      { label: 'Edge Security', value: 'mTLS Encrypted' },
      { label: 'Device Capacity', value: '100k+ Connected' },
      { label: 'OTA Updates', value: 'Automated' }
    ],
    overview: [
      'Deploying connected hardware requires solving unique challenges in network instability, firmware management, device security, and high-volume sensor telemetry ingestion.',
      'We engineer industrial IoT platforms that enable remote device provisioning, secure over-the-air (OTA) updates, and instant anomaly alerting from factory floors to smart fleets.'
    ],
    keyCapabilities: [
      {
        title: 'Device Connectivity & MQTT Ingestion',
        description: 'Lightweight, low-power telemetry ingestion protocols (MQTT, CoAP) handling millions of sensor pings.'
      },
      {
        title: 'Over-The-Air (OTA) Firmware Management',
        description: 'Secure, staged firmware updates with automated rollback capabilities to prevent device bricking.'
      },
      {
        title: 'Edge Computing & Local Filtering',
        description: 'Processing sensor data on edge devices (Raspberry Pi, NVIDIA Jetson) to reduce cloud bandwidth costs.'
      },
      {
        title: 'Real-Time Telemetry Dashboards & Alerts',
        description: 'Live equipment monitoring, predictive failure detection, and instant emergency notifications.'
      }
    ],
    technologies: ['AWS IoT Core', 'Azure IoT Hub', 'MQTT', 'Node.js', 'Python', 'C / C++', 'Grafana', 'InfluxDB'],
    benefits: [
      'Gain real-time operational visibility over remote physical hardware',
      'Prevent costly equipment downtime with predictive maintenance models',
      'Secure device fleets against unauthorized firmware tampering',
      'Optimize edge bandwidth costs by filtering telemetry before cloud ingestion'
    ],
    workflow: [
      { step: '01', title: 'Protocol & Hardware Evaluation', description: 'Defining hardware constraints, power limits, and network protocols.' },
      { step: '02', title: 'Cloud Broker & Device Registry', description: 'Setting up AWS IoT Core / Azure IoT with X.509 device certificates.' },
      { step: '03', title: 'Edge Firmware & Ingestion', description: 'Writing edge telemetry scripts and real-time processing workers.' },
      { step: '04', title: 'Telemetry Dashboards & Scale', description: 'Connecting time-series databases, live dashboards, and alert webhooks.' }
    ]
  }
];

export const aiBiList: ServiceDetail[] = [
  {
    slug: 'generative-ai',
    title: 'Generative AI',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Custom enterprise LLM applications, RAG pipelines, and autonomous AI agents.',
    description: 'Harness the transformative power of generative AI. We build secure retrieval-augmented generation (RAG) systems, fine-tuned proprietary models, and domain-specific AI copilots with strict data privacy.',
    iconName: 'Zap',
    stats: [
      { label: 'Data Privacy', value: 'Zero Retention' },
      { label: 'Latency', value: 'Sub-second Stream' },
      { label: 'Accuracy', value: 'Grounded RAG' },
      { label: 'Model Support', value: 'Multi-LLM' }
    ],
    overview: [
      'Generative AI offers unprecedented opportunities for automation, customer intelligence, and automated document synthesis. However, enterprise adoption demands strict data governance, hallucination guards, and proprietary security.',
      'We build production-grade enterprise generative AI solutions—connecting state-of-the-art language models with your internal document repositories using advanced vector databases and semantic search.'
    ],
    keyCapabilities: [
      {
        title: 'Retrieval-Augmented Generation (RAG) Systems',
        description: 'Grounding LLMs in your internal documents and databases using Pinecone, Qdrant, and hybrid vector search.'
      },
      {
        title: 'Domain Copilots & Workflow Assistants',
        description: 'Custom AI assistants tailored for legal review, customer support, code intelligence, and operational querying.'
      },
      {
        title: 'Enterprise Data Privacy & Security Guardrails',
        description: 'Zero-data-training agreements, PII redaction filters, and prompt injection defense barriers.'
      },
      {
        title: 'Model Evaluation & LLMOps Pipeline',
        description: 'Benchmarking model latency, cost per token, hallucination rates, and automated prompt regression testing.'
      }
    ],
    technologies: ['OpenAI / GPT-4', 'Anthropic Claude', 'LangChain', 'LlamaIndex', 'Pinecone', 'Python', 'FastAPI', 'Next.js'],
    benefits: [
      'Automate time-consuming document research and operational synthesis',
      'Provide employees with instant, accurate answers from corporate knowledge bases',
      'Shield proprietary company secrets with strict enterprise data enclaves',
      'Deliver intelligent 24/7 conversational experiences to customers'
    ],
    workflow: [
      { step: '01', title: 'Use Case & Data Assessment', description: 'Identifying high-impact workflows and assessing document readiness.' },
      { step: '02', title: 'Vector Ingestion & Chunking', description: 'Building embedding pipelines, semantic chunking, and index stores.' },
      { step: '03', title: 'Prompt & Guardrail Engineering', description: 'Designing system prompts, hallucination checks, and PII filters.' },
      { step: '04', title: 'Production Deployment & Evaluation', description: 'Monitoring token costs, user feedback, and semantic accuracy.' }
    ]
  },
  {
    slug: 'machine-learning',
    title: 'Machine Learning',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Predictive algorithms, classification models, and automated MLOps pipelines.',
    description: 'We build, train, validate, and deploy custom machine learning models that uncover patterns, predict customer churn, classify complex data, and automate repetitive cognitive tasks.',
    iconName: 'Cpu',
    stats: [
      { label: 'Model Accuracy', value: 'High Precision' },
      { label: 'Inference Speed', value: 'Optimized' },
      { label: 'Retraining', value: 'Automated MLOps' },
      { label: 'Deployment', value: 'Edge / Cloud' }
    ],
    overview: [
      'Machine learning turns raw historical data into predictive foresight. Our machine learning practice builds mathematically rigorous statistical models customized to your unique operational datasets.',
      'From churn prediction and fraud detection to recommendation engines and computer vision, we take models from exploratory Jupyter notebooks to high-availability production APIs.'
    ],
    keyCapabilities: [
      {
        title: 'Supervised & Unsupervised Modeling',
        description: 'Gradient boosting (XGBoost), random forests, and deep neural networks tuned for maximum accuracy.'
      },
      {
        title: 'Fraud Detection & Anomaly Identification',
        description: 'Real-time transaction scoring identifying suspicious activity within milliseconds of occurrence.'
      },
      {
        title: 'Recommendation & Personalization Engines',
        description: 'Collaborative filtering and content-based recommendation systems driving user engagement.'
      },
      {
        title: 'Continuous MLOps & Model Retraining',
        description: 'Automated tracking of model drift, dataset versioning with DVC, and automated retraining workflows.'
      }
    ],
    technologies: ['PyTorch', 'TensorFlow', 'Scikit-Learn', 'XGBoost', 'MLflow', 'Python', 'AWS SageMaker', 'Kubeflow'],
    benefits: [
      'Anticipate customer departures and proactively deploy retention offers',
      'Block fraudulent transactions before financial losses occur',
      'Increase average order values with personalized product recommendations',
      'Eliminate manual classification bottlenecks with automated inference'
    ],
    workflow: [
      { step: '01', title: 'Data Cleaning & Feature Engineering', description: 'Normalizing datasets, encoding variables, and handling missing values.' },
      { step: '02', title: 'Model Training & Cross-Validation', description: 'Benchmarking algorithm architectures and hyperparameter tuning.' },
      { step: '03', title: 'Inference API Packaging', description: 'Deploying low-latency microservices with automated health monitoring.' },
      { step: '04', title: 'Drift Monitoring & MLOps', description: 'Tracking accuracy metrics over time and triggering automated retraining.' }
    ]
  },
  {
    slug: 'business-intelligence',
    title: 'Business Intelligence',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Transform complex enterprise data into intuitive executive dashboards.',
    description: 'Empower decision-makers with interactive BI reporting, automated KPI tracking, and unified data visualizations built with Power BI, Tableau, and Looker.',
    iconName: 'Globe',
    stats: [
      { label: 'Dashboard Refresh', value: 'Automated' },
      { label: 'Adoption Rate', value: 'Executive Ready' },
      { label: 'Data Sources', value: 'Unified' },
      { label: 'Mobile Access', value: 'Responsive' }
    ],
    overview: [
      'Executives cannot guide growing companies through static monthly spreadsheets. Modern business intelligence requires interactive, real-time dashboards accessible anywhere.',
      'We design and deploy governed BI dashboards that connect marketing, sales, product, and finance data into crystal-clear executive decision-making cockpits.'
    ],
    keyCapabilities: [
      {
        title: 'Executive KPI Cockpits & Scorecards',
        description: 'Consolidated reporting tracking revenue, margins, customer acquisition cost, and lifetime value.'
      },
      {
        title: 'Self-Serve Business Intelligence Portals',
        description: 'Clean semantic data models enabling non-technical department leads to build their own custom reports.'
      },
      {
        title: 'Cross-Departmental Data Modeling',
        description: 'Unified star-schema and snowflake-schema modeling connecting ERP, CRM, and marketing metrics.'
      },
      {
        title: 'Automated Alerting & Executive Digest Reports',
        description: 'Scheduled automated email/Slack reports and anomaly threshold alerts for key commercial KPIs.'
      }
    ],
    technologies: ['Power BI', 'Tableau', 'Looker', 'Metabase', 'Snowflake', 'BigQuery', 'dbt', 'SQL'],
    benefits: [
      'Replace hours of manual reporting with instant, automated data refreshes',
      'Spot emerging market trends and revenue drops before they impact the bottom line',
      'Unite executive leadership with a single, verifiable version of business truth',
      'Democratize data access safely with role-based dashboard permissions'
    ],
    workflow: [
      { step: '01', title: 'KPI Alignment & Metric Discovery', description: 'Defining business formulas, target thresholds, and user personas.' },
      { step: '02', title: 'Semantic Layer Modeling', description: 'Building standardized business logic and calculations in dbt/BI.' },
      { step: '03', title: 'Dashboard UI & UX Design', description: 'Designing clean, high-impact interactive visualizations.' },
      { step: '04', title: 'User Training & Rollout', description: 'Conducting team workshops and configuring scheduled report distributions.' }
    ]
  },
  {
    slug: 'nlp-automation',
    title: 'NLP & Automation',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Automate document processing, sentiment analysis, and multi-format text parsing.',
    description: 'We deploy natural language processing pipelines and intelligent document automation (IDP) that extract structured data from unstructured contracts, PDFs, emails, and feedback.',
    iconName: 'Terminal',
    stats: [
      { label: 'Processing Speed', value: '100x Human' },
      { label: 'Extraction Accuracy', value: '99%+' },
      { label: 'Formats Supported', value: 'PDF, Word, OCR' },
      { label: 'Workflow Sync', value: 'Instant' }
    ],
    overview: [
      'Enterprises spend millions processing paperwork, invoices, legal contracts, and customer tickets manually. NLP and document automation turn text-heavy queues into structured records instantly.',
      'Our NLP engineering combines modern transformer models with OCR technology to extract entities, verify numbers, and synchronize data directly into your databases and ERPs.'
    ],
    keyCapabilities: [
      {
        title: 'Intelligent Document Processing (IDP)',
        description: 'Automated extraction of tables, key-value pairs, and line items from complex invoices and contracts.'
      },
      {
        title: 'Customer Feedback & Sentiment Categorization',
        description: 'Real-time classification of customer review sentiment, support ticket urgency, and churn intent.'
      },
      {
        title: 'Named Entity Recognition (NER)',
        description: 'Extracting names, organizations, dates, amounts, and regulatory IDs from unstructured text.'
      },
      {
        title: 'Automated Email & Ticket Routing',
        description: 'Parsing incoming customer correspondence and routing directly to the appropriate team.'
      }
    ],
    technologies: ['Hugging Face', 'spaCy', 'BERT', 'Tesseract OCR', 'Python', 'FastAPI', 'PostgreSQL', 'Docker'],
    benefits: [
      'Slash document processing costs by up to 80% with automated extraction',
      'Accelerate contract review and invoice approvals from days to seconds',
      'Gain immediate insight into customer sentiment and emerging support issues',
      'Eliminate manual data entry errors into back-office billing systems'
    ],
    workflow: [
      { step: '01', title: 'Document Corpus Audit', description: 'Cataloging document variations, layouts, and target extraction fields.' },
      { step: '02', title: 'OCR & NLP Pipeline Build', description: 'Training custom entity extraction and classification models.' },
      { step: '03', title: 'Human-in-the-Loop Review', description: 'Building fallback verification interfaces for edge-case exceptions.' },
      { step: '04', title: 'Production Pipeline Integration', description: 'Connecting automated endpoints directly to internal ERPs and CRMs.' }
    ]
  },
  {
    slug: 'data-visualization',
    title: 'Data Visualization',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Custom interactive charts, geospatial maps, and web-based telemetry graphics.',
    description: 'Transform complex numerical data into intuitive, interactive visual stories. We develop bespoke web-based charts, real-time telemetry graphs, and geospatial mapping platforms.',
    iconName: 'Palette',
    stats: [
      { label: 'Rendering Engine', value: 'WebGL / SVG' },
      { label: 'Data Points', value: 'Millions Rendered' },
      { label: 'Interactivity', value: 'Sub-millisecond' },
      { label: 'Responsiveness', value: 'Desktop & Mobile' }
    ],
    overview: [
      'Standard charting libraries often choke when handling millions of data points or complex geospatial graphs. We engineer custom web-based data visualization experiences that render fast and look stunning.',
      'Using D3.js, WebGL, and modern Canvas rendering, our engineering team brings deep data stories to life inside your software products.'
    ],
    keyCapabilities: [
      {
        title: 'Bespoke D3.js & WebGL Visualizations',
        description: 'Custom interactive charts, network relationship graphs, and high-density financial heatmaps.'
      },
      {
        title: 'Geospatial & Map-Based Telemetry',
        description: 'Interactive mapping (Mapbox, Deck.gl) displaying fleet movements, regional density, and logistics routes.'
      },
      {
        title: 'Real-Time Streaming Visualizations',
        description: 'Live ticker charts and IoT sensor telemetry updating at 60 FPS without browser lag.'
      },
      {
        title: 'Embedded Analytics for SaaS Products',
        description: 'White-labeled customer-facing dashboards integrated seamlessly into your existing web applications.'
      }
    ],
    technologies: ['D3.js', 'Deck.gl', 'Mapbox', 'Chart.js', 'Recharts', 'Three.js / WebGL', 'React', 'TypeScript'],
    benefits: [
      'Differentiate your SaaS product with gorgeous, interactive customer analytics',
      'Render massive datasets without browser stuttering or memory leaks',
      'Uncover spatial and relational patterns impossible to detect in tabular grids',
      'Empower users to filter, zoom, and drill down into insights intuitively'
    ],
    workflow: [
      { step: '01', title: 'Visual Narrative & Data Modeling', description: 'Selecting appropriate chart types and data aggregation structures.' },
      { step: '02', title: 'Component & Shader Engineering', description: 'Writing optimized WebGL or SVG rendering layers in React.' },
      { step: '03', title: 'Performance Profiling', description: 'Stress-testing frame rates across varying dataset sizes and devices.' },
      { step: '04', title: 'Product Integration', description: 'Embedding charts with responsive breakpoints and theme support.' }
    ]
  },
  {
    slug: 'predictive-analysis',
    title: 'Predictive Analysis',
    category: 'AI & Business Intelligence',
    categoryHref: '/ai-bi',
    tagline: 'Foresee market demand, inventory requirements, and financial trends with precision.',
    description: 'We build statistical forecasting engines and predictive models that help companies anticipate inventory needs, customer lifetime values, and revenue trajectories.',
    iconName: 'Lightbulb',
    stats: [
      { label: 'Forecast Horizon', value: 'Custom Sprints' },
      { label: 'Error Reduction', value: 'Up to 45%' },
      { label: 'Scenario Testing', value: 'What-If Simulation' },
      { label: 'Integration', value: 'ERP Connected' }
    ],
    overview: [
      'Managing an enterprise by looking only in the rearview mirror leads to stockouts, surplus inventory, and missed commercial opportunities. Predictive analysis equips leadership with data-driven foresight.',
      'We engineer automated forecasting engines that combine historical trends, seasonality, economic indicators, and promotional schedules into actionable demand projections.'
    ],
    keyCapabilities: [
      {
        title: 'Time-Series Demand Forecasting',
        description: 'ARIMA, Prophet, and LSTM neural networks predicting sales demand at the SKU and regional level.'
      },
      {
        title: 'Customer Lifetime Value (LTV) Modeling',
        description: 'Predicting future customer profitability to optimize marketing acquisition spend.'
      },
      {
        title: 'Predictive Maintenance for Machinery',
        description: 'Forecasting equipment component wear before physical failure stops operations.'
      },
      {
        title: 'Scenario & "What-If" Sensitivity Simulation',
        description: 'Interactive simulation tools modeling the financial impact of price changes and supplier delays.'
      }
    ],
    technologies: ['Prophet', 'Statsmodels', 'PyTorch', 'Python', 'Pandas', 'FastAPI', 'PostgreSQL', 'Streamlit'],
    benefits: [
      'Prevent costly inventory stockouts during unexpected peak sales periods',
      'Reduce holding costs by eliminating excess warehouse surplus',
      'Allocate marketing capital toward customer cohorts with the highest predicted LTV',
      'De-risk executive financial planning with confidence-interval forecasts'
    ],
    workflow: [
      { step: '01', title: 'Historical Trend & Seasonality Audit', description: 'Decomposing historical data into trend, seasonality, and residual noise.' },
      { step: '02', title: 'Algorithm Calibration & Backtesting', description: 'Backtesting models against historical periods to verify accuracy.' },
      { step: '03', title: 'Automated Forecast Pipeline', description: 'Building recurring weekly/monthly prediction generation workers.' },
      { step: '04', title: 'ERP Sync & Executive Reporting', description: 'Exporting forecasts into ERP procurement systems and visual dashboards.' }
    ]
  }
];

export const allServicesList: ServiceDetail[] = [
  ...applicationServicesList,
  ...productEngineeringList,
  ...technologyServicesList,
  ...aiBiList,
];

// Helper lookup map to handle any variations of slug/title
export function findServiceBySlug(slug: string): ServiceDetail | undefined {
  const decoded = decodeURIComponent(slug).toLowerCase().trim();
  const normalized = decoded.replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');

  return allServicesList.find((s) => {
    const sNorm = s.slug.toLowerCase();
    const sTitleNorm = s.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
    
    // Also handle common typos/variations like 'stratergy' vs 'strategy'
    const isStrategyMatch = normalized.includes('strat') && sNorm.includes('strat');

    return sNorm === normalized || sTitleNorm === normalized || isStrategyMatch;
  });
}
