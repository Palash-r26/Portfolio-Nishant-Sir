import { createFileRoute, Link } from "@tanstack/react-router";
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
      { title: "Dr. Nishant Jain — Assistant Professor & AI Researcher" },
      { name: "description", content: "Academic portfolio of Dr. Nishant Jain, Ph.D. from IIT (ISM) Dhanbad, Assistant Professor at MITS Gwalior, specializing in Explainable Machine Learning (XAI)." },
      { property: "og:title", content: "Dr. Nishant Jain — Assistant Professor & AI Researcher" },
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

export function HomePage() {
  return (
    <main className="main-content">
      {/* ============================================================
          HERO SECTION (Image First on Mobile & Tablet)
          ============================================================ */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-mesh-glow" aria-hidden="true" />
        <div className="hero-inner">
          
          {/* Portrait Container - Displays FIRST on Mobile & Tablet via CSS order */}
          <div className="portrait-wrap">
            <div className="portrait-card">
              <div className="portrait-status-chip">
                <span className="status-dot" />
                <span>Active Faculty @ MITS Gwalior</span>
              </div>
              <div className="portrait-frame">
                <img 
                  src={portrait} 
                  alt="Dr. Nishant Jain - Assistant Professor at MITS Gwalior" 
                  width={912} 
                  height={1200}
                  className="portrait-img"
                />
              </div>
              <div className="portrait-badge-bottom">
                <strong>Ph.D. in CSE</strong>
                <small>IIT (ISM) Dhanbad</small>
              </div>
            </div>
          </div>

          {/* Hero Copy (Name, Title, Credentials, Bio, Actions) */}
          <div className="hero-copy">
            <div className="hero-badge-pill">
              <Sparkles size={14} className="badge-icon" />
              <span>Explainable AI & Machine Learning Researcher</span>
            </div>

            <h1 id="hero-title" className="hero-name">
              Dr. Nishant <span>Jain</span>
            </h1>

            <div className="hero-credentials">
              <div className="credential-tag">
                <GraduationCap size={15} />
                <span>Ph.D., IIT (ISM) Dhanbad</span>
              </div>
              <div className="credential-tag">
                <Award size={15} />
                <span>5× GATE Qualified</span>
              </div>
            </div>

            <p className="hero-role-lead">
              <strong>{profile.title}</strong> · {profile.department}
              <span className="hero-institution">{profile.university}</span>
            </p>

            <p className="hero-tagline">
              {profile.tagline}
            </p>

            <div className="action-row">
              <a href="#research" className="primary-action">
                <span>Explore Research</span>
                <ArrowDownRight size={17} />
              </a>
              <a href="#qualifications" className="secondary-action">
                <BookOpen size={16} />
                <span>View Qualifications</span>
              </a>
              <a href={`mailto:${profile.email}`} className="ghost-action">
                <Mail size={16} />
                <span>Contact</span>
              </a>
            </div>

            <div className="hero-quick-meta">
              <a href={`mailto:${profile.email}`} className="quick-chip">
                <Mail size={13} />
                <span>{profile.email}</span>
              </a>
              <span className="quick-chip">
                <MapPin size={13} />
                <span>Gwalior, MP, India</span>
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
          METRICS & HIGHLIGHTS STRIP
          ============================================================ */}
      <section className="highlights-bar" aria-label="Key Achievements">
        <div className="highlights-inner">
          {stats.map((stat) => (
            <div key={stat.label} className="highlight-item">
              <strong className="highlight-val">{stat.value}</strong>
              <span className="highlight-lbl">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============================================================
          ACADEMIC QUALIFICATIONS (Clear, High-Trust Degree Cards)
          ============================================================ */}
      <Reveal>
        <section id="qualifications" className="section qualifications-section">
          <SectionHeading 
            eyebrow="Academic Background" 
            title="Educational Qualifications & Credentials" 
            intro="A solid academic trajectory founded on doctoral research from premier Indian institutions and national competitive excellence."
          />

          <div className="qualifications-grid">
            {qualifications.map((item) => (
              <article key={item.degree} className="qualification-card">
                <div className="card-top-row">
                  <span className="card-badge">{item.badge}</span>
                  <span className="card-inst">{item.institution}</span>
                </div>
                <h3 className="card-degree">{item.degree}</h3>
                <p className="card-details">{item.details}</p>
                <div className="card-highlight">
                  <CheckCircle2 size={15} className="highlight-icon" />
                  <span>{item.highlight}</span>
                </div>
              </article>
            ))}
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

              <div className="expertise-tags">
                <span className="tag">Explainable AI (XAI)</span>
                <span className="tag">Tree-based Ensembles</span>
                <span className="tag">Logically Randomized Forests (LRF)</span>
                <span className="tag">Reasonably Randomized Forests (XRRF)</span>
                <span className="tag">Applied Machine Learning</span>
              </div>
            </div>
          </div>
        </section>
      </Reveal>

      {/* ============================================================
          RESEARCH AREAS & ALGORITHMIC INNOVATIONS
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

          <div className="research-cards-grid">
            {researchAreas.map((area) => (
              <article key={area.number} className="research-card">
                <div className="research-card-num">{area.number}</div>
                <h3 className="research-card-title">{area.title}</h3>
                <p className="research-card-desc">{area.description}</p>
                <div className="research-card-tag">Core Domain</div>
              </article>
            ))}
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

            <a href={`mailto:${profile.email}`} className="contact-main-email">
              <Mail size={20} />
              <span>{profile.email}</span>
              <ArrowRight size={18} className="email-arrow" />
            </a>

            <div className="contact-details-grid">
              <div className="contact-detail-card">
                <Phone size={18} className="detail-icon" />
                <div>
                  <strong>Phone</strong>
                  <p><a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a></p>
                </div>
              </div>

              <div className="contact-detail-card">
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
