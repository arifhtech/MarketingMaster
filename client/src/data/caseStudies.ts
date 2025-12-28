import { CaseStudy } from "@/lib/types";

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    title: "Automating Lead Generation & Conversion With AI Agents",
    description:
      "Built a custom AI platform to automate lead follow-ups, qualification, and CRM handoff—boosting conversions by 3.8× for a marketing agency.",
    category: "Marketing Agency (LeadGen & Conversion Focused)",
    categoryColor: "primary",
    client: " Medium -Scale Organization",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: ["Python", "FastAPI", "LangChain", "OpenAI GPT-4"],
    duration: "3 months",
    services: [
      "AI Agent Platform Development",
      "CRM Workflow Integration",
      "Lead Qualification Automation"
    ],
    challenge: [
      "Manual follow-ups delayed by 12–24 hours",
      "Generic outreach that failed to engage segmented audiences",
      "Disjointed handoffs between marketing and sales teams",
      "Poor visibility into conversion drop-offs and lead readiness",
      "Wasted effort on unqualified or low-intent leads"
    ],
    solution: [
      "AI Lead Scoring Engine: Automatically evaluated and prioritized leads based on campaign data, intent signals, and engagement patterns",
      "Conversational AI Agent: Handled first-touch outreach with human-like messaging and dynamic follow-ups via email, WhatsApp, and SMS",
      "LLM-Powered Personalization: Generated context-aware, persona-specific copy—boosting open and reply rates",
      "End-to-End Funnel Automation: From lead capture to qualification, nurture, and CRM handoff, all steps were automated",
      "Insights & Analytics Dashboard: Provided real-time visibility into lead flow, agent outcomes, and drop-off points"
    ],
    impact: [
      "3.8× Increase in Lead-to-Customer Conversion Rate (from 2.8% to 10.6%) within 8 weeks",
      "75% Reduction in Response Time (from 12–24 hours to under 5 minutes, 24/7)",
      "40% More Qualified Leads Identified Automatically, reducing sales team overhead",
      "70% Automation of Repetitive Follow-Ups, freeing SDRs for strategic conversations",
      "2000+ Leads Handled Per Month by AI agents with consistent tone, accuracy, and personalization",
      "15% Lift in Campaign ROI, attributed directly to faster, smarter lead nurturing"
    ]
  },
  {
    id: 2,
    title: "Enterprise Workflow & Document Intelligence Platform",
    description:
      "Developed a robust platform for 3,000+ users to streamline workflows, automate document validation, and ensure compliance across departments.",
    category: "Enterprise Operations",
    categoryColor: "black",
    client: "Large-Scale Organization",
    image:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: [
      "React",
      "Node.js",
      "Python",
      "PostgreSQL",
      "Redis",
      "AWS",
      "Docker",
      "LangChain",
      "Hugging Face Transformers",
      "OpenAI APIs"
    ],
    duration: "3 months",
    services: [
      "AI Agent Platform Development",
      "Workflow Automation with ML Orchestration",
      "Intelligent Document Processing (IDP)",
      "GenAI-Based Report Generation",
      "Role-Based Access and Compliance Auditing",
      "Real-Time Dashboards with Predictive Insights"
    ],
    challenge: [
      "Disconnected systems across departments and functions",
      "Documents buried in emails, shared drives, or spreadsheets",
      "High error rates in submissions due to missing or incorrect formats",
      "No unified system for tracking task progress or ownership",
      "Heavy administrative burden during audit and reporting cycles"
    ],
    solution: [
      "Required files uploaded at the task/data-point level",
      "Automated checks flagged missing, outdated, or improperly formatted documents",
      "Admin teams had clarity on submission quality and readiness",
      "Tasks assigned to individuals/departments with deadlines and progress tracking",
      "Full review, approval, and revision workflows in-platform",
      "Real-time dashboards with centralized visibility",
      "Structured unified system with version control and syncing",
      "Auto-generated standardized reports for audits/internal use"
    ],
    impact: [
      "60% reduction in manual coordination",
      "Workflow completion time reduced from weeks to days",
      "Lower error rates via automated checks",
      "Complete traceability of documents and actions",
      "Scalability proven across 3,000+ users"
    ]
  },
  {
    id: 3,
    title: "AI-Powered Video Verification Platform",
    description:
      "Built a scalable AI-driven platform to automate video content review, cut manual effort by 70%, and improve compliance across 6,000+ videos.",
    category: "AI & Web Platform",
    categoryColor: "accent",
    client: "Digital Media Company",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=500",
    technologies: [
      "Python",
      "FastAPI",
      "OpenAI GPT-4",
      "Whisper",
      "LangChain",
      "ReactJS",
      "PostgreSQL",
      "Redis",
      "FFmpeg",
      "Celery",
      "Azure Video Indexer"
    ],
    duration: "3 months",
    services: [
      "Custom Web App Development",
      "AI/LLM Integration",
      "Multimodal Content Processing",
      "Dashboard & Analytics",
      "System Architecture",
      "Deployment & Support"
    ],
    challenge: [
      "Time-consuming and inconsistent content review across 6,000+ videos",
      "Manual checks for factual accuracy, sensitivity, and compliance",
      "Scaling difficulty for multilingual or long-form content",
      "High error potential and subjective misjudgments",
      "Delays in content release, raising operational cost"
    ],
    solution: [
      "Automated transcription & summarization via Whisper",
      "LLM-based segment analysis for factual correctness, tone, and compliance",
      "Smart flagging and review action suggestions",
      "Human-in-the-loop feedback loop for learning",
      "Central dashboard with real-time issue tracking and audit log"
    ],
    impact: [
      "70% reduction in manual review time",
      "More consistent content quality with AI validation",
      "Real-time detection improved release timelines",
      "Support for multilingual content without more staff",
      "Full audit trail ensured transparency and compliance"
    ]
  }
];
