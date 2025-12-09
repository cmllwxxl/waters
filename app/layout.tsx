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
  title: {
    default: "大航海时代4威力加强版HD下载 - 修改器/MOD/攻略大全",
    template: "%s | 大航海时代4威力加强版"
  },
  description: "大航海时代4威力加强版HD官方下载站，提供游戏下载、修改器、MOD、完整攻略、霸者之证获取、李华梅攻略、蒂雅攻略、宝物图鉴等资源。支持Windows 10/11，免费下载畅玩经典航海游戏。",
  keywords: [
    "大航海时代4威力加强版",
    "大航海时代4威力加强版hd",
    "大航海时代4威力加强版修改器",
    "大航海时代4威力加强版hd修改器",
    "大航海时代4威力加强版hd宝物",
    "大航海时代4威力加强版hd霸者之证",
    "大航海时代4威力加强版李华梅详细攻略",
    "大航海时代4威力加强版蒂雅攻略",
    "大航海时代4威力加强版mod",
    "大航海时代4威力加强版hd攻略",
    "大航海时代4下载",
    "大航海时代4攻略",
    "KOEI航海游戏"
  ],
  authors: [{ name: "大航海时代4粉丝站" }],
  creator: "大航海时代4粉丝站",
  publisher: "大航海时代4粉丝站",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://www.uncharted-water.com"),
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://www.uncharted-water.com",
    siteName: "大航海时代4威力加强版HD下载站",
    title: "大航海时代4威力加强版HD下载 - 修改器/MOD/攻略大全",
    description: "大航海时代4威力加强版HD官方下载站，提供游戏下载、修改器、MOD、完整攻略等资源。",
  },
  twitter: {
    card: "summary_large_image",
    title: "大航海时代4威力加强版HD下载 - 修改器/MOD/攻略大全",
    description: "大航海时代4威力加强版HD官方下载站，提供游戏下载、修改器、MOD、完整攻略等资源。",
  },
  alternates: {
    canonical: "https://www.uncharted-water.com",
  },
  category: "游戏",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <head>
        <script charSet="UTF-8" id="LA_COLLECT" src="//sdk.51.la/js-sdk-pro.min.js"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `LA.init({id:"L21E3LAo75B3dtct",ck:"L21E3LAo75B3dtct",autoTrack:true,hashMode:true,screenRecord:true})`,
          }}
        />
      </head>
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
