import Link from 'next/link';
import { Icon } from './icons';

export function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__content">
          <span className="hero__pill">
            <Icon name="sun" size={14} />
            40+ limestone islands · one perfect day
          </span>
          <h1 className="display-xl">
            Marine Park Tours<br />from Koh Samui
          </h1>
          <p>Emerald lagoons, summit viewpoints and quiet beaches — on a boat that matches your pace. Compare every option, then book direct.</p>
          <div className="hero__ctas">
            <Link href="/compare" className="btn btn--primary btn--lg">Compare tours</Link>
            <Link href="/tours" className="btn btn--ghost-light btn--lg">
              Browse all tours <Icon name="arrowR" size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
