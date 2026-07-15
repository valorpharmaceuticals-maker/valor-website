"use client";

import Link from "next/link";
import { Button, Col, Row, Tag, Typography } from "antd";
import { EnvironmentOutlined, RightOutlined } from "@ant-design/icons";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";
import type { SiteContent } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function CareersContent({ content }: { content: SiteContent }) {
  const { perks, jobs, company } = content;
  const page = content.pages.careers;

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow ?? ""} title={page.hero.title} lead={page.hero.lead} />

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow={page.whyJoin.eyebrow} title={page.whyJoin.title} />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {perks.map((p) => (
              <Col xs={24} sm={12} lg={6} key={p.title}>
                <div className="feature-card">
                  <div className="icon-badge">
                    <Icon name={p.icon} />
                  </div>
                  <Title level={4} style={{ marginTop: 0 }}>{p.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{p.description}</Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead eyebrow={page.openings.eyebrow} title={page.openings.title} lead={page.openings.lead} />
          <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
            {jobs.map((job) => (
              <div
                key={job.title}
                style={{
                  background: "#fff",
                  border: "1px solid var(--brand-border)",
                  borderRadius: 14,
                  padding: "24px 28px",
                  display: "flex",
                  flexWrap: "wrap",
                  gap: 16,
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ maxWidth: 620 }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <Tag color="teal">{job.department}</Tag>
                    <Tag>{job.type}</Tag>
                    <span style={{ color: "var(--brand-muted)", fontSize: 13, display: "inline-flex", alignItems: "center", gap: 4 }}>
                      <EnvironmentOutlined /> {job.location}
                    </span>
                  </div>
                  <Title level={4} style={{ margin: "0 0 4px" }}>{job.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", margin: 0 }}>{job.summary}</Paragraph>
                </div>
                <Link href="/contact">
                  <Button type="primary">Apply now <RightOutlined /></Button>
                </Link>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 40, textAlign: "center", color: "var(--brand-muted)" }}>
            {page.spontaneous.note}{" "}
            <a href={`mailto:${company.email}`} style={{ color: "var(--brand-primary)", fontWeight: 600 }}>
              {company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
