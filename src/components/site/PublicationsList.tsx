import { useMemo, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { publications, type Publication } from "@/content/portfolio";
import { Button } from "@/components/ui/button";

type Filter = "All" | Publication["type"];
const filters: Filter[] = ["All", "Journal", "Conference", "Under Review"];

function highlightOwner(authors: string) {
  return authors.split(/(Nishant Jain)/g).map((part, index) => part === "Nishant Jain" ? <strong key={index}>{part}</strong> : part);
}

export function PublicationsList({ compact = false }: { compact?: boolean }) {
  const [filter, setFilter] = useState<Filter>("All");
  const visible = useMemo(() => {
    const items = compact ? publications.filter((item) => item.featured) : publications;
    return filter === "All" ? items : items.filter((item) => item.type === filter);
  }, [compact, filter]);

  return <div>
    {!compact ? <div className="filter-bar" role="group" aria-label="Filter publications by type">{filters.map((item) => <Button key={item} type="button" variant="outline" size="sm" className={filter === item ? "filter-active" : ""} onClick={() => setFilter(item)} aria-pressed={filter === item}>{item}</Button>)}</div> : null}
    <div className="publication-list" aria-live="polite">{visible.map((publication) => <article className="publication sweep-hover" key={publication.title}>
      <div className="publication-meta"><span>{publication.year}</span><span>{publication.type}</span></div>
      <div><h3>{publication.title}</h3><p className="authors">{highlightOwner(publication.authors)}</p><p className="venue">{publication.venue}</p></div>
      {publication.doi ? <a className="icon-link corner-fill" href={publication.doi} target="_blank" rel="noopener noreferrer" aria-label={`Open DOI for ${publication.title}`}><ArrowUpRight /></a> : null}
    </article>)}</div>
  </div>;
}
