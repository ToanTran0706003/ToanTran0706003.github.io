import type { LocalizedText } from '../types';

type TSection = {
  p: LocalizedText;
  h2: LocalizedText;
  content?: LocalizedText;
};

type TConfig = {
  html: {
    title: string;
    fullName: string;
    email: string;
    github: string;
    brand: LocalizedText;
  };
  hero: {
    greeting: LocalizedText;
    name: string;
    p: LocalizedText<[string, string]>;
  };
  contact: {
    lead: LocalizedText;
    githubLabel: LocalizedText;
    submit: LocalizedText;
    sending: LocalizedText;
    success: LocalizedText;
    fallback: LocalizedText;
    failure: LocalizedText;
    form: {
      name: {
        span: LocalizedText;
        placeholder: LocalizedText;
      };
      email: {
        span: LocalizedText;
        placeholder: LocalizedText;
      };
      message: {
        span: LocalizedText;
        placeholder: LocalizedText;
      };
    };
  } & TSection;
  sections: {
    about: Required<TSection>;
    experience: TSection;
    feedbacks: TSection;
    works: Required<TSection>;
  };
};

export const config: TConfig = {
  html: {
    title: 'Toan Tran - Backend/.NET Portfolio',
    fullName: 'Toan Tran',
    email: '',
    github: 'https://github.com/ToanTran0706003',
    brand: {
      en: 'Toan Tran',
      vi: 'Toàn Trần',
    },
  },
  hero: {
    greeting: {
      en: "Hi, I'm",
      vi: 'Xin chào, tôi là',
    },
    name: 'Toan Tran',
    p: {
      en: [
        'Backend/.NET engineer focused on enterprise systems,',
        'release stabilization, and AI-assisted debugging workflows.',
      ],
      vi: [
        'Kỹ sư Backend/.NET tập trung vào hệ thống enterprise,',
        'ổn định release và quy trình debug có hỗ trợ AI.',
      ],
    },
  },
  contact: {
    p: {
      en: 'Get in touch',
      vi: 'Kết nối',
    },
    h2: {
      en: 'Contact.',
      vi: 'Liên hệ.',
    },
    lead: {
      en: 'For public work, GitHub is the best starting point. The form can be connected later with EmailJS credentials.',
      vi: 'Với portfolio public, GitHub là điểm bắt đầu phù hợp nhất. Form có thể kết nối sau bằng EmailJS.',
    },
    githubLabel: {
      en: 'Open GitHub profile',
      vi: 'Mở GitHub cá nhân',
    },
    submit: {
      en: 'Send message',
      vi: 'Gửi tin nhắn',
    },
    sending: {
      en: 'Sending...',
      vi: 'Đang gửi...',
    },
    success: {
      en: 'Thank you. I will get back to you as soon as possible.',
      vi: 'Cảm ơn bạn. Tôi sẽ phản hồi sớm nhất có thể.',
    },
    fallback: {
      en: 'Email service is not configured yet. Please reach me through GitHub.',
      vi: 'Dịch vụ email chưa được cấu hình. Vui lòng liên hệ qua GitHub.',
    },
    failure: {
      en: 'Something went wrong. Please try GitHub instead.',
      vi: 'Có lỗi xảy ra. Vui lòng thử liên hệ qua GitHub.',
    },
    form: {
      name: {
        span: {
          en: 'Your Name',
          vi: 'Tên của bạn',
        },
        placeholder: {
          en: "What's your name?",
          vi: 'Bạn tên là gì?',
        },
      },
      email: {
        span: {
          en: 'Your Email',
          vi: 'Email của bạn',
        },
        placeholder: {
          en: "What's your email?",
          vi: 'Email của bạn là gì?',
        },
      },
      message: {
        span: {
          en: 'Your Message',
          vi: 'Nội dung',
        },
        placeholder: {
          en: 'What do you want to say?',
          vi: 'Bạn muốn trao đổi điều gì?',
        },
      },
    },
  },
  sections: {
    about: {
      p: {
        en: 'Introduction',
        vi: 'Giới thiệu',
      },
      h2: {
        en: 'Overview.',
        vi: 'Tổng quan.',
      },
      content: {
        en: `I build and stabilize enterprise software with a backend-first mindset. I am currently working at HQSOFT with 1+ year of experience in enterprise distribution and retail software, with recent work centered on ASP.NET Core, ABP-style application layers, Blazor workflows, localization, reporting, and release-readiness in a large multi-contributor codebase. I also use AI tools as an engineering accelerator for context retrieval, root-cause analysis, and evidence synthesis while keeping ownership on scope decisions and verification.`,
        vi: `Tôi xây dựng và ổn định phần mềm enterprise với tư duy backend-first. Hiện tại tôi đang làm việc tại HQSOFT với hơn 1 năm kinh nghiệm trong phần mềm enterprise cho lĩnh vực phân phối và bán lẻ; công việc gần đây tập trung vào ASP.NET Core, kiến trúc theo lớp kiểu ABP, Blazor workflow, localization, report và chuẩn bị release trong codebase nhiều contributor. Tôi cũng dùng AI như công cụ tăng tốc kỹ thuật để truy xuất ngữ cảnh, phân tích nguyên nhân gốc và tổng hợp bằng chứng, trong khi vẫn giữ trách nhiệm ở quyết định phạm vi và xác minh cuối cùng.`,
      },
    },
    experience: {
      p: {
        en: 'What I focus on',
        vi: 'Trọng tâm công việc',
      },
      h2: {
        en: 'Contribution Areas.',
        vi: 'Mảng đóng góp.',
      },
    },
    feedbacks: {
      p: {
        en: 'How I work',
        vi: 'Cách tôi làm việc',
      },
      h2: {
        en: 'Working Style.',
        vi: 'Phong cách làm việc.',
      },
    },
    works: {
      p: {
        en: 'Public repositories',
        vi: 'Repository public',
      },
      h2: {
        en: 'Projects.',
        vi: 'Dự án.',
      },
      content: {
        en: `These public projects show the technical direction behind my enterprise work: backend design, real-time dashboards, clean architecture, and practical product workflows. Private project details are intentionally summarized at a high level.`,
        vi: `Các dự án public này thể hiện hướng kỹ thuật phía sau công việc enterprise của tôi: thiết kế backend, dashboard real-time, clean architecture và workflow sản phẩm thực tế. Chi tiết dự án riêng được tóm tắt ở mức tổng quan có chủ đích.`,
      },
    },
  },
};
