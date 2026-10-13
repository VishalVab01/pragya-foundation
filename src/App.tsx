import { ArrowDown, ArrowRight, ArrowUpRight, Check, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import communityWork from './assets/community-work.jpeg';
import womenOutreach from './assets/women-outreach.jpeg';
import logo from './assets/pragya-logo.jpg';

const impactStats = [
  { value: '30,000+', label: 'women benefited through foundation projects' },
  { value: '6,238 kg', label: 'menstrual waste collected at source in Tehri' },
  { value: '49', label: 'collection vehicles modified with separate partitions' },
];
const projects = [
  { tag: 'WASTE MANAGEMENT', title: 'A cleaner way to manage menstrual waste', place: 'Tehri Garhwal, Uttarakhand', image: womenOutreach, copy: 'Working with local bodies to separate, collect, and safely dispose of menstrual waste across urban and rural communities.' },
  { tag: 'MENSTRUAL HEALTH', title: 'Better access to biodegradable pads', place: 'Communities across Uttarakhand', image: communityWork, copy: 'Supporting awareness and access to biodegradable sanitary pads, while building toward locally made cloth pads with self-help groups.' },
  { tag: 'WOMEN & CHILDREN', title: 'Awareness that reaches communities', place: 'Uttarakhand', image: womenOutreach, copy: 'Community programs focused on women’s empowerment, health, hygiene, education, and the welfare of children.' },
];
const faqs = [
  ['What does Pragya Foundation work on?', 'We work to empower women and support the welfare of women and children, with initiatives in menstrual health, hygiene, education, and environmental sustainability.'],
  ['Where does the foundation work?', 'Our projects have covered urban and rural communities in Uttarkashi, Rudraprayag, and Tehri Garhwal in Uttarakhand.'],
  ['How can I get involved?', 'You can volunteer, contribute resources, become a knowledge partner, collaborate with us, or help share our work.'],
  ['How is menstrual waste handled?', 'The project promotes segregation at source, separate collection compartments in waste vehicles, and transfer to biomedical waste collection facilities.'],
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const nav = [['Home', '#top'], ['Our work', '#work'], ['Our impact', '#impact'], ['Volunteer', '#get-involved']];
  return <>
    <header className="site-header shell">
      <a className="brand" href="#top" aria-label="Pragya Foundation home"><img src={logo} alt="" /><span>Pragya<br/><small>FOUNDATION</small></span></a>
      <nav className={menuOpen ? 'nav open' : 'nav'}>{nav.map(([label, href]) => <a onClick={() => setMenuOpen(false)} href={href} key={label}>{label}</a>)}<a className="nav-cta" href="https://pragyafoundation.com/get-involved/donate/" target="_blank" rel="noreferrer">Donate now <ArrowUpRight size={15}/></a></nav>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
    </header>
    <main id="top">
      <section className="hero shell">
        <img className="hero-img" src={womenOutreach} alt="A community gathering in Uttarakhand" /><div className="hero-shade" />
        <div className="hero-copy"><h1>Let’s create a<br/><em>real impact</em><br/>with you</h1><a href="https://pragyafoundation.com/get-involved/donate/" target="_blank" rel="noreferrer" className="button button-white">Donate now <ArrowRight size={17}/></a></div>
        <div className="hero-foot"><div className="mini-avatars"><span>P</span><span>F</span><span>U</span><span>+</span></div><p>Working with communities<br/><b>30,000+ women benefited</b></p><a href="#purpose" aria-label="Scroll to our purpose"><ArrowDown size={17}/></a></div><div className="hero-note">A foundation for women, children &amp; a healthier environment</div>
      </section>
      <section className="trust-row shell"><p>ROOTED IN COMMUNITY · WORKING ACROSS UTTARAKHAND · BUILDING A SUSTAINABLE FUTURE</p><div className="trust-rule"/></section>
      <section className="purpose shell" id="purpose">
        <div className="purpose-top"><div className="section-label"><span>01</span> OUR PURPOSE</div><div><h2>Empowering women.<br/><i>Improving lives.</i></h2><p className="lead">Pragya Foundation works to make life better for women and children, while helping communities care for the environment around them.</p></div><div className="purpose-side">A trust established in January 2024<br/><a href="#about">Our story <ArrowUpRight size={15}/></a></div></div>
        <div className="purpose-lower"><div className="standfor"><p className="mini-label">WHAT WE STAND FOR</p><div className="pill-list"><span>Women’s empowerment</span><span>Health &amp; hygiene</span><span>Children’s welfare</span><span>Environmental care</span></div></div><figure className="purpose-photo"><img src={communityWork} alt="Pragya Foundation working with local women and students"/><figcaption>Knowledge, dignity, and opportunity for every community.</figcaption></figure></div>
      </section>
      <section className="projects-section" id="work"><div className="shell"><div className="section-heading"><div><div className="section-label"><span>02</span> OUR WORK</div><h2>Change begins<br/><i>close to home.</i></h2></div><p>From menstrual health to waste management, our work starts by listening to communities and finding practical ways forward.</p></div>
        <div className="project-grid">{projects.map((project, i) => <article className="project-card" key={project.title}><a href="#get-involved" className="project-image"><img src={project.image} alt=""/><span className="card-arrow"><ArrowUpRight size={18}/></span><span className="project-index">0{i + 1}</span></a><div className="project-meta"><span>{project.tag}</span><span>{project.place}</span></div><h3>{project.title}</h3><p>{project.copy}</p></article>)}</div>
      </div></section>
      <section className="impact-section shell" id="impact"><div className="impact-intro"><div className="section-label light"><span>03</span> OUR IMPACT</div><h2>Small steps.<br/><i>Lasting change.</i></h2><p>Progress built through local partnerships, practical solutions, and the commitment of communities.</p><a href="https://pragyafoundation.com/projects/impact/" target="_blank" rel="noreferrer" className="text-link light-link">Explore our impact <ArrowUpRight size={16}/></a></div><div className="impact-content"><img className="impact-photo" src={communityWork} alt="Women and students taking part in a community program"/><div className="stats-grid">{impactStats.map((item) => <div className="stat" key={item.value}><strong>{item.value}</strong><p>{item.label}</p></div>)}</div><div className="impact-foot"><span>REPORTED BY PRAGYA FOUNDATION</span><span>TEHRI GARHWAL, UTTARAKHAND</span></div></div></section>
      <section className="goals shell"><div className="section-label"><span>04</span> THE WAY AHEAD</div><div className="goals-layout"><h2>Building a future<br/>where <i>women thrive.</i></h2><div className="goals-copy"><p>Our next steps focus on healthier choices, women-led livelihoods, and better systems that can serve both urban and rural communities.</p><ul><li><Check/> Expand biodegradable sanitary pad distribution</li><li><Check/> Establish cloth-pad units with self-help groups</li><li><Check/> Keep improving menstrual-waste collection</li></ul></div></div><div className="goal-image"><img src={womenOutreach} alt="Community members gathered for a local awareness program"/><div className="goal-caption"><span>OUR COMMITMENT</span><b>Local action, shared progress.</b><ArrowUpRight size={18}/></div></div></section>
      <section className="about-strip" id="about"><div className="shell about-inner"><div className="about-image"><img src={communityWork} alt="Pragya Foundation founder speaking with students"/></div><div className="about-copy"><div className="section-label"><span>05</span> ABOUT PRAGYA</div><h2>Change grows<br/>when we <i>work together.</i></h2><p>Inspired by years of social initiatives across Uttarakhand, Pragya Foundation brings people together to support underserved communities through education, healthcare, and women’s welfare.</p><a className="text-link" href="https://pragyafoundation.com/about-us/" target="_blank" rel="noreferrer">Meet the foundation <ArrowRight size={16}/></a><div className="signature">Pragya Foundation <span>Uttarakhand, India</span></div></div></div></section>
      <section className="faq-section shell"><div className="faq-head"><div className="section-label"><span>06</span> GOOD TO KNOW</div><h2>Questions,<br/><i>answered.</i></h2><p>Learn more about our work and the ways you can take part.</p></div><div className="faq-list">{faqs.map(([q, a], i) => <article className={openFaq === i ? 'faq-item active' : 'faq-item'} key={q}><button onClick={() => setOpenFaq(openFaq === i ? null : i)}><span>{q}</span><ChevronDown size={17}/></button>{openFaq === i && <p>{a}</p>}</article>)}</div></section>
      <section className="join-section shell" id="get-involved"><div className="join-image"><img src={womenOutreach} alt="Women attending a community awareness gathering"/><span>JOIN US · JOIN US · JOIN US ·</span></div><div className="join-copy"><div className="section-label light"><span>07</span> GET INVOLVED</div><h2>Be part of<br/><i>something good.</i></h2><p>Share your time, skills, resources, or voice. Together, we can build a brighter future for women and the environment.</p><ul><li><Check/> Volunteer with us</li><li><Check/> Become a knowledge partner</li><li><Check/> Collaborate or contribute resources</li></ul><a href="https://pragyafoundation.com/get-involved/" target="_blank" rel="noreferrer" className="button button-white">Find your way to help <ArrowRight size={17}/></a></div></section>
      <footer className="footer shell"><div className="footer-main"><a className="brand footer-brand" href="#top"><img src={logo} alt=""/><span>Pragya<br/><small>FOUNDATION</small></span></a><p>Empowering women.<br/>Improving lives.<br/>Caring for our environment.</p><div><span className="footer-label">SAY HELLO</span><a href="mailto:pragyafoundation2024@gmail.com">pragyafoundation2024@gmail.com</a><a href="tel:+919958591494">+91 99585 91494</a></div><div><span className="footer-label">VISIT</span><p>305, Deep Shikha, 8, Rajendra Place,<br/>New Delhi – 110008</p></div></div><div className="footer-bottom"><span>© 2026 Pragya Foundation</span><span>Working for women, children &amp; a sustainable future.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  </>;
}
export default App;
