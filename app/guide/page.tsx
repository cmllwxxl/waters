"use client";

import { useState } from "react";
import Link from "next/link";
import { articles, categories } from "./data";

const guideData = [
  {
    id: "beginner",
    title: "新手入门",
    content: {
      intro: "刚开始游戏时，建议先熟悉基本操作和游戏机制。以下是一些新手必知的要点：",
      items: [
        "选择主角后，先在母港熟悉各个设施的功能",
        "酒馆可以招募船员和获取情报",
        "造船厂可以购买、改造和修理船只",
        "交易所是进行商品买卖的地方",
        "银行可以存取金钱和贷款",
        "初期资金有限，建议先做短途贸易积累资本",
        "注意船只的耐久度，及时修理避免沉船",
        "招募足够的船员，否则无法正常航行"
      ]
    }
  },
  {
    id: "trade",
    title: "贸易攻略",
    content: {
      intro: "贸易是游戏中最稳定的赚钱方式。掌握贸易技巧可以快速积累财富：",
      items: [
        "了解各港口的特产商品，低买高卖是基本原则",
        "地中海地区：艺术品、玻璃制品价格较高",
        "北海地区：毛皮、琥珀是热门商品",
        "新大陆：金银、可可、烟草利润丰厚",
        "东南亚：香料是最赚钱的商品之一",
        "东亚：丝绸、瓷器、茶叶价值不菲",
        "建立贸易航线，定期往返可获得稳定收入",
        "投资港口可以提高该港口的商品产量和种类"
      ]
    }
  },
  {
    id: "battle",
    title: "海战技巧",
    content: {
      intro: "海战是游戏的重要组成部分，掌握战斗技巧才能在海上立于不败之地：",
      items: [
        "战斗前确保船只状态良好，弹药充足",
        "利用风向优势，顺风时机动性更强",
        "炮击战适合火力强大的战舰",
        "接舷战适合船员数量多、白刃战能力强的情况",
        "撞击战可以对敌船造成大量伤害",
        "合理分配船员到各个战斗岗位",
        "旗舰被击沉则战斗失败，要保护好旗舰",
        "俘获敌船可以扩充舰队或出售获利"
      ]
    }
  },
  {
    id: "fleet",
    title: "舰队管理",
    content: {
      intro: "合理管理舰队是成功的关键。不同类型的船只有不同的用途：",
      items: [
        "商船：载货量大，适合贸易",
        "战舰：火力强，适合战斗",
        "快船：速度快，适合探索和传递消息",
        "舰队最多可以有5艘船",
        "根据任务需要调整舰队配置",
        "定期升级和改造船只",
        "船只可以装备不同的大炮和配件",
        "保持足够的补给品，避免在海上断粮"
      ]
    }
  },
  {
    id: "territory",
    title: "势力扩张",
    content: {
      intro: "统一七大海域是游戏的最终目标。以下是扩张势力的策略：",
      items: [
        "提高港口占有率可以增加势力值",
        "投资港口、完成委托任务都能提高占有率",
        "与其他势力结盟可以共同对抗强敌",
        "击败敌对势力的舰队可以削弱其实力",
        "占领敌方据点可以快速扩张",
        "注意维护与各国的外交关系",
        "霸主争夺战是决定海域归属的关键战役",
        "统一一个海域后可以获得该海域的特殊奖励"
      ]
    }
  },
  {
    id: "characters",
    title: "主角攻略",
    content: {
      intro: "每个主角都有独特的剧情和优势，选择适合自己风格的主角：",
      items: [
        "拉斐尔：剧情丰富，适合体验完整故事",
        "卡塔丽娜：战斗能力强，适合喜欢海战的玩家",
        "霍德拉姆：初始资源较多，适合新手",
        "约翰：贸易天赋高，适合经商路线",
        "保罗：探索能力强，适合喜欢冒险的玩家",
        "伍丁：地中海起步，战略位置优越",
        "李华梅（PK版新增）：东亚起步，独特的东方剧情"
      ]
    }
  },
  {
    id: "tips",
    title: "实用技巧",
    content: {
      intro: "一些实用的游戏技巧可以让你的航海之旅更加顺利：",
      items: [
        "存档要勤，避免意外损失",
        "遇到海盗可以选择交保护费避免战斗",
        "发现物可以在收藏家处出售获得高价",
        "完成公会任务可以获得声望和奖励",
        "酒馆的情报很重要，经常去打听消息",
        "某些特殊事件只在特定时间触发",
        "培养得力的副官可以提高舰队效率",
        "地图上的问号标记可能是宝藏或遗迹"
      ]
    }
  }
];

export default function GuidePage() {
  const [activeGuide, setActiveGuide] = useState("beginner");
  const [activeCategory, setActiveCategory] = useState("全部");

  const currentGuide = guideData.find((g) => g.id === activeGuide);

  const filteredArticles = activeCategory === "全部"
    ? articles
    : articles.filter((a) => a.category === activeCategory);

  return (
    <div className="section">
      <h1 className="section-title">游戏攻略</h1>
      <p style={{ textAlign: "center", color: "#b8c5d6", marginBottom: "30px" }}>
        大航海时代4威力加强版HD完整攻略，包含新手入门、角色攻略、贸易指南等
      </p>

      {/* 快速攻略 */}
      <div className="guide-nav">
        {guideData.map((guide) => (
          <button
            key={guide.id}
            className={`guide-nav-btn ${activeGuide === guide.id ? "active" : ""}`}
            onClick={() => setActiveGuide(guide.id)}
          >
            {guide.title}
          </button>
        ))}
      </div>

      {currentGuide && (
        <div className="guide-content">
          <h3>{currentGuide.title}</h3>
          <p>{currentGuide.content.intro}</p>
          <ul>
            {currentGuide.content.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}

      {/* 攻略文章列表 */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">详细攻略文章</h2>

        {/* 分类筛选 */}
        <div className="guide-nav" style={{ marginBottom: "30px" }}>
          {categories.map((category) => (
            <button
              key={category}
              className={`guide-nav-btn ${activeCategory === category ? "active" : ""}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 文章列表 */}
        <div className="article-list">
          {filteredArticles.map((article) => (
            <Link
              key={article.slug}
              href={`/guide/${article.slug}`}
              className="article-card"
            >
              <div className="article-card-content">
                <span className="article-category">{article.category}</span>
                <h3 className="article-card-title">{article.title}</h3>
                <p className="article-card-desc">{article.description}</p>
                <time className="article-card-date">{article.date}</time>
              </div>
              <span className="article-card-arrow">→</span>
            </Link>
          ))}
        </div>
      </div>

      {/* 七大海域介绍 */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">七大海域介绍</h2>
        <div className="card-grid">
          <div className="card">
            <h3>地中海</h3>
            <p>
              欧洲文明的摇篮，连接欧洲、非洲和亚洲。主要港口包括威尼斯、
              热那亚、亚历山大等。盛产艺术品、玻璃制品和地毯。
            </p>
          </div>
          <div className="card">
            <h3>北海</h3>
            <p>
              北欧的贸易中心，气候寒冷但资源丰富。主要港口有伦敦、
              阿姆斯特丹、汉堡等。盛产毛皮、琥珀和木材。
            </p>
          </div>
          <div className="card">
            <h3>西非</h3>
            <p>
              神秘的非洲大陆西海岸，拥有丰富的自然资源。
              主要港口有圣乔治、绿角等。盛产黄金、象牙。
            </p>
          </div>
          <div className="card">
            <h3>加勒比海</h3>
            <p>
              新大陆的门户，海盗横行的危险海域。主要港口有哈瓦那、
              波多贝罗等。盛产金银、可可、烟草。
            </p>
          </div>
          <div className="card">
            <h3>印度洋</h3>
            <p>
              连接东西方的重要航道，贸易繁荣。主要港口有果阿、
              卡利卡特等。盛产香料、宝石、棉布。
            </p>
          </div>
          <div className="card">
            <h3>东南亚</h3>
            <p>
              香料群岛所在地，是香料贸易的核心区域。主要港口有马六甲、
              巴达维亚等。盛产丁香、肉豆蔻等珍贵香料。
            </p>
          </div>
          <div className="card">
            <h3>东亚</h3>
            <p>
              古老东方文明的所在地，威力加强版新增海域。主要港口有杭州、
              长崎、釜山等。盛产丝绸、瓷器、茶叶。
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
