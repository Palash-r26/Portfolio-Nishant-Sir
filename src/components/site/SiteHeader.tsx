import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { profile } from "@/content/portfolio";

const nav = [
  { label: "About", id: "about", num: "01" },
  { label: "Research", id: "research", num: "02" },
  { label: "Publications", id: "publications", num: "03" },
  { label: "Education", id: "education", num: "04" },
  { label: "Experience", id: "experience", num: "05" },
  { label: "Recognition", id: "recognition", num: "06" },
  { label: "Contact", id: "contact", num: "07" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Close mobile drawer on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    if (open) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className={`site-header ${open ? "menu-is-open" : ""}`}>
      <div className="header-inner">
        <Link to="/" className="identity" aria-label={`${profile.name}, home`}>
          <span className="identity-mark">{profile.initials}</span>
          <div className="identity-text">
            <strong>{profile.name}</strong>
            <small>Assistant Professor · MITS Gwalior</small>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(({ label, id }) => (
            <a key={id} href={`/#${id}`} className="nav-item">
              {label}
            </a>
          ))}
          <a href="#contact" className="nav-cta-btn">
            Get in Touch
          </a>
        </nav>

        {/* Mobile / Tablet Toggle Button */}
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Drawer Overlay */}
      {open && (
        <div
          className="mobile-backdrop"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile / Tablet Dropdown Menu */}
      <div className={`mobile-nav-wrapper ${open ? "open" : ""}`} aria-hidden={!open}>
        <div className="mobile-nav-inner">
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <div className="mobile-nav-links">
              {nav.map(({ label, id, num }) => (
                <a
                  key={id}
                  href={`/#${id}`}
                  className="mobile-nav-item"
                  onClick={() => setOpen(false)}
                >
                  <span className="mobile-nav-num">{num}</span>
                  <span className="mobile-nav-label">{label}</span>
                  <ArrowRight className="mobile-nav-arrow" size={16} />
                </a>
              ))}
            </div>

            <div className="mobile-nav-extras">
              <div className="mobile-sublinks">
                <Link to="/publications" className="mobile-extra-link" onClick={() => setOpen(false)}>
                  Publications Archive
                </Link>
                <Link to="/students" className="mobile-extra-link" onClick={() => setOpen(false)}>
                  Student Opportunities
                </Link>
              </div>

              <a
                href={`mailto:${profile.email}`}
                className="mobile-nav-cta"
                onClick={() => setOpen(false)}
              >
                <Mail size={16} />
                <span>Email Dr. Jain</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
