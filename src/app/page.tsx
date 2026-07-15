"use client";

import Link from "next/link";
import { Button, Card, Carousel, Col, Row, Tag, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import Icon from "@/components/Icon";
import { SectionHead } from "@/components/sections";
import { site } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function HomePage() {
  return (
    <>
      {/* ---- Hero carousel ---- */}
      <section aria-label="Highlights">
        <Carousel autoplay autoplaySpeed={5500} className="hero-carousel" effect="fade">
          {site.hero.map((slide) => (
            <div key={slide.title}>
              <div className="hero-slide">
                <div
                  className="hero-slide__bg"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                <div className="hero-slide__overlay" />
                <div className="container">
                  <div className="hero-slide__inner">
                    <span className="pill" style={{ background: "rgba(255,255,255,0.16)", color: "#fff", marginBottom: 20 }}>
                      {slide.eyebrow}
                    </span>
                    <Title>{slide.title}</Title>
                    <p>{slide.subtitle}</p>
                    <Link href={slide.ctaHref}>
                      <Button type="primary" size="large">
                        {slide.ctaLabel} <RightOutlined />
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </section>

      {/* ---- Why us ---- */}
      <section className="section">
        <div className="container">
          <SectionHead
            center
            eyebrow="Why choose us"
            title="A pharmaceutical partner built on quality"
            lead="From formulation to distribution, every stage is governed by rigorous standards and a patient-first mindset."
          />
          <Row gutter={[24, 24]} style={{ marginTop: 48 }}>
            {site.highlights.map((f) => (
              <Col xs={24} sm={12} lg={6} key={f.title}>
                <div className="feature-card">
                  <div className="icon-badge">
                    <Icon name={f.icon} />
                  </div>
                  <Title level={4} style={{ marginTop: 0 }}>
                    {f.title}
                  </Title>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                    {f.description}
                  </Paragraph>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ---- Stats ---- */}
      <section className="section section--ink">
        <div className="container">
          <Row gutter={[24, 40]}>
            {site.stats.map((s) => (
              <Col xs={12} md={6} key={s.label} style={{ textAlign: "center" }}>
                <div className="stat-value">{s.value}</div>
                <div className="stat-label">{s.label}</div>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ---- Chairman's message ---- */}
      <section className="section section--soft">
        <div className="container">
          <div className="split">
            <div>
              <div className="media-frame" style={{ maxWidth: 440 }}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={site.chairman.image} alt={site.chairman.name} />
              </div>
            </div>
            <div>
              <span className="eyebrow">Chairman&apos;s message</span>
              <Title level={2} style={{ marginTop: 0, fontSize: "clamp(24px, 3.6vw, 34px)" }}>
                A word from our leadership
              </Title>
              <Paragraph style={{ fontSize: 17, color: "var(--brand-muted)", lineHeight: 1.8 }}>
                “{site.chairman.message}”
              </Paragraph>
              <div style={{ marginTop: 8 }}>
                <strong style={{ display: "block", fontSize: 17 }}>{site.chairman.name}</strong>
                <span style={{ color: "var(--brand-muted)" }}>{site.chairman.role}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Vision & Mission ---- */}
      <section className="section">
        <div className="container">
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <div className="quote-card" style={{ height: "100%" }}>
                <span className="eyebrow">Our vision</span>
                <blockquote>{site.vision}</blockquote>
              </div>
            </Col>
            <Col xs={24} md={12}>
              <div className="quote-card" style={{ height: "100%" }}>
                <span className="eyebrow">Our mission</span>
                <blockquote>{site.mission}</blockquote>
              </div>
            </Col>
          </Row>
        </div>
      </section>

      {/* ---- Featured products ---- */}
      <section className="section section--soft">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16, alignItems: "flex-end", justifyContent: "space-between" }}>
            <SectionHead
              eyebrow="Our portfolio"
              title="Featured products"
              lead="A selection from our growing range across multiple therapeutic segments."
            />
            <Link href="/products">
              <Button size="large">View all products <RightOutlined /></Button>
            </Link>
          </div>
          <Row gutter={[24, 24]} style={{ marginTop: 40 }}>
            {site.products.slice(0, 6).map((p) => (
              <Col xs={24} sm={12} lg={8} key={p.name}>
                <Card variant="outlined" style={{ height: "100%" }}>
                  <Tag color="teal" style={{ marginBottom: 12 }}>{p.category}</Tag>
                  <Title level={4} style={{ marginTop: 0, marginBottom: 6 }}>{p.name}</Title>
                  <div style={{ color: "var(--brand-primary)", fontWeight: 600, fontSize: 13, marginBottom: 12 }}>
                    {p.form}
                  </div>
                  <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                    {p.description}
                  </Paragraph>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>

      {/* ---- CTA ---- */}
      <section className="section">
        <div className="container">
          <div
            style={{
              background: "linear-gradient(135deg, var(--brand-primary-dark), var(--brand-primary))",
              borderRadius: 20,
              padding: "clamp(40px, 6vw, 72px)",
              color: "#fff",
              textAlign: "center",
            }}
          >
            <Title level={2} style={{ color: "#fff", marginTop: 0, fontSize: "clamp(26px, 4vw, 38px)" }}>
              Interested in partnering with us?
            </Title>
            <p className="lead" style={{ color: "rgba(255,255,255,0.9)", maxWidth: 620, margin: "12px auto 32px" }}>
              Whether you are a distributor, healthcare provider or prospective partner, we would
              love to hear from you.
            </p>
            <Link href="/contact">
              <Button size="large" style={{ background: "#fff", color: "var(--brand-primary-dark)", fontWeight: 700 }}>
                Contact our team <RightOutlined />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
