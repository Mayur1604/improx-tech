'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Calendar, 
  Clock, 
  BookOpen, 
  Mail, 
  Check, 
  Tag
} from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

interface EngineeringBlogSectionProps {
  filterCategory?: string;
  title?: string;
  subtitle?: string;
}

export default function EngineeringBlogSection({ 
  filterCategory, 
  title = "Engineering Perspectives & Insights",
  subtitle = "Technical deep-dives into application architecture, cloud infrastructure, and data platforms authored by our engineering team."
}: EngineeringBlogSectionProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>(filterCategory || 'All');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud Engineering',
    'Data & Analytics',
    'Product Engineering'
  ];

  // Filter posts
  const filteredPosts: BlogPost[] = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => {
        if (selectedCategory === 'Application Services') {
          return p.category === 'Product Engineering' || p.category === 'Cloud Engineering';
        }
        return p.category.toLowerCase().includes(selectedCategory.toLowerCase());
      });

  const featuredPost = filteredPosts[0] || blogPosts[0];
  const gridPosts = filteredPosts.slice(1, 4).length > 0 ? filteredPosts.slice(1, 4) : blogPosts.slice(1, 4);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <section className="py-20 lg:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6 space-y-12">
        
        {/* Editorial Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200">
          <div className="max-w-3xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-wider text-[#0033a0]">
              Engineering Knowledge Hub
            </p>
            
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              {title}
            </h2>
            
            <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
              {subtitle}
            </p>
          </div>

          <Link
            href="/blog"
            className="text-xs font-semibold text-[#0033a0] hover:text-[#00287a] inline-flex items-center gap-1.5 shrink-0"
          >
            <span>Explore All Articles</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <span className="text-slate-500 font-semibold uppercase tracking-wider text-[11px] mr-2 flex items-center gap-1">
            <Tag className="w-3 h-3" />
            <span>Topics:</span>
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-[6px] font-medium transition-all border ${
                selectedCategory === cat
                  ? 'bg-[#0033a0] text-white border-[#0033a0] shadow-xs'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Featured Story */}
        {featuredPost && (
          <div className="bg-white border border-slate-200 rounded-[6px] shadow-sm hover:border-slate-300 transition-colors grid grid-cols-1 lg:grid-cols-12 overflow-hidden card-hover">
            
            {/* Left Image Viewport */}
            <div className="lg:col-span-6 relative min-h-[280px] sm:min-h-[340px] bg-slate-900 overflow-hidden">
              <Image
                src={featuredPost.image}
                alt={featuredPost.title}
                fill
                className="object-cover card-image-zoom"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#000033]/85 via-transparent to-transparent" />
              <div className="absolute top-4 left-4">
                <span className="px-2.5 py-1 bg-[#000033] text-[#00a3e0] text-xs font-semibold uppercase tracking-wider rounded-[6px] border border-white/20">
                  Featured
                </span>
              </div>
              <div className="absolute bottom-4 left-4 right-4 text-white text-xs">
                <span className="text-[#00a3e0] font-semibold uppercase tracking-wider text-[11px]">Category:</span>
                <span className="ml-1 font-medium">{featuredPost.category}</span>
              </div>
            </div>

            {/* Right Editorial Column */}
            <div className="lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                  <span className="inline-flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredPost.date}</span>
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    <span>{featuredPost.readTime}</span>
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug hover:text-[#0033a0] transition-colors">
                  <Link href={`/blog/${featuredPost.slug}`}>
                    {featuredPost.title}
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {featuredPost.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {featuredPost.tags.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 bg-slate-100 rounded-[6px] text-slate-700 text-[11px] font-mono"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & CTA Footer */}
              <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-[6px] bg-[#000033] text-white flex items-center justify-center font-bold text-xs">
                    {featuredPost.author.charAt(0)}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-900">{featuredPost.author}</div>
                    <div className="text-[11px] text-slate-500">{featuredPost.authorRole}</div>
                  </div>
                </div>

                <Link
                  href={`/blog/${featuredPost.slug}`}
                  className="bg-[#000033] hover:bg-[#0033a0] text-white px-4 py-2 rounded-[6px] text-xs font-semibold inline-flex items-center gap-1.5 transition-colors"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        )}

        {/* Editorial 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {gridPosts.map((post) => (
            <div 
              key={post.slug}
              className="bg-white border border-slate-200 rounded-[6px] overflow-hidden shadow-xs hover:border-slate-300 transition-all flex flex-col justify-between card-hover"
            >
              <div>
                <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover card-image-zoom"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <span className="px-2 py-0.5 bg-[#000033] text-[#00a3e0] text-[10px] font-semibold uppercase tracking-wider rounded-[6px] border border-white/20">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                    <span>{post.date}</span>
                    <span>{post.readTime}</span>
                  </div>

                  <h4 className="text-base font-bold text-slate-900 leading-snug hover:text-[#0033a0] transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>
              </div>

              <div className="p-6 pt-0 border-t border-slate-100 mt-4 flex items-center justify-between text-xs">
                <span className="font-medium text-slate-600 truncate max-w-[140px]">{post.author}</span>
                <Link 
                  href={`/blog/${post.slug}`}
                  className="font-semibold text-[#0033a0] hover:text-[#00287a] inline-flex items-center gap-1"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>
          ))}
        </div>

        {/* Subscription Bar */}
        <div className="bg-[#000033] text-white p-8 lg:p-10 rounded-[6px] border border-slate-800 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00a3e0] uppercase font-semibold tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Engineering Dispatch</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                Technical Articles &amp; Architecture Notes
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Receive practical engineering write-ups covering cloud architecture, distributed systems, and real-world deployment patterns.
              </p>
            </div>

            <div className="lg:col-span-5">
              {emailSubscribed ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 rounded-[6px] text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! You have been subscribed to our engineering notes.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-2.5 bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs rounded-[6px] focus:outline-none focus:border-[#00a3e0]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0033a0] hover:bg-[#00287a] text-white px-5 py-2.5 rounded-[6px] text-xs font-semibold transition-colors whitespace-nowrap shadow-xs"
                  >
                    Subscribe
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
