import Link from "next/link";

const tabs = [
  { name: "Home", path: "/" },
  { name: "HeroUI", path: "/heroui" },
  { name: "shadcn/ui", path: "/shadcn" },
  { name: "daisyUI", path: "/daisyui" },
  { name: "Magic UI", path: "/magicui" },
  { name: "Custom", path: "/custom" },
];

export default function Navigation() {
  return (
    <div className="comparison-tabs">
      {tabs.map((tab) => (
        <Link key={tab.path} href={tab.path} className="comparison-pill">
          {tab.name}
        </Link>
      ))}
    </div>
  );
}
