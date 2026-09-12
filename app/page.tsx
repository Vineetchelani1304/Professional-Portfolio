'use client'

import { motion, useReducedMotion } from 'framer-motion'
import {
  ArrowUpRight,
  Download,
  GitBranch,
  BriefcaseBusiness,
  Mail,
  MapPin,
  Phone,
  Sparkles,
} from 'lucide-react'

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
]

const skillGroups = [
  ['Languages', 'JavaScript', 'TypeScript', 'Python', 'Java'],
  ['Frontend', 'React.js', 'Next.js'],
  ['Backend', 'Node.js', 'Express.js'],
  ['Database', 'MongoDB', 'PostgreSQL', 'MySQL', 'Neo4j'],
  ['GenAI', 'LangChain', 'LangGraph', 'RAG Pipelines'],
  ['DevOps / Tools', 'Docker', 'Turborepo', 'AWS'],
]

const projects = [
  {
    title: 'Freelance Project — E-commerce Platform',
    eyebrow: 'Full-stack e-commerce for a candle-making startup',
    description: 'A complete online store built for a real client — product catalog, cart, and checkout, shipped and live in production.',
    stack: ['React', 'Node.js', 'MongoDB', 'Express.js', 'TailwindCSS'],
    github: 'https://github.com/Vineetchelani1304/melted-flames-frontend',
    demo: 'https://melted-flames.vercel.app/',
  },
  {
    title: 'PrepAI',
    eyebrow: 'GenAI Career Preparation Assistant',
    description: 'A personalized career chatbot with memory, roadmap generation, resume analysis, and cover letter drafting.',
    stack: ['LangGraph', 'Gemini', 'RAG', 'mem0', 'ChromaDB', 'Neo4j'],
    github: 'https://github.com/Vineetchelani1304/PrepAI',
    demo: 'https://github.com/',
  },
  {
    title: 'Project Management System',
    eyebrow: 'Scalable task & project platform',
    description: 'A full-stack workspace with RBAC, monorepo architecture, and CI/CD via GitHub Actions.',
    stack: ['Next.js', 'Node.js', 'PostgreSQL', 'Turborepo'],
    github: 'https://github.com/Vineetchelani1304/Project_management',
    demo: 'https://github.com/',
  },
  
]

const fadeUp = (reduce: boolean, delay = 0) => ({
  initial: { opacity: 0, y: reduce ? 0 : 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: reduce ? 0 : 0.55, delay: reduce ? 0 : delay },
})

function SocialLinks() {
  return (
    <div className="flex items-center gap-4" aria-label="Social links">
      <a className="social-link" href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub">
        <GitBranch />
      </a>
      <a className="social-link" href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
        <BriefcaseBusiness />
      </a>
      <a className="social-link" href="mailto:vineetchelani13@gmail.com" aria-label="Email">
        <Mail />
      </a>
      <a className="social-link" href="Phone:+91-9172071820" aria-label="Phone">
        <Phone />
      </a>
    </div>
  )
}

export default function Page() {
  const reduce = useReducedMotion()

  return (
    <main className="min-h-screen overflow-hidden">
      <div className="site-shell">
        <header className="mobile-header">
          <a href="#top" className="brand-mark">VC<span>.</span></a>
          <a href="#contact" className="mobile-contact">Let&apos;s talk <ArrowUpRight /></a>
        </header>

        <aside className="sidebar">
          <div>
            <a href="#top" className="brand-mark">VC<span>.</span></a>
            <p className="sidebar-kicker">Software Developer</p>
            <p className="sidebar-copy">Building thoughtful products at the intersection of scalable systems and applied AI.</p>
          </div>
          <nav className="sidebar-nav" aria-label="Primary navigation">
            {navItems.map((item, index) => (
              <a href={item.href} key={item.label} className="nav-item">
                <span className="nav-line" />
                <span><span className="nav-index">0{index + 1}</span>{item.label}</span>
              </a>
            ))}
          </nav>
          <div className="sidebar-footer">
            <SocialLinks />
            <p><MapPin /> Mumbai, India</p>
          </div>
        </aside>

        <div className="content-column" id="top">
          <section className="hero-section">
            <motion.div {...fadeUp(!!reduce)}>
              <p className="overline"><span className="status-dot" /> Available for meaningful work</p>
              <h1>Hi, I&apos;m <span>Vineet</span><br />Chelani.</h1>
              <p className="hero-lede">Software Developer building scalable web apps &amp; AI-powered solutions.</p>
              <div className="hero-actions">
                <a className="button button-primary" href="#projects">View projects <ArrowUpRight /></a>
                <a className="button button-quiet" href="/resume.pdf" download>Resume <Download /></a>
              </div>
            </motion.div>
            <motion.div className="hero-terminal" {...fadeUp(!!reduce, 0.12)}>
              <div className="terminal-top"><span /><span /><span /><small>vineet@portfolio ~ %</small></div>
              <div className="terminal-body">
                <p><b>const</b> developer = {'{'}</p>
                <p className="terminal-indent">focus: <i>&quot;clean architecture&quot;</i>,</p>
                <p className="terminal-indent">craft: <i>&quot;impactful UX&quot;</i>,</p>
                <p className="terminal-indent">curiosity: <i>true</i></p>
                <p>{'}'}</p>
                <p className="terminal-prompt"><span>›</span> building<span className="cursor" /></p>
              </div>
            </motion.div>
          </section>

          <section id="about" className="portfolio-section">
            <motion.div {...fadeUp(!!reduce)}><SectionLabel number="01" title="About" /></motion.div>
            <div className="about-grid">
              <motion.div className="about-intro" {...fadeUp(!!reduce, 0.08)}>
                <p>I&apos;m a software developer who enjoys turning complex problems into simple, reliable experiences.</p>
                <p>My work spans full-stack development and GenAI — from product architecture to LangChain, LangGraph, and RAG systems. I care about the details that make software feel considered.</p>
              </motion.div>
              <motion.div className="education-note" {...fadeUp(!!reduce, 0.16)}>
                <p className="note-label">Currently learning</p>
                <p>Building deeper systems intuition through hands-on work with distributed web applications and intelligent interfaces.</p>
                <div className="education-rule" />
                <p className="note-label">Education</p>
                <p className="education-title">B.E. Computer Engineering</p>
                <p>Vivekanand Education Society&apos;s Institute of Technology, Mumbai</p>
                <p className="muted">2022 — 2026 <span>·</span> CGPA 9.17 / 10</p>
              </motion.div>
            </div>
          </section>

          <section id="skills" className="portfolio-section">
            <motion.div {...fadeUp(!!reduce)}><SectionLabel number="02" title="Skills" /></motion.div>
            <div className="skills-grid">
              {skillGroups.map(([label, ...items], index) => (
                <motion.div className="skill-group" key={label} {...fadeUp(!!reduce, index * 0.04)}>
                  <p className="skill-label">{label}</p>
                  <div className="skill-list">{items.map((item) => <span key={item}>{item}</span>)}</div>
                </motion.div>
              ))}
            </div>
          </section>

          <section id="projects" className="portfolio-section">
            <motion.div {...fadeUp(!!reduce)}><SectionLabel number="03" title="Selected projects" /></motion.div>
            <div className="projects-list">
              {projects.map((project, index) => (
                <motion.article className="project-card" key={project.title} {...fadeUp(!!reduce, index * 0.08)} whileHover={reduce ? undefined : { y: -6 }}>
                  <div className="project-number">0{index + 1}</div>
                  <div className="project-content">
                    <p className="project-eyebrow">{project.eyebrow}</p>
                    <h3>{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  </div>
                  <div className="project-links">
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`${project.title} GitHub`}><GitBranch /></a>
                    <a href={project.demo} target="_blank" rel="noreferrer" aria-label={`${project.title} demo`}><ArrowUpRight /></a>
                  </div>
                </motion.article>
              ))}
            </div>
          </section>

          <section id="achievements" className="portfolio-section achievements-section">
            <motion.div {...fadeUp(!!reduce)}><SectionLabel number="04" title="Achievements" /></motion.div>
            <div className="achievement-list">
              <motion.div className="achievement-row" {...fadeUp(!!reduce, 0.08)}><Sparkles /><div><strong>2nd Place</strong><p>Medino&apos;sXAdvitya&apos;26 Hackathon, IIT Ropar <span>· 300+ teams · Feb 2026</span></p></div></motion.div>
              <motion.div className="achievement-row" {...fadeUp(!!reduce, 0.14)}><Sparkles /><div><strong>Most Innovative Idea</strong><p>Hack to Crack 3.0, Mumbai <span>· 80+ teams · Mar 2026</span></p></div></motion.div>
            </div>
          </section>

          <motion.footer id="contact" className="contact-section" {...fadeUp(!!reduce)}>
            <p className="overline">Have an idea in mind?</p>
            <h2>Let&apos;s build<br /><span>something.</span></h2>
            <a className="contact-email" href="mailto:vineetchelani13@gmail.com">vineetchelani13@gmail.com <ArrowUpRight /></a>
            <div className="footer-bottom"><p>Designed &amp; built by Vineet Chelani.</p><SocialLinks /></div>
          </motion.footer>
        </div>
      </div>
    </main>
  )
}

function SectionLabel({ number, title }: { number: string; title: string }) {
  return <div className="section-label"><span>{number}</span><h2>{title}</h2><div /></div>
}
