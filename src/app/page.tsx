import { HomeClient } from '@/components/HomeClient';
import { getFeaturedPosts } from '@/lib/blog';

export default function HomePage() {
  const blogPosts = getFeaturedPosts();
  return <HomeClient blogPosts={blogPosts} />;
}
