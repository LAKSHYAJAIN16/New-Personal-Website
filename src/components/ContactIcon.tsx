import Image from "next/image";

const brands: Record<string, string> = {
  GitHub: "github", LinkedIn: "linkedin", "Twitter / X": "x", "Cal.com": "cal",
};

export function ContactIcon({ name }: { name: string }) {
  if (name === "email") return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" className="shrink-0">
      <rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 6 9 7 9-7" />
    </svg>
  );
  return <Image src={`/brands/${brands[name]}.svg`} alt="" width={name === "Cal.com" ? 64 : 18} height={18} className="contact-brand shrink-0" />;
}
