import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="dash-foot flex items-start justify-between ">
    <div className="dash-foot-box">
        <p className="dash-foot-p">Copyright © 2023. Made with ❤️ by Dhwani Astro.</p>
    </div>
    <div className="das-foot-links">
        <ul className="dash-foot-ul flex ">
            <li><Link href="#" className="dash-f-a">Cookies</Link></li>
            <li><Link href="#" className="dash-f-a">Terms & Conditions</Link></li>
            <li><Link href="#" className="dash-f-a">Privacy Policy</Link></li>
            <li><Link href="#" className="dash-f-a">Support</Link></li>

        </ul>
    </div>
</footer>
  );
};

export default Footer;
