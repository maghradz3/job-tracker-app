import { AreaChart, Layers, AppWindow } from "lucide-react";

type NavLink = {
  href: string;
  label: string;
  icon: React.ReactNode;
};

export const links: NavLink[] = [
  {
    href: "/add-job",
    label: "add job",
    icon: <Layers size={24} />,
  },
  {
    href: "/jobs",
    label: "Jobs",
    icon: <AppWindow size={24} />,
  },
  {
    href: "/stats",
    label: "Stats",
    icon: <AreaChart size={24} />,
  },
];
