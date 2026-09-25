import { Link } from "@tanstack/react-router";
import { ArrowUp, Mail, MapPin, Phone } from "lucide-react";
import { profile } from "@/content/portfolio";

export function SiteFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
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
            <a href="/#about">About</a>
            <a href="/#research">Research Areas</a>
            <Link to="/publications">Publications</Link>
            <a href="/#education">Education</a>
            <a href="/#experience">Experience</a>
            <a href="/#recognition">Recognition</a>
            <Link to="/students">Student Research</Link>
            <a href="/#contact">Contact</a>
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
