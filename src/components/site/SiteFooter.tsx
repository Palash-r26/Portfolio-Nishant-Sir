import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/portfolio";

export function SiteFooter() {
  const scrollToTop = () => {
    const lenis = typeof window !== "undefined" ? (window as any).__lenis : null;
    if (lenis) {
      lenis.scrollTo(0);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string, e: React.MouseEvent<HTMLAnchorElement>) => {
    if (typeof window !== "undefined" && (window.location.pathname === "/" || window.location.pathname === "")) {
      e.preventDefault();
      const target = document.getElementById(id);
      const lenis = (window as any).__lenis;
      if (lenis && target) {
        lenis.scrollTo(target, { offset: -70 });
        window.history.pushState(null, "", `/#${id}`);
      } else if (target) {
        target.scrollIntoView({ behavior: "smooth", block: "start" });
        window.history.pushState(null, "", `/#${id}`);
      }
    }
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        {/* Column 1: Profile & Affiliation */}
        <div className="footer-col footer-col-brand">
          <div className="footer-identity">
            <span className="footer-badge">{profile.initials}</span>
            <div>
              <p className="footer-name">{profile.name}</p>
              <p className="footer-title">{profile.title}</p>
            </div>
          </div>
          <p className="footer-affil">{profile.department}</p>
          <p className="footer-affil">{profile.university}</p>
          <p className="footer-quote">
            “Advancing interpretable artificial intelligence and tree-based ensemble learning with algorithmic rigor.”
          </p>
        </div>

        {/* Column 2: Navigation Links */}
        <div className="footer-col footer-col-nav">
          <h4 className="footer-col-title">Navigation</h4>
          <nav aria-label="Footer navigation" className="footer-links-grid">
            <a href="/#about" onClick={(e) => scrollToSection("about", e)}>About</a>
            <a href="/#research" onClick={(e) => scrollToSection("research", e)}>Research Areas</a>
            <Link to="/publications">Publications</Link>
            <a href="/#qualifications" onClick={(e) => scrollToSection("qualifications", e)}>Qualifications</a>
            <a href="/#experience" onClick={(e) => scrollToSection("experience", e)}>Experience</a>
            <a href="/#recognition" onClick={(e) => scrollToSection("recognition", e)}>Recognition</a>
            <Link to="/students">Student Research</Link>
            <a href="/#contact" onClick={(e) => scrollToSection("contact", e)}>Contact</a>
          </nav>
        </div>

        {/* Column 3: Contact Details */}
        <div className="footer-col footer-col-contact">
          <h4 className="footer-col-title">Academic Enquiries</h4>
          <ul className="footer-contact-list">
            <li>
              <Mail size={15} />
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
            </li>
            <li>
              <Phone size={15} />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`}>{profile.phone}</a>
            </li>
            <li>
              <MapPin size={15} />
              <span>Gwalior, Madhya Pradesh, India</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <p className="copyright">
            © {new Date().getFullYear()} {profile.name} · Assistant Professor, MITS Gwalior.
          </p>
          <button
            type="button"
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Scroll back to top of page"
          >
            <span>Back to top</span>
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
}
