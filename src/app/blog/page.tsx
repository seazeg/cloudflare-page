import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { getAllPosts, formatDate, PostMeta } from '@/lib/blog';
import Link from 'next/link';

function BlogCard({ post }: { post: PostMeta }) {
  return (
    <div className="col-xl-4 col-lg-6 col-md-6">
      <div className="single-blog-box">
        <div className="blog-thumb">
          <img src={post.cover} alt={post.title} />
          <img src={post.cover} alt={post.title} />
          <div className="blog-meta">
            <Link href={`/blog/${post.slug}`}>{formatDate(post.date)}</Link>
          </div>
        </div>
        <div className="blog-content">
          <div className="blog-category">
            <span>{post.category}</span>
          </div>
          <h3 className="blog-title">
            <Link href={`/blog/${post.slug}`}>{post.title}</Link>
          </h3>
          <p className="blog-excerpt">{post.excerpt}</p>
          <div className="blog-btn">
            <Link href={`/blog/${post.slug}`}>
              阅读更多
              <span>
                <i className="fa-solid fa-arrow-right"></i>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="blog" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="blog-page-title" style={{ backgroundImage: 'url(/images/inner-img/blog-details.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">博客文章</h5>
                  <h1 className="page-title split-text">Blog Posts</h1>
                  <p className="page-desc title-anim">独立站、小程序、跨境电商最新资讯与实用指南</p>
                </div>
              </div>
            </div>
          </section>

          <section className="blog-section-one">
            <div className="auto-container">
              <div className="row">
                {posts.length > 0 ? (
                  posts.map(post => <BlogCard key={post.slug} post={post} />)
                ) : (
                  <div className="col-12">
                    <div className="no-posts">
                      <p>暂无博客文章</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
