'use client';

import Link from 'next/link';
import { Icon } from './icons';

export function Header() {
  return (
    <header className="header">
      <div className="container header__inner">
        <Link href="/" className="logo" aria-label="IslandDay Tours home">
          <span className="logo__mark">
            <Icon name="waves" />
          </span>
          <span className="logo__name">
            <strong>IslandDay</strong>
            <span>MARINE PARK TOURS</span>
          </span>
        </Link>

        <nav aria-label="Main">
          <ul className="nav">
            <li className="nav__item">
              <Link className="nav__link" href="/tours">All tours</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/compare">Compare tours</Link>
            </li>
            <li className="nav__item">
              <button className="nav__link" aria-expanded="false">
                Departure islands
                <Icon name="chevD" size={16} />
              </button>
              <div className="dropdown">
                <Link href="/departure">From Koh Samui</Link>
                <Link href="/departure?from=koh-phangan">From Koh Phangan</Link>
                <Link href="/departure?from=koh-tao">From Koh Tao</Link>
              </div>
            </li>
            <li className="nav__item">
              <button className="nav__link" aria-expanded="false">
                Park guide
                <Icon name="chevD" size={16} />
              </button>
              <div className="dropdown">
                <Link href="/guide">Marine park guide</Link>
                <Link href="/guide">Emerald lagoon</Link>
                <Link href="/guide">Island viewpoint</Link>
                <Link href="/guide">Snorkelling</Link>
                <Link href="/guide">Kayaking</Link>
                <Link href="/guide">Best time to visit</Link>
                <Link href="/guide">Entrance fees</Link>
              </div>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/stories">Stories</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" href="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <div className="currency">
            <button type="button" className="currency__btn" aria-haspopup="listbox" aria-expanded="false" aria-label="Change currency">
              <span data-cur-label>THB</span>
              <Icon name="chevD" size={14} />
            </button>
          </div>
          <Link href="/tours" className="btn btn--primary">Book a tour</Link>
          <button className="icon-btn menu-btn" aria-label="Open menu">
            <Icon name="menu" />
          </button>
        </div>
      </div>
    </header>
  );
}
