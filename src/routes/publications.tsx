import { createFileRoute } from "@tanstack/react-router";
import { PublicationsList } from "@/components/site/PublicationsList";

export const Route = createFileRoute("/publications")({
  head: () => ({ meta: [
    { title: "Publications | Dr. Nishant Jain" },
    { name: "description", content: "Journal and conference publications by Dr. Nishant Jain in explainable ensemble machine learning." },
    { property: "og:title", content: "Publications | Dr. Nishant Jain" },
    { property: "og:description", content: "Research publications in explainable AI, random forests, and applied machine learning." },
    { property: "og:type", content: "website" }, { property: "og:url", content: "/publications" }, { name: "twitter:card", content: "summary_large_image" },
  ], links: [{ rel: "canonical", href: "/publications" }] }), component: PublicationsPage,
});
function PublicationsPage() {
  return (
    <main className="subpage">
      <header className="page-header">
        <p className="eyebrow">Scholarly Archive & Peer-Reviewed Research</p>
        <h1>Publications</h1>
        <p>
          Peer-reviewed journal articles, conference proceedings, and ongoing research monographs focusing on novel explainable tree ensembles, random forest variants, and applied algorithmic frameworks.
        </p>
        <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap", marginTop: "1.75rem" }}>
          <span className="tag sweep-hover" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "0.45rem 0.95rem", font: "500 12px var(--font-mono)", color: "var(--accent)" }}>
            3 Journal Articles (ESWA & Information Sciences)
          </span>
          <span className="tag sweep-hover" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "0.45rem 0.95rem", font: "500 12px var(--font-mono)", color: "var(--ink-secondary)" }}>
            3 Conference Papers (Springer & IEEE)
          </span>
          <span className="tag sweep-hover" style={{ background: "var(--surface)", border: "1px solid var(--line)", padding: "0.45rem 0.95rem", font: "500 12px var(--font-mono)", color: "var(--ink-muted)" }}>
            2 Under Review (IEEE TNNLS & NCA)
          </span>
        </div>
      </header>
      <section className="subpage-content" aria-label="Publication list">
        <PublicationsList />
      </section>
    </main>
  );
}
