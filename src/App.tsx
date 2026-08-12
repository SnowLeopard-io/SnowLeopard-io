import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { StatsBand } from './components/StatsBand'
import { About } from './components/About'
import { Featured } from './components/Featured'
import { Projects } from './components/Projects'
import { Experience } from './components/Experience'
import { Notes } from './components/Notes'
import { Writing } from './components/Writing'
import { Connect } from './components/Connect'
import { Snowfield } from './components/Snowfield'
import { Aurora } from './components/Aurora'
import { Spotlight } from './components/Spotlight'
import { ScrollProgress } from './components/ScrollProgress'
import { useRevealAll } from './hooks/useReveal'
import { useAmbientMotion } from './hooks/useAmbientMotion'

export default function App() {
  useRevealAll()
  useAmbientMotion()

  return (
    <>
      <Snowfield />
      <Aurora />
      <Spotlight />
      <ScrollProgress />
      <Nav />
      <main>
        <Hero />
        <StatsBand />
        <About />
        <Featured />
        <Projects />
        <Experience />
        <Notes />
        <Writing />
      </main>
      <Connect />
    </>
  )
}
