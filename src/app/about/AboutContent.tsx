"use client";

import { Col, Row, Typography } from "antd";
import { EnvironmentOutlined } from "@ant-design/icons";
import Icon from "@/components/Icon";
import { PageHero, SectionHead } from "@/components/sections";
import type { SiteContent } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function AboutContent({ content }: { content: SiteContent }) {
  const { company, vision, mission, values, history, leadership } = content;
  const page = content.pages.about;

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow ?? ""} title={page.hero.title} lead={page.hero.lead} />

      {/* Company overview */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{page.overview.eyebrow}</span>
              <Title level={2} style={{ marginTop: 0, fontSize: "clamp(24px, 3.6vw, 34px)" }}>
                {page.overview.title}
              </Title>
              {page.overview.body.map((para, i) => (
                <Paragraph key={i} style={{ fontSize: 17, color: "var(--brand-muted)", lineHeight: 1.8 }}>
                  {para}
                </Paragraph>
              ))}
            </div>
            <div className="media-frame">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={page.overview.image} alt={page.overview.title} style={{ minHeight: 340 }} />
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section--soft">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div className="quote-card" style={{ height: "100%" }}>
                <span className="eyebrow">Our vision</span>
                <blockquote>{vision}</blockquote>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="quote-card" style={{ height: "100%" }}>
                <span className="eyebrow">Our mission</span>
                <blockquote>{mission}</blockquote>
              </div>
            </Col>
          </Row>

          <div style={{ marginTop: 56 }}>
            <SectionHead center eyebrow={page.valuesSection.eyebrow} title={page.valuesSection.title} />
            <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
              {values.map((v) => (
                <Col xs={24} sm={12} lg={6} key={v.title}>
                  <div className="feature-card" style={{ textAlign: "center" }}>
                    <div className="icon-badge" style={{ margin: "0 auto 18px" }}>
                      <Icon name={v.icon} />
                    </div>
                    <Title level={4} style={{ marginTop: 0 }}>{v.title}</Title>
                    <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{v.description}</Paragraph>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </section>

      {/* History timeline */}
      <section className="section">
        <div className="container">
          <SectionHead center eyebrow={page.historySection.eyebrow} title={page.historySection.title} />
          <div style={{ marginTop: 48, maxWidth: 820, marginInline: "auto" }}>
            {history.map((h, i) => (
              <div
                key={h.year}
                style={{
                  display: "grid",
                  gridTemplateColumns: "88px 1fr",
                  gap: 24,
                  paddingBottom: i === history.length - 1 ? 0 : 32,
                }}
              >
                <div style={{ textAlign: "right" }}>
                  <span style={{ fontWeight: 800, fontSize: 20, color: "var(--brand-primary)" }}>{h.year}</span>
                </div>
                <div
                  style={{
                    borderLeft: "2px solid var(--brand-border)",
                    paddingLeft: 24,
                    paddingBottom: 8,
                    position: "relative",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      left: -7,
                      top: 4,
                      width: 12,
                      height: 12,
                      borderRadius: "50%",
                      background: "var(--brand-primary)",
                    }}
                  />
                  <Title level={4} style={{ margin: "0 0 6px" }}>{h.title}</Title>
                  <Paragraph style={{ color: "var(--brand-muted)", margin: 0 }}>{h.text}</Paragraph>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section section--soft">
        <div className="container">
          <SectionHead center eyebrow={page.leadershipSection.eyebrow} title={page.leadershipSection.title} />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {leadership.map((l) => (
              <Col xs={24} sm={12} lg={8} key={l.role}>
                <div style={{ background: "#fff", border: "1px solid var(--brand-border)", borderRadius: 14, overflow: "hidden", height: "100%" }}>
                  <div style={{ aspectRatio: "4 / 3", overflow: "hidden" }}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={l.image} alt={l.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                  </div>
                  <div style={{ padding: 24 }}>
                    <Title level={4} style={{ margin: "0 0 2px" }}>{l.name}</Title>
                    <div style={{ color: "var(--brand-primary)", fontWeight: 600, marginBottom: 10 }}>{l.role}</div>
                    <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{l.bio}</Paragraph>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* Location */}
      <section className="section">
        <div className="container">
          <div className="split">
            <div>
              <span className="eyebrow">{page.location.eyebrow}</span>
              <Title level={2} style={{ marginTop: 0, fontSize: "clamp(24px, 3.6vw, 34px)" }}>
                {page.location.title}
              </Title>
              <Paragraph style={{ fontSize: 17, color: "var(--brand-muted)", lineHeight: 1.8, display: "flex", gap: 10 }}>
                <EnvironmentOutlined style={{ color: "var(--brand-primary)", marginTop: 4 }} />
                {company.address}
              </Paragraph>
            </div>
            <div className="media-frame" style={{ minHeight: 320 }}>
              <iframe
                title="Company location"
                src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
                style={{ width: "100%", height: "100%", minHeight: 320, border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
