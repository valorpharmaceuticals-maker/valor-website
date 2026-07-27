"use client";

import { Col, Row, Typography } from "antd";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";
import type { SiteContent } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function ServicesContent({ content }: { content: SiteContent }) {
  const { services, process } = content;
  const page = content.pages.services;

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow ?? ""} title={page.hero.title} lead={page.hero.lead} />

      <section className="section">
        <div className="container">
          <Reveal>
            <SectionHead center eyebrow={page.capabilities.eyebrow} title={page.capabilities.title} />
          </Reveal>
          <Stagger>
            <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
              {services.map((s) => (
                <Col xs={24} sm={12} lg={8} key={s.title}>
                  <StaggerItem style={{ height: "100%" }}>
                    <div className="feature-card">
                      <div className="icon-badge">
                        <Icon name={s.icon} />
                      </div>
                      <Title level={4} style={{ marginTop: 0 }}>{s.title}</Title>
                      <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{s.description}</Paragraph>
                    </div>
                  </StaggerItem>
                </Col>
              ))}
            </Row>
          </Stagger>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <Reveal>
            <SectionHead center eyebrow={page.process.eyebrow} title={page.process.title} lead={page.process.lead} />
          </Reveal>
          <Stagger>
            <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
              {process.map((p) => (
                <Col xs={24} sm={12} lg={6} key={p.step}>
                  <StaggerItem>
                    <div style={{ padding: "8px 4px" }}>
                      <div style={{ fontSize: 40, fontWeight: 800, color: "rgba(30,99,180,0.25)", lineHeight: 1 }}>
                        {p.step}
                      </div>
                      <Title level={4} style={{ marginTop: 12 }}>{p.title}</Title>
                      <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{p.text}</Paragraph>
                    </div>
                  </StaggerItem>
                </Col>
              ))}
            </Row>
          </Stagger>
        </div>
      </section>
    </>
  );
}
