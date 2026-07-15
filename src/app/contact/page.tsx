"use client";

import { Button, Card, Col, Form, Input, Row, Select, Typography, App } from "antd";
import { EnvironmentOutlined, MailOutlined, PhoneOutlined, ClockCircleOutlined } from "@ant-design/icons";
import { PageHero } from "@/components/sections";
import { site } from "@/data/site";

const { Title, Paragraph } = Typography;
const { TextArea } = Input;

interface ContactValues {
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const { message } = App.useApp();
  const [form] = Form.useForm<ContactValues>();

  const onFinish = (values: ContactValues) => {
    // Placeholder: when the ERP backend exposes a public contact endpoint,
    // POST `values` to it here. For now we simulate a successful submission.
    console.info("Contact form submission (placeholder):", values);
    message.success("Thank you — your message has been received. We will be in touch shortly.");
    form.resetFields();
  };

  const details = [
    { icon: <EnvironmentOutlined />, label: "Address", value: site.company.address },
    { icon: <PhoneOutlined />, label: "Phone", value: site.company.phone, href: `tel:${site.company.phone}` },
    { icon: <MailOutlined />, label: "Email", value: site.company.email, href: `mailto:${site.company.email}` },
    { icon: <ClockCircleOutlined />, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM" },
  ];

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk"
        lead="Have a question, a partnership proposal or need support? Reach out and our team will get back to you."
      />

      <section className="section">
        <div className="container">
          <Row gutter={[40, 40]}>
            <Col xs={24} lg={10}>
              <span className="eyebrow">Get in touch</span>
              <Title level={2} style={{ marginTop: 0, fontSize: "clamp(24px, 3.6vw, 32px)" }}>
                We&apos;d love to hear from you
              </Title>
              <Paragraph style={{ color: "var(--brand-muted)", fontSize: 16 }}>
                Use the form or reach us directly through the details below.
              </Paragraph>

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
                        <Select
                          size="large"
                          placeholder="Select a topic"
                          options={[
                            { value: "general", label: "General enquiry" },
                            { value: "partnership", label: "Partnership / Distribution" },
                            { value: "product", label: "Product information" },
                            { value: "careers", label: "Careers" },
                            { value: "other", label: "Other" },
                          ]}
                        />
                      </Form.Item>
                    </Col>
                    <Col xs={24}>
                      <Form.Item name="message" label="Message" rules={[{ required: true, message: "Please enter a message" }]}>
                        <TextArea rows={5} placeholder="How can we help?" />
                      </Form.Item>
                    </Col>
                  </Row>
                  <Button type="primary" size="large" htmlType="submit">
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
          src={`https://www.google.com/maps?q=${encodeURIComponent(site.company.mapQuery)}&output=embed`}
          style={{ width: "100%", height: 380, border: 0, display: "block" }}
          loading="lazy"
        />
      </section>
    </>
  );
}
