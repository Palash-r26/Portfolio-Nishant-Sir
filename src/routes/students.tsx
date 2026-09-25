import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/content/portfolio";

export const Route = createFileRoute("/students")({
  head: () => ({ meta: [
    { title: "Student Research — Dr. Nishant Jain" },
    { name: "description", content: "Student research opportunities with Dr. Nishant Jain at MITS Gwalior." },
    { property: "og:title", content: "Student Research — Dr. Nishant Jain" },
    { property: "og:description", content: "Research opportunities in explainable AI and ensemble machine learning." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/students" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/students" }] }), component: StudentsPage,
});
function StudentsPage() { return <main className="subpage"><header className="page-header"><p className="eyebrow">Research supervision</p><h1>Student Research</h1><p>Students interested in explainable AI, ensemble learning, or applied machine learning may contact Dr. Jain with a concise summary of their background and research interests.</p><a className="primary-action" href={`mailto:${profile.email}?subject=Student research enquiry`}>Send an enquiry</a></header></main>; }
