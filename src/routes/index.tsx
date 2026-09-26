import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { 
  ArrowDownRight, 
  ArrowRight, 
  Award, 
  BookOpen, 
  CheckCircle2, 
  GraduationCap, 
  Mail, 
  MapPin, 
  Phone, 
  Sparkles, 
  FileText 
} from "lucide-react";
import portrait from "@/assets/professor-portrait.png";
import { HeroPortrait } from "@/components/site/HeroPortrait";
import { MailIcon } from "@/components/site/Icons";
import { PublicationsList } from "@/components/site/PublicationsList";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { 
  profile, 
  stats, 
  researchAreas, 
  qualifications, 
  experience, 
  recognition, 
  development 
} from "@/content/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Nishant Jain | Assistant Professor & AI Researcher" },
      { name: "description", content: "Academic portfolio of Dr. Nishant Jain, Ph.D. from IIT (ISM) Dhanbad, Assistant Professor at MITS Gwalior, specializing in Explainable Machine Learning (XAI)." },
      { property: "og:title", content: "Dr. Nishant Jain | Assistant Professor & AI Researcher" },
      { property: "og:description", content: "Research in Explainable Machine Learning, Random Forests, and Transparent AI at MITS Gwalior." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ 
      type: "application/ld+json", 
      children: JSON.stringify({ 
        "@context": "https://schema.org", 
        "@type": "Person", 
        name: profile.name, 
        jobTitle: profile.title, 
        affiliation: { "@type": "CollegeOrUniversity", name: profile.university }, 
        email: `mailto:${profile.email}` 
      }) 
    }],
  }),
  component: HomePage,
});

function HomePage() {
  const [focusedCvIdx, setFocusedCvIdx] = useState<number | null>(null);
  return (
    <main className="main-content">
      {/* ============================================================
          HERO SECTION (Image First on Mobile & Tablet, Oversized Fraunces Typography)
          ============================================================ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-atmosphere" aria-hidden="true" />
        <div className="hero-inner">
          
          {/* Hero Copy (Oversized Fraunces Typography & Distinctive Layout) */}
          <div className="hero-copy">
            <div className="hero-status-marker">
              <svg className="marker-crosshair" width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <circle cx="8" cy="8" r="6" stroke="currentColor" strokeWidth="1.2" />
                <circle cx="8" cy="8" r="2" fill="currentColor" />
                <path d="M8 0v3M8 13v3M0 8h3M13 8h3" stroke="currentColor" strokeWidth="1.2" />
              </svg>
              <span className="marker-label">FACULTY APPOINTMENT · MITS GWALIOR</span>
            </div>

            <h1 id="hero-title" className="hero-title-display">
              <span className="display-prefix">Dr. Nishant</span>
              <span className="display-surname">Jain</span>
            </h1>

            <div className="hero-credentials-bar">
              <span className="cred-badge">PH.D. IIT (ISM) DHANBAD</span>
              <span className="cred-sep">/</span>
              <span className="cred-badge">5× GATE CSE QUALIFIED</span>
              <span className="cred-sep">/</span>
              <span className="cred-badge">EXPLAINABLE AI</span>
            </div>

            <p className="hero-role-title">
              {profile.title}, {profile.department}
              <span className="hero-univ">{profile.university}</span>
            </p>

            <p className="hero-tagline">
              {profile.tagline}
            </p>

            <div className="action-row">
              <a href="#research" className="brass-primary-btn corner-fill">
                <span>Explore Research</span>
                <svg className="btn-arrow" width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3.33 8h9.34M8 3.33l4.67 4.67L8 12.67" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#qualifications" className="text-cta-link">
                <span>Academic Credentials</span>
                <span className="cta-rule" />
              </a>
            </div>

            <div className="hero-quick-meta">
              <a href={`mailto:${profile.email}`} className="quick-item">
                <span className="meta-dot" />
                <span>{profile.email}</span>
              </a>
              <span className="quick-item">
                <span className="meta-dot" />
                <span>Gwalior, Madhya Pradesh, India</span>
              </span>
            </div>
          </div>

          {/* Portrait Container with 3D Tilt from each corner (No diagonal sweep) */}
          <HeroPortrait />

        </div>
      </section>

      {/* ============================================================
          METRICS & HIGHLIGHTS RIBBON (Precision Monospace Accents)
          ============================================================ */}
      <section className="highlights-bar" aria-label="Key Achievements">
        <div className="highlights-inner">
          {stats.map((stat, idx) => (
            <div key={stat.label} className="highlight-item">
              <span className="highlight-idx">0{idx + 1}</span>
              <strong className="highlight-val">{stat.value}</strong>
              <span className="highlight-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          ACADEMIC QUALIFICATIONS (Vertical Academic CV Timeline)
          Supports both #qualifications and #education navigation anchors
          ============================================================ */}
      <div id="education" style={{ position: "relative", top: "-90px" }} aria-hidden="true" />
      <Reveal>
        <section id="qualifications" className="section qualifications-section">
          <SectionHeading 
            eyebrow="Academic Background" 
            title="Educational Qualifications & Credentials" 
            intro="A scholarly foundation formed through doctoral research at premier Indian institutes and repeated national competitive benchmarks."
          />

          <div className="timeline-cv-wrapper">
            <div className="timeline-cv-line" aria-hidden="true" />
            
            <div 
              className="timeline-cv-list"
              onMouseLeave={() => setFocusedCvIdx(null)}
            >
              {qualifications.map((item, idx) => {
                const isFocused = focusedCvIdx === idx;
                const isAdjacent = focusedCvIdx !== null && Math.abs(focusedCvIdx - idx) === 1;
                const isDistant = focusedCvIdx !== null && Math.abs(focusedCvIdx - idx) > 1;

                const focusClass = isFocused ? "is-focused" : isAdjacent ? "is-adjacent" : isDistant ? "is-distant" : "";

                return (
                  <article 
                    key={item.degree} 
                    className={`cv-timeline-item ${focusClass}`}
                    onMouseEnter={() => setFocusedCvIdx(idx)}
                    onClick={() => setFocusedCvIdx((prev) => prev === idx ? null : idx)}
                    tabIndex={0}
                    onFocus={() => setFocusedCvIdx(idx)}
                    onBlur={() => setFocusedCvIdx(null)}
                    role="region"
                    aria-label={`${item.degree} at ${item.institution}`}
                  >
                    <div className="timeline-marker">
                      <span className="marker-dot" />
                      <span className="marker-ring" />
                    </div>
                    
                    <div className="cv-content-block">
                      <div className="cv-header-line">
                        <span className="cv-badge">{item.badge}</span>
                        <span className="cv-inst">{item.institution}</span>
                      </div>

                      <h3 className="cv-degree-title">{item.degree}</h3>
                      <p className="cv-details-p">{item.details}</p>

                      <div className="cv-honor-row">
                        <svg className="honor-check" width="16" height="16" viewBox="0 0 16 16" fill="none">
                          <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M5 8.2l2.2 2.2 4.1-4.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                        <span className="honor-text">{item.highlight}</span>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          ABOUT & SCHOLARLY BIOGRAPHY
          ============================================================ */}
      <Reveal>
        <section id="about" className="section about-section">
          <div className="content-grid">
            <SectionHeading 
              eyebrow="Scholarly Vision" 
              title="Dedicated to Explainable Intelligence & Rigorous Pedagogy."
            />
            <div className="prose">
              <p>{profile.shortBio}</p>
              <p>
                His academic journey is distinguished by an M.Tech. with distinction from Devi Ahilya Vishwavidyalaya 
                and a B.E. in Computer Science and Engineering. He achieved the remarkable distinction of qualifying the 
                national Graduate Aptitude Test in Engineering (GATE CSE) across five consecutive years (2013–2017).
              </p>
              <p>
                Dr. Jain's research bridges fundamental algorithmic computer science with real-world decision systems, 
                striving to replace opaque "black-box" machine learning predictions with mathematically interpretable, 
                high-accuracy decision logic.
              </p>

              <div className="scholarly-tags-strip">
                <span className="tags-label">Core Specializations</span>
                <div className="scholarly-tags-list">
                  <span className="scholarly-tag">
                    <span className="tag-dot" />
                    Explainable AI (XAI)
                  </span>
                  <span className="scholarly-tag">
                    <span className="tag-dot" />
                    Tree-based Ensembles
                  </span>
                  <span className="scholarly-tag">
                    <span className="tag-dot" />
                    Logically Randomized Forests (LRF)
                  </span>
                  <span className="scholarly-tag">
                    <span className="tag-dot" />
                    Reasonably Randomized Forests (XRRF)
                  </span>
                  <span className="scholarly-tag">
                    <span className="tag-dot" />
                    Applied Machine Learning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          RESEARCH AREAS (Asymmetric Editorial Showcase)
          ============================================================ */}
      <Reveal>
        <section id="research" className="section research-section">
          <div className="section-top">
            <SectionHeading 
              eyebrow="Core Research" 
              title="Interpretable Learning & Ensemble Methods" 
              intro="Pioneering new algorithms that make ensemble models explainable without sacrificing predictive power."
            />
            <a 
              className="text-link" 
              href={`mailto:${profile.email}?subject=Research Collaboration Inquiry`}
            >
              Discuss a Collaboration <ArrowRight size={15} />
            </a>
          </div>

          <div className="editorial-research-grid">
            {/* Feature Card 01 - Large Lead Card */}
            <article className="research-lead-card">
              <div className="lead-card-head">
                <svg className="research-monoline-icon" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M20 6v8M20 14l-9 9M20 14l9 9M11 23v7M29 23v7M7 30h8M25 30h8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/>
                  <circle cx="20" cy="6" r="3" stroke="currentColor" strokeWidth="1.6" fill="var(--bg)"/>
                  <circle cx="11" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="var(--bg)"/>
                  <circle cx="29" cy="23" r="2.5" stroke="currentColor" strokeWidth="1.6" fill="var(--bg)"/>
                </svg>
                <span className="research-category-pill">PRIMARY RESEARCH FOCUS · LRF & XRRF</span>
              </div>
              <div className="lead-card-body">
                <span className="research-area-num">DOMAIN 01</span>
                <h3 className="lead-card-title">{researchAreas[0]?.title}</h3>
                <p className="lead-card-desc">{researchAreas[0]?.description}</p>
                <div className="research-key-metrics">
                  <span>Novel LRF & XRRF Algorithms</span>
                  <span className="metric-dot">·</span>
                  <span>Published in Elsevier ESWA & Information Sciences</span>
                </div>
              </div>
            </article>

            {/* Split Subcards 02 & 03 */}
            <div className="research-subcards-column">
              <article className="research-subcard">
                <div className="subcard-icon-row">
                  <svg className="research-monoline-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <circle cx="16" cy="16" r="10" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3"/>
                    <circle cx="16" cy="16" r="3" fill="currentColor"/>
                    <circle cx="8" cy="12" r="2" fill="currentColor"/>
                    <circle cx="24" cy="12" r="2" fill="currentColor"/>
                    <circle cx="16" cy="26" r="2" fill="currentColor"/>
                    <path d="M8 12l8 4 8-4M16 16v10" stroke="currentColor" strokeWidth="1.2"/>
                  </svg>
                  <span className="research-area-num">DOMAIN 02</span>
                </div>
                <h3 className="subcard-title">{researchAreas[1]?.title}</h3>
                <p className="subcard-desc">{researchAreas[1]?.description}</p>
              </article>

              <article className="research-subcard">
                <div className="subcard-icon-row">
                  <svg className="research-monoline-icon" width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                    <rect x="5" y="5" width="22" height="22" rx="4" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M5 14h22M14 14v13M9 9.5h2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
                  </svg>
                  <span className="research-area-num">DOMAIN 03</span>
                </div>
                <h3 className="subcard-title">{researchAreas[2]?.title}</h3>
                <p className="subcard-desc">{researchAreas[2]?.description}</p>
              </article>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          SELECTED SCHOLARSHIP & PUBLICATIONS
          ============================================================ */}
      <Reveal>
        <section id="publications" className="section publications-section">
          <div className="section-top">
            <SectionHeading 
              eyebrow="Scholarship & Papers" 
              title="Featured Refereed Publications" 
              intro="Research published in flagship international journals including Elsevier Expert Systems with Applications and Information Sciences."
            />
            <Link to="/publications" className="text-link">
              <span>View All Publications</span>
              <ArrowRight size={15} />
            </Link>
          </div>
          <PublicationsList compact />
        </section>
      </Reveal>

      {/* ============================================================
          ACADEMIC & TEACHING EXPERIENCE
          ============================================================ */}
      <Reveal>
        <section id="experience" className="section experience-section">
          <div className="section-top">
            <SectionHeading 
              eyebrow="Academic Appointments" 
              title="Teaching & Research Trajectory" 
              intro="Over 8 years of combined teaching, student mentoring, and doctoral research at prominent institutions."
            />
          </div>
          
          <div className="experience-timeline">
            {experience.map((item, idx) => (
              <article key={item.period} className="experience-card">
                <div className="exp-step-badge">0{idx + 1}</div>
                <div className="exp-content">
                  <div className="exp-header">
                    <span className="exp-period">{item.period}</span>
                    <h3 className="exp-role">{item.role}</h3>
                  </div>
                  <p className="exp-institution">{item.institution}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          HONORS & RECOGNITION
          ============================================================ */}
      <Reveal>
        <section id="recognition" className="section recognition-section">
          <div className="content-grid">
            <SectionHeading 
              eyebrow="Merit & Honors" 
              title="Awards, Fellowships & National Distinctions" 
              intro="Acknowledged for academic achievement, doctoral research contribution, and national competitive rank."
            />
            <div className="awards-list">
              {recognition.map((item) => (
                <article key={item.title} className="award-item">
                  <div className="award-year-badge">{item.year}</div>
                  <div className="award-info">
                    <span className="award-kind">{item.kind}</span>
                    <h3 className="award-title">{item.title}</h3>
                    <p className="award-org">{item.organization}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          PROFESSIONAL DEVELOPMENT & FACULTY WORKSHOPS
          ============================================================ */}
      <Reveal>
        <section className="section dev-section">
          <div className="section-top">
            <SectionHeading 
              eyebrow="Continuous Learning" 
              title="Faculty Development & Advanced Workshops" 
              intro="Active participation in national and international technical programmes hosted by premier institutes."
            />
          </div>
          <div className="dev-cards-grid">
            {development.map((item) => (
              <article key={item.title} className="dev-card">
                <span className="dev-year">{item.year}</span>
                <h3 className="dev-title">{item.title}</h3>
                <p className="dev-org">{item.organization}</p>
              </article>
            ))}
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          CONTACT & CONSULTATION SECTION
          ============================================================ */}
      <section id="contact" className="section contact-section">
        <div className="contact-wrapper">
          <div className="contact-info">
            <span className="eyebrow">Direct Inquiries</span>
            <h2>Let’s Discuss Research & Collaboration.</h2>
            <p>
              Open to collaborative research, student supervision inquiries, invited lectures, and peer review in Explainable AI and machine learning.
            </p>

            <a href={`mailto:${profile.email}`} className="contact-main-email corner-fill">
              <Mail size={20} />
              <span>{profile.email}</span>
              <ArrowRight size={18} className="email-arrow" />
            </a>

            <div className="contact-details-grid">
              <div className="contact-detail-card sweep-hover">
                <Phone size={18} className="detail-icon" />
                <div>
                  <strong>Phone</strong>
                  <p><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></p>
                </div>
              </div>

              <div className="contact-detail-card sweep-hover">
                <MapPin size={18} className="detail-icon" />
                <div>
                  <strong>Academic Office</strong>
                  <p>{profile.department}, MITS Gwalior 474005, India</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
