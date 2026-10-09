import Link from 'next/link';
import { POSTS } from '@/lib/blog';
import { Icon } from '@/components/icons';

export const metadata = {
  title: 'Stories & Travel Tips | IslandDay',
  description: 'Read travel tips, guides and stories from our blog',
};

export default function StoriesPage() {
  return (
    <main>
      <section className="page-head">
        <div className="container">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <Icon name="chevR" size={14} />
            <span aria-current="page">Stories</span>
          </nav>
          <h1 className="h1">Travel tips &amp; stories</h1>
          <p>Guides, tips and honest reviews from people who&apos;ve been on these tours.</p>
        </div>
      </section>

      <div className="container" style={{ paddingTop: 40, paddingBottom: 96 }}>
        {POSTS.length > 0 && (
          <div className="featured-post">
            <img
              src={POSTS[0].image || `/images/blog/post-${POSTS[0].id || 1}.png`}
              alt={POSTS[0].title}
              style={{ width: '100%', height: 'auto', borderRadius: 12, display: 'block' }}
            />
            <div className="featured-post__body">
              <span className="overline">{POSTS[0].category}</span>
              <h2 className="h2">{POSTS[0].title}</h2>
              <div style={{ display: 'flex', gap: 16, fontSize: 14, color: 'var(--text-secondary)', marginTop: 16 }}>
                <span>{POSTS[0].readTime} min read</span>
                <span>{POSTS[0].date}</span>
              </div>
              <Link href="#" className="btn btn--primary" style={{ marginTop: 20 }}>
                Read article
              </Link>
            </div>
          </div>
        )}

        <div style={{ marginTop: 80 }}>
          <h2 className="h2" style={{ marginBottom: 32 }}>Latest articles</h2>
          <div className="grid grid-3">
            {POSTS.slice(1).map((post, idx) => (
              <article key={idx} className="post">
                <img
                  src={post.image || `/images/blog/post-${post.id || idx + 2}.png`}
                  alt={post.title}
                  style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 12, display: 'block' }}
                />
                <div className="post__meta">
                  <span>{post.category}</span>
                  <span>{post.readTime} min</span>
                </div>
                <h3 className="h5">{post.title}</h3>
                <p style={{ fontSize: 14, color: 'var(--text-secondary)' }}>{post.date}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
