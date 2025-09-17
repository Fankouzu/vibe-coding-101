import './globals.css'

export const metadata = {
  title: 'Web2 与 Web3 架构对比学习指南',
  description: '一份面向开发者的Web 2.0与Web3.0基础设施指南',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}