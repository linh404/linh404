// ─── NAV ───
const nav = document.getElementById('main-nav');
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
});

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu on link click
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── SCROLL SPY ───
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');

const observerSpy = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => observerSpy.observe(s));

// ─── FADE-IN ON SCROLL ───
const fadeEls = document.querySelectorAll('.fade-up');
const observerFade = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      const delay = entry.target.dataset.delay || 0;
      setTimeout(() => entry.target.classList.add('visible'), delay);
      observerFade.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

fadeEls.forEach(el => observerFade.observe(el));

// ─── STAGGER CHILDREN ───
document.querySelectorAll('[data-stagger]').forEach(parent => {
  Array.from(parent.children).forEach((child, i) => {
    child.classList.add('fade-up');
    child.dataset.delay = i * 80;
    observerFade.observe(child);
  });
});

// ─── TYPING EFFECT ───
const typingEl = document.getElementById('typing-text');
let phrases = [
  'Software Engineer',
  'Full-stack Builder',
  'API Engineer',
  'Systems Thinker',
];
let pIdx = 0, cIdx = 0, deleting = false;

if (typingEl) {
  function type() {
    const phrase = phrases[pIdx];
    if (!deleting) {
      typingEl.textContent = phrase.slice(0, ++cIdx);
      if (cIdx === phrase.length) {
        deleting = true;
        setTimeout(type, 1800);
        return;
      }
    } else {
      typingEl.textContent = phrase.slice(0, --cIdx);
      if (cIdx === 0) {
        deleting = false;
        pIdx = (pIdx + 1) % phrases.length;
      }
    }
    setTimeout(type, deleting ? 45 : 80);
  }
  type();
}

// ─── THEME LOGIC (Auto + Manual) ───
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(isLight) {
  if (isLight) {
    document.body.classList.add('light-mode');
  } else {
    document.body.classList.remove('light-mode');
  }
}

function updateTheme() {
  const savedTheme = localStorage.getItem('theme-preference');
  if (savedTheme !== null) {
    applyTheme(savedTheme === 'light');
    return;
  }

  // Fallback to Vietnam Time auto-logic (GMT+7)
  const now = new Date();
  const vnTime = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Ho_Chi_Minh"}));
  const hour = vnTime.getHours();
  applyTheme(hour >= 6 && hour < 18);
}

themeToggle.addEventListener('click', () => {
  const isLight = document.body.classList.toggle('light-mode');
  localStorage.setItem('theme-preference', isLight ? 'light' : 'dark');
});

// Check on load and every minute (if no manual override)
updateTheme();
setInterval(updateTheme, 60000);
// ─── AUTO CALCULATE AGE ───
const ageEl = document.getElementById('calc-age');
if (ageEl) {
  const birthYear = 2003;
  const now = new Date();
  ageEl.textContent = now.getFullYear() - birthYear;
}

// ─── LANGUAGE TOGGLE ───
const translations = {
  vi: {
    nav_about: "Giới thiệu",
    nav_skills: "Kỹ năng",
    nav_projects: "Dự án",
    nav_experience: "Kinh nghiệm",
    nav_contact: "Liên hệ",
    terminal_comment: "// Thông tin cá nhân",
    terminal_edu: "\"Sinh viên năm cuối — Học viện Kỹ thuật Mật mã\"",
    terminal_focus: "\"Kỹ thuật Phần mềm\"",
    hero_badge: "Sẵn sàng nhận việc",
    hero_desc: "Tôi thích xây hệ thống từ đầu — từ API, database, xác thực cho đến deploy lên production. Làm full-stack nhưng luôn giữ tư duy của người làm hệ thống.",
    hero_btn_projects: "Xem dự án",
    hero_btn_contact: "Liên hệ ngay",
    about_label: "Giới thiệu",
    about_title: "Hệ thống vững — mở rộng dễ",
    about_code_focus: "\"Kỹ thuật Phần mềm\"",
    about_p1: "Tôi thích nhận những bài toán nghiệp vụ rối rắm rồi biến chúng thành code sạch, chạy ổn và dễ maintain. Hàng ngày tôi làm việc với REST API, thiết kế database, hệ thống auth và tích hợp bên thứ ba.",
    about_p2: "Tôi đã ship nhiều hệ thống chạy thật — từ sàn thương mại điện tử có thanh toán online, đến phần mềm quản lý học vụ nội bộ với quy trình duyệt nhiều cấp và tự động xuất tài liệu.",
    about_p3: "Ngoài web, tôi cũng làm mobile với Flutter và hay mò mẫm thêm mấy thứ như lập trình thẻ thông minh hay bảo mật hệ thống.",
    stat_projects: "Dự án hoàn thành",
    stat_stacks: "Công nghệ thành thạo",
    stat_repos: "Repo GitHub",
    stat_curiosity: "Luôn học hỏi",
    skills_label: "Kỹ năng",
    skills_title: "Công nghệ thường dùng",
    skills_subtitle: "Những công nghệ tôi sử dụng hàng ngày để xây dựng sản phẩm thực tế",
    skill_node_desc: "Phát triển RESTful API và xử lý nghiệp vụ phía server — đảm bảo hiệu năng, bảo mật và dễ mở rộng.",
    skill_db_desc: "Thiết kế cấu trúc CSDL tối ưu, phục vụ truy vấn nhanh và ổn định (MySQL, PostgreSQL, Supabase).",
    skill_linux_desc: "Quản trị server Linux: cấu hình, quản lý log, rà soát bảo mật cơ bản.",
    skill_pm2_desc: "Triển khai và giám sát ứng dụng chạy liên tục 24/7 trên Linux bằng PM2.",
    projects_label: "Dự án",
    projects_title: "Dự án tiêu biểu",
    projects_subtitle: "Những sản phẩm đã triển khai thực tế và dự án mã nguồn mở",
    project_qt_back_desc: "Hệ thống bán hàng và quản lý nội bộ cho quán cà phê, xây dựng full-stack. Tích hợp phân quyền người dùng, chatbot AI tư vấn sản phẩm và thanh toán trực tuyến tự động.",
    project_qt_back_h1: "Phân quyền Admin/Buyer bằng NextAuth + JWT",
    project_qt_back_h2: "Tích hợp chatbot AI với Google Gemini API",
    project_qt_back_h3: "Thanh toán trực tuyến qua VNPay & Momo",
    project_qt_back_h4: "Quản lý sản phẩm, tồn kho và xử lý đơn hàng",
    project_qt_back_h5: "Bảng thống kê doanh thu và báo cáo cho quản trị viên",
    project_qt_front_desc: "Giao diện mua hàng dành cho khách hàng của QuanTra Coffee — duyệt sản phẩm, đặt hàng, thanh toán và theo dõi đơn hàng theo thời gian thực.",
    project_qt_front_h1: "Đăng nhập, đăng ký và quản lý phiên người dùng",
    project_qt_front_h2: "Tìm kiếm, lọc và xem chi tiết sản phẩm",
    project_qt_front_h3: "Luồng thanh toán và chuyển hướng cổng thanh toán",
    project_qt_front_h4: "Theo dõi đơn hàng và xem lịch sử mua hàng",
    project_twms_desc: "Phần mềm quản lý học vụ nội bộ dành cho giảng viên và cán bộ — tự động tính khối lượng giảng dạy, xử lý hợp đồng mời giảng và kê khai vượt giờ.",
    project_twms_h1: "<strong>Vai trò:</strong> Lập trình viên Backend",
    project_twms_h2: "<strong>Công việc:</strong> Thiết kế CSDL, xây dựng luồng dữ liệu và phát triển RESTful API.",
    project_twms_h3: "<strong>Triển khai:</strong> Deploy trực tiếp và duy trì ứng dụng trên server Linux bằng PM2.",
    project_twms_test_title: "Tài khoản trải nghiệm:",
    project_ctl_desc: "Website PHP áp dụng mô hình MVC truyền thống — render trang phía server và quản lý nội dung động.",
    project_ctl_h1: "Render giao diện phía server bằng PHP",
    project_ctl_h2: "Quản lý nội dung động",
    project_ctl_h3: "Áp dụng kiến trúc MVC",
    project_android_desc: "Server API phục vụ ứng dụng Android — xử lý dữ liệu, xác thực người dùng và giao tiếp giữa app và server.",
    project_android_h1: "Xây dựng RESTful API cho ứng dụng di động",
    project_android_h2: "Xác thực người dùng và quản lý phiên đăng nhập",
    project_android_h3: "Lưu trữ dữ liệu và xử lý nghiệp vụ phía server",
    project_smartcard_desc: "Dự án nghiên cứu lập trình thẻ thông minh bằng Java — làm việc với giao thức truyền dữ liệu mức thấp và bảo mật trên thiết bị nhúng.",
    project_smartcard_h1: "Lập trình giao thức giao tiếp thẻ thông minh",
    project_smartcard_h2: "Đọc/ghi dữ liệu bảo mật trên thiết bị nhúng",
    project_smartcard_h3: "Tích hợp Java Card API",
    exp_label: "Kinh nghiệm",
    exp_title: "Quá trình làm việc",
    exp_1_role: "Kỹ sư Phần mềm (Theo dự án)",
    exp_1_company: "Dự án cá nhân & Học thuật",
    exp_1_desc: "Tự tay dựng nhiều hệ thống full-stack từ con số 0. QuanTra Coffee chạy thanh toán thật với VNPay/Momo và tích hợp AI chatbot. TWMS thì phục vụ quản lý học vụ liên phòng ban, tự động xuất hợp đồng và kê khai.",
    exp_2_role: "Lập trình viên Full-stack (Giai đoạn học tập)",
    exp_2_company: "Đồ án đại học & Tự nghiên cứu",
    exp_2_desc: "Giai đoạn xây nền: làm web PHP (CTL-web), dựng server cho app Android, thử Flutter làm app đa nền tảng. Từ đây có được kiến thức chắc về REST API, thiết kế database và mô hình MVC.",
    exp_3_role: "Thẻ thông minh & Hệ thống nhúng",
    exp_3_company: "Nghiên cứu học thuật",
    exp_3_desc: "Mò vào Java Card — lập trình mức thấp trên thẻ thông minh, xử lý giao thức truyền dữ liệu và bảo mật trên thiết bị nhúng.",
    contact_label: "Liên hệ",
    contact_title: "Hãy cùng hợp tác",
    contact_desc: "Tôi đang tìm vị trí Software Engineer hoặc dự án freelance thú vị. Nếu bạn đang cần người có tư duy hệ thống và không ngại bắt tay vào làm — hãy liên hệ với tôi.",
    footer_infra: "Hệ thống hoạt động ổn định • Vận hành bằng PM2 trên Linux",
    footer_design: "Thiết kế & phát triển bởi",
    typing_phrases: [
      'Kỹ sư Phần mềm',
      'Full-stack Developer',
      'Kỹ sư API',
      'Tư duy Hệ thống',
    ]
  },
  en: {
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_experience: "Experience",
    nav_contact: "Contact",
    terminal_comment: "// Personal Info",
    terminal_edu: "\"Final-year student — Academy of Cryptography Techniques\"",
    terminal_focus: "\"Software Engineering\"",
    hero_badge: "Available for opportunities",
    hero_desc: "I build web systems end-to-end — APIs, auth, databases, deployment. Full-stack capable with a systems-first mindset.",
    hero_btn_projects: "View Projects",
    hero_btn_contact: "Get in Touch",
    about_label: "About",
    about_title: "Building systems that scale",
    about_code_focus: "\"Software Engineering\"",
    about_p1: "I like taking messy business problems and turning them into clean, maintainable code. Day to day I work with REST APIs, database design, auth systems, and third-party integrations.",
    about_p2: "I've shipped real production systems — e-commerce with live payment gateways, internal academic tools with multi-step approval flows and automated document generation.",
    about_p3: "Outside of web, I build mobile apps with Flutter and tinker with things like smart card programming and system security.",
    stat_projects: "Projects Shipped",
    stat_stacks: "Tech Stacks",
    stat_repos: "GitHub Repos",
    stat_curiosity: "Curiosity",
    skills_label: "Skills",
    skills_title: "Technical Toolkit",
    skills_subtitle: "Technologies I use to build production-grade systems",
    skill_node_desc: "Building high-performance, secure, and scalable RESTful APIs and server-side logic.",
    skill_db_desc: "Designing and optimizing database schemas for performance (MySQL, PostgreSQL, Supabase).",
    skill_linux_desc: "Linux systems administration, log management, and basic server security auditing.",
    skill_pm2_desc: "Operating and monitoring 24/7 production applications on Linux environments using PM2.",
    projects_label: "Projects",
    projects_title: "Featured Work",
    projects_subtitle: "Production systems and open-source projects",
    project_qt_back_desc: "Full-stack e-commerce and internal management system for a coffee shop. Supports role-based access control, AI-powered product consultancy, and automated payment processing.",
    project_qt_back_h1: "Role-based auth (Admin/Buyer) via NextAuth + JWT",
    project_qt_back_h2: "AI chatbot integrated with Google Gemini API",
    project_qt_back_h3: "VNPay & Momo payment gateway integration",
    project_qt_back_h4: "Product catalog, inventory & order lifecycle management",
    project_qt_back_h5: "Sales statistics and admin reporting dashboard",
    project_qt_front_desc: "Customer-facing storefront for QuanTra Coffee. Handles product browsing, cart management, order placement, and real-time order status tracking with a polished UI.",
    project_qt_front_h1: "Customer authentication and session management",
    project_qt_front_h2: "Product search, filtering, and detail pages",
    project_qt_front_h3: "Cart and checkout flow with payment gateway redirect",
    project_qt_front_h4: "Order tracking and history for logged-in users",
    project_twms_desc: "Internal academic platform for lecturers and staff, automating workload management and teaching contract workflows.",
    project_twms_h1: "<strong>Role:</strong> Backend Developer",
    project_twms_h2: "<strong>Tasks:</strong> Database design, data flow architecture, and RESTful API development.",
    project_twms_h3: "<strong>Deployment:</strong> Directly deployed and maintained the application on a Linux test server using PM2.",
    project_twms_test_title: "Demo Account:",
    project_ctl_desc: "PHP-based web application demonstrating server-side rendering, dynamic content management, and traditional MVC architecture patterns.",
    project_ctl_h1: "Server-side rendering with PHP",
    project_ctl_h2: "Dynamic content and data management",
    project_ctl_h3: "Traditional MVC architecture",
    project_android_desc: "REST API server built to power an Android mobile application. Handles data persistence, authentication, and client-server communication.",
    project_android_h1: "RESTful API endpoints for mobile consumption",
    project_android_h2: "Authentication and session handling",
    project_android_h3: "Data persistence and server-side logic",
    project_smartcard_desc: "Java-based smart card software development project. Explores low-level card communication protocols and secure data storage on embedded devices.",
    project_smartcard_h1: "Smart card communication protocol implementation",
    project_smartcard_h2: "Secure data read/write on embedded devices",
    project_smartcard_h3: "Java Card API integration",
    exp_label: "Experience",
    exp_title: "Background",
    exp_1_role: "Software Engineer (Project-based)",
    exp_1_company: "Independent / Academic Projects",
    exp_1_desc: "Built multiple full-stack systems from scratch. QuanTra Coffee handles real payments via VNPay/Momo with an AI chatbot. TWMS manages multi-department academic workflows with automated contract and document generation.",
    exp_2_role: "Full-stack Developer (Learning Phase)",
    exp_2_company: "University Projects & Personal Study",
    exp_2_desc: "Foundation-building phase: PHP web app (CTL-web), Android backend server, Flutter for cross-platform mobile. Picked up solid fundamentals in REST API design, database modeling, and MVC patterns.",
    exp_3_role: "Smart Card & Embedded Systems",
    exp_3_company: "Academic Research",
    exp_3_desc: "Dug into low-level Java Card development — secure data storage, card communication protocols, and embedded security on smart card hardware.",
    contact_label: "Contact",
    contact_title: "Let's Work Together",
    contact_desc: "Looking for software engineering roles or interesting freelance projects. If you need someone who thinks in systems and ships working code — let's talk.",
    footer_infra: "All systems operational • Maintained with PM2 on Linux",
    footer_design: "Designed & built by",
    typing_phrases: [
      'Software Engineer',
      'Full-stack Builder',
      'API Engineer',
      'Systems Thinker',
    ]
  }
};

const langToggleBtn = document.getElementById('lang-toggle');
const langText = langToggleBtn.querySelector('.lang-text');

let currentLang = localStorage.getItem('lang-preference') || 'vi';

function updateLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang-preference', lang);
  
  langText.textContent = lang === 'vi' ? 'EN' : 'VI';
  document.documentElement.lang = lang;
  
  const dict = translations[lang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.innerHTML = dict[key];
    }
  });

  // Update typing phrases
  if (typingEl) {
    phrases.length = 0;
    phrases.push(...dict.typing_phrases);
    if (pIdx >= phrases.length) pIdx = 0;
  }
}

// Initial set
updateLanguage(currentLang);

langToggleBtn.addEventListener('click', () => {
  updateLanguage(currentLang === 'vi' ? 'en' : 'vi');
});
