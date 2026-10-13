import { useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, Plus, Droplets, HeartPulse, Leaf, UsersRound } from 'lucide-react';
import { gsap } from 'gsap';
import './HomePage.css';
import communityWork from './assets/community-work.jpeg';
import womenOutreach from './assets/women-outreach.jpeg';
import projectOne from './assets/project-01.jpeg';
import projectTwo from './assets/project-02.jpeg';
import pragyaHero from './assets/pragya-hero.png';
import standforBackground from './assets/standfor-background.png';
import awardMP from './assets/award-mp.jpg';
import awardMLA from './assets/award-mla.jpg';
import awardMinister from './assets/award-minister.jpg';

const projects = [
  { title: 'A cleaner way to manage menstrual waste', place: 'Tehri Garhwal, Uttarakhand', image: womenOutreach, label: 'WASTE MANAGEMENT', copy: 'Working with local bodies to separate, collect, and safely dispose of menstrual waste across urban and rural communities.' },
  { title: 'Better access to biodegradable pads', place: 'Communities across Uttarakhand', image: communityWork, label: 'MENSTRUAL HEALTH', copy: 'Supporting awareness and access to biodegradable sanitary pads, while building toward locally made cloth pads with self-help groups.' },
  { title: 'Awareness that reaches communities', place: 'Uttarakhand, India', image: projectOne, label: 'WOMEN & CHILDREN', copy: 'Community programs focused on women’s empowerment, health, hygiene, education, and the welfare of children.' },
];
const focusAreas = [
  { title: 'Women’s empowerment', icon: UsersRound, copy: 'Supporting dignity, opportunity, and wellbeing for women.' },
  { title: 'Health & hygiene', icon: HeartPulse, copy: 'Promoting menstrual health, hygiene, and better access to care.' },
  { title: 'Children’s welfare', icon: Droplets, copy: 'Working for the education, safety, and welfare of children.' },
  { title: 'Environment', icon: Leaf, copy: 'Helping communities build cleaner and more sustainable systems.' },
];
const goals = [
  { title: 'Expand biodegradable sanitary pad distribution', copy: 'Increase awareness and access to biodegradable sanitary pads in communities across Uttarakhand.', image: projectTwo, note: 'HEALTHIER CHOICES FOR WOMEN' },
  { title: 'Establish cloth-pad units with self-help groups', copy: 'Build women-led livelihoods while making reusable menstrual products more accessible.', image: womenOutreach, note: 'WOMEN-LED LIVELIHOODS' },
  { title: 'Keep improving menstrual-waste collection', copy: 'Strengthen source segregation, separate collection, and responsible waste handling.', image: communityWork, note: 'CLEANER COMMUNITIES' },
];
const impacts = [
  { title: '30,000+ women benefited', image: communityWork },
  { title: '6,238 kg menstrual waste collected at source', image: womenOutreach },
  { title: '49 collection vehicles with separate partitions', image: projectOne },
];
const recognitions = [
  { image: awardMP, label: 'MALA RAJLAKSHMI SHAH', copy: 'Appreciation from the Member of Parliament for Tehri Garhwal.' },
  { image: awardMLA, label: 'TEHRI', copy: 'Recognition from the Member of Legislative Assembly, Tehri.' },
  { image: awardMinister, label: 'UTTARAKHAND', copy: 'Appreciation from Cabinet Minister Shri Subodh Uniyal.' },
];
const impactRibbonText = Array(10).fill('Trusted by communities · Proven by impact · Together for a better future').join(' · ');
const volunteerRibbonText = Array(12).fill('Join Pragya Foundation').join(' · ');
const newsImages = Object.entries(import.meta.glob<string>('./assets/print-*', { eager: true, query: '?url', import: 'default' }))
  .sort(([a], [b]) => a.localeCompare(b)).slice(0, 5).map(([path, image], index) => ({ path, image, label: `Media coverage ${String(index + 1).padStart(2, '0')}` }));
const faqs = [
  ['What does Pragya Foundation work on?', 'We work to empower women and support the welfare of women and children, with initiatives in menstrual health, hygiene, education, and environmental sustainability.'],
  ['Where does the foundation work?', 'Our projects have covered urban and rural communities in Uttarkashi, Rudraprayag, and Tehri Garhwal in Uttarakhand.'],
  ['How can I get involved?', 'You can volunteer, contribute resources, become a knowledge partner, collaborate with us, or help share our work.'],
  ['How is menstrual waste handled?', 'The project promotes segregation at source, separate collection compartments in waste vehicles, and transfer to biomedical waste collection facilities.'],
  ['How can I support the foundation?', 'You can contribute to the foundation’s work through its donation page or contact the team to discuss ways to collaborate.'],
];

export default function HomePage() {
  const [activeFocus, setActiveFocus] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ribbonTextRefs = useRef<SVGTextPathElement[]>([]);
  useLayoutEffect(() => {
    const tween = gsap.to(ribbonTextRefs.current, { attr: { startOffset: '-80%' }, duration: 24, ease: 'none', repeat: -1 });
    return () => { tween.kill(); };
  }, []);
  function sendVolunteerEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [...new FormData(event.currentTarget).entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:pragyafoundation2024@gmail.com?subject=${encodeURIComponent('Volunteer enquiry')}&body=${encodeURIComponent(body)}`;
  }
  return <main className="altruist-home" id="top">
    <section className="ah-hero">
      <img className="ah-hero-image" src={pragyaHero} alt="Women learning sewing and textile skills through Pragya Foundation" />
      <div className="ah-hero-wash" />
      <div className="ah-hero-copy">
        <h1><span>Let’s create a</span><span className="ah-outline">real impact</span><span>with you</span></h1>
        <a className="ah-button ah-hero-button" href="/get-involved/donate">Donate now <ArrowRight size={17}/></a>
      </div>
      <div className="ah-donors"><div className="ah-avatar-stack"><img src={communityWork} alt=""/><img src={womenOutreach} alt=""/><img src={projectOne} alt=""/><img src={projectTwo} alt=""/></div><span><b>30,000+</b> women benefited</span></div>
    </section>

    <section className="ah-recognition-strip" aria-label="Pragya Foundation's areas of work">
      <p>Working with communities across Uttarakhand</p>
      <div className="ah-wordmarks">
        <div className="ah-wordmarks-track">
          {[0, 1].map((copy) => <div className="ah-wordmark-group" key={copy} aria-hidden={copy === 1}>
            <span>Women’s welfare</span><span>Menstrual health</span><span>Children’s welfare</span><span>Health &amp; hygiene</span><span>Environment</span><span>Education</span>
          </div>)}
        </div>
      </div>
    </section>

    <section className="ah-purpose" id="our-purpose">
      <span className="ah-badge">Our Purpose</span>
      <h2>Empowering women.<br/>Improving lives.</h2>
      <p>Pragya Foundation works to make life better for women and children, while helping communities care for the environment around them.</p>
    </section>

    <section className="ah-standfor">
      <div className="ah-standfor-bg"><img src={standforBackground} alt=""/></div>
      <div className="ah-standfor-card">
        <div className="ah-focus-list"><h3>What We Stand For</h3>{focusAreas.map(({ title, icon: Icon }, index) => <button className={activeFocus === index ? 'active' : ''} key={title} onClick={() => setActiveFocus(index)}><span><Icon size={20}/></span>{title}</button>)}</div>
        <div className="ah-focus-feature"><img src={[communityWork, womenOutreach, projectOne, projectTwo][activeFocus]} alt="Pragya Foundation community work"/><div><span>PRAGYA FOUNDATION</span><h3>{focusAreas[activeFocus].copy}</h3></div></div>
      </div>
      <svg className="ah-wave-ribbon ah-wave-ribbon-desktop" viewBox="0 0 1920 860" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-wave-path-desktop" d="M -160 850 C 250 850 430 800 700 690 C 970 580 1130 475 1410 445 C 1630 422 1800 465 2080 480"/></defs>
        <path className="ah-wave-band" d="M -160 850 C 250 850 430 800 700 690 C 970 580 1130 475 1410 445 C 1630 422 1800 465 2080 480"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[0] = node; }} href="#pragya-wave-path-desktop" startOffset="0">For every woman&nbsp; • &nbsp;For every child&nbsp; • &nbsp;For every community&nbsp; • &nbsp;For a healthier environment&nbsp; • &nbsp;For every woman&nbsp; • &nbsp;For every child&nbsp; • &nbsp;For every community&nbsp; • &nbsp;For a healthier environment&nbsp; • &nbsp;For every woman&nbsp; • &nbsp;For every child&nbsp; • &nbsp;For every community&nbsp; • &nbsp;For a healthier environment&nbsp; • &nbsp;For every woman&nbsp; • &nbsp;</textPath></text>
      </svg>
      <svg className="ah-wave-ribbon ah-wave-ribbon-mobile" viewBox="0 0 430 670" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-wave-path-mobile" d="M -65 660 C 90 660 145 632 205 575 C 270 513 335 465 490 460"/></defs>
        <path className="ah-wave-band" d="M -65 660 C 90 660 145 632 205 575 C 270 513 335 465 490 460"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[1] = node; }} href="#pragya-wave-path-mobile" startOffset="0">For every woman&nbsp; • &nbsp;For every child&nbsp; • &nbsp;For every community&nbsp; • &nbsp;For a healthier environment&nbsp; • &nbsp;For every woman&nbsp; • &nbsp;For every child&nbsp; • &nbsp;For every community&nbsp; • &nbsp;For a healthier environment&nbsp; • &nbsp;For every woman&nbsp; • &nbsp;</textPath></text>
      </svg>
    </section>

    <section className="ah-projects" id="projects">
      <div className="ah-section-heading"><div><span className="ah-badge">In Progress</span><h2>Ongoing Projects</h2></div><p>These are the projects currently transforming lives. Together, we can reach further and create lasting change.</p></div>
      <div className="ah-project-grid">{projects.map((project) => <article className="ah-project-card" key={project.title}>
        <img src={project.image} alt=""/><div className="ah-project-raised">Pragya Foundation</div>
        <div className="ah-project-panel"><span>{project.label}</span><h3>{project.title}</h3><p>{project.place}</p><a className="ah-button" href="/projects">Explore project <ArrowRight size={16}/></a></div>
      </article>)}</div>
    </section>

    <section className="ah-goals" id="goals">
      <header className="ah-centered-heading"><span className="ah-badge">Goals</span><h2>The Way Ahead</h2><p>Our next steps focus on healthier choices, women-led livelihoods, and better systems that can serve both urban and rural communities.</p></header>
      <div className="ah-goal-list">{goals.map((goal, index) => <article className={`ah-goal-row ${index % 2 ? 'reverse' : ''}`} key={goal.title}>
        <div className="ah-goal-image"><img src={goal.image} alt="Community members taking part in foundation work"/><span>{goal.note}</span></div>
        <div className="ah-goal-copy"><div className="ah-goal-stamp"><Check size={16}/><span>{goal.note}</span></div><h3>{goal.title}</h3><p>{goal.copy}</p><a href="/projects/impact">Learn about our impact <ArrowUpRight size={16}/></a></div>
      </article>)}</div>
    </section>

    <section className="ah-impacts" id="impact">
      <header className="ah-section-heading"><div><span className="ah-badge">Our Impact</span><h2>Changes We Proudly Made</h2></div><p>Progress built through local partnerships, practical solutions, and the commitment of communities.</p></header>
      <div className="ah-impact-grid">{impacts.map((item) => <article key={item.title}><img src={item.image} alt="Pragya Foundation community program"/><span><ArrowUpRight size={17}/></span><h3>{item.title}</h3></article>)}</div>
      <svg className="ah-impact-ribbon ah-impact-ribbon-desktop" viewBox="0 0 1920 240" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-impact-wave-desktop" d="M -150 230 C 250 230 440 210 690 172 C 940 134 1120 68 1390 42 C 1620 20 1800 38 2070 66"/></defs>
        <path className="ah-wave-band" d="M -150 230 C 250 230 440 210 690 172 C 940 134 1120 68 1390 42 C 1620 20 1800 38 2070 66"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[2] = node; }} href="#pragya-impact-wave-desktop" startOffset="20%">{impactRibbonText}</textPath></text>
      </svg>
      <svg className="ah-impact-ribbon ah-impact-ribbon-mobile" viewBox="0 0 430 210" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-impact-wave-mobile" d="M -65 200 C 90 200 145 183 205 145 C 270 105 335 45 490 38"/></defs>
        <path className="ah-wave-band" d="M -65 200 C 90 200 145 183 205 145 C 270 105 335 45 490 38"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[3] = node; }} href="#pragya-impact-wave-mobile" startOffset="20%">{impactRibbonText}</textPath></text>
      </svg>
    </section>

    <section className="ah-recognitions" id="recognition">
      <header className="ah-centered-heading"><span className="ah-badge">Recognition</span><h2>Appreciated for our work</h2><p>Pragya Foundation’s community work has received appreciation from leaders in Uttarakhand.</p></header>
      <div className="ah-award-grid">{recognitions.map((item) => <article key={item.label}><img src={item.image} alt={item.copy}/><p>{item.copy}</p><span>{item.label}</span></article>)}</div>
    </section>

    <section className="ah-news" id="in-the-news">
      <header className="ah-section-heading"><div><span className="ah-badge">In the News</span><h2>Our work, in the media</h2></div><p>Coverage and stories documenting Pragya Foundation’s work with communities.</p></header>
      <div className="ah-news-grid">{newsImages.map((item) => <a href="/in-the-news-print-media" key={item.path}><img src={item.image} alt={item.label}/><span>{item.label}<ArrowUpRight size={15}/></span></a>)}</div>
      <a className="ah-text-link" href="/in-the-news-print-media">View all media coverage <ArrowRight size={16}/></a>
    </section>

    <section className="ah-faq" id="faq">
      <header className="ah-centered-heading"><span className="ah-badge">FAQ</span><h2>Our Frequently Asked Questions</h2><p>We’ve answered the most common questions we get.</p></header>
      <div className="ah-faq-list">{faqs.map(([question, answer], index) => <article className={openFaq === index ? 'active' : ''} key={question}><button onClick={() => setOpenFaq(openFaq === index ? null : index)}><span>{question}</span><Plus size={20}/></button>{openFaq === index && <p>{answer}</p>}</article>)}</div>
    </section>

    <section className="ah-volunteer" id="volunteer">
      <img className="ah-volunteer-bg" src={projectTwo} alt=""/>
      <div className="ah-volunteer-copy"><span className="ah-badge">Join Us</span><h2>Want to volunteer?</h2><p>Join Pragya Foundation in supporting women and children, advancing menstrual health, and building more sustainable communities.</p><ul><li><Check size={17}/> Support real causes that matter</li><li><Check size={17}/> Flexible ways to contribute your time</li><li><Check size={17}/> Work with local community initiatives</li></ul></div>
      <form className="ah-volunteer-form" onSubmit={sendVolunteerEnquiry}><label>Full Name<input name="Full name" required placeholder="Your name"/></label><label>Email ID<input name="Email" required type="email" placeholder="you@example.com"/></label><label>Phone Number<input name="Mobile number" required type="tel" placeholder="+91"/></label><label>Location<input name="Current location" placeholder="City or district"/></label><label className="wide">Message<textarea name="Message" rows={3} placeholder="How would you like to contribute?"/></label><button className="ah-button" type="submit">Submit <ArrowRight size={16}/></button></form>
      <svg className="ah-volunteer-ribbon ah-volunteer-ribbon-desktop" viewBox="0 0 1920 300" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-volunteer-wave-desktop" d="M -150 285 C 250 280 440 250 690 205 C 940 160 1120 100 1390 70 C 1620 45 1800 60 2070 92"/></defs>
        <path className="ah-wave-band" d="M -150 285 C 250 280 440 250 690 205 C 940 160 1120 100 1390 70 C 1620 45 1800 60 2070 92"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[4] = node; }} href="#pragya-volunteer-wave-desktop" startOffset="20%">{volunteerRibbonText}</textPath></text>
      </svg>
      <svg className="ah-volunteer-ribbon ah-volunteer-ribbon-mobile" viewBox="0 0 430 250" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-volunteer-wave-mobile" d="M -65 238 C 90 238 145 218 205 178 C 270 138 335 78 490 70"/></defs>
        <path className="ah-wave-band" d="M -65 238 C 90 238 145 218 205 178 C 270 138 335 78 490 70"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[5] = node; }} href="#pragya-volunteer-wave-mobile" startOffset="20%">{volunteerRibbonText}</textPath></text>
      </svg>
    </section>
  </main>;
}
