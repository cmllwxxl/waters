"use client";

import { useState } from "react";

const qaData = [
  {
    question: "游戏无法启动怎么办？",
    answer:
      '首先尝试以管理员身份运行游戏。如果仍然无法启动，右键点击游戏程序，选择「属性」->「兼容性」，勾选「以兼容模式运行这个程序」，选择 Windows XP SP3。另外，确保已安装 DirectX 9.0c 运行库。'
  },
  {
    question: "游戏画面显示不正常或花屏怎么办？",
    answer:
      "这通常是显卡兼容性问题。尝试以下解决方案：1) 更新显卡驱动程序；2) 在游戏设置中降低分辨率或关闭硬件加速；3) 设置兼容模式运行；4) 尝试使用窗口模式运行游戏。"
  },
  {
    question: "游戏没有声音怎么办？",
    answer:
      "检查系统音量设置和游戏内音量设置。确保音频设备正常工作。如果问题仍然存在，尝试安装或更新 DirectX 音频组件。部分情况下，以兼容模式运行可以解决音频问题。"
  },
  {
    question: "存档文件在哪里？如何备份？",
    answer:
      "存档文件通常位于游戏安装目录下的 SAVE 文件夹中。备份时只需复制整个 SAVE 文件夹到安全位置即可。恢复存档时，将备份的 SAVE 文件夹复制回游戏目录覆盖即可。"
  },
  {
    question: "威力加强版和普通版有什么区别？",
    answer:
      "威力加强版（PK版）相比普通版增加了：1) 新主角李华梅；2) 东亚海域和多个新港口；3) 新的船只类型和装备；4) 更多剧情事件和伙伴角色；5) 增强的海战系统；6) 优化的游戏平衡性。"
  },
  {
    question: "如何快速赚钱？",
    answer:
      "初期推荐在母港附近进行短途贸易，熟悉各港口的特产商品。中期可以开辟长途贸易航线，如欧洲到东南亚的香料贸易。后期可以通过投资港口获得稳定收入，或者通过海战俘获敌船出售。详细攻略请查看攻略页面。"
  },
  {
    question: "如何招募更多船员？",
    answer:
      "船员可以在各港口的酒馆招募。不同港口可招募的船员数量和质量不同。大型港口通常有更多船员可供招募。另外，完成某些任务或剧情事件也可以获得特殊船员。"
  },
  {
    question: "如何提高与NPC的好感度？",
    answer:
      "与NPC对话、赠送礼物、完成其委托的任务都可以提高好感度。不同NPC喜欢的礼物不同，可以通过对话了解其喜好。好感度达到一定程度后可以触发特殊剧情。"
  },
  {
    question: "游戏中如何存档？",
    answer:
      "在港口时，进入酒馆或自己的据点可以进行存档。海上航行时无法存档，所以出海前建议先存档。游戏支持多个存档位，建议定期轮换存档以防意外。"
  },
  {
    question: "如何统一海域？",
    answer:
      "统一海域需要在该海域获得最高的势力值。提高势力值的方法包括：投资港口提高占有率、完成公会任务、击败敌对势力、占领敌方据点等。当势力值达到一定程度后会触发霸主争夺战，获胜即可统一该海域。"
  },
  {
    question: "下载的文件解压失败怎么办？",
    answer:
      "解压失败通常是因为：1) 下载不完整，请重新下载；2) 解压软件版本过旧，请更新到最新版本的 WinRAR 或 7-Zip；3) 文件被杀毒软件隔离，请检查杀毒软件的隔离区。"
  },
  {
    question: "游戏运行时提示缺少DLL文件怎么办？",
    answer:
      "这通常是缺少运行库导致的。请安装以下运行库：1) DirectX 9.0c 最终用户运行库；2) Microsoft Visual C++ 运行库（2005-2019版本）。这些运行库可以在微软官网免费下载。"
  }
];

export default function QAPage() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div className="section">
      <h1 className="section-title">常见问题</h1>

      <p
        style={{
          textAlign: "center",
          color: "#b8c5d6",
          marginBottom: "40px",
          maxWidth: "600px",
          margin: "0 auto 40px"
        }}
      >
        这里收集了玩家们最常遇到的问题和解决方案。
        点击问题可以展开查看详细答案。
      </p>

      <div className="qa-list">
        {qaData.map((item, index) => (
          <div
            key={index}
            className={`qa-item ${openItems.includes(index) ? "open" : ""}`}
          >
            <div className="qa-question" onClick={() => toggleItem(index)}>
              <h4>{item.question}</h4>
              <span className="qa-toggle">+</span>
            </div>
            <div className="qa-answer">
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Contact Section */}
      <div style={{ marginTop: "60px", textAlign: "center" }}>
        <h2 className="section-title">没有找到答案？</h2>
        <p style={{ color: "#b8c5d6", marginBottom: "30px" }}>
          如果以上问题没有解决您的疑问，可以通过以下方式获取帮助
        </p>
        <div className="card-grid" style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div className="card" style={{ textAlign: "center" }}>
            <div className="card-icon">💬</div>
            <h3>加入社区</h3>
            <p>加入玩家交流群，与其他玩家讨论游戏心得和问题</p>
          </div>
          <div className="card" style={{ textAlign: "center" }}>
            <div className="card-icon">📧</div>
            <h3>联系我们</h3>
            <p>发送邮件描述您的问题，我们会尽快回复</p>
          </div>
        </div>
      </div>

      {/* Tips Section */}
      <div style={{ marginTop: "60px" }}>
        <h2 className="section-title">温馨提示</h2>
        <div className="guide-content">
          <h3>游戏小贴士</h3>
          <ul>
            <li>遇到问题时先尝试重启游戏或电脑</li>
            <li>保持游戏和系统的更新</li>
            <li>定期备份存档文件</li>
            <li>关闭不必要的后台程序可以提高游戏性能</li>
            <li>如果使用笔记本电脑，确保使用独立显卡运行游戏</li>
            <li>遇到严重bug时可以尝试重新安装游戏</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
