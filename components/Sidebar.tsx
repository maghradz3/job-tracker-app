"use client";
import Logo from "@/assets/maiinLogo.png";
import { links } from "@/utils/links";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
const Sidebar = () => {
  const pathName = usePathname();
  return (
    <aside className="h-y px-8 bg-muted h-full">
      <Image
        src={Logo}
        priority
        alt="logo"
        width={80}
        height={80}
        className="mx-auto pt-3"
      />
      <div className="flex flex-col mt-20 gap-y-3">
        {links.map((link) => {
          return (
            <Button
              asChild
              key={link.href}
              variant={pathName === link.href ? "default" : "link"}
            >
              <Link href={link.href} className="flex items-center gap-x-2">
                {link.icon}
                <span className="capitalize">{link.label}</span>
              </Link>
            </Button>
          );
        })}
      </div>
    </aside>
  );
};

export default Sidebar;
