import Link from "next/link";

export default function DownloadPage() {
  return (
    <div className="section">
      <h1 className="section-title">游戏下载</h1>

      <div className="download-card">
        <h2>大航海时代4 威力加强版</h2>
        <p style={{ color: "#b8c5d6", marginBottom: "20px" }}>
          经典航海策略游戏，完整中文版
        </p>

        <div className="download-info">
          <div className="download-info-item">
            <span className="label">游戏版本</span>
            <span className="value">威力加强版 (PK)</span>
          </div>
          <div className="download-info-item">
            <span className="label">文件大小</span>
            <span className="value">约 500 MB</span>
          </div>
          <div className="download-info-item">
            <span className="label">游戏语言</span>
            <span className="value">简体中文</span>
          </div>
          <div className="download-info-item">
            <span className="label">运行平台</span>
            <span className="value">Windows</span>
          </div>
        </div>

        <a href="#" className="btn btn-primary" style={{ width: "100%" }}>
          百度网盘下载
        </a>
        <p style={{ color: "#8899aa", fontSize: "0.9rem", marginTop: "15px" }}>
          提取码: xxxx
        </p>

        <div style={{ marginTop: "20px", display: "flex", gap: "15px", justifyContent: "center" }}>
          <a href="#" className="btn btn-secondary">
            备用下载 1
          </a>
          <a href="#" className="btn btn-secondary">
            备用下载 2
          </a>
        </div>
      </div>

      {/* System Requirements */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">系统要求</h2>
        <div className="card-grid">
          <div className="card">
            <h3>最低配置</h3>
            <div style={{ color: "#b8c5d6", lineHeight: "2" }}>
              <p><strong>操作系统：</strong>Windows XP / 7 / 10 / 11</p>
              <p><strong>处理器：</strong>Pentium III 500MHz</p>
              <p><strong>内存：</strong>256 MB RAM</p>
              <p><strong>显卡：</strong>支持 DirectX 的显卡</p>
              <p><strong>存储空间：</strong>1 GB 可用空间</p>
            </div>
          </div>
          <div className="card">
            <h3>推荐配置</h3>
            <div style={{ color: "#b8c5d6", lineHeight: "2" }}>
              <p><strong>操作系统：</strong>Windows 10 / 11</p>
              <p><strong>处理器：</strong>任意现代处理器</p>
              <p><strong>内存：</strong>1 GB RAM</p>
              <p><strong>显卡：</strong>任意独立显卡</p>
              <p><strong>存储空间：</strong>2 GB 可用空间</p>
            </div>
          </div>
        </div>
      </div>

      {/* Installation Guide */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">安装说明</h2>
        <div className="guide-content">
          <h3>安装步骤</h3>
          <ul>
            <li>下载游戏压缩包并解压到任意目录</li>
            <li>运行目录中的 "Setup.exe" 或 "安装.exe" 进行安装</li>
            <li>按照安装向导完成安装过程</li>
            <li>安装完成后，运行桌面快捷方式或安装目录中的游戏程序</li>
            <li>如遇到兼容性问题，右键游戏程序选择"以管理员身份运行"</li>
            <li>Windows 10/11 用户可尝试设置兼容模式为 Windows XP SP3</li>
          </ul>
        </div>
      </div>

      {/* Notes */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">注意事项</h2>
        <div className="card-grid">
          <div className="card">
            <div className="card-icon">⚠️</div>
            <h3>免责声明</h3>
            <p>
              本站提供的游戏资源仅供学习交流使用，请于下载后24小时内删除。
              如果喜欢本游戏，请支持正版。
            </p>
          </div>
          <div className="card">
            <div className="card-icon">🛡️</div>
            <h3>安全提示</h3>
            <p>
              下载前请确保您的杀毒软件已更新。部分杀毒软件可能会误报，
              请将游戏目录添加到信任列表。
            </p>
          </div>
          <div className="card">
            <div className="card-icon">💾</div>
            <h3>存档位置</h3>
            <p>
              游戏存档通常保存在游戏安装目录的 SAVE 文件夹中，
              重装系统前请备份此文件夹。
            </p>
          </div>
        </div>
      </div>

      {/* Help Section */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 className="section-title">遇到问题？</h2>
        <p style={{ color: "#b8c5d6", marginBottom: "20px" }}>
          如果在下载或安装过程中遇到任何问题，请查看常见问题解答
        </p>
        <Link href="/qa" className="btn btn-secondary">
          查看常见问题
        </Link>
      </div>
    </div>
  );
}
