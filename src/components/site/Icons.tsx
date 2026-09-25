import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;
const base = { width: 20, height: 20, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: 1.7, strokeLinecap: "round" as const, strokeLinejoin: "round" as const, "aria-hidden": true };
export const MailIcon = (props: IconProps) => <svg {...base} {...props}><rect x="3" y="5" width="18" height="14" rx="1"/><path d="m4 7 8 6 8-6"/></svg>;
export const ScholarIcon = (props: IconProps) => <svg {...base} {...props}><path d="m2.5 9 9.5-5 9.5 5-9.5 5z"/><path d="M6 11.5V16c3.7 2.7 8.3 2.7 12 0v-4.5M21.5 9v7"/></svg>;
export const LinkedInIcon = (props: IconProps) => <svg {...base} {...props}><rect x="3" y="3" width="18" height="18" rx="1"/><path d="M8 10v7m0-10v.01M12 17v-4a3 3 0 0 1 6 0v4m-6 0v-7"/></svg>;
export const OrcidIcon = (props: IconProps) => <svg {...base} {...props}><circle cx="12" cy="12" r="9"/><path d="M9 8.5v7M12 8.5h1.5a3.5 3.5 0 0 1 0 7H12"/></svg>;
export const ResearchIcon = (props: IconProps) => <svg {...base} {...props}><circle cx="9" cy="9" r="5"/><circle cx="15" cy="15" r="5"/><path d="M12 7.5 16 4m-8 16 4-3.5"/></svg>;
