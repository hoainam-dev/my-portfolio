import { ProfileData, Project, SkillCategory, Experience, Testimonial } from "@/types";

export const vi_VN_initialProfileData: ProfileData = {
  name: "Huỳnh Hoài Nam",
  title: "Junior Full-Stack Developer",
  tagline: "Biến ý tưởng sáng tạo thành sản phẩm phần mềm hiện đại, tối ưu & quy mô lớn",
  bio: "Tôi là Lập trình viên Full-Stack với hơn 2 năm kinh nghiệm chuyên xây dựng các ứng dụng Web hiện đại và tối ưu hóa trải nghiệm người dùng. Tận tâm tạo ra giải pháp công nghệ sạch, nhanh và hiệu quả.",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  email: "hoainamadm@gmail.com",
  phone: "+84 375 851 697",
  location: "Đà Nẵng / TP. Hồ Chí Minh, Việt Nam",
  availableForWork: true,
  stats: {
    completedProjects: 10,
    yearsExperience: 2,
    satisfiedClients: 25,
    codeCommits: 2450,
  },
  socials: {
    github: "https://github.com/hoainam-dev",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    zalo: "https://zalo.me",
    facebook: "https://facebook.com",
  },
};

export const en_US_initialProfileData: ProfileData = {
  name: "Huynh Hoai Nam",
  title: "Junior Full-Stack Developer",
  tagline: "Turning creative ideas into modern, optimized, and scalable software products",
  bio: "I am a Full-Stack Developer with 2+ years of experience building modern web applications and optimizing user experience. Dedicated to creating clean, fast, and effective technology solutions.",
  avatarUrl:
    "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
  email: "hoainamadm@gmail.com",
  phone: "+84 375 851 697",
  location: "Da Nang / Ho Chi Minh City, Vietnam",
  availableForWork: true,
  stats: {
    completedProjects: 10,
    yearsExperience: 2,
    satisfiedClients: 25,
    codeCommits: 2450,
  },
  socials: {
    github: "https://github.com/hoainam-dev",
    linkedin: "https://linkedin.com",
    twitter: "https://x.com",
    zalo: "https://zalo.me",
    facebook: "https://facebook.com",
  },
};

export const vi_VN_initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "AI TaskFlow - Trợ Lý Quản Lý Công Việc Thông Minh",
    tagline: "Hệ thống lập kế hoạch tự động tích hợp Gemini AI & Kanban Realtime",
    description:
      "Ứng dụng web giúp tự động phân loại công việc, dự đoán thời gian hoàn thành và tối ưu tiến độ làm việc nhóm bằng AI.",
    fullDescription:
      "AI TaskFlow là nền tảng quản lý dự án thế hệ mới được tích hợp Gemini AI API. Hệ thống giúp nhóm tự động phân tích độ ưu tiên công việc, gợi ý quy trình xử lý, hỗ trợ viết tóm tắt cuộc họp và phân bổ công việc theo khối lượng hợp lý.",
    category: "ai",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini AI",
      "Tailwind CSS",
      "Socket.IO",
    ],
    featured: true,
    demoUrl: "https://example.com/demo/taskflow",
    githubUrl: "https://github.com/example/ai-taskflow",
    highlights: [
      "Tích hợp Gemini 3.6 Flash để tự động tạo công việc từ prompt tự nhiên",
      "Thời gian phản hồi Real-time WebSocket dưới 50ms cho tính năng thảo luận nhóm",
      "Giao diện thiết kế theo chuẩn Dark Theme kết hợp hiệu ứng Motion mượt mà",
      "Hơn 1,200 người dùng tích cực thử nghiệm bản Beta",
    ],
    role: "Lead Full-Stack Developer",
    duration: "4 tháng (2025)",
    starsCount: 340,
  },
  {
    id: "proj-2",
    title: "OmniStore - Sàn Thương Mại Điện Tử Đa Kênh",
    tagline: "Nền tảng E-Commerce hiện đại với tốc độ tải trang cực nhanh & Thanh toán trực tuyến",
    description:
      "Giải pháp thương mại điện tử trọn gói với quản lý kho realtime, gợi ý sản phẩm cá nhân hóa và giỏ hàng thông minh.",
    fullDescription:
      "OmniStore cung cấp giải pháp bán hàng đa kênh từ quản lý đơn hàng, kho bãi, chăm sóc khách hàng tự động đến tích hợp cổng thanh toán ngân hàng VNPAY/Momo và Stripe. Hệ thống được thiết kế tối ưu SEO và đạt chỉ số Lighthouse Performance 98/100.",
    category: "web",
    imageUrl:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Stripe API",
      "Tailwind CSS",
    ],
    featured: true,
    demoUrl: "https://example.com/demo/omnistore",
    githubUrl: "https://github.com/example/omni-store",
    highlights: [
      "Xử lý tới 5,000 giao dịch/phút mà không gây hiện tượng nghẽn mạng",
      "Tích hợp tìm kiếm ngữ nghĩa ElasticSearch giúp tìm nhanh trong 0.2s",
      "Bảng điều khiển Analytics trực quan dành cho chủ cửa hàng",
    ],
    role: "Full-Stack Engineer",
    duration: "5 tháng (2024 - 2025)",
    starsCount: 215,
  },
  {
    id: "proj-3",
    title: "FinSmart - Quản Lý Tài Chính Cá Nhân & Đầu Tư",
    tagline: "Ứng dụng theo dõi thu chi, phân tích dòng tiền & lập kế hoạch tiết kiệm",
    description:
      "Ứng dụng giúp người dùng tự động quét hóa đơn, theo dõi ngân sách hàng tháng và đưa ra cảnh báo chi tiêu vượt ngưỡng.",
    fullDescription:
      "FinSmart cung cấp giải pháp quản lý tài chính cá nhân toàn diện. Người dùng có thể kết nối tài khoản, chụp ảnh hóa đơn để OCR tự động bóc tách số tiền, phân loại các khoản chi tiêu và nhận phân tích đồ thị xu hướng tiết kiệm ngắn/dài hạn.",
    category: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "OCR API", "Chart.js", "SQLite"],
    featured: true,
    demoUrl: "https://example.com/demo/finsmart",
    githubUrl: "https://github.com/example/finsmart-app",
    highlights: [
      "Hỗ trợ bóc tách hóa đơn bằng công nghệ OCR với độ chính xác 96%",
      "Bảo mật vân tay / FaceID và mã hóa dữ liệu local end-to-end",
      "Xuất báo cáo PDF / Excel chuyên nghiệp theo tháng",
    ],
    role: "Mobile Developer & UI Designer",
    duration: "3 tháng (2024)",
    starsCount: 180,
  },
  {
    id: "proj-4",
    title: "DevPulse - Monitoring & Metrics CLI Toolkit",
    tagline: "Công cụ Open-Source giám sát hiệu năng Server & Microservices dành cho Devs",
    description:
      "Bộ công cụ mã nguồn mở kiểm tra tài nguyên hệ thống, CPU, RAM và network latency dưới dạng Terminal Dashboard & Web UI.",
    fullDescription:
      "DevPulse giúp các lập trình viên & DevOps theo dõi thời gian thực tình trạng của hệ thống server, API response time, phát hiện rò rỉ bộ nhớ và gửi cảnh báo tự động qua Telegram/Discord Webhook.",
    category: "opensource",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Node.js", "TypeScript", "WebSockets", "Docker", "Go", "Tailwind"],
    featured: false,
    demoUrl: "https://example.com/demo/devpulse",
    githubUrl: "https://github.com/example/devpulse-cli",
    highlights: [
      "Hơn 450 Stars trên GitHub từ cộng đồng Developers quốc tế",
      "Gói cài đặt siêu nhẹ (chỉ 12MB) không gây ảnh hưởng tới Server",
      "Tích hợp Webhook cảnh báo ngay khi CPU vượt ngưỡng 85%",
    ],
    role: "Creator & Maintainer",
    duration: "Dự án cá nhân liên tục",
    starsCount: 450,
  },
  {
    id: "proj-5",
    title: "Aura UI - Modern Design System & Component Library",
    tagline: "Bộ thư viện giao diện chuẩn Accessibility & Animation cao cấp cho React",
    description:
      "Thư viện UI Kit độc đáo tập trung vào thiết kế hiện đại, mượt mà với 40+ components sẵn sàng cho dự án SaaS.",
    fullDescription:
      "Aura UI là dự án nghiên cứu UI/UX cá nhân nhằm xây dựng ngôn ngữ thiết kế tối giản nhưng sắc nét. Bộ UI được đóng gói kỹ lưỡng, hỗ trợ đầy đủ phím bấm truy cập (WAI-ARIA), giao diện Tối/Sáng thông minh và khả năng tùy biến màu sắc linh hoạt.",
    category: "uiux",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Figma", "React", "TypeScript", "Tailwind CSS", "Motion", "Storybook"],
    featured: false,
    demoUrl: "https://example.com/demo/auraui",
    githubUrl: "https://github.com/example/aura-ui-kit",
    highlights: [
      "Hơn 40+ linh kiện chuẩn TypeScript với 100% test coverage",
      "Tối ưu hoá bundle size chỉ 18KB gzipped",
      "File Figma UI Kit đi kèm với hơn 200+ Variants phong phú",
    ],
    role: "UI/UX Designer & Frontend Architect",
    duration: "2 tháng (2024)",
    starsCount: 290,
  },
  {
    id: "proj-6",
    title: "MediCare AI - Hỗ Trợ Đọc Kết Quả Xét Nghiệm Y Tế",
    tagline: "Mô hình phân tích hình ảnh X-quang & tóm tắt chỉ số xét nghiệm tự động",
    description:
      "Giải pháp hỗ trợ bác sĩ và bệnh nhân tóm tắt kết quả xét nghiệm máu và chỉ số sức khỏe dựa trên công nghệ Multimodal AI.",
    fullDescription:
      "MediCare AI ứng dụng mô hình Gemini Vision để tự động nhận dạng các chỉ số từ phiếu kết quả xét nghiệm, giải thích ý nghĩa các chỉ số sinh hóa bằng ngôn ngữ dễ hiểu và đưa ra cảnh báo về lối sống cho người sử dụng.",
    category: "ai",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Python", "FastAPI", "React", "Gemini Vision API", "Tailwind CSS"],
    featured: false,
    demoUrl: "https://example.com/demo/medicare",
    githubUrl: "https://github.com/example/medicare-ai",
    highlights: [
      "Giải Nhất Hackathon Công nghệ Y tế Khỏe 2024",
      "Thời gian nhận diện và đưa ra phân tích trung bình 1.8 giây/trang",
      "Hỗ trợ giao diện đọc bằng cả tiếng Việt và tiếng Anh",
    ],
    role: "AI Developer",
    duration: "1 tháng (2024)",
    starsCount: 160,
  },
];

export const en_US_initialProjects: Project[] = [
  {
    id: "proj-1",
    title: "AI TaskFlow - Smart Work Management Assistant",
    tagline: "Automated planning system with Gemini AI & realtime Kanban",
    description:
      "A web app that auto-classifies tasks, predicts completion time, and optimizes team progress with AI.",
    fullDescription:
      "AI TaskFlow is a next-gen project management platform powered by the Gemini AI API. It helps teams automatically analyze task priority, suggest workflows, summarize meetings, and allocate work by capacity.",
    category: "ai",
    imageUrl:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: [
      "React 19",
      "TypeScript",
      "Node.js",
      "Express",
      "Gemini AI",
      "Tailwind CSS",
      "Socket.IO",
    ],
    featured: true,
    demoUrl: "https://example.com/demo/taskflow",
    githubUrl: "https://github.com/example/ai-taskflow",
    highlights: [
      "Integrated Gemini 3.6 Flash to auto-create tasks from natural-language prompts",
      "Realtime WebSocket responses under 50ms for team discussions",
      "Dark-theme UI with smooth Motion interactions",
      "1,200+ active users in the Beta program",
    ],
    role: "Lead Full-Stack Developer",
    duration: "4 months (2025)",
    starsCount: 340,
  },
  {
    id: "proj-2",
    title: "OmniStore - Multi-Channel E-Commerce Platform",
    tagline: "Modern e-commerce with ultra-fast page loads & online payments",
    description:
      "An all-in-one e-commerce solution with realtime inventory, personalized recommendations, and a smart cart.",
    fullDescription:
      "OmniStore delivers a multi-channel sales stack covering orders, inventory, automated customer care, and payment gateways (VNPAY/Momo and Stripe). Built for SEO with a Lighthouse Performance score of 98/100.",
    category: "web",
    imageUrl:
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1556742031-c6961e8560b0?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Express.js",
      "PostgreSQL",
      "Redis",
      "Stripe API",
      "Tailwind CSS",
    ],
    featured: true,
    demoUrl: "https://example.com/demo/omnistore",
    githubUrl: "https://github.com/example/omni-store",
    highlights: [
      "Handles up to 5,000 transactions/minute without bottlenecks",
      "Semantic ElasticSearch finds products in ~0.2s",
      "Visual analytics dashboard for store owners",
    ],
    role: "Full-Stack Engineer",
    duration: "5 months (2024 - 2025)",
    starsCount: 215,
  },
  {
    id: "proj-3",
    title: "FinSmart - Personal Finance & Investing",
    tagline: "Track spending, analyze cash flow, and plan savings",
    description:
      "Helps users scan receipts, track monthly budgets, and get alerts when spending exceeds limits.",
    fullDescription:
      "FinSmart is a complete personal finance toolkit. Users can connect accounts, photograph receipts for OCR amount extraction, categorize expenses, and view short/long-term savings trend charts.",
    category: "mobile",
    imageUrl:
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["React Native", "TypeScript", "Node.js", "OCR API", "Chart.js", "SQLite"],
    featured: true,
    demoUrl: "https://example.com/demo/finsmart",
    githubUrl: "https://github.com/example/finsmart-app",
    highlights: [
      "OCR receipt extraction with 96% accuracy",
      "Fingerprint / FaceID security with end-to-end local encryption",
      "Export professional monthly PDF / Excel reports",
    ],
    role: "Mobile Developer & UI Designer",
    duration: "3 months (2024)",
    starsCount: 180,
  },
  {
    id: "proj-4",
    title: "DevPulse - Monitoring & Metrics CLI Toolkit",
    tagline: "Open-source toolkit for server & microservice performance monitoring",
    description:
      "Open-source tools to inspect system resources, CPU, RAM, and network latency via a terminal dashboard and web UI.",
    fullDescription:
      "DevPulse helps developers and DevOps monitor server health and API response times in realtime, detect memory leaks, and send automated alerts via Telegram/Discord webhooks.",
    category: "opensource",
    imageUrl:
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Node.js", "TypeScript", "WebSockets", "Docker", "Go", "Tailwind"],
    featured: false,
    demoUrl: "https://example.com/demo/devpulse",
    githubUrl: "https://github.com/example/devpulse-cli",
    highlights: [
      "450+ GitHub stars from the international developer community",
      "Ultra-light install package (only 12MB) with minimal server impact",
      "Webhook alerts when CPU exceeds 85%",
    ],
    role: "Creator & Maintainer",
    duration: "Ongoing personal project",
    starsCount: 450,
  },
  {
    id: "proj-5",
    title: "Aura UI - Modern Design System & Component Library",
    tagline: "Accessible, animation-rich UI library for React",
    description:
      "A distinctive UI kit focused on modern, smooth design with 40+ components ready for SaaS projects.",
    fullDescription:
      "Aura UI is a personal UI/UX research project building a minimal yet sharp design language. The kit is carefully packaged with full keyboard access (WAI-ARIA), smart dark/light themes, and flexible theming.",
    category: "uiux",
    imageUrl:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Figma", "React", "TypeScript", "Tailwind CSS", "Motion", "Storybook"],
    featured: false,
    demoUrl: "https://example.com/demo/auraui",
    githubUrl: "https://github.com/example/aura-ui-kit",
    highlights: [
      "40+ TypeScript components with 100% test coverage",
      "Optimized bundle size at only 18KB gzipped",
      "Companion Figma UI Kit with 200+ variants",
    ],
    role: "UI/UX Designer & Frontend Architect",
    duration: "2 months (2024)",
    starsCount: 290,
  },
  {
    id: "proj-6",
    title: "MediCare AI - Medical Lab Result Assistant",
    tagline: "X-ray image analysis & automated lab-result summaries",
    description:
      "Helps doctors and patients summarize blood tests and health metrics using multimodal AI.",
    fullDescription:
      "MediCare AI uses Gemini Vision to recognize values from lab result sheets, explain biochemical markers in plain language, and suggest lifestyle alerts for users.",
    category: "ai",
    imageUrl:
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    gallery: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    ],
    techStack: ["Python", "FastAPI", "React", "Gemini Vision API", "Tailwind CSS"],
    featured: false,
    demoUrl: "https://example.com/demo/medicare",
    githubUrl: "https://github.com/example/medicare-ai",
    highlights: [
      "1st place at the Healthy MedTech Hackathon 2024",
      "Average recognition and analysis time of 1.8 seconds per page",
      "Supports reading interfaces in both Vietnamese and English",
    ],
    role: "AI Developer",
    duration: "1 month (2024)",
    starsCount: 160,
  },
];

export const vi_VN_skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js / Next.js",
        level: 92,
        iconName: "Code2",
        description: "Xây dựng Single Page Apps & SSR phức tạp",
      },
      {
        name: "TypeScript",
        level: 90,
        iconName: "FileCode",
        description: "Đảm bảo tính chặt chẽ và an toàn kiểu dữ liệu",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        iconName: "Palette",
        description: "Thiết kế giao diện hiện đại, responsive",
      },
      {
        name: "Motion (Framer)",
        level: 85,
        iconName: "Sparkles",
        description: "Tạo chuyển động & tương tác trải nghiệm mượt",
      },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      {
        name: "Node.js / Express",
        level: 88,
        iconName: "Server",
        description: "Xây dựng RESTful API & WebSockets server",
      },
      {
        name: "RESTful & GraphQL APIs",
        level: 86,
        iconName: "Network",
        description: "Thiết kế chuẩn API bảo mật & quy chuẩn",
      },
      {
        name: "PostgreSQL & MongoDB",
        level: 82,
        iconName: "Database",
        description: "Truy vấn, tối ưu hóa cơ sở dữ liệu",
      },
      {
        name: "Redis & Caching",
        level: 78,
        iconName: "Zap",
        description: "Tăng tốc độ truy xuất dữ liệu hệ thống",
      },
    ],
  },
  {
    title: "AI Integration & Tools",
    skills: [
      {
        name: "Gemini API & LLM Solutions",
        level: 90,
        iconName: "Bot",
        description: "Tích hợp AI Agent, RAG & Multimodal AI",
      },
      {
        name: "Python / FastAPI",
        level: 80,
        iconName: "Terminal",
        description: "Xử lý dữ liệu & AI backend services",
      },
      {
        name: "Git / GitHub / CI-CD",
        level: 88,
        iconName: "GitBranch",
        description: "Quản lý phiên bản mã nguồn & tự động hóa",
      },
      {
        name: "Docker & Cloud Run",
        level: 78,
        iconName: "Cloud",
        description: "Đóng gói ứng dụng & triển khai đám mây",
      },
    ],
  },
];

export const en_US_skillCategories: SkillCategory[] = [
  {
    title: "Frontend Development",
    skills: [
      {
        name: "React.js / Next.js",
        level: 92,
        iconName: "Code2",
        description: "Building complex SPAs and SSR applications",
      },
      {
        name: "TypeScript",
        level: 90,
        iconName: "FileCode",
        description: "Strong typing for safer, maintainable code",
      },
      {
        name: "Tailwind CSS",
        level: 95,
        iconName: "Palette",
        description: "Modern, responsive UI design systems",
      },
      {
        name: "Motion (Framer)",
        level: 85,
        iconName: "Sparkles",
        description: "Smooth motion and interactive experiences",
      },
    ],
  },
  {
    title: "Backend & Databases",
    skills: [
      {
        name: "Node.js / Express",
        level: 88,
        iconName: "Server",
        description: "RESTful APIs and WebSocket servers",
      },
      {
        name: "RESTful & GraphQL APIs",
        level: 86,
        iconName: "Network",
        description: "Secure, standards-based API design",
      },
      {
        name: "PostgreSQL & MongoDB",
        level: 82,
        iconName: "Database",
        description: "Querying and optimizing databases",
      },
      {
        name: "Redis & Caching",
        level: 78,
        iconName: "Zap",
        description: "Faster data access with caching layers",
      },
    ],
  },
  {
    title: "AI Integration & Tools",
    skills: [
      {
        name: "Gemini API & LLM Solutions",
        level: 90,
        iconName: "Bot",
        description: "AI agents, RAG, and multimodal AI",
      },
      {
        name: "Python / FastAPI",
        level: 80,
        iconName: "Terminal",
        description: "Data processing and AI backend services",
      },
      {
        name: "Git / GitHub / CI-CD",
        level: 88,
        iconName: "GitBranch",
        description: "Source control and delivery automation",
      },
      {
        name: "Docker & Cloud Run",
        level: 78,
        iconName: "Cloud",
        description: "Containerization and cloud deployment",
      },
    ],
  },
];

export const vi_VN_experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Junior Full-Stack Engineer",
    company: "TechVision Solutions Corp",
    period: "03/2023 - Hiện tại",
    location: "Hà Nội, Việt Nam",
    description:
      "Dẫn dắt nhóm 6 lập trình viên phát triển các giải pháp Web App thế hệ mới cho khách hàng doanh nghiệp châu Á.",
    achievements: [
      "Kiến trúc lại hệ thống Frontend giúp giảm thời gian tải trang từ 3.2s xuống 0.8s",
      "Tích hợp các mô hình AI Agent vào nền tảng chăm sóc khách hàng, tiết kiệm 40% chi phí vận hành",
      "Hướng dẫn & Đào tạo cho các Junior Developers trong công ty",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Gemini AI",
      "Docker",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "NextGen Software Studio",
    period: "06/2021 - 02/2023",
    location: "TP. Hồ Chí Minh, Việt Nam",
    description:
      "Phát triển các sản phẩm SaaS, giao diện Dashboard quản trị và ứng dụng Thương mại điện tử.",
    achievements: [
      "Xây dựng hơn 15 dự án Web Apps chuẩn Responsive cho các đối tác quốc tế",
      "Xây dựng bộ thư viện UI Kit nội bộ giảm 30% thời gian phát triển dự án mới",
      "Phối hợp chặt chẽ với UI/UX Designers để tối ưu micro-interactions",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "REST API"],
  },
  {
    id: "exp-3",
    role: "Cử Nhân Khoa Học Máy Tính",
    company: "Trường Đại học Công nghệ (VNU) / ĐH Bách Khoa",
    period: "2017 - 2021",
    location: "Hà Nội, Việt Nam",
    description: "Tốt nghiệp loại Giỏi chuyên ngành Khoa học Máy tính & Công nghệ Phần mềm.",
    achievements: [
      "Giải Nhất Cuộc thi Sáng tạo Khởi nghiệp Công nghệ Sinh viên 2020",
      "Điểm trung bình tích lũy (GPA): 3.65 / 4.0",
      "Tác giả bài báo nghiên cứu về Tối ưu hóa UI/UX trong ứng dụng di động",
    ],
    technologies: ["C++", "Java", "Python", "Cơ sở dữ liệu", "Giải thuật & Cấu trúc dữ liệu"],
  },
];

export const en_US_experiences: Experience[] = [
  {
    id: "exp-1",
    role: "Junior Full-Stack Engineer",
    company: "TechVision Solutions Corp",
    period: "03/2023 - Present",
    location: "Hanoi, Vietnam",
    description:
      "Led a team of 6 engineers building next-generation web apps for enterprise clients across Asia.",
    achievements: [
      "Re-architected the frontend to cut page load time from 3.2s to 0.8s",
      "Integrated AI agents into the customer-care platform, reducing operating costs by 40%",
      "Mentored and trained junior developers across the team",
    ],
    technologies: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Gemini AI",
      "Docker",
    ],
  },
  {
    id: "exp-2",
    role: "Frontend Developer",
    company: "NextGen Software Studio",
    period: "06/2021 - 02/2023",
    location: "Ho Chi Minh City, Vietnam",
    description: "Built SaaS products, admin dashboards, and e-commerce applications.",
    achievements: [
      "Shipped 15+ responsive web apps for international partners",
      "Created an internal UI kit that cut new-project build time by 30%",
      "Partnered closely with UI/UX designers to refine micro-interactions",
    ],
    technologies: ["React", "JavaScript (ES6+)", "Tailwind CSS", "Redux Toolkit", "REST API"],
  },
  {
    id: "exp-3",
    role: "Bachelor of Computer Science",
    company: "University of Engineering and Technology (VNU) / Bach Khoa University",
    period: "2017 - 2021",
    location: "Hanoi, Vietnam",
    description: "Graduated with distinction in Computer Science & Software Engineering.",
    achievements: [
      "1st place in the 2020 Student Tech Startup Innovation Contest",
      "Cumulative GPA: 3.65 / 4.0",
      "Published research on UI/UX optimization in mobile applications",
    ],
    technologies: ["C++", "Java", "Python", "Databases", "Algorithms & Data Structures"],
  },
];

export const vi_VN_testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Trần Minh Đức",
    role: "CEO & Founder",
    company: "InnovateTech Vietnam",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content:
      "Nam là một lập trình viên xuất sắc. Khả năng vừa nắm vững kỹ thuật vừa có tư duy sản phẩm tinh tế giúp các dự án của chúng tôi luôn hoàn thành đúng hạn với chất lượng vượt mong đợi.",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Sarah Jenkins",
    role: "Product Manager",
    company: "Aura Digital Studio (Singapore)",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    content:
      "Làm việc với Nam trên dự án AI TaskFlow rất tuyệt. Anh ấy chú ý chi tiết, viết TypeScript sạch và phản hồi rất nhanh!",
    rating: 5,
  },
];

export const en_US_testimonials: Testimonial[] = [
  {
    id: "test-1",
    author: "Tran Minh Duc",
    role: "CEO & Founder",
    company: "InnovateTech Vietnam",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200",
    content:
      "Nam is an outstanding engineer. His strong technical depth and sharp product thinking helped our projects ship on time with quality that exceeded expectations.",
    rating: 5,
  },
  {
    id: "test-2",
    author: "Sarah Jenkins",
    role: "Product Manager",
    company: "Aura Digital Studio (Singapore)",
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200",
    content:
      "Working with Nam on the AI TaskFlow project was an absolute pleasure. High attention to detail, clean TypeScript code, and fast response times!",
    rating: 5,
  },
];

/** Locale helpers */
export type PortfolioLang = "vi" | "en";

export const getInitialProfile = (lang: PortfolioLang): ProfileData =>
  lang === "vi" ? vi_VN_initialProfileData : en_US_initialProfileData;

export const getInitialProjects = (lang: PortfolioLang): Project[] =>
  lang === "vi" ? vi_VN_initialProjects : en_US_initialProjects;

export const getSkillCategories = (lang: PortfolioLang): SkillCategory[] =>
  lang === "vi" ? vi_VN_skillCategories : en_US_skillCategories;

export const getExperiences = (lang: PortfolioLang): Experience[] =>
  lang === "vi" ? vi_VN_experiences : en_US_experiences;

export const getTestimonials = (lang: PortfolioLang): Testimonial[] =>
  lang === "vi" ? vi_VN_testimonials : en_US_testimonials;

/** Backward-compatible aliases (Vietnamese defaults) */
export const initialProfileData = vi_VN_initialProfileData;
export const initialProjects = vi_VN_initialProjects;
export const skillCategories = vi_VN_skillCategories;
export const experiences = vi_VN_experiences;
export const testimonials = vi_VN_testimonials;
