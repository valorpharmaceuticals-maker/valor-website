"use client";

import type { ReactNode } from "react";
import { Typography } from "antd";

const { Title } = Typography;

export function SectionHead({
  eyebrow,
  title,
  lead,
  center,
  invert,
}: {
  eyebrow?: string;
  title: string;
  lead?: string;
  center?: boolean;
  invert?: boolean;
}) {
  return (
    <div className={`section-head${center ? " center" : ""}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <Title level={2} style={{ margin: 0, color: invert ? "#fff" : undefined, fontSize: "clamp(26px, 4vw, 38px)" }}>
        {title}
      </Title>
      {lead && <p className="lead" style={{ marginTop: 16, marginBottom: 0 }}>{lead}</p>}
    </div>
  );
}

export function PageHero({
  eyebrow,
  title,
  lead,
  children,
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow" style={{ color: "rgba(255,255,255,0.85)" }}>
          {eyebrow}
        </span>
        <Title style={{ color: "#fff", margin: 0, fontSize: "clamp(30px, 5vw, 48px)", maxWidth: 820 }}>
          {title}
        </Title>
        {lead && <p className="lead" style={{ marginTop: 18, maxWidth: 720 }}>{lead}</p>}
        {children}
      </div>
    </section>
  );
}
