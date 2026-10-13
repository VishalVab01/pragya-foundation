import { useEffect, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react';
import logo from './assets/pragya-logo.jpg';

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
  return <footer className="footer shell"><div className="footer-main">
    <Link className="brand footer-brand" to="/"><img src={logo} alt=""/><span>Pragya<br/><small>FOUNDATION</small></span></Link>
    <p>Empowering women.<br/>Improving lives.<br/>Caring for our environment.</p>
    <div><span className="footer-label">EXPLORE</span><Link to="/about-us">About Us</Link><Link to="/projects">Projects</Link><Link to="/in-the-news-print-media">In the News</Link><Link to="/photo-gallery">Photo Gallery</Link></div>
    <div><span className="footer-label">SAY HELLO</span><a href="mailto:pragyafoundation2024@gmail.com">pragyafoundation2024@gmail.com</a><a href="tel:+919958591494">+91 99585 91494</a><p>305, Deep Shikha, 8, Rajendra Place,<br/>New Delhi – 110008</p></div>
  </div><div className="footer-bottom"><span>© 2026 Pragya Foundation</span><span>Working for women, children &amp; a sustainable future.</span><Link to="/contact-us">Contact us</Link></div></footer>;
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
      <Link className="brand" to="/" aria-label="Pragya Foundation home"><img src={logo} alt=""/><span>Pragya<br/><small>FOUNDATION</small></span></Link>
      <button className="menu-toggle" aria-label={menuOpen ? 'Close navigation' : 'Open navigation'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X/> : <Menu/>}</button>
      <nav className={menuOpen ? 'nav open' : 'nav'} aria-label="Main navigation">
        <NavLink to="/" end>Home</NavLink>
        {groups.slice(0, 3).map((group) => <details className="nav-dropdown" key={group.label}>
          <summary>{group.label}<ChevronDown size={12}/></summary>
          <div className="nav-menu">{group.links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div>
        </details>)}
        <NavLink to="/photo-gallery">Photo Gallery</NavLink>
        <details className="nav-dropdown"><summary>Get Involved<ChevronDown size={12}/></summary><div className="nav-menu">{groups[3].links.map(([label, href]) => <Link key={href} to={href}>{label}</Link>)}</div></details>
        <NavLink to="/contact-us">Contact</NavLink>
        <Link className="nav-cta" to="/get-involved/donate">Donate now <ArrowUpRight size={15}/></Link>
      </nav>
    </header>
    <Outlet />
    <Footer />
  </>;
}
