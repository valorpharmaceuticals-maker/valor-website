"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button, Drawer } from "antd";
import { MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { site } from "@/data/site";

export default function SiteHeader() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="site-header">
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Link href="/" className="brand-lockup" aria-label={`${site.company.name} home`}>
          <span className="brand-mark">{site.company.shortName.charAt(0)}</span>
          <span>
            {site.company.shortName}
            <span className="brand-sub">Pharmaceuticals</span>
          </span>
        </Link>

        <nav className="nav-desktop" aria-label="Primary">
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " active" : ""}`}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" style={{ marginLeft: 12 }}>
            <Button type="primary">Get in touch</Button>
          </Link>
        </nav>

        <Button
          className="nav-burger"
          type="text"
          aria-label="Open menu"
          icon={<MenuOutlined style={{ fontSize: 22 }} />}
          onClick={() => setOpen(true)}
        />
      </div>

      <Drawer
        placement="right"
        open={open}
        onClose={() => setOpen(false)}
        size="default"
        closeIcon={<CloseOutlined />}
        title={
          <span className="brand-lockup" style={{ fontSize: 18 }}>
            <span className="brand-mark" style={{ width: 32, height: 32, fontSize: 15 }}>
              {site.company.shortName.charAt(0)}
            </span>
            {site.company.shortName}
          </span>
        }
      >
        <nav aria-label="Mobile" style={{ display: "flex", flexDirection: "column", gap: 4 }}>
          {site.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link${isActive(item.href) ? " active" : ""}`}
              onClick={() => setOpen(false)}
              style={{ padding: "12px 12px" }}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setOpen(false)} style={{ marginTop: 12 }}>
            <Button type="primary" block>
              Get in touch
            </Button>
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
