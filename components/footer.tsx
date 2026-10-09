import Link from 'next/link';
import { Icon } from './icons';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div className="footer__contact">
            <Link href="/" className="logo logo--light" aria-label="IslandDay Tours home">
              <span className="logo__mark">
                <Icon name="waves" />
              </span>
              <span className="logo__name">
                <strong>IslandDay</strong>
                <span>MARINE PARK TOURS</span>
              </span>
            </Link>
            <ul className="footer__contact">
              <li>
                <Icon name="pin" size={16} />
                <span>[Office address line], Koh Samui, Surat Thani, Thailand</span>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <a href="tel:+66000000000">+66 00 000 0000</a>
              </li>
              <li>
                <Icon name="mail" size={16} />
                <a href="mailto:hello@islandday.example">hello@islandday.example</a>
              </li>
              <li>
                <Icon name="chat" size={16} />
                <a href="#">WhatsApp: +66 00 000 0000</a>
              </li>
              <li>
                <Icon name="clock" size={16} />
                <span>Daily 07:00–22:00 (GMT+7)</span>
              </li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="overline">Explore</h3>
            <ul>
              <li><Link href="/tours">All tours</Link></li>
              <li><Link href="/compare">Compare all tours</Link></li>
              <li><Link href="/compare">Compare boat types</Link></li>
              <li><Link href="/compare?preference=family">Tours with children</Link></li>
              <li><Link href="/compare?preference=value">Prices & park fees</Link></li>
              <li><Link href="/contact">About us</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="overline">Departure islands</h3>
            <ul>
              <li><Link href="/departure">From Koh Samui</Link></li>
              <li><Link href="/departure">From Koh Phangan</Link></li>
              <li><Link href="/departure">From Koh Tao</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="overline">Park guide</h3>
            <ul>
              <li><Link href="/guide">Marine park guide</Link></li>
              <li><Link href="/guide">Emerald lagoon</Link></li>
              <li><Link href="/guide">Island viewpoint</Link></li>
              <li><Link href="/guide">Snorkelling</Link></li>
              <li><Link href="/guide">Kayaking</Link></li>
              <li><Link href="/guide">Best time to visit</Link></li>
              <li><Link href="/guide">Entrance fees</Link></li>
            </ul>
          </div>

          <div className="footer__col">
            <h3 className="overline">From the blog</h3>
            <ul>
              <li><Link href="/stories">Is the marine park worth it?</Link></li>
              <li><Link href="/stories">The viewpoint climb, honestly</Link></li>
              <li><Link href="/stories">What to pack for a boat day</Link></li>
              <li><Link href="/stories">All stories →</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Licensed tour operator · TAT licence No. [00/00000] · © {currentYear} [Company Co., Ltd.]</span>
          <nav aria-label="Legal">
            <a href="#">Terms & Conditions</a>
            <a href="#">Privacy Policy</a>
          </nav>
        </div>
      </div>

      <a className="fab" href="#" aria-label="Chat with us on WhatsApp">
        <Icon name="chat" />
      </a>
    </footer>
  );
}
