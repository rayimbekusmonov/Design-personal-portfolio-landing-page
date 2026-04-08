import { useState, useEffect, useRef } from "react";

const style = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&family=DM+Sans:wght@300;400;500&display=swap');

  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --cream: #F5F0E8;
    --ink: #1C1917;
    --accent: #C8A96E;
    --muted: #78716C;
    --white: #FEFEFE;
    --border: rgba(28,25,23,0.12);
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--cream);
    color: var(--ink);
    font-family: 'DM Sans', sans-serif;
    overflow-x: hidden;
  }

  .serif { font-family: 'Playfair Display', serif; }

  /* NAV */
  nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; align-items: center; justify-content: space-between;
    padding: 20px 60px;
    background: rgba(245,240,232,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
  }

  .nav-logo {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 900;
    letter-spacing: -0.5px;
    color: var(--ink);
    text-decoration: none;
  }

  .nav-links { display: flex; gap: 40px; list-style: none; }
  .nav-links a {
    font-size: 14px; font-weight: 500; color: var(--muted);
    text-decoration: none; letter-spacing: 0.5px; text-transform: uppercase;
    transition: color 0.2s;
  }
  .nav-links a:hover { color: var(--ink); }

  .nav-cta {
    font-size: 13px; font-weight: 500;
    padding: 10px 24px;
    background: var(--ink); color: var(--cream);
    border: none; border-radius: 100px; cursor: pointer;
    letter-spacing: 0.3px;
    transition: background 0.2s, transform 0.15s;
    text-decoration: none;
  }
  .nav-cta:hover { background: var(--accent); transform: translateY(-1px); }

  /* HERO */
  .hero {
    min-height: 100vh;
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 120px 60px 80px;
    gap: 60px;
    align-items: center;
  }

  .hero-left { display: flex; flex-direction: column; gap: 32px; }

  .hero-tag {
    display: inline-flex; align-items: center; gap: 8px;
    font-size: 12px; font-weight: 500; color: var(--accent);
    letter-spacing: 2px; text-transform: uppercase;
  }

  .hero-tag::before {
    content: '';
    width: 32px; height: 1px;
    background: var(--accent);
  }

  .hero-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(52px, 6vw, 80px);
    font-weight: 900;
    line-height: 1.05;
    letter-spacing: -2px;
    color: var(--ink);
  }

  .hero-title em {
    font-style: italic;
    color: var(--accent);
  }

  .hero-desc {
    font-size: 17px; line-height: 1.75;
    color: var(--muted); max-width: 440px;
  }

  .hero-actions { display: flex; gap: 16px; align-items: center; }

  .btn-primary {
    padding: 14px 32px; border-radius: 100px;
    background: var(--ink); color: var(--cream);
    font-size: 15px; font-weight: 500;
    text-decoration: none; border: none; cursor: pointer;
    transition: background 0.2s, transform 0.15s;
  }
  .btn-primary:hover { background: var(--accent); transform: translateY(-2px); }

  .btn-ghost {
    padding: 14px 32px; border-radius: 100px;
    background: transparent; color: var(--ink);
    font-size: 15px; font-weight: 500;
    border: 1.5px solid var(--border);
    text-decoration: none; cursor: pointer;
    transition: border-color 0.2s, transform 0.15s;
  }
  .btn-ghost:hover { border-color: var(--ink); transform: translateY(-2px); }

  .hero-stats {
    display: flex; gap: 40px;
    padding-top: 16px;
    border-top: 1px solid var(--border);
  }

  .stat-num {
    font-family: 'Playfair Display', serif;
    font-size: 36px; font-weight: 900;
    color: var(--ink);
  }

  .stat-label { font-size: 13px; color: var(--muted); margin-top: 4px; }

  .hero-right {
    position: relative;
    display: flex; justify-content: flex-end;
  }

  .hero-img-wrap {
    position: relative;
    width: 440px; height: 560px;
  }

  .hero-img-wrap::before {
    content: '';
    position: absolute;
    top: 20px; right: -20px;
    width: 100%; height: 100%;
    border: 2px solid var(--accent);
    border-radius: 16px;
    z-index: 0;
  }

  .hero-img {
    position: relative; z-index: 1;
    width: 100%; height: 100%;
    object-fit: cover;
    border-radius: 16px;
    filter: grayscale(20%);
  }

  .hero-badge {
    position: absolute;
    bottom: -24px; left: -24px; z-index: 2;
    background: var(--white);
    border-radius: 12px;
    padding: 16px 20px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.12);
    display: flex; align-items: center; gap: 12px;
  }

  .badge-dot {
    width: 10px; height: 10px; border-radius: 50%;
    background: #22C55E;
    box-shadow: 0 0 0 4px rgba(34,197,94,0.2);
    flex-shrink: 0;
  }

  .badge-text { font-size: 13px; font-weight: 500; color: var(--ink); }
  .badge-sub { font-size: 11px; color: var(--muted); }

  /* ABOUT */
  .about {
    padding: 120px 60px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 80px;
    align-items: start;
  }

  .about-label {
    font-size: 12px; letter-spacing: 3px;
    text-transform: uppercase; color: var(--accent);
    font-weight: 500;
  }

  .section-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(36px, 4vw, 52px);
    font-weight: 900;
    line-height: 1.1;
    letter-spacing: -1.5px;
    color: var(--ink);
    margin-top: 16px;
  }

  .about-body {
    font-size: 18px; line-height: 1.8;
    color: var(--muted);
    max-width: 600px;
  }

  .about-skills {
    display: flex; flex-wrap: wrap; gap: 10px;
    margin-top: 32px;
  }

  .skill-tag {
    padding: 7px 16px; border-radius: 100px;
    border: 1.5px solid var(--border);
    font-size: 13px; font-weight: 500;
    color: var(--ink); background: transparent;
    transition: all 0.2s;
  }
  .skill-tag:hover {
    background: var(--ink); color: var(--cream);
    border-color: var(--ink);
  }

  /* WORKS */
  .works {
    padding: 80px 60px 120px;
  }

  .works-header {
    display: flex; align-items: flex-end;
    justify-content: space-between; margin-bottom: 56px;
  }

  .works-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .project-card {
    border-radius: 16px;
    overflow: hidden;
    background: var(--white);
    border: 1px solid var(--border);
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    group: true;
  }

  .project-card:nth-child(1) { grid-column: span 2; }

  .project-card:hover {
    transform: translateY(-6px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.1);
  }

  .project-img {
    width: 100%; height: 260px;
    object-fit: cover;
    display: block;
    transition: transform 0.5s;
  }
  .project-card:nth-child(1) .project-img { height: 340px; }
  .project-card:hover .project-img { transform: scale(1.03); }

  .project-info {
    padding: 20px 24px 24px;
    display: flex; justify-content: space-between;
    align-items: flex-start;
  }

  .project-title {
    font-family: 'Playfair Display', serif;
    font-size: 20px; font-weight: 700;
    color: var(--ink); margin-bottom: 8px;
  }

  .project-tags { display: flex; gap: 6px; flex-wrap: wrap; }

  .tag {
    padding: 4px 10px; border-radius: 100px;
    background: var(--cream);
    font-size: 11px; font-weight: 500;
    color: var(--muted); letter-spacing: 0.3px;
  }

  .project-arrow {
    width: 36px; height: 36px;
    border-radius: 50%;
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    flex-shrink: 0;
    color: var(--ink); font-size: 16px;
    transition: all 0.2s;
  }
  .project-card:hover .project-arrow {
    background: var(--ink); color: var(--cream);
    border-color: var(--ink);
  }

  /* SERVICES */
  .services {
    padding: 80px 60px 120px;
    background: var(--ink);
  }

  .services .about-label { color: var(--accent); }
  .services .section-title { color: var(--cream); }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2px;
    margin-top: 56px;
    border: 2px solid rgba(255,255,255,0.08);
    border-radius: 16px;
    overflow: hidden;
  }

  .service-card {
    padding: 48px 36px;
    background: rgba(255,255,255,0.03);
    border-right: 2px solid rgba(255,255,255,0.08);
    transition: background 0.3s;
  }
  .service-card:last-child { border-right: none; }
  .service-card:hover { background: rgba(200,169,110,0.08); }

  .service-num {
    font-family: 'Playfair Display', serif;
    font-size: 48px; font-weight: 900;
    color: var(--accent); opacity: 0.3;
    margin-bottom: 24px;
  }

  .service-title {
    font-family: 'Playfair Display', serif;
    font-size: 24px; font-weight: 700;
    color: var(--cream); margin-bottom: 16px;
  }

  .service-desc {
    font-size: 15px; line-height: 1.75;
    color: rgba(245,240,232,0.55);
  }

  /* CONTACT */
  .contact {
    padding: 120px 60px;
    display: flex; flex-direction: column;
    align-items: center; text-align: center;
  }

  .contact-title {
    font-family: 'Playfair Display', serif;
    font-size: clamp(48px, 7vw, 90px);
    font-weight: 900;
    line-height: 1.0;
    letter-spacing: -3px;
    color: var(--ink);
    margin-bottom: 24px;
  }

  .contact-title em { font-style: italic; color: var(--accent); }

  .contact-sub {
    font-size: 18px; color: var(--muted);
    max-width: 480px; line-height: 1.7;
    margin-bottom: 48px;
  }

  .contact-email {
    font-family: 'Playfair Display', serif;
    font-size: clamp(20px, 3vw, 32px);
    font-weight: 700;
    color: var(--ink);
    text-decoration: none;
    border-bottom: 2px solid var(--accent);
    padding-bottom: 4px;
    transition: color 0.2s;
  }
  .contact-email:hover { color: var(--accent); }

  .social-row {
    display: flex; gap: 16px;
    margin-top: 56px;
  }

  .social-btn {
    width: 48px; height: 48px;
    border-radius: 50%;
    border: 1.5px solid var(--border);
    display: flex; align-items: center; justify-content: center;
    cursor: pointer; font-size: 18px;
    transition: all 0.2s; color: var(--ink);
    text-decoration: none;
  }
  .social-btn:hover {
    background: var(--ink); color: var(--cream);
    border-color: var(--ink); transform: translateY(-3px);
  }

  /* FOOTER */
  footer {
    padding: 24px 60px;
    border-top: 1px solid var(--border);
    display: flex; align-items: center; justify-content: space-between;
  }

  footer p { font-size: 13px; color: var(--muted); }

  /* DIVIDER */
  .divider {
    height: 1px; background: var(--border);
    margin: 0 60px;
  }

  /* FADE IN */
  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .fade-up { animation: fadeUp 0.8s ease forwards; }
  .delay-1 { animation-delay: 0.15s; opacity: 0; }
  .delay-2 { animation-delay: 0.3s; opacity: 0; }
  .delay-3 { animation-delay: 0.45s; opacity: 0; }
  .delay-4 { animation-delay: 0.6s; opacity: 0; }
`;

const projects = [
  {
    id: 1,
    imageUrl: "https://images.unsplash.com/photo-1713857297379-6fc26e70f581?w=900&q=80",
    title: "SogʻliqTrack Ilovasi",
    tags: ["Mobil Ilova", "Sog'liq & Sport"],
  },
  {
    id: 2,
    imageUrl: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?w=900&q=80",
    title: "Elektron Tijorat Platforma",
    tags: ["Veb Dizayn", "E-Tijorat"],
  },
  {
    id: 3,
    imageUrl: "https://images.unsplash.com/photo-1576153192396-180ecef2a715?w=900&q=80",
    title: "Moliya Boshqaruv Paneli",
    tags: ["Veb Dizayn", "Dashboard"],
  },
  {
    id: 4,
    imageUrl: "https://images.unsplash.com/photo-1767449441925-737379bc2c4d?w=900&q=80",
    title: "Sayohat Bron Qilish Ilovasi",
    tags: ["Mobil Ilova", "Sayohat"],
  },
  {
    id: 5,
    imageUrl: "https://images.unsplash.com/photo-1717996563514-e3519f9ef9f7?w=900&q=80",
    title: "SaaS Platforma UI",
    tags: ["Veb Dizayn", "SaaS"],
  },
  {
    id: 6,
    imageUrl: "https://images.unsplash.com/photo-1707836916010-3c4ad261936c?w=900&q=80",
    title: "Ovqat Yetkazib Berish Ilovasi",
    tags: ["Mobil Ilova", "Oziq-ovqat"],
  },
];

const services = [
  {
    num: "01",
    title: "Vizual Dizayn",
    description:
      "Brend identifikatsiyasini aks ettiruvchi va foydalanuvchilarni jalb qiluvchi ajoyib, piksel-aniq interfeyslar yaratish — rang, tipografiya va kompozitsiya orqali.",
  },
  {
    num: "02",
    title: "Prototiplash",
    description:
      "G'oyalarni tekshirish, foydalanuvchi oqimlarini sinab ko'rish va ishlab chiqish boshlanishidan oldin kontseptsiyalarni hayotga tatbiq etish uchun interaktiv prototiplar yaratish.",
  },
  {
    num: "03",
    title: "Foydalanuvchi Tadqiqoti",
    description:
      "Ma'lumotlarga asoslangan dizayn qarorlar uchun foydalanuvchilarning ehtiyojlari, xatti-harakatlari va muammolarini tushunish maqsadida chuqur tadqiqot va qulaylik testlarini o'tkazish.",
  },
];

const skills = ["Figma", "UX Strategiya", "Dizayn Tizimlari", "Foydalanuvchi Tadqiqoti", "Prototiplash", "Motion Dizayn", "Accessibility", "Brend Identifikatsiya"];

export default function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{style}</style>

      {/* NAV */}
      <nav style={{ boxShadow: scrolled ? "0 2px 24px rgba(0,0,0,0.07)" : "none" }}>
        <a href="#" className="nav-logo">Usmonov Rayimbek</a>
        <ul className="nav-links">
          <li><a href="#about">Men haqimda</a></li>
          <li><a href="#works">Ishlarim</a></li>
          <li><a href="#services">Xizmatlar</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Bog'lanish</a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-left">
          <span className="hero-tag fade-up">Frilanserlik qilib g'oyalarni real loyiahag aylantiraman.</span>
          <h1 className="hero-title fade-up delay-1">
            Insonlarni <em>maftun</em><br />qiluvchi <br />tajribalar
          </h1>
          <p className="hero-desc fade-up delay-2">
            Vizual mahorat va xulq-atvor psixologiyasini birlashtirgan UI/UX dizayner —
            odamlar sevib ishlatiladigan mahsulotlar yarataman.
          </p>
          <div className="hero-actions fade-up delay-3">
            <a href="#works" className="btn-primary">Ishlarimni Ko'rish</a>
            <a href="#contact" className="btn-ghost">Bog'lanish</a>
          </div>
          <div className="hero-stats fade-up delay-4">
            <div>
              <div className="stat-num">5+</div>
              <div className="stat-label">Yillik Tajriba</div>
            </div>
            <div>
              <div className="stat-num">40+</div>
              <div className="stat-label">Bajarilgan Loyiha</div>
            </div>
            <div>
              <div className="stat-num">98%</div>
              <div className="stat-label">Mijoz Mamnuniyati</div>
            </div>
          </div>
        </div>
        <div className="hero-right fade-up delay-2">
          <div className="hero-img-wrap">
            <img
              className="hero-img"
              src="https://sophia245.medium.com/everyday-italian-mens-casual-fashion-80644956b8c6"
              alt="Usmonov Rayimbek, UI/UX Designer"
            />
            <div className="hero-badge">
              <div className="badge-dot" />
              <div>
                <div className="badge-text">Ishga Tayyor</div>
                <div className="badge-sub">UI/UX Dizayner lavozimi</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* ABOUT */}
      <section id="about" className="about">
        <div>
          <span className="about-label">Men Haqimda</span>
          <h2 className="section-title">Dizayn —<br />mening hayotim</h2>
        </div>
        <div>
          <p className="about-body">
            Insonlar mazza qilib dam olishi uchun sevimli dizayn yarataman. 
            Agar sizda real hayotga tadbiq qilinishi kerak bo'lgan g'oya bo'lsa bizga murojaat qiling.
            Biz g'oyalarni real hayotga tatbiq qilamiz.
          </p>
          <div className="about-skills">
            {skills.map((s) => (
              <span key={s} className="skill-tag">{s}</span>
            ))}
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* WORKS */}
      <section id="works" className="works">
        <div className="works-header">
          <div>
            <span className="about-label">Portfolio</span>
            <h2 className="section-title" style={{ marginTop: "12px" }}>Tanlangan Ishlar</h2>
          </div>
          <a href="#contact" className="btn-ghost" style={{ flexShrink: 0 }}>Barcha Loyihalar →</a>
        </div>
        <div className="works-grid">
          {projects.map((p) => (
            <div key={p.id} className="project-card">
              <div style={{ overflow: "hidden" }}>
                <img className="project-img" src={p.imageUrl} alt={p.title} />
              </div>
              <div className="project-info">
                <div>
                  <div className="project-title">{p.title}</div>
                  <div className="project-tags">
                    {p.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                  </div>
                </div>
                <div className="project-arrow">↗</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="services">
        <span className="about-label">Nima Qilaman</span>
        <h2 className="section-title" style={{ maxWidth: "400px", marginTop: "16px" }}>
          Asosiy<br />xizmatlarim
        </h2>
        <div className="services-grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-num">{s.num}</div>
              <div className="service-title">{s.title}</div>
              <p className="service-desc">{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact">
        <span className="about-label" style={{ marginBottom: "24px" }}>Bog'lanish</span>
        <h2 className="contact-title">
          Keling, birgalikda<br />ajoyib narsa <em>yarataylik</em>
        </h2>
        <p className="contact-sub">
          Loyihangiz bormi yoki dizayn haqida suhbatlashmoqchimisiz?
          Sizdan xabar olishdan xursand bo'laman.
        </p>
        <a href="mailto:hello@janedoe.design" className="contact-email">
          hello@janedoe.design
        </a>
        <div className="social-row">
          <a href="#" className="social-btn" title="LinkedIn">in</a>
          <a href="#" className="social-btn" title="Dribbble">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"/>
            </svg>
          </a>
          <a href="#" className="social-btn" title="Behance">Be</a>
          <a href="#" className="social-btn" title="Twitter / X">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Usmonov Rayimbek. Barcha huquqlar himoyalangan.</p>
      </footer>
    </>
  );
}