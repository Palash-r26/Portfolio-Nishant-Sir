import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet, Link, createRootRouteWithContext, useRouter, HeadContent, Scripts } from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader } from "@/components/site/SiteHeader";
import { SiteFooter } from "@/components/site/SiteFooter";
import { Preloader } from "@/components/site/Preloader";
import { Button } from "@/components/ui/button";

function NotFoundComponent() { 
  return (
    <main className="state-page">
      <p className="eyebrow">404</p>
      <h1>Page Not Found</h1>
      <p>The academic resource or archive you requested could not be located.</p>
      <Link to="/" className="primary-action">Return to Overview</Link>
    </main>
  ); 
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error); 
  const router = useRouter();
  useEffect(() => { reportLovableError(error, { boundary: "tanstack_root_error_component" }); }, [error]);
  return (
    <main className="state-page">
      <p className="eyebrow">System Notice</p>
      <h1>Something went wrong.</h1>
      <p>Please try again or return to the main portfolio overview.</p>
      <div className="action-row">
        <Button onClick={() => { router.invalidate(); reset(); }}>Retry</Button>
        <a className="text-link" href="/">Return home</a>
      </div>
    </main>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" }, 
      { name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=5" }, 
      { name: "theme-color", content: "#FAFAF7" },
      { name: "color-scheme", content: "light" },
      { name: "author", content: "Dr. Nishant Jain" }, 
      { property: "og:type", content: "website" }, 
      { name: "twitter:card", content: "summary_large_image" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { 
        rel: "stylesheet", 
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..800;1,9..144,300..800&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" 
      },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
    ],
  }), 
  shellComponent: RootShell, 
  component: RootComponent, 
  notFoundComponent: NotFoundComponent, 
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) { 
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {/* Subtle noise grain filter */}
        <div className="noise-texture-overlay" aria-hidden="true" />
        {children}
        <Scripts />
      </body>
    </html>
  ); 
}

function RootComponent() { 
  const { queryClient } = Route.useRouteContext();

  useEffect(() => {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    // Initialize Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
    });
    (window as any).__lenis = lenis;

    const handleHash = () => {
      if (window.location.hash) {
        setTimeout(() => {
          const target = document.getElementById(window.location.hash.slice(1));
          if (target) {
            lenis.scrollTo(target, { offset: -70 });
          }
        }, 80);
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener("hashchange", handleHash);
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <Preloader />
      <SiteHeader />
      <Outlet />
      <SiteFooter />
    </QueryClientProvider>
  ); 
}

