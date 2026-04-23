import { Header, Footer, Sidebar, MobileMenu, Preloader, ScrollToTop } from '@/components';
import { AllScripts } from '@/lib/scripts';
import { getPostBySlug, getAllPosts, formatDate } from '@/lib/blog';
import Link from 'next/link';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map(post => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);
  if (!post) {
    return {
      title: '文章未找到',
    };
  }
  return {
    title: `${post.title} | 跃迁建站`,
    description: post.excerpt,
  };
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const allPosts = getAllPosts();
  const relatedPosts = allPosts.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <>
      <AllScripts />
      <div className="page-wrapper">
        <Preloader />
        <Header activePage="blog" />
        <MobileMenu />
        <Sidebar />

        <main>
          <section className="blog-details-page-title" style={{ backgroundImage: 'url(/images/inner-img/blog-details.jpg)' }}>
            <div className="auto-container">
              <div className="row">
                <div className="title-content">
                  <h5 className="page-sub-title split_chars">博客详情</h5>
                  <h1 className="page-title split-text">Blog Details</h1>
                  <p className="page-desc title-anim">{post.excerpt}</p>
                </div>
              </div>
              <div className="row">
                <div className="blog-details-area">
                  <div className="auto-container">
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="blog-details-thumb">
                          <figure className="title-anim">
                            <img src={post.cover} alt={post.title} />
                          </figure>
                        </div>
                        <div className="blog-details-content">
                          <div className="meta-blog">
                            <span className="mate-text">{formatDate(post.date)}</span>
                            <span>{post.category}</span>
                          </div>
                          <h4 className="blog-details-title">{post.title}</h4>
                          <div className="blog-details-article" dangerouslySetInnerHTML={{ __html: post.content }} />
                          
                          {post.tags.length > 0 && (
                            <div className="blog-details-tags">
                              <span className="tags-label">标签：</span>
                              {post.tags.map((tag, index) => (
                                <span key={index} className="tag">{tag}</span>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {relatedPosts.length > 0 && (
            <section className="blog-section-one two">
              <div className="auto-container">
                <div className="row">
                  <div className="col-xl-12">
                    <div className="sec-title text-center">
                      <div className="section-title">
                        <h1 className="title split-text">相关文章</h1>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  {relatedPosts.map(relatedPost => (
                    <div key={relatedPost.slug} className="col-xl-4 col-lg-6 col-md-6">
                      <div className="single-blog-box">
                        <div className="blog-thumb">
                          <img src={relatedPost.cover} alt={relatedPost.title} />
                          <img src={relatedPost.cover} alt={relatedPost.title} />
                          <div className="blog-meta">
                            <Link href={`/blog/${relatedPost.slug}`}>{formatDate(relatedPost.date)}</Link>
                          </div>
                        </div>
                        <div className="blog-content">
                          <div className="blog-category">
                            <span>{relatedPost.category}</span>
                          </div>
                          <h3 className="blog-title">
                            <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                          </h3>
                          <p className="blog-excerpt">{relatedPost.excerpt}</p>
                          <div className="blog-btn">
                            <Link href={`/blog/${relatedPost.slug}`}>
                              阅读更多
                              <span>
                                <i className="fa-solid fa-arrow-right"></i>
                              </span>
                            </Link>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </main>

        <Footer />
        <ScrollToTop />
      </div>
    </>
  );
}
