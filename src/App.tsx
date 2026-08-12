import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Projects } from './components/Projects'
import { Notes } from './components/Notes'
import { Connect } from './components/Connect'
import { Snowfield } from './components/Snowfield'
import { useRevealAll } from './hooks/useReveal'

export default function App() {
  useRevealAll()

  return (
    <>
      <Snowfield />
      <Nav />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Notes />
      </main>
      <Connect />
    </>
  )
}
