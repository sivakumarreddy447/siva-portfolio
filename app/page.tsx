import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Skills from '@/components/Skills'
import Education from '@/components/Education'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import HoverHighlight from '@/components/HoverHighlight'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <HoverHighlight />
      <Navbar />
      <Hero />
      <Skills />
      <Education />
      <Experience />
      <Projects />
      <Certifications />
      <Contact />
    </main>
  )
}
