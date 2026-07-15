"use client";

import Link from "next/link";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import { site } from "@/data/site";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}
        >
          <div>
            <Link href="/" className="brand-lockup" style={{ color: "#fff" }}>
              <span className="brand-mark">{site.company.shortName.charAt(0)}</span>
              <span style={{ color: "#fff" }}>
                {site.company.shortName}
                <span className="brand-sub" style={{ color: "#8ea19d" }}>
                  Pharmaceuticals
                </span>
              </span>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 280, color: "#8ea19d", lineHeight: 1.7 }}>
              {site.company.tagline}. Committed to quality medicine and healthier communities
              since {site.company.established}.
            </p>
          </div>

          <div>
            <div className="footer-title">Company</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {site.nav
                .filter((n) => n.href !== "/")
                .map((n) => (
                  <li key={n.href}>
                    <Link href={n.href}>{n.label}</Link>
                  </li>
                ))}
            </ul>
          </div>

          <div>
            <div className="footer-title">Contact</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 12 }}>
              <li style={{ display: "flex", gap: 10 }}>
                <EnvironmentOutlined style={{ marginTop: 4 }} />
                <span>{site.company.address}</span>
              </li>
              <li style={{ display: "flex", gap: 10 }}>
                <PhoneOutlined />
                <a href={`tel:${site.company.phone}`}>{site.company.phone}</a>
              </li>
              <li style={{ display: "flex", gap: 10 }}>
                <MailOutlined />
                <a href={`mailto:${site.company.email}`}>{site.company.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Follow</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {site.company.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {site.company.name}. All rights reserved.
          </span>
          <span>Placeholder content — managed via the ERP Website CMS.</span>
        </div>
      </div>
    </footer>
  );
}
