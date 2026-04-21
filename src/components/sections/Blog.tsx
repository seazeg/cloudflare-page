import Link from 'next/link';
import { SectionTitle } from '../common/SectionTitle';
import { PostMeta } from '@/lib/blog';

interface BlogProps {
  subTitle?: string;
  title?: string[];
  posts: PostMeta[];
}

export function Blog({
  subTitle = '博客文章',
  title = ['最新资讯', '实用指南'],
  posts,
}: BlogProps) {
  return (
    <div className="blog-section-one">
      <div className="auto-container">
        <div className="row">
          <div className="col-xl-12">
            <SectionTitle subTitle={subTitle} title={title} align="center" />
          </div>
        </div>
        <div className="row">
          {posts.slice(0, 3).map((post: PostMeta) => (
            <div key={post.slug} className="col-xl-4 col-lg-6 col-md-6">
              <div className="single-blog-box">
                <div className="blog-thumb">
                  <img src={post.cover} alt={post.title} />
                  <img src={post.cover} alt={post.title} />
                  <div className="blog-meta">
                    <Link href={`/blog/${post.slug}`}>{post.date}</Link>
                  </div>
                </div>
                <div className="blog-content">
                  <div className="blog-category-tag">
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
          ))}
        </div>
      </div>
    </div>
  );
}
