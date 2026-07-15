"use client";

import { Col, Row, Typography } from "antd";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";
import { site } from "@/data/site";

const { Title, Paragraph } = Typography;

const process = [
  { step: "01", title: "Research & Development", text: "Formulation development, stability studies and analytical method validation." },
  { step: "02", title: "Sourcing & QC", text: "Qualified suppliers and incoming quality control of every raw material." },
  { step: "03", title: "Manufacturing", text: "GMP-controlled production across multiple dosage forms." },
  { step: "04", title: "Release & Distribution", text: "Finished-product testing, batch release and nationwide delivery." },
];

export default function ServicesContent() {
  return (
    <>
      <PageHero
        eyebrow="What we do"
        title="End-to-end pharmaceutical services"
        lead="From molecule to medicine cabinet, we provide the capabilities and quality systems that healthcare partners depend on."
      />

      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Our capabilities"
            title="Comprehensive services under one roof"
          />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {site.services.map((s) => (
              <Col xs={24} sm={12} lg={8} key={s.title}>
                <div className="feature-card">
                  <div className="icon-badge">
                    <Icon name={s.icon} />
                  </div>
                  <Title level={4} style={{ marginTop: 0 }}>{s.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                    {s.description}
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
            center
            eyebrow="How we work"
            title="A controlled process, every step of the way"
            lead="Quality is not a checkpoint — it is built into each stage of how we operate."
          />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {process.map((p) => (
              <Col xs={24} sm={12} lg={6} key={p.step}>
                <div style={{ padding: "8px 4px" }}>
                  <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(15,118,110,0.25)", lineHeight: 1 }}>
                    {p.step}
                  </div>
                  <Title level={4} style={{ marginTop: 12 }}>{p.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                    {p.text}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </>
  );
}
