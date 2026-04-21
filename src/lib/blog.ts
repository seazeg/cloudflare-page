import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import gfm from 'remark-gfm';

const blogDirectory = path.join(process.cwd(), 'content/blog');

export interface PostMeta {
  slug: string;
  title: string;
  date: string;
  cover: string;
  excerpt: string;
  author: string;
  category: string;
  tags: string[];
  featured: boolean;
}

export interface Post extends PostMeta {
  content: string;
}

export function getAllPosts(): PostMeta[] {
  if (!fs.existsSync(blogDirectory)) {
    return [];
  }

  const files = fs.readdirSync(blogDirectory);
  const posts = files
    .filter(file => file.endsWith('.md'))
    .map(file => {
      const slug = file.replace(/\.md$/, '');
      const filePath = path.join(blogDirectory, file);
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const { data } = matter(fileContent);

      return {
        slug,
        title: data.title || 'Untitled',
        date: data.date || new Date().toISOString(),
        cover: data.cover || '/images/demo-img/blog-thumb1.png',
        excerpt: data.excerpt || '',
        author: data.author || '跃迁团队',
        category: data.category || '未分类',
        tags: data.tags || [],
        featured: data.featured || false,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return posts;
}

export function getFeaturedPosts(): PostMeta[] {
  return getAllPosts().filter(post => post.featured);
}

export function getPostsByCategory(category: string): PostMeta[] {
  return getAllPosts().filter(post => post.category === category);
}

export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    const filePath = path.join(blogDirectory, `${slug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data, content: markdownContent } = matter(fileContent);

    const processedContent = await remark()
      .use(gfm)
      .use(html, { sanitize: false })
      .process(markdownContent);
    const content = processedContent.toString();

    return {
      slug,
      title: data.title || 'Untitled',
      date: data.date || new Date().toISOString(),
      cover: data.cover || '/images/demo-img/blog-thumb1.png',
      excerpt: data.excerpt || '',
      author: data.author || '跃迁团队',
      category: data.category || '未分类',
      tags: data.tags || [],
      featured: data.featured || false,
      content,
    };
  } catch {
    return null;
  }
}

export function getAllCategories(): string[] {
  const posts = getAllPosts();
  const categories = new Set(posts.map(post => post.category));
  return Array.from(categories);
}

export function getAllTags(): string[] {
  const posts = getAllPosts();
  const tags = new Set(posts.flatMap(post => post.tags));
  return Array.from(tags);
}

export function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const months = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month}, ${year}`;
}
