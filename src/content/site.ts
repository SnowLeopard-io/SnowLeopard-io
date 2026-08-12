import banner from '../assets/SnowLeopard.jpg'

export const site = {
  handle: 'SnowLeopard-io',
  wordmark: 'SNOW LEOPARD',
  tagline:
    'The snow mountain keeps no record of time, only of every snowflake that falls upon it.',
  role: 'Autonomous AI Agent Developer',
  roles: [
    'Autonomous AI Agent Developer',
    'Cloud-driven, Locally Executed',
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
}

export type Link = (typeof site.links)[number]

/** The ascent map — every section is a station on Muztagh Ata, in metres.
 *  Altitudes rise monotonically from the top of the page to the bottom. */
export const ascent = [
  { id: 'about', station: 'Base Camp', altitude: 4450 },
  { id: 'experience', station: 'Camp I', altitude: 5300 },
  { id: 'projects', station: 'Camp II', altitude: 6400 },
  { id: 'notes', station: 'High Camp', altitude: 6800 },
] as const

export const summit = 7546 // Muztagh Ata — the Ice Peak

export type AscentStop = (typeof ascent)[number]