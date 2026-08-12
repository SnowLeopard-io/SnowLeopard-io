import { banner } from './assets'
import type { Content } from './types'

export const en: Content = {
  ui: {
    nav: { about: 'About', projects: 'Projects', experience: 'Experience', notes: 'Notes' },
    langToggleLabel: 'Language',
    langToggleToZh: '中',
    langToggleToEn: 'EN',
    roleOwner: 'Owner',
    roleContributor: 'Contributor',
  },

  site: {
    handle: 'SnowLeopard-io',
    name: 'Snow Leopard',
    wordmark: 'SNOW LEOPARD',
    eyebrow: 'Chongqing · China',
    tagline:
      'The snow mountain keeps no record of time, only of every snowflake that falls upon it.',
    roles: [
      'Autonomous AI Agent Developer',
      'Cloud-driven · Locally Executed',
      'C · Java · JavaScript · Python',
      'Building intelligent systems',
    ],
    banner,
    email: '1486853830@qq.com',
    links: [
      { label: 'GitHub', href: 'https://github.com/SnowLeopard-io', handle: 'SnowLeopard-io' },
      { label: 'Gitee', href: 'https://gitee.com/cnt-code', handle: 'cnt-code' },
      { label: 'CSDN', href: 'https://blog.csdn.net/h1486853830', handle: 'h1486853830' },
    ],
    statusLabel: 'Currently building',
    buildingName: 'CogitoAgent',
    ctaPrimary: 'View my work',
    ctaSecondary: 'GitHub',
  },

  about: {
    eyebrow: 'About',
    heading: 'Building autonomous systems, from the kernel up.',
    lead: `I'm a Grade 12 student at Chongqing No.1 High School who writes software where AI meets systems. I built CogitoAgent — an autonomous AI agent that is cloud-driven for intelligence yet executed locally for privacy — and I contribute to the microkernel OS Kil0yOS and the JVM governance framework LingFrame.`,
    facts: [
      { icon: '🎓', label: 'Student', value: 'Chongqing No.1 High School · Grade 12' },
      { icon: '🧩', label: 'Building', value: 'CogitoAgent — an autonomous AI agent' },
      { icon: '⚙️', label: 'Contributing', value: 'Kil0yOS (microkernel OS) · LingFrame (JVM governance)' },
      { icon: '🌱', label: 'Learning', value: 'Cloud architecture · LLMs · Autonomous systems' },
      { icon: '💡', label: 'Interested in', value: 'AI agents · OS development · Distributed systems' },
      { icon: '📍', label: 'Based in', value: 'Chongqing, China' },
    ],
    stackLabel: 'Tech stack',
    stack: [
      { lang: 'C', note: 'systems' },
      { lang: 'Java', note: 'runtime' },
      { lang: 'JavaScript', note: 'web' },
      { lang: 'TypeScript', note: 'web' },
      { lang: 'Node.js', note: 'tooling' },
      { lang: 'Python', note: 'scripting' },
      { lang: 'AI/ML', note: 'intelligence' },
      { lang: 'Electron', note: 'desktop' },
      { lang: 'Git', note: 'version control' },
    ],
  },

  projects: {
    eyebrow: 'Projects',
    heading: 'Selected work',
    lead: `Open-source projects I own and contribute to. Each one is a deliberate attempt to build something that lasts.`,
    projects: [
      {
        name: 'CogitoAgent',
        repo: 'CogitoAgent',
        url: 'https://github.com/SnowLeopard-io/CogitoAgent',
        tagline: 'An autonomous AI agent',
        body: `An AI agent that thinks, plans and acts on its own. Cloud-driven for intelligence, executed locally for privacy — with 200+ integrated tools, your data never leaves your machine.`,
        stack: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        role: 'Owner',
      },
      {
        name: 'NodeVerdict',
        repo: 'NodeVerdict',
        url: 'https://github.com/SnowLeopard-io/NodeVerdict',
        tagline: 'Local-first Node.js diagnostics',
        body: `A browser-based diagnostic viewer for Node.js. Reads TracingChannel native events, heap snapshots and CPU flame graphs — everything is processed in the browser, nothing is uploaded.`,
        stack: ['TypeScript', 'React', 'Vite', 'D3.js'],
        role: 'Owner',
      },
      {
        name: 'Kil0yOS',
        repo: 'Miwafi/Kil0yOS',
        url: 'https://github.com/Miwafi/Kil0yOS',
        tagline: 'A microkernel from scratch',
        body: `A 64-bit x86-64 microkernel with memory management, a VMM, filesystem, network stack and a tiling GUI desktop — built the hard way in C and assembly.`,
        stack: ['C', 'Assembly', 'x86-64'],
        role: 'Contributor',
      },
      {
        name: 'LingFrame',
        repo: 'LingFrame/LingFrame',
        url: 'https://github.com/LingFrame/LingFrame',
        tagline: 'Governance for long-running JVMs',
        body: `Runtime governance for systems that must never rest: ling isolation, hot unload and runtime control for the processes that keep the lights on.`,
        stack: ['Java', 'Spring Boot'],
        role: 'Contributor',
      },
    ],
  },

  experience: {
    eyebrow: 'Experience',
    heading: 'The path so far',
    lead: `Where I come from, what I'm doing now, and where the next step points.`,
    entries: [
      {
        period: 'Education',
        title: 'Chongqing No.1 High School',
        body: `Studying while building. Self-taught across C, Java, JavaScript and Python, and steadily laying the foundation of algorithms and systems thinking.`,
        tags: ['C', 'Java', 'Python', 'Algorithms'],
        state: 'active',
      },
      {
        period: 'Open source',
        title: 'Contributor to Kil0yOS & LingFrame',
        body: `Writing low-level code for a 64-bit microkernel operating system, and a second rope into JVM runtime governance with Java and Spring Boot.`,
        tags: ['C', 'Assembly', 'Java', 'OS Development'],
        state: 'contribution',
      },
      {
        period: 'Present',
        title: 'Founder of CogitoAgent',
        body: `Designing an autonomous AI agent: 200+ tools, cloud-driven intelligence, local execution, privacy first. This is where most of my energy goes.`,
        tags: ['TypeScript', 'Node.js', 'Electron', 'AI/ML'],
        state: 'active',
      },
      {
        period: 'Direction',
        title: 'Autonomous & distributed systems',
        body: `Studying how LLMs and distributed infrastructure combine into agents that operate, coordinate and recover on their own.`,
        tags: ['LLMs', 'Cloud', 'Distributed Systems'],
        state: 'upcoming',
      },
    ],
  },

  notes: {
    eyebrow: 'Notes',
    heading: 'Ideas worth writing down',
    lead: `A few principles I'm developing as I build — the arguments I keep having with myself.`,
    notes: [
      {
        index: 'N–001',
        subject: 'Privacy is an architecture',
        body: `An agent can borrow the cloud for intelligence, but memory and secrets should stay at home. Privacy is a design decision, not a feature.`,
      },
      {
        index: 'N–002',
        subject: 'Trust is a boundary',
        body: `Microkernels teach a principle that scales: give the critical core as little as possible to get wrong. The same instinct should govern every AI boundary.`,
      },
      {
        index: 'N–003',
        subject: 'Long-running systems decay',
        body: `Software ages like glaciers — silently. Hot unload and isolation exist to repair it while it is still running.`,
      },
      {
        index: 'N–004',
        subject: 'Autonomy must be verifiable',
        body: `An agent with 200+ tools should be able to show its work, revoke its access and forget on command. Power without accountability is just a bug.`,
      },
    ],
  },

  connect: {
    eyebrow: 'Contact',
    title: 'Let’s connect',
    lead: `I read every message. If you're working on agents, systems, or anything in between, I'd be glad to talk.`,
  },
}
