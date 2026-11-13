import { Metadata } from 'next';
import { getAllPosts } from '@/lib/markdown';

export const metadata: Metadata = {
  title: 'AI Blog | Claude AI Assistant & Automation Insights',
  description: 'AiAutomate47 blog about AI, automation, and Claude AI assistant for small businesses. Expert opinions on AI consultancy, workflow automation, and AI asset generation.',
  keywords: ['AI blog', 'Claude AI assistant', 'AI automation insights', 'AI consultancy blog'],
  openGraph: {
    title: 'AI Blog | AiAutomate47',
    description: 'Thoughts on AI, automation, and Claude for small businesses.',
    type: 'website',
  },
};

export default function Blog() {
  const posts = getAllPosts();

  return (
    <div className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title">AI Insights & Opinions</h2>
        <p className="text-xl text-white/60 max-w-2xl mx-auto">
          Our thoughts on AI, automation, and the future of small business. With a special focus on Claude and Anthropic.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {posts.map((post) => (
          <article
            key={post.slug}
            className="glass-card p-6 hover:border-neon-cyan/50 transition-all duration-300 group"
          >
            <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl bg-neon-cyan/10 text-neon-cyan mb-6 group-hover:scale-110 transition-transform">
              📝
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-neon-cyan transition-colors">
              {post.title}
            </h3>
            <p className="text-white/60 mb-6 line-clamp-3">{post.excerpt}</p>
            <div className="flex items-center justify-between text-xs text-white/40">
              <span>{post.author}</span>
              <span>{post.date}</span>
            </div>
            <a
              href={`/blog/${post.slug}`}
              className="mt-4 inline-block text-neon-cyan font-medium hover:underline"
            >
              Read more →
            </a>
          </article>
        ))}
      </div>
    </div>
  );
}