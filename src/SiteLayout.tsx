import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const groups = [
  { label: 'About Us', to: '/about-us', links: [
    ['About Us', '/about-us'], ['About the Foundation', '/about-us/about-the-foundation'],
    ['About Pragya Dixit', '/about-us/about-pragya-dixit'], ['Mission, Vision & Values', '/about-us/mission-vision-and-values'],
    ['Awards & Accolades', '/about-us/awards-and-accolades'],
  ]},
  { label: 'Projects', to: '/projects', links: [
    ['All Projects', '/projects'], ['Impact', '/projects/impact'], ['Work Area', '/projects/work-area'],
  ]},
  { label: 'In the News', to: '/in-the-news-print-media', links: [
    ['Print Media', '/in-the-news-print-media'], ['Electronic Media', '/in-the-news-print-media/in-the-news'],
  ]},
  { label: 'Get Involved', to: '/get-involved', links: [
    ['Ways to Get Involved', '/get-involved'], ['Become a Volunteer', '/get-involved/become-a-volunteer'], ['Donate', '/get-involved/donate'],
  ]},
];

function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const wordmarkRef = useRef<HTMLSpanElement>(null);
  useLayoutEffect(() => {
    if (!footerRef.current || !wordmarkRef.current?.parentElement) return;
    const wordmark = wordmarkRef.current;
    const trigger = wordmark.parentElement;
    const tween = gsap.fromTo(wordmark, { yPercent: 115 }, {
      yPercent: -5,
      ease: 'none',
      scrollTrigger: { trigger, start: 'top bottom', end: 'top 45%', scrub: 0.8 },
    });
    return () => { tween.scrollTrigger?.kill(); tween.kill(); gsap.set(wordmark, { clearProps: 'transform' }); };
  }, []);
  return <footer ref={footerRef} className="footer shell"><div className="footer-main">
    <div className="footer-intro"><Link className="brand footer-brand" to="/"><span>Pragya</span></Link><p>Empowering women.<br/>Improving lives.<br/>Caring for our environment.</p><div className="footer-social"><a href="https://www.facebook.com/" aria-label="Facebook">f</a><a href="https://www.instagram.com/" aria-label="Instagram">ig</a><a href="https://www.linkedin.com/" aria-label="LinkedIn">in</a></div></div>
    <div><span className="footer-label">PAGES</span><Link to="/about-us">About Us</Link><Link to="/about-us/about-the-foundation">The Foundation</Link><Link to="/about-us/about-pragya-dixit">Pragya Dixit</Link><Link to="/about-us/mission-vision-and-values">Mission, Vision &amp; Values</Link><Link to="/about-us/awards-and-accolades">Awards &amp; Accolades</Link></div>
    <div><span className="footer-label">EXPLORE</span><Link to="/projects">Projects</Link><Link to="/projects/impact">Impact</Link><Link to="/projects/work-area">Work Area</Link><Link to="/in-the-news-print-media">Print Media</Link><Link to="/in-the-news-print-media/in-the-news">Electronic Media</Link><Link to="/photo-gallery">Photo Gallery</Link></div>
    <div><span className="footer-label">GET INVOLVED</span><Link to="/get-involved">Ways to Get Involved</Link><Link to="/get-involved/become-a-volunteer">Volunteer</Link><Link to="/get-involved/donate">Donate</Link><Link to="/contact-us">Contact Us</Link><span className="footer-label footer-address-label">OUR ADDRESS</span><p>305, Deep Shikha, 8, Rajendra Place,<br/>New Delhi – 110008</p><a href="mailto:pragyafoundation2024@gmail.com">pragyafoundation2024@gmail.com</a></div>
  </div><div className="footer-bottom"><span>© 2026 Pragya Foundation</span><span>Working for women, children &amp; a sustainable future.</span><a href="tel:+919958591494">+91 99585 91494</a></div><div className="footer-wordmark" aria-hidden="true"><span ref={wordmarkRef}>PRAGYA</span></div></footer>;
}

function PageTitles() {
  const { pathname } = useLocation();
  useEffect(() => {
    const labels: Record<string, string> = {
      '/': 'Home', '/about-us': 'About Us', '/about-us/about-the-foundation': 'About the Foundation',
      '/about-us/about-pragya-dixit': 'About Pragya Dixit', '/about-us/mission-vision-and-values': 'Mission, Vision & Values',
      '/about-us/awards-and-accolades': 'Awards & Accolades', '/projects': 'Projects', '/projects/impact': 'Impact',
      '/projects/work-area': 'Work Area', '/in-the-news-print-media': 'Print Media',
      '/in-the-news-print-media/in-the-news': 'Electronic Media', '/photo-gallery': 'Photo Gallery',
      '/get-involved': 'Get Involved', '/get-involved/become-a-volunteer': 'Become a Volunteer',
      '/get-involved/donate': 'Donate', '/contact-us': 'Contact Us',
    };
    document.title = `${labels[pathname] ?? 'Pragya Foundation'} | Pragya Foundation`;
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

export default function SiteLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => setMenuOpen(false), [location.pathname]);
  return <>
    <PageTitles />
    <header className="site-header shell">
      <Link className="brand" to="/" aria-label="Pragya Foundation home"><span>Pragya</span></Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        {groups.slice(0, 3).map((group) => <details className="nav-dropdown" key={group.label}>
          <summary>{group.label}<ChevronDown size={12}/></summary>
          <div className="nav-menu">{group.links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div>
        </details>)}
        <NavLink to="/get-involved/become-a-volunteer">Volunteer</NavLink>
        <Link className="nav-cta" to="/get-involved/donate">Donate now <ArrowUpRight size={15}/></Link>
      </nav>
    </header>
    <Outlet />
    <Footer />
  </>;
}
