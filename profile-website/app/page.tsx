import { assetPath } from '@/lib/asset-path';
import Image from 'next/image';
import { ArrowUpRight, ArrowDown, Download, MapPin, Layers3, Route, ShieldCheck, Zap, Users, Target } from 'lucide-react';
import { profile, experience, expertise, education } from '@/lib/profile';
import { Navigation } from '@/components/navigation';

export const dynamic = 'force-static';

const icons = [Route, ShieldCheck, Users, Zap, Target, Layers3];
export default function Home() {
  return <>
    <a className="skip-link" href="#main">Skip to content</a>
    <Navigation />
    <main id="main">
      <section className="hero container" aria-labelledby="intro">
        <div className="hero-copy">
          <p className="eyebrow"><span className="small-line" /> LEADERSHIP. CLARITY. DELIVERY.</p>
          <h1 id="intro">I am <span>T.M. Rohan<span className="coral">.</span></span></h1>
          <p className="hero-role">Senior Program / Project Manager</p>
          <p className="hero-description">Bringing clarity to complex programs.<br />Turning strategy into delivery.</p>
          <p className="hero-specialties">Technology delivery <span>·</span> Transformation <span>·</span> Governance</p>
          <div className="hero-actions"><a className="button button-primary" href="#experience">View my experience <ArrowUpRight size={18} /></a><a className="button button-outline" href={profile.resume} download>Download resume <Download size={17} /></a></div>
          <div className="hero-location"><MapPin size={15} /> Bengaluru, India <span className="divider" /> 13+ years of leadership</div>
        </div>
        <div className="portrait-wrap"><div className="portrait-frame"><Image unoptimized src={assetPath("/rohan-portrait.png")} alt="T.M. Rohan in a dark suit and tie" width="519" height="519" fetchPriority="high" /><div className="portrait-shade" /></div><span className="portrait-caption">FROM THE FRONT LINE TO PROGRAM LEADERSHIP</span></div>
      </section>
      <div className="container"><div className="impact-strip" aria-label="Selected career achievements"><div><strong>17<span> countries</span></strong><p>Technology integration portfolio</p></div><div><strong>95<span>%</span></strong><p>On-time delivery at State Street</p></div><div><strong>120<span>+ hours</span></strong><p>Saved monthly through automation</p></div></div></div>
      <section className="section container about-grid" id="about"><div><p className="eyebrow">01 / ABOUT ME</p><h2>Purpose in leadership.<br /><span className="muted-heading">Precision in delivery.</span></h2></div><div className="about-copy"><p className="lead">I lead complex programs by aligning people, priorities, and execution.</p><p>My 13+ years span enterprise technology, financial services, telecom, and the Indian Army. I bring the discipline of military leadership together with corporate delivery experience to help teams navigate complexity and deliver with confidence.</p><p>From planning and governance to UAT, go-live, and operational handover, I focus on clear ownership, sound decisions, and measurable outcomes.</p><div className="about-signoff"><span className="coral">T.M. Rohan</span><span>Program leader. Veteran. Problem solver.</span></div></div></section>
      <section className="section section-alt" id="experience"><div className="container"><div className="section-heading"><div><p className="eyebrow">02 / MY JOURNEY</p><h2>Experience that delivers.</h2></div><p>Across industries. Across borders.<br />Grounded in accountable leadership.</p></div><div className="timeline">{experience.map((job,i)=><article className="career" key={job.company}><div className="career-meta"><span className="timeline-dot" /><p className="career-date">{job.period}</p><span className="career-sector">{job.sector}</span></div><div className="career-content"><div className="career-title"><div><h3>{job.role}</h3><p className="company">{job.company} <span> / {job.location}</span></p></div>{i===0&&<span className="current-tag">CURRENT</span>}</div><ul>{job.results.map(result=><li key={result}>{result}</li>)}</ul><div className="tags">{job.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div></article>)}</div></div></section>
      <section className="section container" id="expertise"><div className="section-heading"><div><p className="eyebrow">03 / WHAT I BRING</p><h2>Clarity at every stage.</h2></div><p>The capabilities behind<br />consistent, confident delivery.</p></div><div className="expertise-grid">{expertise.map((item,i)=>{const Icon=icons[i];return <article className="expertise-card" key={item.title}><Icon size={28} strokeWidth={1.5} /><span className="card-number">0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>})}</div><div className="toolbox"><p className="eyebrow">MY TOOLKIT</p><div className="tools">{profile.tools.map(tool=><span key={tool}>{tool}</span>)}</div></div></section>
      <section className="section section-alt"><div className="container education-grid"><div><p className="eyebrow">04 / CONTINUOUS LEARNING</p><h2>A foundation<br />for what’s next.</h2><p className="education-note">Management, technology, and strategy.</p></div><div className="education-list">{education.map((item,i)=><article key={item.title}><span className="education-number">0{i+1}</span><div><h3>{item.title}</h3><p>{item.institution}</p></div></article>)}</div></div></section>
      <section className="section container contact" id="contact"><p className="eyebrow">05 / LET’S CONNECT</p><h2>Great delivery starts<br />with a conversation<span className="coral">.</span></h2><p>Let’s talk about program leadership, technology delivery,<br className="desktop-break" /> and your next transformation.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email} <ArrowUpRight /></a><div className="contact-location"><MapPin size={17} /> {profile.location}</div></section>
    </main><footer className="container footer"><a className="wordmark" href="#main" aria-label="T.M. Rohan, back to top">rohan<span>.</span></a><p>© {new Date().getFullYear()} T.M. Rohan</p><a className="back-top" href="#main">Back to top <ArrowDown size={15} /></a></footer>
  </>;
}
