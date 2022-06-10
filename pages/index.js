import Head from 'next/head'
import Image from 'next/image'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Razu Ahmed Joy - Jr. Full Stack Developer</title>
        <meta name="description" content="Razu Ahmed Joy , A full stack developer from Bangladesh. Expert in Django, React.Js, Node.Js, Express.Js, Next.js. Learning new technology is his one kind of Hobby."></meta>
      </Head>
      <Navbar/>
      <Main/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>


    
    </div>
  )
}
