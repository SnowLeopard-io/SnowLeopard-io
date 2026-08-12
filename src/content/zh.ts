import { banner } from './assets'
import type { Content } from './types'

export const zh: Content = {
  ui: {
    nav: { about: '关于', projects: '项目', experience: '经历', notes: '想法' },
    langToggleLabel: '语言',
    langToggleToZh: '中',
    langToggleToEn: 'EN',
    roleOwner: '拥有者',
    roleContributor: '贡献者',
  },

  site: {
    handle: 'SnowLeopard-io',
    name: '雪豹',
    wordmark: '雪豹',
    eyebrow: '重庆 · 中国',
    tagline: '雪山从不记录时间，只记录落在它身上的每一片雪花。',
    roles: ['自主 AI 智能体开发者', '云端驱动 · 本地执行', 'C · Java · JavaScript · Python', '构建智能系统'],
    banner,
    email: '1486853830@qq.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/SnowLeopard-io', handle: 'SnowLeopard-io' },
      { label: 'Gitee', href: 'https://gitee.com/cnt-code', handle: 'cnt-code' },
      { label: 'CSDN', href: 'https://blog.csdn.net/h1486853830', handle: 'h1486853830' },
    ],
    statusLabel: '正在构建',
    buildingName: 'CogitoAgent',
    ctaPrimary: '查看我的项目',
    ctaSecondary: 'GitHub',
  },

  about: {
    eyebrow: '关于',
    heading: '构建自主系统，从内核到云端。',
    lead: `我是重庆市第一中学的高三学生，在 AI 与系统软件的交叉地带写代码。我创建了 CogitoAgent——一个云端驱动智能、本地执行以守护隐私的自主 AI 智能体，同时参与微内核操作系统 Kil0yOS 与 JVM 运行时治理框架 LingFrame 的开发。`,
    facts: [
      { icon: '🎓', label: '学生', value: '重庆市第一中学 · 高三' },
      { icon: '🧩', label: '正在构建', value: 'CogitoAgent —— 自主 AI 智能体' },
      { icon: '⚙️', label: '参与贡献', value: 'Kil0yOS（微内核 OS）· LingFrame（JVM 治理）' },
      { icon: '🌱', label: '正在学习', value: '云架构 · LLM · 自主系统' },
      { icon: '💡', label: '感兴趣', value: 'AI 智能体 · 操作系统 · 分布式系统' },
      { icon: '📍', label: '所在地', value: '中国 · 重庆' },
    ],
    stackLabel: '技术栈',
    stack: [
      { lang: 'C', note: '系统' },
      { lang: 'Java', note: '运行时' },
      { lang: 'JavaScript', note: 'Web' },
      { lang: 'TypeScript', note: 'Web' },
      { lang: 'Node.js', note: '工具链' },
      { lang: 'Python', note: '脚本' },
      { lang: 'AI/ML', note: '智能' },
      { lang: 'Electron', note: '桌面' },
      { lang: 'Git', note: '版本控制' },
    ],
  },

  projects: {
    eyebrow: '项目',
    heading: '代表性作品',
    lead: `我拥有与参与的开源项目。每一个都是一次刻意的尝试——构建能长久存在的东西。`,
    projects: [
      {
        name: 'CogitoAgent',
        repo: 'CogitoAgent',
        url: 'https://github.com/SnowLeopard-io/CogitoAgent',
        tagline: '自主 AI 智能体',
        body: `一个会自主思考、规划与行动的 AI 智能体。云端驱动智能，本地执行守护隐私——集成 200+ 实用工具，数据绝不离机。`,
        stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        role: 'Owner',
      },
      {
        name: 'NodeVerdict',
        repo: 'NodeVerdict',
        url: 'https://github.com/SnowLeopard-io/NodeVerdict',
        tagline: '本地优先的 Node.js 诊断',
        body: `浏览器内的 Node.js 诊断查看器。读取 TracingChannel 原生事件、堆快照与 CPU 火焰图——一切都在浏览器内处理，不向任何地方上传。`,
        stack: ['TypeScript', 'React', 'Vite', 'D3.js'],
        role: 'Owner',
      },
      {
        name: 'Kil0yOS',
        repo: 'Miwafi/Kil0yOS',
        url: 'https://github.com/Miwafi/Kil0yOS',
        tagline: '从零构建的微内核',
        body: `64 位 x86-64 微内核，包含内存管理、VMM、文件系统、网络栈与平铺式图形桌面——用 C 与汇编硬写出来。`,
        stack: ['C', 'Assembly', 'x86-64'],
        role: 'Contributor',
      },
      {
        name: 'LingFrame',
        repo: 'LingFrame/LingFrame',
        url: 'https://github.com/LingFrame/LingFrame',
        tagline: '长期运行 JVM 的治理框架',
        body: `面向永不停止的系统的运行时治理：ling 隔离、热卸载与运行时控制，守护持续运转的关键进程。`,
        stack: ['Java', 'Spring Boot'],
        role: 'Contributor',
      },
    ],
  },

  experience: {
    eyebrow: '经历',
    heading: '走过的路',
    lead: `我从哪里来、现在在做什么，以及下一步指向哪里。`,
    entries: [
      {
        period: '教育',
        title: '重庆市第一中学',
        body: `一边读书一边写代码。自学 C、Java、JavaScript 与 Python，正在夯实算法与系统思维的地基。`,
        tags: ['C', 'Java', 'Python', '算法'],
        state: 'active',
      },
      {
        period: '开源',
        title: 'Kil0yOS 与 LingFrame 贡献者',
        body: `为一个 64 位微内核操作系统编写底层代码，同时用 Java 与 Spring Boot 深入 JVM 运行时治理。`,
        tags: ['C', 'Assembly', 'Java', '操作系统'],
        state: 'contribution',
      },
      {
        period: '现在',
        title: 'CogitoAgent 创建者',
        body: `设计一个自主 AI 智能体：200+ 工具、云端驱动智能、本地执行、隐私优先。这是我投入最多精力的事。`,
        tags: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        state: 'active',
      },
      {
        period: '方向',
        title: '自主与分布式系统',
        body: `研究 LLM 与分布式基础设施如何融合，催生能够自主运转、协同并自我恢复的智能体。`,
        tags: ['LLMs', 'Cloud', '分布式系统'],
        state: 'upcoming',
      },
    ],
  },

  notes: {
    eyebrow: '想法',
    heading: '值得记下的念头',
    lead: `我在构建中逐渐形成的一些原则——也是我不断与自己争论的问题。`,
    notes: [
      {
        index: 'N–001',
        subject: '隐私是一种架构',
        body: `智能体可以向云端借智力，但记忆与秘密应当留在家中。隐私是设计决策，不是功能。`,
      },
      {
        index: 'N–002',
        subject: '信任是一条边界',
        body: `微内核教会我们一个可以放大的原则：让关键核心尽可能少犯错。同样的直觉应当约束每一条 AI 边界。`,
      },
      {
        index: 'N–003',
        subject: '长期运行的系统会腐烂',
        body: `软件像冰川一样无声老化。热卸载与隔离存在的意义，就是趁它还在运行时加以修复。`,
      },
      {
        index: 'N–004',
        subject: '自主必须可验证',
        body: `一个集成 200+ 工具的智能体，应当能够展示自己的工作、撤销权限，并在一声令下遗忘。没有问责的权力只是一个 bug。`,
      },
    ],
  },

  connect: {
    eyebrow: '联系',
    title: '保持联系',
    lead: `每一条消息我都会认真读。如果你在做智能体、系统，或两者之间的一切，我很乐意聊聊。`,
  },
}
