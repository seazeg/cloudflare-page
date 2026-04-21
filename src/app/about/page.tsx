import { AboutClient } from '@/components/AboutClient';
import { getFeaturedPosts } from '@/lib/blog';

export default function AboutPage() {
  const blogPosts = getFeaturedPosts();
  return <AboutClient blogPosts={blogPosts} />;
}
