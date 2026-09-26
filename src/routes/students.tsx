import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen, CheckCircle2, GraduationCap, Mail, Sparkles, Users } from "lucide-react";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/students")({
  head: () => ({
    meta: [
      { title: "Student Research & Mentorship | Dr. Nishant Jain" },
      {
        name: "description",
        content: "Student research opportunities, undergraduate capstones, postgraduate dissertations, and doctoral mentorship under Dr. Nishant Jain at MITS Gwalior.",
      },
      { property: "og:title", content: "Student Research & Mentorship | Dr. Nishant Jain" },
      {
        property: "og:description",
        content: "Mentorship and student research projects in explainable AI, ensemble learning, and applied machine learning.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/students" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/students" }],
  }),
  component: StudentsPage,
});

function StudentsPage() {
  return (
    <main className="subpage">
      <header className="page-header">
        <p className="eyebrow">Academic Mentorship & Supervision</p>
        <h1>Student Research</h1>
        <p>
          Collaborating with motivated undergraduate and postgraduate students to produce peer-reviewed scientific contributions in explainable artificial intelligence, tree-based ensemble methods, and high-dimensional predictive modeling.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginTop: "2rem" }}>
          <a
            className="primary-action corner-fill"
            href={`mailto:${profile.email}?subject=Student research enquiry`}
          >
            <span>Send Research Enquiry</span>
            <ArrowRight size={16} />
          </a>
          <Link to="/publications" className="secondary-action">
            <span>View Published Works</span>
          </Link>
        </div>
      </header>

      <div className="subpage-content">
        <section aria-labelledby="focus-areas-title">
          <p className="eyebrow">Research Supervision</p>
          <h2 id="focus-areas-title" className="student-section-title">
            Mentorship & Core Focus Areas
          </h2>
          <p className="student-section-desc">
            Students working under Dr. Jain’s supervision explore rigorous mathematical formulations and practical algorithmic implementations designed for peer-reviewed journal and conference publications.
          </p>

          <div className="students-grid">
            <article className="student-focus-card sweep-hover">
              <span className="student-card-num">01 / FOUNDATIONS</span>
              <h3>Explainable AI & Feature Attribution</h3>
              <p>
                Developing mathematically sound explanation models and local surrogate techniques to illuminate black-box decision boundaries without sacrificing model accuracy.
              </p>
              <ul className="student-topics-list">
                <li>Local & Global Interpretability</li>
                <li>Shapley Additive Explanations (SHAP)</li>
                <li>Rule Extraction & Decision Trees</li>
              </ul>
            </article>

            <article className="student-focus-card sweep-hover">
              <span className="student-card-num">02 / ALGORITHMS</span>
              <h3>Ensemble Theory & Random Forests</h3>
              <p>
                Formulating novel randomized split criteria, variance reduction schemes, and diversity-enriched tree ensembles for complex classification and regression benchmarks.
              </p>
              <ul className="student-topics-list">
                <li>Logically Randomized Forests (LRF)</li>
                <li>eXplainable Random Forests (XRRF)</li>
                <li>Diversity Enrichment & Robustness</li>
              </ul>
            </article>

            <article className="student-focus-card sweep-hover">
              <span className="student-card-num">03 / APPLICATIONS</span>
              <h3>Applied Machine Learning & Healthcare</h3>
              <p>
                Applying machine learning to clinical and high-dimensional societal datasets, ranging from early autism spectrum disorder screening to fraud and misinformation detection.
              </p>
              <ul className="student-topics-list">
                <li>Clinical Screening Benchmarks</li>
                <li>Imbalanced Data & Multi-Attribute Decisions</li>
                <li>Reproducible Experimental Pipelines</li>
              </ul>
            </article>
          </div>
        </section>

        <section className="guidelines-section" aria-labelledby="guidelines-title">
          <p className="eyebrow">Prospective Students</p>
          <h2 id="guidelines-title" className="student-section-title">
            Supervision Tracks & Expectations
          </h2>
          <p className="student-section-desc">
            Dr. Jain welcomes students with strong analytical curiosity, working knowledge of Python scientific computing, and commitment to academic integrity.
          </p>

          <div className="guidelines-grid">
            <div className="student-guide-card sweep-hover">
              <GraduationCap size={28} className="guide-card-icon" />
              <h3>B.Tech & M.Tech Capstone / Thesis</h3>
              <p>
                Available for high-performing students aiming to conduct original research rather than generic course projects. Projects are targeted for submission to reputable IEEE/Springer conferences.
              </p>
            </div>

            <div className="student-guide-card sweep-hover">
              <Users size={28} className="guide-card-icon" />
              <h3>Research Scholars & Doctoral Mentorship</h3>
              <p>
                Scholarly guidance for Ph.D. scholars in theoretical machine learning, proof formulation, algorithmic scaling, and SCI-indexed journal manuscripts.
              </p>
            </div>

            <div className="student-guide-card sweep-hover">
              <CheckCircle2 size={28} className="guide-card-icon" />
              <h3>What to Include in Your Enquiry</h3>
              <p>
                Please attach your current CV/resume, academic transcript, and a short summary highlighting which of Dr. Jain’s research papers you have reviewed and why the problem interests you.
              </p>
            </div>
          </div>
        </section>

        <section className="student-cta-block sweep-hover" aria-label="Contact callout">
          <div className="student-cta-copy">
            <span className="eyebrow" style={{ color: "var(--accent)" }}>Ready to collaborate?</span>
            <h2>Initiate an Academic Research Discussion</h2>
            <p>
              Send an email with your background and area of interest. Inquiries with specific references to Dr. Jain’s published work are prioritized.
            </p>
          </div>
          <div>
            <a
              className="primary-action corner-fill"
              href={`mailto:${profile.email}?subject=Student research enquiry`}
            >
              <Mail size={16} />
              <span>Contact Dr. Jain</span>
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}
