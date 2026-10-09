import React from 'react';
import { Link } from 'react-router-dom';

interface BlogPost {
  id: number;
  title: string;
  slug: string;
  date: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 0,
    title: 'AI Observability from First Principles: Running Langfuse at Consumer Scale',
    slug: 'ai-observability-langfuse-kavana',
    date: '2026-10-09',
  },
  {
    id: 1,
    title: 'Building Production-Ready AI Agents: Lessons from the Trenches',
    slug: 'production-ready-ai-agents',
    date: '2026-01-19',
  },
  {
    id: 2,
    title: 'Scalable Hybrid RAG: PyData Bangalore Talk',
    slug: 'scalable-hybrid-rag',
    date: 'Coming Soon',
  },
];

export function Blog() {
  return (
    <section className="px-6 md:px-12 lg:px-16 py-24 border-t border-[var(--border)]" id="blog">
      <div className="max-w-3xl">
        <h2 className="text-sm font-medium uppercase tracking-wider text-[var(--text-muted)] mb-12">
          Writing
        </h2>

        <div className="space-y-0">
          {blogPosts.map((post) => (
            <Link
              key={post.id}
              to={post.date === 'Coming Soon' ? '#' : `/blog/${post.slug}`}
              className={`grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 py-5 border-b border-[var(--border)] last:border-b-0 group no-underline ${
                post.date === 'Coming Soon' ? 'pointer-events-none' : ''
              }`}
            >
              <span className="text-sm text-[var(--text-muted)] pt-0.5">
                {post.date}
              </span>
              <h3 className={`font-medium transition-colors ${
                post.date === 'Coming Soon'
                  ? 'text-[var(--text-muted)]'
                  : 'text-[var(--text-primary)] group-hover:text-[var(--text-secondary)]'
              }`}>
                {post.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
