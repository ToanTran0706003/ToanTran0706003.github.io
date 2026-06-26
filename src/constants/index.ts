import type {
  TExperience,
  TNavLink,
  TProject,
  TService,
  TTechnology,
  TTestimonial,
} from '../types';

import {
  backend,
  creator,
  docker,
  git,
  projectEnglishAI,
  projectLedger,
  projectStockSight,
  reactjs,
  tailwind,
  threejs,
  typescript,
  web,
} from '../assets';

export const navLinks: TNavLink[] = [
  {
    id: 'about',
    title: {
      en: 'About',
      vi: 'Giới thiệu',
    },
  },
  {
    id: 'work',
    title: {
      en: 'Work',
      vi: 'Công việc',
    },
  },
  {
    id: 'contact',
    title: {
      en: 'Contact',
      vi: 'Liên hệ',
    },
  },
];

const services: TService[] = [
  {
    title: {
      en: 'Enterprise Backend',
      vi: 'Backend Enterprise',
    },
    icon: backend,
  },
  {
    title: {
      en: 'ABP + Blazor Workflows',
      vi: 'Workflow ABP + Blazor',
    },
    icon: web,
  },
  {
    title: {
      en: 'Release Stabilization',
      vi: 'Ổn định Release',
    },
    icon: creator,
  },
  {
    title: {
      en: 'AI-assisted Debugging',
      vi: 'Debug có hỗ trợ AI',
    },
    icon: backend,
  },
];

const technologies: TTechnology[] = [
  {
    name: 'ASP.NET Core / ABP',
    icon: backend,
  },
  {
    name: 'C# / Blazor',
    icon: web,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React',
    icon: reactjs,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Three.js',
    icon: threejs,
  },
  {
    name: 'Git',
    icon: git,
  },
  {
    name: 'Docker',
    icon: docker,
  },
];

const experiences: TExperience[] = [
  {
    title: {
      en: 'Backend/.NET Engineer',
      vi: 'Kỹ sư Backend/.NET',
    },
    companyName: {
      en: 'HQSOFT - Distribution & Retail Expert',
      vi: 'HQSOFT - Chuyên gia Phân phối & Bán lẻ',
    },
    icon: backend,
    iconBg: '#102D3D',
    date: {
      en: 'Current - 1+ year',
      vi: 'Hiện tại - hơn 1 năm',
    },
    points: {
      en: [
        'Work on enterprise software for distribution and retail business workflows in a professional product environment.',
        'Contribute to backend-first delivery across ASP.NET Core, ABP-style application layers, Blazor workflows, localization, reporting, and release readiness.',
        'Support issue resolution and stabilization while keeping internal project details summarized for public portfolio use.',
      ],
      vi: [
        'Làm việc trên phần mềm enterprise cho các workflow nghiệp vụ phân phối và bán lẻ trong môi trường sản phẩm chuyên nghiệp.',
        'Đóng góp theo hướng backend-first trên ASP.NET Core, application layer kiểu ABP, Blazor workflow, localization, report và chuẩn bị release.',
        'Hỗ trợ xử lý issue và ổn định hệ thống, đồng thời giữ chi tiết dự án nội bộ ở mức tóm tắt phù hợp cho portfolio public.',
      ],
    },
  },
  {
    title: {
      en: 'Enterprise Backend Contribution',
      vi: 'Đóng góp Backend Enterprise',
    },
    companyName: {
      en: 'Large ABP/Blazor product codebase',
      vi: 'Codebase sản phẩm ABP/Blazor lớn',
    },
    icon: backend,
    iconBg: '#0E2A3A',
    date: {
      en: 'Primary contribution area',
      vi: 'Mảng đóng góp chính',
    },
    points: {
      en: [
        'Worked across layered application code, shared localization, reporting surfaces, and business workflow support.',
        'Contributed in a multi-contributor environment where understanding existing patterns mattered as much as writing code.',
        'Kept private business details summarized while preserving a clear public explanation of contribution scope.',
      ],
      vi: [
        'Làm việc trên application layer, localization dùng chung, bề mặt report và hỗ trợ workflow nghiệp vụ.',
        'Đóng góp trong môi trường nhiều contributor, nơi hiểu pattern hiện có quan trọng không kém việc viết code.',
        'Giữ chi tiết nghiệp vụ riêng tư ở mức tóm tắt nhưng vẫn thể hiện rõ phạm vi đóng góp public.',
      ],
    },
  },
  {
    title: {
      en: 'Bug Fixing & Release Stabilization',
      vi: 'Fix Bug & Ổn định Release',
    },
    companyName: {
      en: 'Fast-moving enterprise delivery flow',
      vi: 'Luồng delivery enterprise thay đổi nhanh',
    },
    icon: creator,
    iconBg: '#18352F',
    date: {
      en: 'Largest work pattern',
      vi: 'Nhóm việc nổi bật nhất',
    },
    points: {
      en: [
        'Focused on root-cause analysis, conflict readiness, regression risk, and delivery confidence before handoff.',
        'Built a habit of checking surrounding behavior instead of only patching the visible symptom.',
        'Converted scattered work evidence into CV-ready contribution language for future interviews.',
      ],
      vi: [
        'Tập trung vào phân tích nguyên nhân gốc, sẵn sàng xử lý conflict, rủi ro regression và độ tin cậy trước khi bàn giao.',
        'Duy trì thói quen kiểm tra hành vi xung quanh thay vì chỉ vá triệu chứng nhìn thấy.',
        'Chuyển bằng chứng công việc rời rạc thành ngôn ngữ đóng góp phù hợp cho CV và phỏng vấn.',
      ],
    },
  },
  {
    title: {
      en: 'AI-assisted Engineering Workflow',
      vi: 'Quy trình Engineering có hỗ trợ AI',
    },
    companyName: {
      en: 'Codex, Claude, and local evidence review',
      vi: 'Codex, Claude và rà soát bằng chứng local',
    },
    icon: web,
    iconBg: '#243152',
    date: {
      en: 'Workflow multiplier',
      vi: 'Yếu tố tăng tốc workflow',
    },
    points: {
      en: [
        'Used AI tools to retrieve context, compare evidence, summarize contribution signals, and reduce investigation time.',
        'Kept engineering ownership on decisions: scope, technical judgment, verification, and final delivery.',
        'Built private reporting habits that make weekly review and portfolio updates easier to maintain.',
      ],
      vi: [
        'Dùng AI để truy xuất ngữ cảnh, đối chiếu bằng chứng, tóm tắt tín hiệu đóng góp và giảm thời gian điều tra.',
        'Giữ quyền sở hữu kỹ thuật ở các quyết định: phạm vi, đánh giá kỹ thuật, xác minh và delivery cuối.',
        'Xây dựng thói quen report riêng giúp review hằng tuần và cập nhật portfolio dễ duy trì hơn.',
      ],
    },
  },
];

const testimonials: TTestimonial[] = [
  {
    testimonial: {
      en: 'I start from the failure path, surrounding code, and release context before deciding what to change.',
      vi: 'Tôi bắt đầu từ luồng lỗi, code xung quanh và ngữ cảnh release trước khi quyết định sửa gì.',
    },
    name: {
      en: 'Root-cause first',
      vi: 'Ưu tiên nguyên nhân gốc',
    },
    designation: {
      en: 'Debugging',
      vi: 'Debug',
    },
    company: {
      en: 'Evidence-based',
      vi: 'Dựa trên bằng chứng',
    },
    image: backend,
  },
  {
    testimonial: {
      en: 'I frame work by delivery impact: what becomes more stable, easier to verify, or safer to release.',
      vi: 'Tôi diễn đạt công việc theo tác động delivery: phần nào ổn định hơn, dễ verify hơn hoặc an toàn hơn khi release.',
    },
    name: {
      en: 'Release-minded',
      vi: 'Tư duy release',
    },
    designation: {
      en: 'Stabilization',
      vi: 'Ổn định',
    },
    company: {
      en: 'Enterprise flow',
      vi: 'Luồng enterprise',
    },
    image: creator,
  },
  {
    testimonial: {
      en: 'I use AI as a disciplined support tool for investigation and documentation, not as a replacement for engineering judgment.',
      vi: 'Tôi dùng AI như công cụ hỗ trợ điều tra và tài liệu hóa có kỷ luật, không thay thế đánh giá kỹ thuật.',
    },
    name: {
      en: 'AI-assisted',
      vi: 'AI-assisted',
    },
    designation: {
      en: 'Workflow',
      vi: 'Workflow',
    },
    company: {
      en: 'Human-owned',
      vi: 'Con người sở hữu',
    },
    image: web,
  },
];

const projects: TProject[] = [
  {
    name: 'ledger',
    description: {
      en: 'Event-sourced financial ledger core using Java 21 and Spring Boot, shaped around Event Sourcing and CQRS patterns.',
      vi: 'Core ledger tài chính theo Event Sourcing, dùng Java 21 và Spring Boot, thiết kế xoay quanh Event Sourcing và CQRS.',
    },
    tags: [
      {
        name: 'event-sourcing',
        color: 'blue-text-gradient',
      },
      {
        name: 'cqrs',
        color: 'green-text-gradient',
      },
      {
        name: 'java',
        color: 'pink-text-gradient',
      },
    ],
    image: projectLedger,
    sourceCodeLink: 'https://github.com/ToanTran0706003/ledger',
  },
  {
    name: 'StockSight',
    description: {
      en: 'Real-time stock dashboard built with ASP.NET Core 8, Blazor WebAssembly, and SignalR.',
      vi: 'Dashboard chứng khoán real-time xây bằng ASP.NET Core 8, Blazor WebAssembly và SignalR.',
    },
    tags: [
      {
        name: 'aspnet-core',
        color: 'blue-text-gradient',
      },
      {
        name: 'blazor',
        color: 'green-text-gradient',
      },
      {
        name: 'signalr',
        color: 'pink-text-gradient',
      },
    ],
    image: projectStockSight,
    sourceCodeLink: 'https://github.com/ToanTran0706003/StockSight',
  },
  {
    name: 'EnglishAI',
    description: {
      en: 'A .NET 8 clean architecture backend for English learning workflows, including practice modules, AI features, and operational services.',
      vi: 'Backend .NET 8 theo clean architecture cho workflow học tiếng Anh, gồm module luyện tập, tính năng AI và dịch vụ vận hành.',
    },
    tags: [
      {
        name: 'dotnet-8',
        color: 'blue-text-gradient',
      },
      {
        name: 'clean-architecture',
        color: 'green-text-gradient',
      },
      {
        name: 'learning-ai',
        color: 'pink-text-gradient',
      },
    ],
    image: projectEnglishAI,
    sourceCodeLink: 'https://github.com/ToanTran0706003/EnglishAI',
  },
];

export { experiences, projects, services, technologies, testimonials };
