"use client";

import { useMemo, useState } from "react";
import { Card, Col, Empty, Input, Row, Segmented, Tag, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { PageHero } from "@/components/sections";
import { site } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function ProductsPage() {
  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return site.products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQuery =
        !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [category, query]);

  return (
    <>
      <PageHero
        eyebrow="Our portfolio"
        title="Products that make a difference"
        lead="A growing range of quality-assured medicines across multiple therapeutic categories. Product data shown here is illustrative and will be managed through the CMS."
      />

      <section className="section">
        <div className="container">
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 16,
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: 32,
            }}
          >
            <div style={{ overflowX: "auto", maxWidth: "100%" }}>
              <Segmented
                size="large"
                value={category}
                onChange={(v) => setCategory(v as string)}
                options={site.productCategories as unknown as string[]}
              />
            </div>
            <Input
              size="large"
              allowClear
              placeholder="Search products"
              prefix={<SearchOutlined />}
              style={{ maxWidth: 280 }}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
          </div>

          {filtered.length === 0 ? (
            <Empty description="No products match your search" style={{ padding: "64px 0" }} />
          ) : (
            <Row gutter={[24, 24]}>
              {filtered.map((p) => (
                <Col xs={24} sm={12} lg={8} key={p.name}>
                  <Card variant="outlined" style={{ height: "100%" }} hoverable>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <Tag color="teal">{p.category}</Tag>
                      <span style={{ color: "var(--brand-primary)", fontWeight: 600, fontSize: 13 }}>
                        {p.form}
                      </span>
                    </div>
                    <Title level={4} style={{ marginTop: 0, marginBottom: 8 }}>{p.name}</Title>
                    <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>
                      {p.description}
                    </Paragraph>
                  </Card>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </section>
    </>
  );
}
