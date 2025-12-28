import { Service } from "@/lib/types";

export const services: Service[] = [
  {
    id: 1,
    title: "Website Development",
    description: "Custom, responsive websites designed to engage your audience and drive conversions.",
    fullDescription: "Our website development services focus on creating engaging, user-friendly websites that represent your brand perfectly while driving measurable business results. We combine stunning design with robust functionality and responsive layouts that work flawlessly across all devices.",
    icon: "globe",
    iconColor: "primary",
    slug: "website-development",
    features: [
      {
        title: "Responsive Design",
        description: "Mobile-first websites that adapt seamlessly to all screen sizes",
        icon: "mobile-alt"
      },
      {
        title: "CMS Integration",
        description: "Easy content management systems so you can update your site",
        icon: "edit"
      },
      {
        title: "SEO Optimization",
        description: "Built-in best practices to improve your search visibility",
        icon: "search"
      },
      {
        title: "Analytics Integration",
        description: "Data tracking to measure performance and user behavior",
        icon: "chart-line"
      }
    ],
    benefits: [
      "Increased conversion rates with optimized user journeys",
      "Improved brand perception with professional design",
      "Better search engine rankings with SEO-friendly structure",
      "Faster loading times with optimized code",
      "Reduced bounce rates with responsive layouts"
    ],
    technologies: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "WordPress", "Shopify", "Tailwind CSS"]
  },
  {
    id: 2,
    title: "Software Development",
    description: "Scalable, robust software solutions built with cutting-edge technologies.",
    fullDescription: "Our software development experts build custom applications that solve your unique business challenges. We follow industry best practices to deliver reliable, scalable, and maintainable solutions that provide long-term value to your organization.",
    icon: "code",
    iconColor: "secondary",
    slug: "software-development",
    features: [
      {
        title: "Custom Solutions",
        description: "Tailored applications designed specifically for your needs",
        icon: "cubes"
      },
      {
        title: "Cloud Integration",
        description: "Seamless deployment and scaling with cloud services",
        icon: "cloud"
      },
      {
        title: "API Development",
        description: "Connecting systems and enabling data flow between applications",
        icon: "link"
      },
      {
        title: "Maintenance & Support",
        description: "Ongoing assistance to keep your software running smoothly",
        icon: "tools"
      }
    ],
    benefits: [
      "Enhanced business efficiency with automated workflows",
      "Improved data management and insights",
      "Reduced operational costs through process optimization",
      "Competitive advantage with innovative capabilities",
      "Scalable architecture that grows with your business"
    ],
    technologies: ["Python", "Java", "Node.js", "Spring Boot", "Express", "MongoDB", "PostgreSQL", "AWS", "Docker"]
  },
  {
    id: 3,
    title: "App Development",
    description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
    fullDescription: "We create powerful, feature-rich mobile applications for iOS and Android platforms that help you engage customers, streamline processes, and drive business growth. Our focus is on intuitive interfaces and smooth performance.",
    icon: "mobile-alt",
    iconColor: "accent",
    slug: "app-development",
    features: [
      {
        title: "Native Development",
        description: "Platform-specific apps with optimal performance and features",
        icon: "code-branch"
      },
      {
        title: "Cross-Platform Solutions",
        description: "Efficient development for multiple platforms simultaneously",
        icon: "sync"
      },
      {
        title: "Offline Functionality",
        description: "Apps that work even without internet connectivity",
        icon: "wifi-slash"
      },
      {
        title: "Push Notifications",
        description: "Engage users with timely, relevant updates",
        icon: "bell"
      }
    ],
    benefits: [
      "Increased customer engagement with mobile-friendly experiences",
      "Extended market reach across different platforms",
      "Improved brand loyalty through consistent user experiences",
      "New revenue streams through mobile commerce",
      "Enhanced data collection and user insights"
    ],
    technologies: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase", "GraphQL", "Redux", "TypeScript"]
  },
  {
    id: 4,
    title: "Ecommerce Solutions",
    description: "High-converting online stores with seamless shopping experiences and secure payment gateways.",
    fullDescription: "Our e-commerce solutions help businesses sell products and services online with attractive storefronts, secure payment processing, and comprehensive order management systems designed to maximize sales and customer satisfaction.",
    icon: "shopping-cart",
    iconColor: "primary",
    slug: "ecommerce-solutions",
    features: [
      {
        title: "Custom Storefronts",
        description: "Branded shopping experiences that showcase your products",
        icon: "store"
      },
      {
        title: "Payment Integration",
        description: "Secure, multi-gateway payment processing options",
        icon: "credit-card"
      },
      {
        title: "Inventory Management",
        description: "Real-time stock tracking and automated updates",
        icon: "box"
      },
      {
        title: "Customer Accounts",
        description: "Personalized user experiences and order history",
        icon: "user-circle"
      }
    ],
    benefits: [
      "Increased sales through optimized checkout processes",
      "Expanded market reach beyond physical locations",
      "Improved inventory management and reduced costs",
      "Enhanced customer insights through purchase data",
      "24/7 sales capability without staffing requirements"
    ],
    technologies: ["Shopify", "WooCommerce", "Magento", "Stripe", "PayPal", "BigCommerce", "Elasticsearch", "Redis"]
  },
  {
    id: 5,
    title: "AI & ML Solutions",
    description: "Harness the power of data with advanced AI and machine learning solutions tailored to your needs.",
    fullDescription: "Our AI and machine learning solutions transform your data into valuable insights and automated processes. We develop custom models that analyze patterns, make predictions, and optimize operations across your business.",
    icon: "brain",
    iconColor: "secondary",
    slug: "ai-ml-solutions",
    features: [
      {
        title: "Predictive Analytics",
        description: "Forecasting trends and outcomes based on historical data",
        icon: "chart-line"
      },
      {
        title: "Natural Language Processing",
        description: "Understanding and generating human language for automated interactions",
        icon: "comment-alt"
      },
      {
        title: "Computer Vision",
        description: "Image and video analysis for object detection and recognition",
        icon: "eye"
      },
      {
        title: "Recommendation Systems",
        description: "Personalized suggestions based on user preferences and behavior",
        icon: "thumbs-up"
      }
    ],
    benefits: [
      "Data-driven decision making with accurate insights",
      "Automated processes that improve efficiency and reduce costs",
      "Personalized customer experiences that boost engagement",
      "Early detection of issues through predictive maintenance",
      "Competitive advantage through advanced technological capabilities"
    ],
    technologies: ["TensorFlow", "PyTorch", "scikit-learn", "NLTK", "OpenCV", "Keras", "Python", "Jupyter", "AWS SageMaker"]
  },
  {
    id: 6,
    title: "Custom LLM Models",
    description: "Specialized language models trained on your data to power intelligent applications and automate processes.",
    fullDescription: "We develop customized Large Language Models (LLMs) that are fine-tuned on your specific data and use cases. These models enable advanced natural language processing, content generation, and automated communication tailored to your industry and requirements.",
    icon: "robot",
    iconColor: "accent",
    slug: "custom-llm-models",
    features: [
      {
        title: "Domain-Specific Training",
        description: "LLMs trained on your industry terminology and knowledge",
        icon: "graduation-cap"
      },
      {
        title: "Intelligent Assistants",
        description: "AI agents that can answer questions and perform tasks",
        icon: "user-tie"
      },
      {
        title: "Content Generation",
        description: "Automated creation of articles, reports, and other text content",
        icon: "file-alt"
      },
      {
        title: "Sentiment Analysis",
        description: "Understand customer opinions and emotions from feedback",
        icon: "smile"
      }
    ],
    benefits: [
      "Automated customer support that handles common queries",
      "Faster content production with AI-generated drafts",
      "Improved knowledge management and information retrieval",
      "Consistent communication through standardized AI responses",
      "Reduced operational costs through automation of routine tasks"
    ],
    technologies: ["OpenAI API", "GPT-4", "LangChain", "Hugging Face", "BERT", "T5", "PyTorch", "TensorFlow", "Vector Databases"]
  }
];
