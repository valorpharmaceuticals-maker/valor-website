"use client";

import { useState } from "react";
import { Button, Card, Col, Form, Input, Row, Select, Typography, App } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { PageHero } from "@/components/sections";
import type { SiteContent } from "@/data/site";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface ContactValues {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactContent({ content }: { content: SiteContent }) {
  const { company } = content;
  const page = content.pages.contact;
  const { message } = App.useApp();
  const [form] = Form.useForm<ContactValues>();
  const [submitting, setSubmitting] = useState(false);

  const onFinish = async (values: ContactValues) => {
    const base = process.env.NEXT_PUBLIC_API_BASE_URL;
    setSubmitting(true);
    try {
      if (base) {
        const res = await fetch(`${base.replace(/\/$/, "")}/public/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        });
        if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      } else {
        // No API configured yet — log so local dev still works.
        console.info("Contact form submission (no API base configured):", values);
      }
      message.success("Thank you — your message has been received. We will be in touch shortly.");
      form.resetFields();
    } catch {
      message.error("Sorry, something went wrong sending your message. Please try again or email us directly.");
    } finally {
      setSubmitting(false);
    }
  };

  const details = [
    { icon: <EnvironmentOutlined />, label: "Address", value: company.address },
    { icon: <PhoneOutlined />, label: "Phone", value: company.phone, href: `tel:${company.phone}` },
    { icon: <MailOutlined />, label: "Email", value: company.email, href: `mailto:${company.email}` },
    { icon: <ClockCircleOutlined />, label: "Hours", value: page.hours },
  ];

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow ?? ""} title={page.hero.title} lead={page.hero.lead} />

      <section className="section">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col xs={24} lg={10}>
              <span className="eyebrow">{page.intro.eyebrow}</span>
              <Title level={2} style={{ marginTop: 0, fontSize: "clamp(24px, 3.6vw, 32px)" }}>
                {page.intro.title}
              </Title>
              <Paragraph style={{ color: "var(--brand-muted)", fontSize: 16 }}>{page.intro.lead}</Paragraph>

              <div style={{ display: "grid", gap: 20, marginTop: 28 }}>
                {details.map((d) => (
                  <div key={d.label} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div className="icon-badge" style={{ width: 44, height: 44, fontSize: 18, marginBottom: 0, flexShrink: 0 }}>
                      {d.icon}
                    </div>
                    <div>
                      <div style={{ fontWeight: 700 }}>{d.label}</div>
                      {d.href ? (
                        <a href={d.href} style={{ color: "var(--brand-muted)" }}>{d.value}</a>
                      ) : (
                        <span style={{ color: "var(--brand-muted)" }}>{d.value}</span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            <Col xs={24} lg={14}>
              <Card variant="outlined">
                <Form form={form} layout="vertical" onFinish={onFinish} requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" label="Full name" rules={[{ required: true, message: "Please enter your name" }]}>
                        <Input size="large" placeholder="Your name" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="email" label="Email" rules={[{ required: true, message: "Please enter your email" }, { type: "email", message: "Enter a valid email" }]}>
                        <Input size="large" placeholder="you@example.com" />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="phone" label="Phone (optional)">
                        <Input size="large" placeholder="+92 ..." />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="subject" label="Subject" rules={[{ required: true, message: "Please choose a subject" }]}>
                        <Select size="large" placeholder="Select a topic" options={page.subjects} />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter a message" }]}>
                        <TextArea rows={5} placeholder="How can we help?" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="primary" size="large" htmlType="submit" loading={submitting}>
                    Send message
                  </Button>
                </Form>
              </Card>
            </Col>
          </Row>
        </div>
      </section>

      <section style={{ paddingBottom: 0 }}>
        <iframe
          title="Company location"
          src={`https://www.google.com/maps?q=${encodeURIComponent(company.mapQuery)}&output=embed`}
          style={{ width: "100%", height: 380, border: 0, display: "block" }}
          loading="lazy"
        />
      </section>
    </>
  );
}
