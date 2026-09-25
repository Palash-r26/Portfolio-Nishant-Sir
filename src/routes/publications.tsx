import { createFileRoute } from "@tanstack/react-router";
import { PublicationsList } from "@/components/site/PublicationsList";

export const Route = createFileRoute("/publications")({
  head: () => ({ meta: [
    { title: "Publications — Dr. Nishant Jain" },
    { name: "description", content: "Journal and conference publications by Dr. Nishant Jain in explainable ensemble machine learning." },
    { property: "og:title", content: "Publications — Dr. Nishant Jain" },
    { property: "og:description", content: "Research publications in explainable AI, random forests, and applied machine learning." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/publications" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/publications" }] }), component: PublicationsPage,
});
function PublicationsPage() { return <main className="subpage"><header className="page-header"><p className="eyebrow">Research archive</p><h1>Publications</h1><p>Peer-reviewed and ongoing research in explainable ensemble learning, random forests, and applied machine learning.</p></header><section className="subpage-content" aria-label="Publication list"><PublicationsList /></section></main>; }
