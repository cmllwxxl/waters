import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>大航海时代4 威力加强版</h1>
          <p>
            扬帆起航，征服七海！体验经典航海策略游戏的魅力，
            在广阔的海洋上建立你的商业帝国，成为真正的海上霸主。
          </p>
          <div className="hero-buttons">
            <Link href="/download" className="btn btn-primary">
              立即下载
            </Link>
            <Link href="/guide" className="btn btn-secondary">
              查看攻略
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">游戏特色</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">🚢</div>
            <h3>海上贸易</h3>
            <p>
              在世界各地的港口之间进行贸易，购买低价商品，运往高价地区出售，
              积累财富，扩大你的商业版图。
            </p>
          </div>
          <div className="card">
            <div className="card-icon">⚔️</div>
            <h3>海战系统</h3>
            <p>
              与海盗和敌对势力展开激烈的海上战斗，运用战术智慧，
              指挥你的舰队取得胜利。
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🗺️</div>
            <h3>探索发现</h3>
            <p>
              探索未知的海域，发现新的港口和航线，
              寻找传说中的宝藏和神秘的遗迹。
            </p>
          </div>
          <div className="card">
            <div className="card-icon">👥</div>
            <h3>势力争霸</h3>
            <p>
              与其他航海家竞争海域的控制权，建立同盟或发动战争，
              最终统一七大海域。
            </p>
          </div>
        </div>
      </section>

      {/* Characters Section */}
      <section className="section">
        <h2 className="section-title">可选主角</h2>
        <div className="character-grid">
          <div className="character-card">
            <div className="character-avatar">🇵🇹</div>
            <h4>拉斐尔</h4>
            <div className="region">葡萄牙 · 里斯本</div>
            <p>年轻的贵族之子，为了寻找失踪的父亲而踏上航海之路。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🇪🇸</div>
            <h4>卡塔丽娜</h4>
            <div className="region">西班牙 · 塞维利亚</div>
            <p>西班牙海军女将，为了证明自己的实力而出海冒险。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🇬🇧</div>
            <h4>霍德拉姆</h4>
            <div className="region">英国 · 伦敦</div>
            <p>英国皇家海军军官，奉命开拓海外殖民地。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🇳🇱</div>
            <h4>约翰</h4>
            <div className="region">荷兰 · 阿姆斯特丹</div>
            <p>荷兰商人之子，立志成为世界最大的贸易商。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🇮🇹</div>
            <h4>保罗</h4>
            <div className="region">意大利 · 热那亚</div>
            <p>意大利冒险家，追寻马可波罗的足迹探索东方。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🇹🇷</div>
            <h4>伍丁</h4>
            <div className="region">奥斯曼 · 伊斯坦布尔</div>
            <p>奥斯曼帝国的海军将领，誓要称霸地中海。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">🌏</div>
            <h4>李华梅</h4>
            <div className="region">东亚 · 杭州</div>
            <p>明朝女海商，为了家族的荣耀而纵横四海。</p>
          </div>
        </div>
      </section>

      {/* PK Version Features */}
      <section className="section">
        <h2 className="section-title">威力加强版新增内容</h2>
        <div className="feature-list">
          <div className="feature-item">
            <span>新增李华梅作为可选主角</span>
          </div>
          <div className="feature-item">
            <span>新增东亚海域和多个港口</span>
          </div>
          <div className="feature-item">
            <span>新增船只类型和装备</span>
          </div>
          <div className="feature-item">
            <span>增强的海战系统</span>
          </div>
          <div className="feature-item">
            <span>更多的剧情事件</span>
          </div>
          <div className="feature-item">
            <span>新增伙伴角色</span>
          </div>
          <div className="feature-item">
            <span>优化的游戏平衡性</span>
          </div>
          <div className="feature-item">
            <span>支持更高分辨率</span>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section" style={{ textAlign: 'center' }}>
        <h2 className="section-title">准备好开始你的航海冒险了吗？</h2>
        <p style={{ color: '#b8c5d6', marginBottom: '30px', fontSize: '1.1rem' }}>
          下载游戏，选择你的主角，开启属于你的大航海时代！
        </p>
        <Link href="/download" className="btn btn-primary">
          免费下载游戏
        </Link>
      </section>
    </>
  );
}
