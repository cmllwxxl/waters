import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大航海时代4威力加强版攻略大全 - 李华梅/蒂雅/霸者之证/宝物图鉴",
  description: "大航海时代4威力加强版HD完整攻略，包含李华梅详细攻略、蒂雅攻略、霸者之证获取、宝物图鉴、贸易航线、海战技巧、新手入门指南等。",
  keywords: [
    "大航海时代4攻略",
    "大航海时代4威力加强版攻略",
    "大航海时代4hd攻略",
    "大航海时代4李华梅攻略",
    "大航海时代4蒂雅攻略",
    "大航海时代4霸者之证",
    "大航海时代4宝物",
    "大航海时代4贸易攻略"
  ],
  openGraph: {
    title: "大航海时代4威力加强版攻略大全",
    description: "大航海时代4威力加强版HD完整攻略，包含李华梅攻略、霸者之证、宝物图鉴等。",
    url: "https://www.uncharted-water.com/guide",
  },
  alternates: {
    canonical: "https://www.uncharted-water.com/guide",
  },
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
