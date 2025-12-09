import Link from "next/link";
import { notFound } from "next/navigation";
import { articles } from "../data";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    return { title: "文章未找到" };
  }

  return {
    title: `${article.title} - 大航海时代4威力加强版攻略`,
    description: article.description,
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = articles.find((a) => a.slug === slug);

  if (!article) {
    notFound();
  }

  // 获取当前文章索引
  const currentIndex = articles.findIndex((a) => a.slug === slug);
  const prevArticle = currentIndex > 0 ? articles[currentIndex - 1] : null;
  const nextArticle = currentIndex < articles.length - 1 ? articles[currentIndex + 1] : null;

  // 简单的 Markdown 渲染
  const renderContent = (content: string) => {
    const lines = content.trim().split("\n");
    const elements: JSX.Element[] = [];
    let inTable = false;
    let tableRows: string[] = [];
    let inCodeBlock = false;
    let codeLines: string[] = [];

    const processLine = (line: string, index: number) => {
      // 代码块
      if (line.startsWith("```")) {
        if (inCodeBlock) {
          elements.push(
            <pre key={index} className="code-block">
              <code>{codeLines.join("\n")}</code>
            </pre>
          );
          codeLines = [];
          inCodeBlock = false;
        } else {
          inCodeBlock = true;
        }
        return;
      }

      if (inCodeBlock) {
        codeLines.push(line);
        return;
      }

      // 表格
      if (line.startsWith("|")) {
        if (!inTable) {
          inTable = true;
          tableRows = [];
        }
        tableRows.push(line);
        return;
      } else if (inTable) {
        elements.push(renderTable(tableRows, elements.length));
        tableRows = [];
        inTable = false;
      }

      // 标题
      if (line.startsWith("## ")) {
        elements.push(
          <h2 key={index} className="article-h2">
            <span className="article-h2-icon">⚓</span>
            {line.slice(3)}
          </h2>
        );
        return;
      }

      if (line.startsWith("### ")) {
        elements.push(
          <h3 key={index} className="article-h3">
            {line.slice(4)}
          </h3>
        );
        return;
      }

      // 列表
      if (line.startsWith("- ")) {
        elements.push(
          <li key={index} className="article-li">
            {line.slice(2)}
          </li>
        );
        return;
      }

      if (/^\d+\.\s/.test(line)) {
        elements.push(
          <li key={index} className="article-li article-li-numbered">
            {line.replace(/^\d+\.\s/, "")}
          </li>
        );
        return;
      }

      // 图片
      if (line.startsWith("![")) {
        const match = line.match(/!\[(.*?)\]\((.*?)\)/);
        if (match) {
          elements.push(
            <figure key={index} className="article-figure">
              <img src={match[2]} alt={match[1]} className="article-image" />
              {match[1] && <figcaption className="article-figcaption">{match[1]}</figcaption>}
            </figure>
          );
          return;
        }
      }

      // 粗体
      if (line.includes("**")) {
        const parts = line.split(/\*\*(.*?)\*\*/g);
        elements.push(
          <p key={index} className="article-p">
            {parts.map((part, i) =>
              i % 2 === 1 ? <strong key={i}>{part}</strong> : part
            )}
          </p>
        );
        return;
      }

      // 普通段落
      if (line.trim()) {
        elements.push(
          <p key={index} className="article-p">
            {line}
          </p>
        );
      }
    };

    const renderTable = (rows: string[], key: number) => {
      const headerRow = rows[0];
      const dataRows = rows.slice(2);

      const headers = headerRow
        .split("|")
        .filter((cell) => cell.trim())
        .map((cell) => cell.trim());

      return (
        <div key={key} className="table-wrapper">
          <table className="article-table">
            <thead>
              <tr>
                {headers.map((header, i) => (
                  <th key={i}>{header}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {dataRows.map((row, rowIndex) => {
                const cells = row
                  .split("|")
                  .filter((cell) => cell.trim())
                  .map((cell) => cell.trim());
                return (
                  <tr key={rowIndex}>
                    {cells.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      );
    };

    lines.forEach((line, index) => processLine(line, index));

    if (inTable && tableRows.length > 0) {
      elements.push(renderTable(tableRows, elements.length));
    }

    return elements;
  };

  // 获取相关文章
  const relatedArticles = articles
    .filter((a) => a.slug !== slug && a.category === article.category)
    .slice(0, 3);

  // 获取分类图标
  const getCategoryIcon = (category: string) => {
    const icons: Record<string, string> = {
      "主角攻略": "🎭",
      "伙伴攻略": "👥",
      "收集攻略": "💎",
      "主线攻略": "👑",
      "新手攻略": "📖",
      "贸易攻略": "💰",
      "工具教程": "🔧",
    };
    return icons[category] || "📄";
  };

  return (
    <div className="article-page">
      {/* 文章头部背景 */}
      <div className="article-hero">
        <div className="article-hero-bg"></div>
        <div className="article-hero-content">
          <nav className="breadcrumb">
            <Link href="/">首页</Link>
            <span className="breadcrumb-sep">/</span>
            <Link href="/guide">攻略</Link>
            <span className="breadcrumb-sep">/</span>
            <span>{article.category}</span>
          </nav>

          <div className="article-hero-meta">
            <span className="article-category-badge">
              <span className="category-icon">{getCategoryIcon(article.category)}</span>
              {article.category}
            </span>
            <time className="article-date-badge">{article.date}</time>
          </div>

          <h1 className="article-hero-title">{article.title}</h1>
          <p className="article-hero-desc">{article.description}</p>
        </div>
      </div>

      <div className="section">
        {/* 文章主体 */}
        <div className="article-layout">
          {/* 侧边目录（装饰性） */}
          <aside className="article-sidebar">
            <div className="article-toc">
              <h4 className="toc-title">快速导航</h4>
              <div className="toc-links">
                <Link href="/guide" className="toc-link">
                  <span className="toc-icon">📚</span>
                  攻略列表
                </Link>
                <Link href="/download" className="toc-link">
                  <span className="toc-icon">💾</span>
                  游戏下载
                </Link>
                <Link href="/qa" className="toc-link">
                  <span className="toc-icon">❓</span>
                  常见问题
                </Link>
              </div>
            </div>

            <div className="article-share">
              <h4 className="toc-title">分享文章</h4>
              <div className="share-buttons">
                <button className="share-btn" title="复制链接">📋</button>
                <button className="share-btn" title="分享到微博">📢</button>
                <button className="share-btn" title="收藏">⭐</button>
              </div>
            </div>
          </aside>

          {/* 文章内容 */}
          <article className="article-main">
            <div className="article-content">
              {renderContent(article.content)}
            </div>

            {/* 文章底部信息 */}
            <div className="article-footer">
              <div className="article-tags">
                <span className="tag">大航海时代4</span>
                <span className="tag">威力加强版</span>
                <span className="tag">{article.category}</span>
              </div>
              <div className="article-update">
                最后更新：{article.date}
              </div>
            </div>
          </article>
        </div>

        {/* 上一篇/下一篇导航 */}
        <div className="article-nav">
          {prevArticle ? (
            <Link href={`/guide/${prevArticle.slug}`} className="article-nav-item prev">
              <span className="nav-label">上一篇</span>
              <span className="nav-title">{prevArticle.title}</span>
            </Link>
          ) : (
            <div className="article-nav-item empty"></div>
          )}
          {nextArticle ? (
            <Link href={`/guide/${nextArticle.slug}`} className="article-nav-item next">
              <span className="nav-label">下一篇</span>
              <span className="nav-title">{nextArticle.title}</span>
            </Link>
          ) : (
            <div className="article-nav-item empty"></div>
          )}
        </div>

        {/* 相关文章 */}
        {relatedArticles.length > 0 && (
          <div className="related-articles">
            <h2 className="section-title">相关攻略推荐</h2>
            <div className="card-grid">
              {relatedArticles.map((related) => (
                <Link
                  key={related.slug}
                  href={`/guide/${related.slug}`}
                  className="related-card"
                >
                  <div className="related-card-icon">{getCategoryIcon(related.category)}</div>
                  <div className="related-card-content">
                    <span className="article-category">{related.category}</span>
                    <h3>{related.title}</h3>
                    <p>{related.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* 返回按钮 */}
        <div className="article-actions">
          <Link href="/guide" className="btn btn-secondary">
            <span>←</span> 返回攻略列表
          </Link>
          <Link href="/" className="btn btn-primary">
            返回首页
          </Link>
        </div>
      </div>
    </div>
  );
}
