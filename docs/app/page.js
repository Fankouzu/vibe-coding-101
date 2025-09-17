export default function Home() {
  return (
    <div className="text-slate-800">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-900">架构范式指南</div>
          <div className="hidden md:flex space-x-8 text-sm font-semibold">
            <a href="#web2" className="nav-link text-slate-600">Web 2.0 剖析</a>
            <a href="#web3" className="nav-link text-slate-600">Web 3.0 架构</a>
            <a href="#comparison" className="nav-link text-slate-600">架构对比</a>
            <a href="#takeaways" className="nav-link text-slate-600">开发者启示</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <section className="text-center my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">架构范式的碰撞</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">一份面向开发者的Web 2.0与Web3.0基础设施指南</p>
        </section>

        <section id="web2" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第一节 中心化网络（Web 2.0）的剖析</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">1.1 核心架构：B/S 与 C/S 模型</h3>
            <p className="mb-6 text-slate-600">传统互联网应用的核心是三层架构，它将功能划分为表现层、应用层和数据层，实现了关注点分离，提高了可维护性。</p>
            <div className="diagram-box text-center">
              <div className="grid md:grid-cols-5 items-center gap-4">
                <div className="col-span-1 p-4 bg-sky-100 rounded-lg">
                  <div className="font-bold text-sky-800">用户设备</div>
                  <div className="text-sm text-sky-600">(浏览器 / 手机App / 桌面App)</div>
                </div>
                <div className="col-span-1 text-2xl text-slate-400 font-mono flex justify-center items-center">→</div>
                <div className="col-span-3 p-4 bg-slate-100 rounded-lg">
                  <div className="font-bold text-slate-800">中心化服务器集群</div>
                  <div className="mt-4 flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-3 bg-indigo-100 rounded-md">
                      <div className="font-semibold text-indigo-800">应用/逻辑层</div>
                      <div className="text-sm text-indigo-600">(Node.js, Python, Java)</div>
                    </div>
                    <div className="flex-1 p-3 bg-emerald-100 rounded-md">
                      <div className="font-semibold text-emerald-800">数据层</div>
                      <div className="text-sm text-emerald-600">(MySQL, PostgreSQL)</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                <p><span className="font-semibold">DNS</span>: 将域名解析为服务器IP地址，是访问的第一步。</p>
                <p><span className="font-semibold">CDN</span>: 在全球缓存内容，降低延迟，提升性能和安全性。</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <h4 className="font-bold text-amber-800">经济模型：提供商付费原则</h4>
              <p className="mt-2 text-amber-700">服务提供商承担所有基础设施成本（服务器、带宽、人力）。为了盈利，平台通过广告、用户数据分析或订阅服务变现。在这种模式下，用户更像是"产品"，而非数据的所有者。</p>
            </div>
          </div>
        </section>

        <section id="web3" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第二节 去中心化网络（Web3.0）的架构</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">2.1 核心架构：DApp 模型</h3>
            <p className="mb-6 text-slate-600">Web3.0应用（DApp）的后端逻辑（智能合约）被部署到公共区块链上，构成一个由所有参与者共同运行的"世界计算机"。</p>
            <div className="diagram-box text-center">
              <div className="grid md:grid-cols-5 items-center gap-4">
                <div className="col-span-1 p-4 bg-sky-100 rounded-lg">
                  <div className="font-bold text-sky-800">用户</div>
                  <div className="text-sm text-sky-600">通过钱包（如MetaMask）交互</div>
                </div>
                <div className="col-span-1 text-2xl text-slate-400 font-mono flex justify-center items-center">→</div>
                <div className="col-span-1 p-4 bg-indigo-100 rounded-lg">
                  <div className="font-bold text-indigo-800">前端 DApp</div>
                  <div className="text-sm text-indigo-600">(React + ethers.js)</div>
                </div>
                <div className="col-span-1 text-2xl text-slate-400 font-mono flex justify-center items-center">→</div>
                <div className="col-span-1 p-4 bg-purple-100 rounded-lg">
                  <div className="font-bold text-purple-800">区块链网络</div>
                  <div className="text-sm text-purple-600">(以太坊, P2P节点)</div>
                </div>
              </div>
              <div className="arrow"></div>
              <div className="p-4 bg-emerald-100 rounded-lg inline-block">
                <div className="font-bold text-emerald-800">智能合约 / EVM</div>
                <div className="text-sm text-emerald-600">不可变的链上业务逻辑和状态</div>
              </div>
              <div className="mt-6 text-sm text-slate-500">
                <p><span className="font-semibold">ENS</span>: 去中心化域名服务，将名称映射到链上资源。</p>
                <p><span className="font-semibold">共识机制 (PoW/PoS)</span>: 保障网络安全和状态一致性。</p>
              </div>
            </div>
            <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-400 rounded-r-lg">
              <h4 className="font-bold text-teal-800">经济模型：用户付费原则</h4>
              <p className="mt-2 text-teal-700">用户通过支付"燃料费"（Gas Fees）来为每一次计算和存储操作付费。这笔费用补偿了网络验证者的资源消耗，并防止网络被滥用。这种模式从根本上改变了商业逻辑，迫使项目创造出用户愿意直接为其付费的核心价值。</p>
            </div>
          </div>
        </section>

        <section id="comparison" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第三节 多维度架构对比</h2>
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
              <h3 className="text-xl font-bold mb-4">3.1 表1：基础原则与信任模型</h3>
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="table-header">
                    <th className="p-3 font-semibold">特性</th>
                    <th className="p-3 font-semibold">Web 2.0 (中心化)</th>
                    <th className="p-3 font-semibold">Web 3.0 (去中心化)</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>信任模型</strong></td><td className="p-3">信任某个中心化实体（公司、平台）</td><td className="p-3">信任代码、密码学和经济激励</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>数据所有权</strong></td><td className="p-3">平台拥有并控制用户数据</td><td className="p-3">用户通过私钥拥有并控制自身数据</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>权威来源</strong></td><td className="p-3">中心化的单一控制点</td><td className="p-3">分布式的网络共识</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>抗审查性</strong></td><td className="p-3">可被平台或政府审查和屏蔽</td><td className="p-3">抗审查，无单实体能阻止有效交易</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>透明度</strong></td><td className="p-3">不透明，后端逻辑是黑箱</td><td className="p-3">透明，所有逻辑和状态都在链上公开可查</td></tr>
                  <tr><td className="p-3"><strong>许可模型</strong></td><td className="p-3">需许可，平台可随时撤销访问权限</td><td className="p-3">无需许可，任何人都可以与协议交互</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
              <h3 className="text-xl font-bold mb-4">3.2 表2：技术栈全景对比</h3>
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="table-header">
                    <th className="p-3 font-semibold">层次</th>
                    <th className="p-3 font-semibold">Web 2.0 实现</th>
                    <th className="p-3 font-semibold">Web 3.0 实现</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>客户端/前端</strong></td><td className="p-3">网页/移动App (React, Swift)</td><td className="p-3">网页App + 钱包连接器 (React + ethers.js)</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>业务逻辑</strong></td><td className="p-3">服务器端代码 (Node.js, Python)</td><td className="p-3">智能合约 (Solidity) 运行在EVM上</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>状态与数据存储</strong></td><td className="p-3">中心化数据库 (SQL, NoSQL)</td><td className="p-3">链上Storage (昂贵); 链下IPFS (大文件)</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>身份与认证</strong></td><td className="p-3">用户名/密码, OAuth</td><td className="p-3">钱包地址, 消息签名, ENS</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>域名解析</strong></td><td className="p-3">DNS (中心化)</td><td className="p-3">ENS (去中心化)</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>网络与通信</strong></td><td className="p-3">客户端-服务器 (HTTP/S)</td><td className="p-3">对等网络 (P2P)</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>支付网关</strong></td><td className="p-3">Stripe, PayPal</td><td className="p-3">直接通过钱包交互</td></tr>
                  <tr><td className="p-3"><strong>部署与更新</strong></td><td className="p-3">CI/CD部署 (可变，易于更新)</td><td className="p-3">不可变的合约部署 (升级需代理模式)</td></tr>
                </tbody>
              </table>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
              <h3 className="text-xl font-bold mb-4">3.3 表3：运营与经济现实</h3>
              <table className="w-full min-w-[600px] border-collapse text-left">
                <thead>
                  <tr className="table-header">
                    <th className="p-3 font-semibold">方面</th>
                    <th className="p-3 font-semibold">Web 2.0</th>
                    <th className="p-3 font-semibold">Web 3.0</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>主要成本中心</strong></td><td className="p-3"><strong>提供商</strong>: 服务器、带宽、CDN</td><td className="p-3"><strong>用户</strong>: Gas费; <strong>开发者</strong>: 部署成本</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>成本结构</strong></td><td className="p-3">可预测的、周期性的月度费用</td><td className="p-3">不稳定的、按次计费的费用</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>性能</strong></td><td className="p-3">高吞吐量，低延迟</td><td className="p-3">低吞吐量，高延迟</td></tr>
                  <tr className="border-b border-slate-200"><td className="p-3"><strong>可扩展性</strong></td><td className="p-3">水平/垂直扩展 (增加服务器)</td><td className="p-3">Layer-2解决方案, 分片</td></tr>
                  <tr><td className="p-3"><strong>失败模式</strong></td><td className="p-3">服务器宕机, DDoS攻击</td><td className="p-3">51%攻击, 智能合约漏洞</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        <section id="takeaways" className="scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第四节 实践启示与开发者思维转变</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg space-y-6">
            <div>
              <h3 className="text-xl font-bold text-slate-800">从CRUD到状态转换</h3>
              <p className="mt-2 text-slate-600">Web3.0的开发核心是管理一个确定性状态机的状态转换。每一次"写入"都是一笔永久、可审计的交易，要求开发者以更严谨的方式设计业务逻辑。</p>
            </div>
            <div className="p-6 bg-rose-50 border-l-4 border-rose-400 rounded-r-lg">
              <h4 className="font-bold text-rose-800">不可变性带来的高风险</h4>
              <p className="mt-2 text-rose-700"><strong className="font-semibold">Gas优化</strong>成为核心技能，直接影响用户成本。同时，<strong className="font-semibold">安全审计</strong>成为不可或缺的强制步骤，因为一个微小的漏洞都可能导致用户资金的永久性损失。</p>
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-800">混合式未来</h3>
              <p className="mt-2 text-slate-600">当前成功的Web3应用多为混合架构，利用区块链保障核心资产和逻辑，同时依赖Web2基础设施处理高频或大容量数据。开发者需要像经济学家和博弈论者一样思考，设计协议，而不仅仅是应用。</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-400 text-center py-6 mt-16">
        <p>© 2025 Web架构范式指南</p>
      </footer>
    </div>
  )
}