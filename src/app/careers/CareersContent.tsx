"use client";

import Link from "next/link";
import { Button, Col, Row, Tag, Typography } from "antd";
import { EnvironmentOutlined, RightOutlined } from "@ant-design/icons";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";
import { site } from "@/data/site";

const { Title, Paragraph } = Typography;

const perks = [
  { icon: "HeartOutlined", title: "Meaningful work", description: "Contribute to products that improve people's health and quality of life." },
  { icon: "BulbOutlined", title: "Growth & learning", description: "Structured training and clear pathways to develop your career." },
  { icon: "TeamOutlined", title: "Supportive culture", description: "A collaborative, respectful environment where people are valued." },
  { icon: "SafetyCertificateOutlined", title: "Stability", description: "A trusted, established company with a long-term outlook." },
];

export default function CareersContent() {
  return (
    <>
      <PageHero
        eyebrow="Careers"
        title="Build your career with purpose"
        lead="We are always looking for talented, driven people who want to make a real difference in healthcare."
      />

      <section className="section">
        <div className="container">
          <SectionHead center eyebrow="Why join us" title="More than just a job" />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {perks.map((p) => (
              <Col xs={24} sm={12} lg={6} key={p.title}>
                <div className="feature-card">
                  <div className="icon-badge">
                    <Icon name={p.icon} />
                  </div>
                  <Title level={4} style={{ marginTop: 0 }}>{p.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                    {p.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <SectionHead
            eyebrow="Open positions"
            title="Current opportunities"
            lead="These roles are placeholders and will be managed through the CMS."
          />
          <div style={{ marginTop: 40, display: "grid", gap: 16 }}>
            {site.jobs.map((job) => (
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
            Don&apos;t see a suitable role? Send your CV to{" "}
            <a href={`mailto:${site.company.email}`} style={{ color: "var(--brand-primary)", fontWeight: 600 }}>
              {site.company.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
