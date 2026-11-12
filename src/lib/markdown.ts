import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'src', 'content', 'blog');

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
  isPublished: boolean;
  frontMatter?: Record<string, any>;
}

function parseFrontMatter(content: string): { frontMatter: Record<string, any>; body: string } {
  if (!content.startsWith('---')) {
    return { frontMatter: {}, body: content };
  }

  const endMarker = content.indexOf('\n---', 3);
  if (endMarker === -1) {
    return { frontMatter: {}, body: content };
  }

  const frontMatterStr = content.slice(4, endMarker);
  const body = content.slice(endMarker + 4).trimStart();
  const frontMatter: Record<string, any> = {};

  frontMatterStr.split('\n').forEach((line) => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.slice(0, colonIndex).trim();
      let value: string | boolean = line.slice(colonIndex + 1).trim();

      // Handle array values (tags)
      if (value.startsWith('[') && value.endsWith(']')) {
        try {
          value = JSON.parse(value);
        } catch {
          // Keep as string if JSON parse fails
        }
      } else if (value === 'true') {
        value = true;
      } else if (value === 'false') {
        value = false;
      } else {
        // Remove surrounding quotes
        value = value.replace(/^["']|["']$/g, '');
      }

      frontMatter[key] = value;
    }
  });

  return { frontMatter, body };
}

function stringifyFrontMatter(frontMatter: Record<string, any>, body: string): string {
  const lines: string[] = ['---'];
  Object.entries(frontMatter).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      lines.push(`${key}: ${JSON.stringify(value)}`);
    } else if (typeof value === 'boolean') {
      lines.push(`${key}: ${value}`);
    } else if (typeof value === 'string') {
      lines.push(`${key}: "${value}"`);
    } else if (value != null) {
      lines.push(`${key}: ${value}`);
    }
  });
  lines.push('---');
  lines.push('', body);
  return lines.join('\n');
}

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames
    .filter((fileName) => fileName.endsWith('.md'))
    .map((fileName) => fileName.replace(/\.md$/, ''));
}

export function getPostBySlug(slug: string): BlogPost | null {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (!fs.existsSync(fullPath)) {
    return null;
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { frontMatter, body } = parseFrontMatter(fileContents);

  return {
    slug,
    title: frontMatter.title || 'Untitled',
    excerpt: frontMatter.excerpt || '',
    content: body,
    author: frontMatter.author || 'AiAutomate47 Team',
    date: frontMatter.date || new Date().toISOString().split('T')[0],
    tags: frontMatter.tags || [],
    image: frontMatter.image || undefined,
    isPublished: frontMatter.isPublished !== false,
    frontMatter,
  };
}

export function getAllPosts(): BlogPost[] {
  const slugs = getAllPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug))
    .filter((post): post is BlogPost => post !== null)
    .filter((post) => post.isPublished)
    .sort((a, b) => (a.date < b.date ? 1 : -1));
  return posts;
}

export function savePost(slug: string, postData: BlogPost): void {
  if (!fs.existsSync(postsDirectory)) {
    fs.mkdirSync(postsDirectory, { recursive: true });
  }

  const frontMatter: Record<string, any> = {
    title: postData.title,
    excerpt: postData.excerpt,
    author: postData.author || 'AiAutomate47 Team',
    date: postData.date || new Date().toISOString().split('T')[0],
    tags: postData.tags || [],
    image: postData.image,
    isPublished: postData.isPublished !== false,
  };

  const markdownContent = stringifyFrontMatter(frontMatter, postData.content);
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  fs.writeFileSync(fullPath, markdownContent, 'utf8');
}

export function deletePost(slug: string): void {
  if (!slug) return;
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  if (fs.existsSync(fullPath)) {
    fs.unlinkSync(fullPath);
  }
}

export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}
