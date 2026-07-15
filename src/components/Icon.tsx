"use client";

import {
  SafetyCertificateOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  GlobalOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  BulbOutlined,
  TeamOutlined,
  InboxOutlined,
  SolutionOutlined,
  RightOutlined,
} from "@ant-design/icons";
import type { ComponentType } from "react";

type AntdIconProps = React.ComponentProps<typeof MedicineBoxOutlined>;

const MAP: Record<string, ComponentType<AntdIconProps>> = {
  SafetyCertificateOutlined,
  ExperimentOutlined,
  MedicineBoxOutlined,
  GlobalOutlined,
  HeartOutlined,
  CheckCircleOutlined,
  BulbOutlined,
  TeamOutlined,
  InboxOutlined,
  SolutionOutlined,
  RightOutlined,
};

export default function Icon({ name, ...rest }: { name: string } & AntdIconProps) {
  const Cmp = MAP[name] ?? MedicineBoxOutlined;
  return <Cmp {...rest} />;
}
