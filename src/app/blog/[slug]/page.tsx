import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { getPostBySlug } from '@/lib/markdown';

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = getPostBySlug(params.slug);

  if (!post) {
    return {
      title: 'Blog Post Not Found | AiAutomate47',
      description: 'The blog post you are looking for does not exist.',
    };
  }

  return {
    title: `${post.title} | AiAutomate47`,
    description: post.excerpt || 'Read about AI, automation, and Claude AI assistant for small businesses.',
    keywords: ['AI blog', 'Claude AI assistant', 'AI automation', post.title, ...post.tags],
    openGraph: {
      title: `${post.title} | AiAutomate47`,
      description: post.excerpt || 'Read about AI, automation, and Claude AI assistant for small businesses.',
      type: 'article',
      authors: [post.author],
      publishedTime: post.date,
      tags: post.tags,
    },
  };
}

function simpleMarkdownToHtml(markdown: string): JSX.Element {
  const lines = markdown.split('\n');
  const elements: JSX.Element[] = [];
  let currentParagraph: string[] = [];

  const flushParagraph = () => {
    if (currentParagraph.length > 0) {
      const text = currentParagraph.join(' ');
      elements.push(<p key={elements.length} className="mb-6 leading-relaxed">{parseInlineMarkdown(text)}</p>);
      currentParagraph = [];
    }
  };

  lines.forEach((line) => {
    if (line.startsWith('# ')) {
      flushParagraph();
      elements.push(<h1 key={elements.length} className="text-3xl font-bold text-white mb-4">{line.slice(2)}</h1>);
    } else if (line.startsWith('## ')) {
      flushParagraph();
      elements.push(<h2 key={elements.length} className="text-2xl font-bold text-white mb-3">{line.slice(3)}</h2>);
    } else if (line.startsWith('### ')) {
      flushParagraph();
      elements.push(<h3 key={elements.length} className="text-xl font-bold text-white mb-3">{line.slice(4)}</h3>);
    } else if (line.startsWith('- ')) {
      flushParagraph();
      elements.push(
        <li key={elements.length} className="mb-2 text-white/80 list-disc pl-6">
          {parseInlineMarkdown(line.slice(2))}
        </li>
      );
    } else if (line.startsWith('1. ')) {
      flushParagraph();
      elements.push(
        <li key={elements.length} className="mb-2 text-white/80 list-decimal pl-6">
          {parseInlineMarkdown(line.slice(3))}
        </li>
      );
    } else if (line.trim() === '') {
      flushParagraph();
    } else {
      currentParagraph.push(line);
    }
  });

  flushParagraph();

  return <>{elements}</>;
}

function parseInlineMarkdown(text: string): JSX.Element {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*|`.*?`)/);
  return (
    <span>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return <strong key={i}>{part.slice(2, -2)}</strong>;
        }
        if (part.startsWith('*') && part.endsWith('*') && part.length > 2) {
          return <em key={i}>{part.slice(1, -1)}</em>;
        }
        if (part.startsWith('`') && part.endsWith('`')) {
          return <code key={i}>{part.slice(1, -1)}</code>;
        }
        return <span key={i}>{part}</span>;
      })}
    </span>
  );
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="section-container max-w-3xl">
      <article className="glass-card p-8 md:p-12">
        <div className="flex items-center space-x-3 text-xs text-white/40 mb-6">
          <span>{post.author}</span>
          <span>•</span>
          <span>{post.date}</span>
        </div>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8 leading-tight">
          {post.title}
        </h1>
        <div className="prose prose-invert text-white/80 max-w-none mb-8">
          {simpleMarkdownToHtml(post.content)}
        </div>
        <div className="mt-12 pt-8 border-t border-white/10">
          <p className="text-white/60 italic">{post.excerpt}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {post.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 rounded-full bg-white/10 border border-white/10 text-neon-cyan text-xs">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
      <div className="mt-12 text-center">
        <a href="/blog" className="text-neon-cyan hover:underline">
          ← Back to Blog
        </a>
      </div>
    </div>
  );
}
