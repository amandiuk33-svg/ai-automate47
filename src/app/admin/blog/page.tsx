'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  tags: string[];
  image?: string;
  isPublished: boolean;
}

export default function AdminBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [editing, setEditing] = useState<BlogPost | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    content: '',
    excerpt: '',
    author: 'AiAutomate47 Team',
    date: '',
    tags: '',
    image: '',
    isPublished: true,
  });

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      const res = await fetch('/api/admin/blog');
      if (!res.ok) throw new Error('Failed to fetch posts');
      const data = await res.json();
      setPosts(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  function startNewPost() {
    setEditing(null);
    setShowForm(true);
    setFormData({
      slug: '',
      title: '',
      content: '',
      excerpt: '',
      author: 'AiAutomate47 Team',
      date: new Date().toISOString().split('T')[0],
      tags: '',
      image: '',
      isPublished: true,
    });
  }

  function editPost(post: BlogPost) {
    setEditing(post);
    setShowForm(true);
    setFormData({
      slug: post.slug,
      title: post.title,
      content: post.content,
      excerpt: post.excerpt,
      author: post.author,
      date: post.date,
      tags: post.tags.join(', '),
      image: post.image || '',
      isPublished: post.isPublished,
    });
  }

  async function savePost() {
    try {
      const tags = formData.tags.split(',').map((t) => t.trim()).filter(Boolean);
      const method = editing ? 'PUT' : 'POST';
      const res = await fetch('/api/admin/blog', {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          tags,
        }),
      });
      if (!res.ok) throw new Error('Failed to save post');
      setShowForm(false);
      setEditing(null);
      fetchPosts();
    } catch (err: any) {
      setError(err.message);
    }
  }

  async function deletePost(slug: string) {
    if (!confirm('Are you sure you want to delete this post?')) return;
    try {
      const res = await fetch(`/api/admin/blog?slug=${encodeURIComponent(slug)}`, {
        method: 'DELETE',
      });
      if (!res.ok) throw new Error('Failed to delete post');
      fetchPosts();
    } catch (err: any) {
      setError(err.message);
    }
  }

  if (loading) return <div className="p-8 text-center">Loading...</div>;

  return (
    <div className="min-h-screen bg-space-950 text-white pt-24 pb-4 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-display font-bold text-white">Blog Admin</h1>
          <button
            onClick={startNewPost}
            className="neon-button px-6 py-2 text-sm"
          >
            New Post
          </button>
        </div>

        {error && (
          <div className="mb-4 p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400 text-sm">
            {error}
          </div>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <div key={post.slug} className="glass-card p-6 rounded-xl border border-white/10">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-white">{post.title}</h3>
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    post.isPublished ? 'bg-neon-cyan/20 text-neon-cyan' : 'bg-white/10 text-white/50'
                  }`}
                >
                  {post.isPublished ? 'Published' : 'Draft'}
                </span>
              </div>
              <p className="text-white/60 mb-4 line-clamp-3">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-white/40 mb-4">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => editPost(post)}
                  className="flex-1 px-3 py-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-sm text-white transition-colors"
                >
                  Edit
                </button>
                <button
                  onClick={() => deletePost(post.slug)}
                  className="px-3 py-2 bg-red-500/20 hover:bg-red-500/40 border border-red-500/50 rounded-lg text-sm text-red-400 transition-colors"
                >
                  Delete
                </button>
                <Link
                  href={`/blog/${post.slug}`}
                  className="px-3 py-2 bg-neon-cyan/20 hover:bg-neon-cyan/40 border border-neon-cyan/30 rounded-lg text-sm text-neon-cyan transition-colors"
                >
                  View
                </Link>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <div className="mt-8 glass-card p-8 rounded-xl border border-white/10 max-w-2xl">
            <h2 className="text-2xl font-bold text-white mb-6">
              {editing ? 'Edit Post' : 'Create New Post'}
            </h2>
            <form onSubmit={(e) => { e.preventDefault(); savePost(); }} className="space-y-4">
              <div>
                <label className="block text-white/70 text-sm mb-2">Slug (URL)</label>
                <input
                  type="text"
                  value={formData.slug}
                  onChange={(e) => setFormData({ ...formData, slug: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  placeholder="my-blog-post-slug"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Content (Markdown)</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  rows={15}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan font-mono text-sm"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Author</label>
                <input
                  type="text"
                  value={formData.author}
                  onChange={(e) => setFormData({ ...formData, author: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Date</label>
                <input
                  type="date"
                  value={formData.date}
                  onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Tags (comma-separated)</label>
                <input
                  type="text"
                  value={formData.tags}
                  onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  placeholder="AI, Automation, Small Business"
                />
              </div>
              <div>
                <label className="block text-white/70 text-sm mb-2">Image URL</label>
                <input
                  type="text"
                  value={formData.image}
                  onChange={(e) => setFormData({ ...formData, image: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-cyan"
                  placeholder="/assets/blog/image.jpg"
                />
              </div>
              <div className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={formData.isPublished}
                  onChange={(e) => setFormData({ ...formData, isPublished: e.target.checked })}
                  className="w-4 h-4 text-neon-cyan bg-white/5 border-white/10 rounded focus:ring-neon-cyan"
                />
                <label className="text-white/70 text-sm">Published</label>
              </div>
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 neon-button py-3"
                >
                  {editing ? 'Update Post' : 'Publish Post'}
                </button>
                <button
                  type="button"
                  onClick={() => setShowForm(false)}
                  className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg text-white transition-colors"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
