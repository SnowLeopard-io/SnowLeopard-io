import { banner, bannerNarrow } from './assets'
import type { Content } from './types'

export const zh: Content = {
  ui: {
    nav: { about: '关于', projects: '项目', experience: '经历', notes: '想法', writing: '文章' },
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
    tagline: '敛锋芒以观天地 守沉静而渡流年',
    roles: ['自主 AI 智能体开发者', '云端驱动 · 本地执行', 'C · Java · JavaScript · Python', '构建智能系统'],
    banner,
    bannerNarrow,
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
      { label: '学生', value: '重庆市第一中学 · 高三' },
      { label: '正在构建', value: 'CogitoAgent —— 自主 AI 智能体' },
      { label: '参与贡献', value: 'Kil0yOS（微内核 OS）· LingFrame（JVM 治理）' },
      { label: '正在学习', value: '云架构 · LLM · 自主系统' },
      { label: '感兴趣', value: 'AI 智能体 · 操作系统 · 分布式系统' },
      { label: '所在地', value: '中国 · 重庆' },
    ],
    stackLabel: '技术栈',
    stack: [
      { lang: 'C', note: '系统', level: 32 },
      { lang: 'Java', note: '运行时', level: 30 },
      { lang: 'JavaScript', note: 'Web', level: 88 },
      { lang: 'TypeScript', note: 'Web', level: 90 },
      { lang: 'Node.js', note: '工具链', level: 85 },
      { lang: 'Python', note: '脚本', level: 30 },
      { lang: 'AI/ML', note: '智能', level: 75 },
      { lang: 'Electron', note: '桌面', level: 78 },
      { lang: 'Git', note: '版本控制', level: 88 },
    ],
  },

  stats: [
    { key: 'repos', value: 6, label: '开源仓库' },
    { key: 'stars', value: 0, suffix: '+', label: '获得 Star' },
    { key: 'followers', value: 0, label: '关注者' },
    { key: 'languages', value: 6, label: '编程语言' },
  ],

  projects: {
    eyebrow: '项目',
    heading: '代表性作品',
    lead: `我拥有与参与的开源项目。每一个都是一次刻意的尝试——构建能长久存在的东西。`,
    projects: [
      {
        name: 'SpecterCore',
        repo: 'SpecterCore',
        url: 'https://github.com/SnowLeopard-io/SpecterCore',
        tagline: '在浏览器中运行 Windows x86 应用',
        body: `一个基于浏览器的 Windows 兼容层，通过 x86→WASM JIT 执行未修改的 PE32/PE32+ 二进制文件，通过 trap-stub IAT 重写拦截 Win32 API 调用，并将其桥接到浏览器原生 API——OPFS 做文件系统、WebUSB 做设备、WebGPU 做图形、AudioWorklet 做音频。`,
        stack: ['TypeScript', 'WebAssembly', 'WebGPU', 'React'],
        role: 'Owner',
      },
      {
        name: 'ErgalicsStudio',
        repo: 'ErgalicsStudio',
        url: 'https://github.com/SnowLeopard-io/ErgalicsStudio',
        tagline: '浏览器内的科学计算工作站',
        body: `一个运行在浏览器中的专业科学计算工作台——交互式数据探索、基于 WebGPU/WGSL 的 GPU 计算调度、沙箱插件系统，全部由 Rust/WASM 核心驱动。`,
        stack: ['TypeScript', 'Rust', 'WebGPU', 'React'],
        role: 'Owner',
      },
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

  featured: {
    eyebrow: '旗舰项目',
    name: 'CogitoAgent',
    tagline: '自主 AI 智能体',
    summary:
      'CogitoAgent 是一个能自主思考、规划并行动的智能体。它向云端借智力，却把记忆与秘密留在你的机器上——200+ 工具、以架构保障隐私、可验证的自主。',
    highlights: [
      '云端驱动智能、本地执行——数据从不离开设备。',
      '200+ 集成工具，覆盖文件系统、终端、网络与代码。',
      '可验证的自主：它能展示过程、撤销权限、一声令下遗忘。',
      '基于 TypeScript、Node.js 与 Electron 构建，跨平台桌面端。',
    ],
    metrics: [
      { value: '200+', label: '集成工具' },
      { value: '100%', label: '本地执行' },
      { value: '0', label: '数据离机' },
    ],
    stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
    url: 'https://github.com/SnowLeopard-io/CogitoAgent',
    cta: '了解 CogitoAgent',
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

  writing: {
    eyebrow: '文章',
    heading: '构建中的笔记',
    lead: `关于智能体、系统与把它们真正做出来的纪律的长文思考。（请将这些占位条目替换为你的真实 CSDN 文章。）`,
    articles: [
      {
        title: '构建 CogitoAgent：云端驱动智能，本地执行',
        excerpt:
          '我如何把一个自主智能体拆成「云端大脑」与「本地身体」——以及为什么隐私必须是一种架构，而非一项设置。',
        date: '2026',
        tag: 'AI 智能体',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: '用 C 与汇编写一个 64 位微内核',
        excerpt:
          '参与 Kil0yOS 的笔记：内存管理、VMM，以及把最小的东西做对所需的严苛纪律。',
        date: '2026',
        tag: '操作系统',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: '用 LingFrame 治理长期运行的 JVM',
        excerpt:
          'ling 隔离、热卸载与运行时控制——让那些永不停止、必须持续运转的进程不至于悄悄腐烂。',
        date: '2026',
        tag: 'JVM',
        url: 'https://blog.csdn.net/h1486853830',
      },
      {
        title: '为什么隐私是一种架构，而非功能',
        excerpt:
          '一个我不断与自己争论的观点，如今写下来：没有问责的自主，只是一个能力很强的 bug。',
        date: '2026',
        tag: '原则',
        url: 'https://blog.csdn.net/h1486853830',
      },
    ],
  },

  connect: {
    eyebrow: '联系',
    title: '保持联系',
    lead: `每一条消息我都会认真读。如果你在做智能体、系统，或两者之间的一切，我很乐意聊聊。`,
  },
}
