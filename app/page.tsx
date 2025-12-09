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
            <div className="character-avatar">
              <img src="/images/characters/rafael.png" alt="拉斐尔" />
            </div>
            <h4>拉斐尔·卡斯特路</h4>
            <div className="region">葡萄牙 · 里斯本</div>
            <p>对昔日从里斯本展开旅程的众多航海者充满向往，决定出海冒险。公会委托报酬更多，军事投资只需八成。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/lilu.png" alt="丽璐" />
            </div>
            <h4>丽璐·阿歌特</h4>
            <div className="region">荷兰 · 阿姆斯特丹</div>
            <p>天生活泼开朗不服输，正面对抗世界富商。交易品的卖价比其他主角高5%。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/hedram.png" alt="赫德拉姆" />
            </div>
            <h4>赫德拉姆·柏格斯统</h4>
            <div className="region">瑞典 · 斯德哥尔摩</div>
            <p>为了让预算拮据的自国舰队登上世界第一而挺身而出。可拖航捕获船，瑞典会发给国家奖金。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/maria.png" alt="李华梅" />
            </div>
            <h4>玛丽亚·华梅·李</h4>
            <div className="region">东亚 · 杭州</div>
            <p>为保护在倭寇欺凌下苦不堪言的百姓，无视明朝锁国政策，率领私人舰队征战的女提督。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/kyotaro.png" alt="杏太郎" />
            </div>
            <h4>杏太郎·佐伯</h4>
            <div className="region">日本 · 九州</div>
            <p>九州某豪族继承人，一族遭敌人袭击，父亲切腹。穷途末路之际，划着小渔船出海。可拖航捕获船。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/wooding.png" alt="伍丁" />
            </div>
            <h4>亚伯拉罕·伍丁</h4>
            <div className="region">阿拉伯 · 巴士拉</div>
            <p>阿拉伯大富豪的后嗣，表面上基于收集古董的嗜好，实则为探寻身世之谜而展开漫漫长旅。</p>
          </div>
          <div className="character-card">
            <div className="character-avatar">
              <img src="/images/characters/tiya.png" alt="蒂雅" />
            </div>
            <h4>蒂雅·瓦曼·恰斯卡</h4>
            <div className="region">南美 · 新大陆</div>
            <p>拥有昔日在印加帝国雄霸一方的王族血统的混血儿，最初担任埃斯康特军的翻译。</p>
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
