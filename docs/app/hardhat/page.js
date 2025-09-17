'use client';

export default function HardhatGuide() {
  return (
    <div className="text-slate-800">
      <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-xl font-bold text-slate-900">Hardhat 开发指南</div>
          <div className="hidden md:flex space-x-6 text-sm font-semibold">
            <a href="#overview" className="nav-link text-slate-600">概述</a>
            <a href="#concepts" className="nav-link text-slate-600">核心概念</a>
            <a href="#installation" className="nav-link text-slate-600">安装</a>
            <a href="#configuration" className="nav-link text-slate-600">配置</a>
            <a href="#commands" className="nav-link text-slate-600">命令</a>
            <a href="#practices" className="nav-link text-slate-600">最佳实践</a>
          </div>
        </nav>
      </header>

      <main className="container mx-auto p-4 md:p-8">
        <section className="text-center my-12">
          <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Hardhat 智能合约开发框架</h1>
          <p className="max-w-3xl mx-auto text-lg text-slate-600">专为以太坊开发者设计的现代化开发环境、测试框架和资产管道</p>
        </section>

        {/* 概述部分 */}
        <section id="overview" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第一节 概述与介绍</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">什么是 Hardhat？</h3>
            <p className="mb-6 text-slate-600">
              Hardhat 是一个基于 Node.js 的以太坊开发环境，它提供了开发、测试、部署和验证智能合约所需的一切工具。
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
              <div className="p-4 bg-sky-100 rounded-lg">
                <div className="font-bold text-sky-800 mb-2">本地以太坊网络</div>
                <div className="text-sm text-sky-600">用于部署合约、运行测试和调试代码</div>
              </div>
              <div className="p-4 bg-indigo-100 rounded-lg">
                <div className="font-bold text-indigo-800 mb-2">任务运行器</div>
                <div className="text-sm text-indigo-600">自动化常见的开发任务</div>
              </div>
              <div className="p-4 bg-emerald-100 rounded-lg">
                <div className="font-bold text-emerald-800 mb-2">插件生态系统</div>
                <div className="text-sm text-emerald-600">扩展功能的模块化架构</div>
              </div>
              <div className="p-4 bg-purple-100 rounded-lg">
                <div className="font-bold text-purple-800 mb-2">调试支持</div>
                <div className="text-sm text-purple-600">Stack traces & console.log</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
              <h4 className="font-bold text-amber-800 mb-2">为什么选择 Hardhat？</h4>
              <p className="text-amber-700">
                相比其他框架，Hardhat 提供了更好的调试体验、丰富的插件生态系统、平缓的学习曲线，
                以及活跃的社区支持，是以太坊开发者的首选框架之一。
              </p>
            </div>
          </div>
        </section>

        {/* 框架对比表 */}
        <section className="mb-16">
          <div className="bg-white p-6 rounded-xl shadow-lg overflow-x-auto">
            <h3 className="text-xl font-bold mb-4">框架对比</h3>
            <table className="w-full min-w-[600px] border-collapse text-left">
              <thead>
                <tr className="table-header">
                  <th className="p-3 font-semibold">特性</th>
                  <th className="p-3 font-semibold">Hardhat</th>
                  <th className="p-3 font-semibold">Truffle</th>
                  <th className="p-3 font-semibold">Foundry</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-200">
                  <td className="p-3"><strong>语言</strong></td>
                  <td className="p-3">JavaScript/TypeScript</td>
                  <td className="p-3">JavaScript</td>
                  <td className="p-3">Solidity/Rust</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3"><strong>调试能力</strong></td>
                  <td className="p-3">Stack traces, console.log</td>
                  <td className="p-3">基础调试</td>
                  <td className="p-3">高级调试</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3"><strong>插件生态</strong></td>
                  <td className="p-3">丰富</td>
                  <td className="p-3">中等</td>
                  <td className="p-3">发展中</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3"><strong>学习曲线</strong></td>
                  <td className="p-3">平缓</td>
                  <td className="p-3">平缓</td>
                  <td className="p-3">陡峭</td>
                </tr>
                <tr className="border-b border-slate-200">
                  <td className="p-3"><strong>性能</strong></td>
                  <td className="p-3">良好</td>
                  <td className="p-3">良好</td>
                  <td className="p-3">优秀</td>
                </tr>
                <tr>
                  <td className="p-3"><strong>社区支持</strong></td>
                  <td className="p-3">活跃</td>
                  <td className="p-3">活跃</td>
                  <td className="p-3">快速增长</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* 核心概念 */}
        <section id="concepts" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第二节 核心概念</h2>
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">1. Hardhat Runtime Environment (HRE)</h3>
              <p className="mb-4 text-slate-600">
                HRE 是 Hardhat 的核心，包含所有 Hardhat 功能的对象，在运行任务、脚本或测试时全局可用。
              </p>
              <div className="bg-slate-50 p-4 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-slate-700">{`// 在脚本中访问 HRE
const hre = require("hardhat");

// 在任务中自动注入
task("accounts", "Prints accounts", async (taskArgs, hre) => {
  const accounts = await hre.ethers.getSigners();
  // ...
});`}</pre>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">2. 核心组件</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="diagram-box">
                  <h4 className="font-bold text-indigo-800 mb-3">Tasks（任务）</h4>
                  <p className="text-sm text-slate-600 mb-3">Hardhat 的基本执行单元</p>
                  <div className="bg-indigo-50 p-3 rounded text-xs font-mono">
                    npx hardhat compile<br />
                    npx hardhat test<br />
                    npx hardhat deploy
                  </div>
                </div>

                <div className="diagram-box">
                  <h4 className="font-bold text-emerald-800 mb-3">Plugins（插件）</h4>
                  <p className="text-sm text-slate-600 mb-3">扩展框架功能</p>
                  <ul className="text-sm text-emerald-700 space-y-1">
                    <li>• hardhat-ethers</li>
                    <li>• hardhat-waffle</li>
                    <li>• hardhat-gas-reporter</li>
                  </ul>
                </div>

                <div className="diagram-box">
                  <h4 className="font-bold text-purple-800 mb-3">Networks（网络）</h4>
                  <p className="text-sm text-slate-600 mb-3">多网络支持</p>
                  <ul className="text-sm text-purple-700 space-y-1">
                    <li>• Hardhat Network</li>
                    <li>• JSON-RPC Networks</li>
                    <li>• Fork Networks</li>
                  </ul>
                </div>

                <div className="diagram-box">
                  <h4 className="font-bold text-orange-800 mb-3">Compiler（编译器）</h4>
                  <p className="text-sm text-slate-600 mb-3">智能合约编译</p>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• 多版本支持</li>
                    <li>• 优化设置</li>
                    <li>• 自动下载</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 环境需求与安装 */}
        <section id="installation" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第三节 环境需求与安装</h2>

          <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">系统要求</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="p-4 bg-blue-50 rounded-lg">
                <div className="font-semibold text-blue-800 mb-2">Node.js</div>
                <div className="text-sm text-blue-600">版本 ≥ 16.0.0</div>
              </div>
              <div className="p-4 bg-green-50 rounded-lg">
                <div className="font-semibold text-green-800 mb-2">npm / yarn</div>
                <div className="text-sm text-green-600">npm ≥ 7.0.0</div>
              </div>
              <div className="p-4 bg-purple-50 rounded-lg">
                <div className="font-semibold text-purple-800 mb-2">Git</div>
                <div className="text-sm text-purple-600">版本控制</div>
              </div>
            </div>

            <div className="bg-slate-50 p-4 rounded-lg">
              <h4 className="font-semibold mb-3">检查环境命令</h4>
              <div className="font-mono text-sm space-y-2">
                <div className="bg-white p-2 rounded">node --version</div>
                <div className="bg-white p-2 rounded">npm --version</div>
                <div className="bg-white p-2 rounded">git --version</div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">安装步骤</h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">1</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">创建项目目录</h4>
                  <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                    mkdir my-hardhat-project && cd my-hardhat-project
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">2</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">初始化 npm 项目</h4>
                  <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                    npm init -y
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">3</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">安装 Hardhat</h4>
                  <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                    npm install --save-dev hardhat
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">4</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">创建 Hardhat 项目</h4>
                  <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                    npx hardhat init
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-bold">5</div>
                <div className="flex-1">
                  <h4 className="font-semibold mb-2">安装常用依赖</h4>
                  <div className="bg-slate-50 p-3 rounded font-mono text-sm">
                    npm install --save-dev @nomicfoundation/hardhat-toolbox
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 项目结构 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">项目结构</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="diagram-box">
              <div className="font-mono text-sm">
                <div className="flex items-center gap-2 py-1">
                  <span className="text-amber-600">📁</span>
                  <span className="font-semibold">my-hardhat-project/</span>
                </div>
                <div className="pl-6 space-y-1">
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-blue-600">📁</span>
                    <span>contracts/</span>
                    <span className="text-slate-500 text-xs ml-2">// Solidity 合约目录</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-green-600">📁</span>
                    <span>scripts/</span>
                    <span className="text-slate-500 text-xs ml-2">// 部署和交互脚本</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-purple-600">📁</span>
                    <span>test/</span>
                    <span className="text-slate-500 text-xs ml-2">// 测试文件目录</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-gray-600">📁</span>
                    <span>artifacts/</span>
                    <span className="text-slate-500 text-xs ml-2">// 编译输出（自动生成）</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-gray-600">📁</span>
                    <span>cache/</span>
                    <span className="text-slate-500 text-xs ml-2">// Hardhat 缓存</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-orange-600">📄</span>
                    <span>hardhat.config.js</span>
                    <span className="text-slate-500 text-xs ml-2">// 配置文件</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-blue-600">📄</span>
                    <span>package.json</span>
                    <span className="text-slate-500 text-xs ml-2">// 项目依赖</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-red-600">📄</span>
                    <span>.env</span>
                    <span className="text-slate-500 text-xs ml-2">// 环境变量</span>
                  </div>
                  <div className="flex items-center gap-2 py-1">
                    <span className="text-gray-600">📄</span>
                    <span>.gitignore</span>
                    <span className="text-slate-500 text-xs ml-2">// Git 忽略配置</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 基础配置 */}
        <section id="configuration" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第四节 基础配置</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-slate-800">hardhat.config.js 配置示例</h3>

            <div className="bg-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
              <pre className="text-slate-700">{`require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

module.exports = {
  // Solidity 编译器配置
  solidity: {
    version: "0.8.20",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  },

  // 网络配置
  networks: {
    hardhat: {
      chainId: 31337
    },
    sepolia: {
      url: process.env.SEPOLIA_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 11155111
    },
    mainnet: {
      url: process.env.MAINNET_RPC_URL || "",
      accounts: process.env.PRIVATE_KEY ? [process.env.PRIVATE_KEY] : [],
      chainId: 1
    }
  },

  // Etherscan 验证
  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  },

  // Gas 报告配置
  gasReporter: {
    enabled: process.env.REPORT_GAS === "true",
    currency: "USD"
  }
};`}</pre>
            </div>

            <div className="mt-8 p-6 bg-rose-50 border-l-4 border-rose-400 rounded-r-lg">
              <h4 className="font-bold text-rose-800 mb-2">⚠️ 安全提醒</h4>
              <p className="text-rose-700 text-sm">
                永远不要将私钥硬编码在代码中！使用 .env 文件管理敏感信息，并确保 .env 文件被添加到 .gitignore 中。
              </p>
            </div>
          </div>
        </section>

        {/* 常用命令 */}
        <section id="commands" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第五节 常用命令</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-indigo-800">编译与测试</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat compile</div>
                  <div className="text-xs text-slate-500 mt-1">编译所有合约</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat test</div>
                  <div className="text-xs text-slate-500 mt-1">运行所有测试</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat coverage</div>
                  <div className="text-xs text-slate-500 mt-1">测试覆盖率报告</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-emerald-800">部署与验证</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat run scripts/deploy.js</div>
                  <div className="text-xs text-slate-500 mt-1">部署合约</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat verify --network sepolia ADDRESS</div>
                  <div className="text-xs text-slate-500 mt-1">验证合约</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat node</div>
                  <div className="text-xs text-slate-500 mt-1">启动本地节点</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-purple-800">调试与交互</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat console</div>
                  <div className="text-xs text-slate-500 mt-1">打开交互控制台</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat clean</div>
                  <div className="text-xs text-slate-500 mt-1">清理缓存和编译文件</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat accounts</div>
                  <div className="text-xs text-slate-500 mt-1">查看账户列表</div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold mb-4 text-orange-800">实用工具</h3>
              <div className="space-y-3">
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat size-contracts</div>
                  <div className="text-xs text-slate-500 mt-1">查看合约大小</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">REPORT_GAS=true npx hardhat test</div>
                  <div className="text-xs text-slate-500 mt-1">生成 Gas 报告</div>
                </div>
                <div className="bg-slate-50 p-3 rounded">
                  <div className="font-mono text-sm text-slate-700">npx hardhat flatten</div>
                  <div className="text-xs text-slate-500 mt-1">展平合约代码</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 最佳实践 */}
        <section id="practices" className="mb-16 scroll-mt-20">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">第六节 最佳实践</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">开发建议</h3>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                  <h4 className="font-bold text-green-800 mb-2">✅ 项目组织</h4>
                  <ul className="text-green-700 text-sm space-y-1">
                    <li>• 模块化合约设计</li>
                    <li>• 使用库和接口分离逻辑</li>
                    <li>• 版本控制提交 package-lock.json</li>
                    <li>• 使用 .env 管理环境变量</li>
                  </ul>
                </div>

                <div className="p-6 bg-blue-50 border-l-4 border-blue-400 rounded-r-lg">
                  <h4 className="font-bold text-blue-800 mb-2">🔒 安全实践</h4>
                  <ul className="text-blue-700 text-sm space-y-1">
                    <li>• 永不硬编码私钥</li>
                    <li>• 定期安全审计</li>
                    <li>• 使用经过审计的库</li>
                    <li>• 充分的测试覆盖</li>
                  </ul>
                </div>

                <div className="p-6 bg-purple-50 border-l-4 border-purple-400 rounded-r-lg">
                  <h4 className="font-bold text-purple-800 mb-2">🧪 测试策略</h4>
                  <ul className="text-purple-700 text-sm space-y-1">
                    <li>• 使用 fixture 减少重复</li>
                    <li>• 单元测试和集成测试</li>
                    <li>• 边缘案例测试</li>
                    <li>• Gas 消耗测试</li>
                  </ul>
                </div>

                <div className="p-6 bg-orange-50 border-l-4 border-orange-400 rounded-r-lg">
                  <h4 className="font-bold text-orange-800 mb-2">⚡ 优化技巧</h4>
                  <ul className="text-orange-700 text-sm space-y-1">
                    <li>• 启用 Solidity 优化器</li>
                    <li>• 合理设置 runs 参数</li>
                    <li>• 使用事件而非存储</li>
                    <li>• 批量操作减少调用</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold mb-6 text-slate-800">测试示例</h3>
              <div className="bg-slate-50 p-6 rounded-lg font-mono text-sm overflow-x-auto">
                <pre className="text-slate-700">{`const { loadFixture } = require("@nomicfoundation/hardhat-network-helpers");
const { expect } = require("chai");

describe("Token", function () {
  // 使用 fixture 部署合约
  async function deployTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const Token = await ethers.getContractFactory("Token");
    const token = await Token.deploy();
    return { token, owner, addr1, addr2 };
  }

  it("Should transfer tokens", async function () {
    const { token, owner, addr1 } = await loadFixture(deployTokenFixture);

    // 转账测试
    await token.transfer(addr1.address, 50);
    expect(await token.balanceOf(addr1.address)).to.equal(50);
  });
});`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* 资源链接 */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-center section-title">相关资源</h2>
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <a href="https://hardhat.org/docs" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-indigo-50 rounded-lg hover:bg-indigo-100 transition-colors">
                <div className="font-bold text-indigo-800 mb-2">📚 官方文档</div>
                <div className="text-sm text-indigo-600">详细的 API 和指南</div>
              </a>

              <a href="https://github.com/NomicFoundation/hardhat" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-emerald-50 rounded-lg hover:bg-emerald-100 transition-colors">
                <div className="font-bold text-emerald-800 mb-2">🐙 GitHub</div>
                <div className="text-sm text-emerald-600">源代码和示例</div>
              </a>

              <a href="https://hardhat.org/hardhat-runner/plugins" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-purple-50 rounded-lg hover:bg-purple-100 transition-colors">
                <div className="font-bold text-purple-800 mb-2">🔌 插件列表</div>
                <div className="text-sm text-purple-600">扩展功能</div>
              </a>

              <a href="https://discord.gg/TETZs2KK4k" target="_blank" rel="noopener noreferrer"
                 className="p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                <div className="font-bold text-blue-800 mb-2">💬 Discord</div>
                <div className="text-sm text-blue-600">社区支持</div>
              </a>
            </div>

            <div className="mt-8 p-6 bg-teal-50 border-l-4 border-teal-400 rounded-r-lg">
              <h4 className="font-bold text-teal-800 mb-2">🚀 开始您的智能合约之旅</h4>
              <p className="text-teal-700">
                Hardhat 为您提供了构建专业级去中心化应用所需的一切工具。继续深入学习，
                探索高级功能如自定义任务、插件开发和复杂的测试策略，让您的 DApp 开发更上一层楼！
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-slate-800 text-slate-400 text-center py-6 mt-16">
        <p>© 2025 Hardhat 开发指南</p>
      </footer>
    </div>
  );
}