import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "大航海时代4威力加强版常见问题 - 安装/运行/存档问题解答",
  description: "大航海时代4威力加强版HD常见问题解答，包含游戏无法启动、画面花屏、没有声音、存档位置、兼容性设置等问题的解决方案。",
  keywords: [
    "大航海时代4无法启动",
    "大航海时代4花屏",
    "大航海时代4存档位置",
    "大航海时代4兼容性",
    "大航海时代4常见问题"
  ],
  openGraph: {
    title: "大航海时代4威力加强版常见问题解答",
    description: "大航海时代4威力加强版HD常见问题解答，游戏安装运行问题解决方案。",
  },
};

export default function QALayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
