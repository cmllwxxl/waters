import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "大航海时代4威力加强版 - 官方下载站",
  description: "大航海时代4威力加强版游戏下载、攻略、常见问题解答",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="nav-bar">
          <div className="nav-container">
            <Link href="/" className="nav-logo">
              <span className="logo-icon">⚓</span>
              大航海时代4 PK
            </Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">首页</Link>
              <Link href="/guide" className="nav-link">攻略</Link>
              <Link href="/download" className="nav-link">下载</Link>
              <Link href="/qa" className="nav-link">常见问题</Link>
            </div>
          </div>
        </nav>

        <main className="main-content">
          {children}
        </main>

        <footer className="footer">
          <div className="footer-container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>大航海时代4威力加强版</h3>
                <p>经典航海策略游戏，重温大航海时代的辉煌</p>
              </div>
              <div className="footer-section">
                <h4>快速链接</h4>
                <Link href="/guide">游戏攻略</Link>
                <Link href="/download">游戏下载</Link>
                <Link href="/qa">常见问题</Link>
              </div>
              <div className="footer-section">
                <h4>游戏信息</h4>
                <p>开发商: KOEI</p>
                <p>类型: 策略/模拟</p>
                <p>平台: PC</p>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2024 大航海时代4威力加强版粉丝站 - 仅供学习交流使用</p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
