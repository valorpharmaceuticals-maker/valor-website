"use client";

import { useMemo, useState } from "react";
import { Card, Col, Empty, Input, Row, Segmented, Tag, Typography } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { PageHero } from "@/components/sections";
import type { SiteContent } from "@/data/site";

const { Title, Paragraph } = Typography;

export default function ProductsContent({ content }: { content: SiteContent }) {
  const { products, productCategories } = content;
  const page = content.pages.products;

  const [category, setCategory] = useState<string>("All");
  const [query, setQuery] = useState("");

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat = category === "All" || p.category === category;
      const matchQuery =
        !query.trim() ||
        p.name.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [products, category, query]);

  return (
    <>
      <PageHero eyebrow={page.hero.eyebrow ?? ""} title={page.hero.title} lead={page.hero.lead} />

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
                options={productCategories}
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
                  <Card variant="outlined" style={{ height: "100%" }} hoverable
                    cover={
                      p.image ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={p.image} alt={p.name} style={{ height: 180, objectFit: "cover" }} />
                      ) : undefined
                    }
                  >
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 12 }}>
                      <Tag color="teal">{p.category}</Tag>
                      <span style={{ color: "var(--brand-primary)", fontWeight: 600, fontSize: 13 }}>{p.form}</span>
                    </div>
                    <Title level={4} style={{ marginTop: 0, marginBottom: 8 }}>{p.name}</Title>
                    <Paragraph style={{ color: "var(--brand-muted)", marginBottom: 0 }}>{p.description}</Paragraph>
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
