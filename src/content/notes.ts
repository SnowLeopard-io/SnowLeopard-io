export type Note = {
  index: string
  subject: string
  body: string
  altitude: string
}

/** Ideas & field notes, jotted at the high camps. */
export const notes: Note[] = [
  {
    index: 'N–001',
    subject: 'Trust is an architecture',
    body: `“Cloud-driven, locally executed” is not a slogan — it is a design decision. Intelligence can borrow the cloud; memory and secrets should not have to.`,
    altitude: '6,800 m',
  },
  {
    index: 'N–002',
    subject: 'The agent should leave no snow behind',
    body: `A genuinely autonomous agent needs many hands (200+ tools), but every hand should work in a context that can be reviewed, revoked and forgotten on command.`,
    altitude: '6,800 m',
  },
  {
    index: 'N–003',
    subject: 'Kernels are statements about trust',
    body: `A microkernel says: give the kernel as little as possible to get wrong, and let policy live where it can be fixed. The same instinct should govern every critical boundary.`,
    altitude: '6,800 m',
  },
  {
    index: 'N–004',
    subject: 'Long-running systems decay',
    body: `Hot unload and ling isolation exist because software ages like glaciers — silently. Runtime governance is how you slow the melt and repair the cracks while it is still running.`,
    altitude: '6,800 m',
  },
  {
    index: 'N–005',
    subject: 'The mountain keeps no record',
    body: `The snow mountain keeps no record of time, only of every snowflake that falls upon it. Build in public; the snowfield remembers.`,
    altitude: '6,800 m',
  },
]