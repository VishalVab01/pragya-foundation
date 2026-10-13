import { useLayoutEffect, useRef, useState, type FormEvent } from 'react';
import { ArrowRight, ArrowUpRight, Check, Plus, Droplets, HeartPulse, Leaf, UsersRound } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './HomePage.css';
import communityWork from './assets/community-work.jpeg';
import womenOutreach from './assets/women-outreach.jpeg';
import projectOne from './assets/project-01.jpeg';
import projectTwo from './assets/project-02.jpeg';
import pragyaHero from './assets/pragya-hero.png';
import standforBackground from './assets/standfor-background.png';
import altruistClouds from './assets/altruist-clouds.webp';
import awardMP from './assets/award-mp.jpg';
import awardMLA from './assets/award-mla.jpg';
import awardMinister from './assets/award-minister.jpg';
import childrenWelfareImage from './assets/children-welfare.jpg';
import environmentImage from './assets/environment.jpg';
import healthHygieneImage from './assets/health-hygiene.jpg';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  { title: 'A cleaner way to manage menstrual waste', place: 'Tehri Garhwal, Uttarakhand', image: womenOutreach, label: 'WASTE MANAGEMENT', copy: 'Working with local bodies to separate, collect, and safely dispose of menstrual waste across urban and rural communities.' },
  { title: 'Better access to biodegradable pads', place: 'Communities across Uttarakhand', image: communityWork, label: 'MENSTRUAL HEALTH', copy: 'Supporting awareness and access to biodegradable sanitary pads, while building toward locally made cloth pads with self-help groups.' },
  { title: 'Awareness that reaches communities', place: 'Uttarakhand, India', image: projectOne, label: 'WOMEN & CHILDREN', copy: 'Community programs focused on women’s empowerment, health, hygiene, education, and the welfare of children.' },
];
const focusAreas = [
  { title: 'Women’s empowerment', icon: UsersRound, copy: 'Supporting dignity, opportunity, and wellbeing for women.', image: standforBackground },
  { title: 'Health & hygiene', icon: HeartPulse, copy: 'Promoting menstrual health, hygiene, and better access to care.', image: healthHygieneImage },
  { title: 'Children’s welfare', icon: Droplets, copy: 'Working for the education, safety, and welfare of children.', image: childrenWelfareImage },
  { title: 'Environment', icon: Leaf, copy: 'Helping communities build cleaner and more sustainable systems.', image: environmentImage },
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
const volunteerRibbonText = Array(24).fill('Join Pragya Foundation').join(' · ');
const volunteerWavePath = 'M -300.0,150.0 L -287.5,156.8 L -275.0,163.8 L -262.5,170.6 L -250.0,177.4 L -237.5,184.0 L -225.0,190.6 L -212.5,196.7 L -199.1,203.1 L -186.6,209.0 L -174.1,214.6 L -161.6,220.1 L -149.1,225.3 L -136.6,230.3 L -124.1,234.8 L -111.6,238.9 L -99.1,242.8 L -85.7,246.4 L -73.2,249.6 L -60.7,252.3 L -48.2,254.6 L -35.7,256.6 L -23.2,258.0 L -10.7,259.1 L 1.8,259.8 L 14.3,260.0 L 27.7,259.8 L 40.2,259.1 L 52.7,258.0 L 65.2,256.6 L 77.7,254.6 L 90.2,252.3 L 102.7,249.6 L 115.2,246.4 L 128.6,242.8 L 141.1,238.9 L 153.6,234.8 L 166.1,230.3 L 178.6,225.3 L 191.1,220.1 L 203.6,214.6 L 216.1,209.0 L 228.6,203.1 L 242.1,196.7 L 254.6,190.6 L 267.0,184.0 L 279.5,177.4 L 292.0,170.6 L 304.5,163.8 L 317.0,156.8 L 329.5,150.0 L 342.0,143.2 L 355.5,136.2 L 368.0,129.4 L 380.5,122.6 L 393.0,116.0 L 405.4,109.4 L 417.9,103.3 L 430.4,96.9 L 442.9,91.0 L 455.4,85.4 L 468.9,79.9 L 481.4,74.7 L 493.9,69.7 L 506.4,65.2 L 518.9,61.1 L 531.4,57.2 L 543.8,53.6 L 556.3,50.4 L 568.8,47.7 L 582.3,45.4 L 594.8,43.4 L 607.3,42.0 L 619.8,40.9 L 632.3,40.2 L 644.8,40.0 L 657.3,40.2 L 669.7,40.9 L 683.2,42.0 L 695.7,43.4 L 708.2,45.4 L 720.7,47.7 L 733.2,50.4 L 745.7,53.6 L 758.2,57.2 L 770.7,61.1 L 783.2,65.2 L 796.6,69.7 L 809.1,74.7 L 821.6,79.9 L 834.1,85.4 L 846.6,91.0 L 859.1,96.9 L 871.6,103.3 L 884.1,109.4 L 896.6,116.0 L 910.0,122.6 L 922.5,129.4 L 935.0,136.2 L 947.5,143.2 L 960.0,150.0 L 972.5,156.8 L 985.0,163.8 L 997.5,170.6 L 1010.0,177.4 L 1023.4,184.0 L 1035.9,190.6 L 1048.4,196.7 L 1060.9,203.1 L 1073.4,209.0 L 1085.9,214.6 L 1098.4,220.1 L 1110.9,225.3 L 1123.4,230.3 L 1136.8,234.8 L 1149.3,238.9 L 1161.8,242.8 L 1174.3,246.4 L 1186.8,249.6 L 1199.3,252.3 L 1211.8,254.6 L 1224.3,256.6 L 1236.8,258.0 L 1250.3,259.1 L 1262.7,259.8 L 1275.2,260.0 L 1287.7,259.8 L 1300.2,259.1 L 1312.7,258.0 L 1325.2,256.6 L 1337.7,254.6 L 1351.2,252.3 L 1363.7,249.6 L 1376.2,246.4 L 1388.6,242.8 L 1401.1,238.9 L 1413.6,234.8 L 1426.1,230.3 L 1438.6,225.3 L 1451.1,220.1 L 1464.6,214.6 L 1477.1,209.0 L 1489.6,203.1 L 1502.1,196.7 L 1514.6,190.6 L 1527.0,184.0 L 1539.5,177.4 L 1552.0,170.6 L 1564.5,163.8 L 1578.0,156.8 L 1590.5,150.0 L 1603.0,143.2 L 1615.5,136.2 L 1628.0,129.4 L 1640.5,122.6 L 1653.0,116.0 L 1665.4,109.4 L 1677.9,103.3 L 1691.4,96.9 L 1703.9,91.0 L 1716.4,85.4 L 1728.9,79.9 L 1741.4,74.7 L 1753.9,69.7 L 1766.4,65.2 L 1778.9,61.1 L 1791.4,57.2 L 1804.8,53.6 L 1817.3,50.4 L 1829.8,47.7 L 1842.3,45.4 L 1854.8,43.4 L 1867.3,42.0 L 1879.8,40.9 L 1892.3,40.2 L 1905.7,40.0 L 1918.2,40.2 L 1930.7,40.9 L 1943.2,42.0 L 1955.7,43.4 L 1968.2,45.4 L 1980.7,47.7 L 1993.2,50.4 L 2005.7,53.6 L 2019.1,57.2 L 2031.6,61.1 L 2044.1,65.2 L 2056.6,69.7 L 2069.1,74.7 L 2081.6,79.9 L 2094.1,85.4 L 2106.6,91.0 L 2119.1,96.9 L 2132.5,103.3 L 2145.0,109.4 L 2157.5,116.0 L 2170.0,122.6 L 2182.5,129.4 L 2195.0,136.2 L 2207.5,143.2 L 2220.0,150.0';
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
  const mainRef = useRef<HTMLElement>(null);
  const ribbonTextRefs = useRef<SVGTextPathElement[]>([]);
  useLayoutEffect(() => {
    const standardRibbons = gsap.to(ribbonTextRefs.current.slice(0, 4), { attr: { startOffset: '-80%' }, duration: 24, ease: 'none', repeat: -1 });
    const volunteerRibbon = gsap.to(ribbonTextRefs.current.slice(4), { attr: { startOffset: '-80%' }, duration: 42, ease: 'none', repeat: -1 });
    return () => { standardRibbons.kill(); volunteerRibbon.kill(); };
  }, []);
  useLayoutEffect(() => {
    const root = mainRef.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const context = gsap.context(() => {
      const revealGroup = (selector: string, from: gsap.TweenVars, triggerSelector = selector, stagger = 0.1) => {
        const items = gsap.utils.toArray<HTMLElement>(selector);
        const trigger = root.querySelector(triggerSelector) ?? items[0];
        if (!trigger || items.length === 0) return;
        items.forEach((item, index) => {
          gsap.fromTo(item, { autoAlpha: 0, ...from }, {
            autoAlpha: 1, x: 0, y: 0, scale: 1, rotation: 0,
            duration: 0.85, delay: index * stagger, ease: 'power3.out',
            scrollTrigger: { trigger, start: 'top 84%', once: true },
          });
        });
      };

      gsap.fromTo('.ah-hero-image', { scale: 1.07 }, { scale: 1, duration: 1.8, ease: 'power2.out' });
      revealGroup('.ah-hero h1 > span', { y: 34 }, '.ah-hero', 0.13);
      revealGroup('.ah-hero-button', { y: 20 }, '.ah-hero', 0);
      revealGroup('.ah-donors', { y: 18 }, '.ah-hero', 0);

      revealGroup('.ah-recognition-strip > p', { y: 22 }, '.ah-recognition-strip', 0);
      revealGroup('.ah-wordmarks', { y: 20 }, '.ah-recognition-strip', 0);
      revealGroup('.ah-purpose > *', { y: 36 }, '.ah-purpose', 0.12);
      revealGroup('.ah-standfor-card', { y: 48, scale: 0.97 }, '.ah-standfor', 0);

      revealGroup('.ah-projects .ah-section-heading > *', { y: 30 }, '.ah-projects .ah-section-heading', 0.14);
      revealGroup('.ah-project-card', { y: 42, scale: 0.97 }, '.ah-project-grid', 0.14);
      revealGroup('.ah-goals .ah-centered-heading > *', { y: 28 }, '.ah-goals .ah-centered-heading', 0.12);
      gsap.utils.toArray<HTMLElement>('.ah-goal-row').forEach((row, index) => {
        gsap.fromTo(row, { autoAlpha: 0, x: index % 2 ? 48 : -48 }, {
          autoAlpha: 1, x: 0, duration: 0.95, ease: 'power3.out',
          scrollTrigger: { trigger: row, start: 'top 82%', once: true },
        });
      });

      revealGroup('.ah-impacts .ah-section-heading > *', { y: 30 }, '.ah-impacts .ah-section-heading', 0.14);
      revealGroup('.ah-impact-grid article', { y: 42, scale: 0.96 }, '.ah-impact-grid', 0.13);
      revealGroup('.ah-recognitions .ah-centered-heading > *', { y: 28 }, '.ah-recognitions .ah-centered-heading', 0.12);
      revealGroup('.ah-award-grid article', { y: 36, rotation: 1.5 }, '.ah-award-grid', 0.12);
      revealGroup('.ah-news .ah-section-heading > *', { y: 28 }, '.ah-news .ah-section-heading', 0.12);
      revealGroup('.ah-news-grid a', { y: 36, scale: 0.96 }, '.ah-news-grid', 0.1);
      revealGroup('.ah-news .ah-text-link', { y: 16 }, '.ah-news', 0);
      revealGroup('.ah-faq .ah-centered-heading > *', { y: 28 }, '.ah-faq .ah-centered-heading', 0.12);
      revealGroup('.ah-faq-list article', { x: 26 }, '.ah-faq-list', 0.08);
      revealGroup('.ah-volunteer-copy', { x: -42 }, '.ah-volunteer', 0);
      revealGroup('.ah-volunteer-form', { x: 42 }, '.ah-volunteer', 0);
    }, root);

    requestAnimationFrame(() => ScrollTrigger.refresh());
    return () => context.revert();
  }, []);
  function sendVolunteerEnquiry(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const body = [...new FormData(event.currentTarget).entries()].map(([key, value]) => `${key}: ${value}`).join('\n');
    window.location.href = `mailto:pragyafoundation2024@gmail.com?subject=${encodeURIComponent('Volunteer enquiry')}&body=${encodeURIComponent(body)}`;
  }
  return <main ref={mainRef} className="altruist-home" id="top">
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
        <div className="ah-focus-feature"><img src={focusAreas[activeFocus].image} alt={focusAreas[activeFocus].title}/><div><span>PRAGYA FOUNDATION</span><h3>Learning should never be out of reach. For any child.</h3></div></div>
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
        <defs><path id="pragya-impact-wave-desktop" d="M -150 230 C 120 235 270 215 430 178 C 590 140 650 88 810 102 C 970 116 1020 193 1190 178 C 1375 162 1440 72 1610 50 C 1780 10 1930 -55 2070 -90"/></defs>
        <path className="ah-wave-band" d="M -150 230 C 120 235 270 215 430 178 C 590 140 650 88 810 102 C 970 116 1020 193 1190 178 C 1375 162 1440 72 1610 50 C 1780 10 1930 -55 2070 -90"/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[2] = node; }} href="#pragya-impact-wave-desktop" startOffset="20%">{impactRibbonText}</textPath></text>
      </svg>
      <svg className="ah-impact-ribbon ah-impact-ribbon-mobile" viewBox="0 0 430 210" preserveAspectRatio="none" aria-hidden="true">
        <defs><path id="pragya-impact-wave-mobile" d="M -65 200 C 20 205 65 188 115 155 C 165 122 184 83 230 92 C 275 100 284 160 330 145 C 372 130 405 20 490 -40"/></defs>
        <path className="ah-wave-band" d="M -65 200 C 20 205 65 188 115 155 C 165 122 184 83 230 92 C 275 100 284 160 330 145 C 372 130 405 20 490 -40"/>
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
      <img className="ah-volunteer-bg" src={altruistClouds} alt=""/>
      <div className="ah-volunteer-copy"><span className="ah-badge">Join Us</span><h2>Want to volunteer?</h2><p>Join Pragya Foundation in supporting women and children, advancing menstrual health, and building more sustainable communities.</p><ul><li><Check size={17}/> Support real causes that matter</li><li><Check size={17}/> Flexible ways to contribute your time</li><li><Check size={17}/> Work with local community initiatives</li></ul></div>
      <form className="ah-volunteer-form" onSubmit={sendVolunteerEnquiry}><label className="wide">Full Name<input name="Full name" required placeholder="Your name"/></label><label>Email ID<input name="Email" required type="email" placeholder="you@example.com"/></label><label>Phone Number<input name="Mobile number" required type="tel" placeholder="+91"/></label><label className="wide">Location<select name="Current location" defaultValue="" required><option value="" disabled>Choose your location</option><option>Dehradun</option><option>Tehri Garhwal</option><option>Uttarkashi</option><option>Rudraprayag</option><option>Other</option></select></label><label className="wide">Message<textarea name="Message" rows={3} placeholder="How would you like to contribute?"/></label><button className="ah-button" type="submit">Submit <ArrowRight size={16}/></button></form>
      <svg className="ah-volunteer-ribbon ah-volunteer-ribbon-desktop" viewBox="0 0 1920 300" preserveAspectRatio="none">
        <defs><path id="pragya-volunteer-wave-desktop" d={volunteerWavePath}/></defs>
        <path className="ah-wave-band" d={volunteerWavePath}/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[4] = node; }} href="#pragya-volunteer-wave-desktop" startOffset="0">{volunteerRibbonText}</textPath></text>
      </svg>
      <svg className="ah-volunteer-ribbon ah-volunteer-ribbon-mobile" viewBox="0 0 1920 300" preserveAspectRatio="none">
        <defs><path id="pragya-volunteer-wave-mobile" d={volunteerWavePath}/></defs>
        <path className="ah-wave-band" d={volunteerWavePath}/>
        <text className="ah-wave-text"><textPath ref={(node) => { if (node) ribbonTextRefs.current[5] = node; }} href="#pragya-volunteer-wave-mobile" startOffset="0">{volunteerRibbonText}</textPath></text>
      </svg>
    </section>
  </main>;
}
