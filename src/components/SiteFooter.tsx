"use client";

import Link from "next/link";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined } from "@ant-design/icons";
import type { Company, NavItem } from "@/data/site";

export default function SiteFooter({
  company,
  nav,
  footerAbout,
}: {
  company: Company;
  nav: NavItem[];
  footerAbout: string;
}) {
  return (
    <footer className="site-footer">
      <div className="container">
        <div
          className="grid"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 40 }}
        >
          <div>
            <Link href="/" className="brand-lockup" style={{ color: "#fff" }}>
              <span className="brand-mark">{company.shortName.charAt(0)}</span>
              <span style={{ color: "#fff" }}>
                {company.shortName}
                <span className="brand-sub" style={{ color: "#8399b5" }}>
                  Pharmaceuticals
                </span>
              </span>
            </Link>
            <p style={{ marginTop: 16, maxWidth: 280, color: "#8399b5", lineHeight: 1.7 }}>
              {footerAbout}
            </p>
          </div>

          <div>
            <div className="footer-title">Company</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {nav
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
                <span>{company.address}</span>
              </li>
              <li style={{ display: "flex", gap: 10 }}>
                <PhoneOutlined />
                <a href={`tel:${company.phone}`}>{company.phone}</a>
              </li>
              <li style={{ display: "flex", gap: 10 }}>
                <MailOutlined />
                <a href={`mailto:${company.email}`}>{company.email}</a>
              </li>
            </ul>
          </div>

          <div>
            <div className="footer-title">Follow</div>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "grid", gap: 10 }}>
              {company.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </span>
          <span>Managed via the ERP Website CMS.</span>
        </div>
      </div>
    </footer>
  );
}
