'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, 
  ArrowRight, 
  Calendar, 
  Clock, 
  BookOpen, 
  Mail, 
  Check, 
  Tag 
} from 'lucide-react';
import { blogPosts, BlogPost } from '../data/blogData';

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [emailSubscribed, setEmailSubscribed] = useState(false);
  const [emailInput, setEmailInput] = useState('');

  const categories = [
    'All',
    'AI & Machine Learning',
    'Cloud Engineering',
    'Data & Analytics',
    'Product Engineering'
  ];

  const filteredPosts: BlogPost[] = selectedCategory === 'All'
    ? blogPosts
    : blogPosts.filter((p) => p.category.toLowerCase().includes(selectedCategory.toLowerCase()));

  const featuredPost = filteredPosts[0] || blogPosts[0];
  const gridPosts = filteredPosts.filter((p) => p.slug !== featuredPost.slug);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (emailInput.trim()) {
      setEmailSubscribed(true);
      setEmailInput('');
    }
  };

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= LIGHT EDITORIAL SUBPAGE HEADER ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-[1440px] mx-auto px-6">
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0033a0] font-medium">Knowledge Hub &amp; Publications</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            <p className="text-xs font-bold uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] transition-colors duration-200 cursor-default inline-block">
              Enterprise Architecture &amp; Technology Publications
            </p>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000033] leading-tight">
              Engineering Insights &amp; Technology Strategy
            </h1>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-medium">
              Practical architectural playbooks, executive data analytics frameworks, and cloud modernization case studies authored by Improx Tech engineering directors and solutions architects.
            </p>

            {/* Topic Filter Buttons */}
            <div className="flex flex-wrap items-center gap-2 pt-2">
              <span className="text-gray-500 font-bold uppercase tracking-wider text-[11px] mr-2 flex items-center gap-1">
                <Tag className="w-3 h-3" />
                <span>Filter Topics:</span>
              </span>
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 rounded-[6px] text-xs font-semibold transition-all border ${
                    selectedCategory === cat
                      ? 'bg-[#0033a0] text-white border-[#0033a0] shadow-xs'
                      : 'bg-white text-gray-700 border-slate-300 hover:border-slate-400 hover:bg-slate-50'
                  }`}
                >
                  {cat} {cat === 'All' ? `(${blogPosts.length})` : ''}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* ================= FEATURED COVER STORY (HORIZONTAL SPLIT) ================= */}
      {featuredPost && (
        <section className="py-12 bg-white border-b border-slate-200">
          <div className="max-w-[1440px] mx-auto px-6">
            <div className="group bg-[#000033] text-white rounded-[6px] overflow-hidden border border-slate-800 grid grid-cols-1 lg:grid-cols-12 shadow-lg">
              
              <div className="lg:col-span-7 p-8 lg:p-12 flex flex-col justify-between space-y-6">
                <div>
                  <div className="flex items-center gap-3 text-xs mb-4">
                    <span className="px-2.5 py-1 rounded-[6px] bg-[#00a3e0] text-[#000033] font-bold uppercase tracking-wider">
                      Featured Cover Story
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featuredPost.date}</span>
                    </span>
                    <span className="text-slate-400 flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featuredPost.readTime}</span>
                    </span>
                    <span className="text-[#00a3e0] font-semibold border-l border-slate-700 pl-3">
                      {featuredPost.category}
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold leading-tight text-white mb-4 hover:text-[#00a3e0] transition-colors">
                    <Link href={`/blog/${featuredPost.slug}`}>
                      {featuredPost.title}
                    </Link>
                  </h2>

                  <p className="text-sm text-slate-300 leading-relaxed max-w-2xl">
                    {featuredPost.summary}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-4">
                    {featuredPost.tags.map((tag) => (
                      <span key={tag} className="text-xs bg-white/10 text-slate-300 px-2.5 py-1 border border-white/20 font-mono">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4 text-xs">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 bg-white/10 text-white flex items-center justify-center font-bold">
                      {featuredPost.author.charAt(0)}
                    </div>
                    <div>
                      <div className="text-white font-bold">{featuredPost.author}</div>
                      <div className="text-slate-400 text-[11px]">{featuredPost.authorRole}</div>
                    </div>
                  </div>

                  <Link
                    href={`/blog/${featuredPost.slug}`}
                    className="bg-[#0033a0] hover:bg-[#00287a] text-white px-6 py-3 rounded-[6px] font-bold inline-flex items-center gap-1.5 transition-colors"
                  >
                    <span>Read Full Whitepaper</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>

              {/* Graphic Backdrop with Local Image and Key Takeaway Callout */}
              <div className="lg:col-span-5 relative bg-slate-900 min-h-[320px] flex flex-col justify-end p-8 border-t lg:border-t-0 lg:border-l border-slate-800 overflow-hidden">
                <Image
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#000033] via-[#000033]/60 to-transparent" />
                
                <div className="relative z-10 bg-[#000022]/90 border border-slate-700/80 p-5 rounded-[6px] backdrop-blur-md space-y-2">
                  <div className="text-[#00a3e0] text-xs font-mono uppercase font-bold tracking-wider">
                    Executive Key Takeaways
                  </div>
                  <ul className="space-y-1.5 text-xs text-slate-200">
                    {featuredPost.takeaways.map((takeaway, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#00a3e0] font-bold">•</span>
                        <span>{takeaway}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </section>
      )}


      {/* ================= ARTICLES GRID ================= */}
      <section className="py-16 lg:py-24 max-w-[1440px] mx-auto px-6 border-b border-slate-200">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 pb-4 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#000033]">
              {selectedCategory === 'All' ? 'All Publications & Technical Analyses' : `${selectedCategory} Articles`}
            </h2>
            <p className="text-sm text-gray-600 mt-1">
              Peer-reviewed technical playbooks, architectural benchmarks, and real-world deployment findings.
            </p>
          </div>
          <span className="text-xs font-mono text-gray-500">
            Showing {gridPosts.length} Articles
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {gridPosts.map((article) => (
            <article 
              key={article.slug}
              className="bg-white rounded-[6px] border border-slate-300 overflow-hidden shadow-2xs hover:border-[#0033a0] hover:shadow-md transition-all flex flex-col justify-between group"
            >
              <div>
                {/* Card Image Banner */}
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent" />
                </div>

                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-gray-500 font-medium">
                    <span className="font-mono text-[11px] font-semibold text-[#0033a0] uppercase tracking-wider">
                      {article.category}
                    </span>
                    <span>{article.readTime}</span>
                  </div>

                  <h3 className="text-base font-bold text-gray-900 leading-snug group-hover:text-[#0033a0] transition-colors line-clamp-2">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>

                  <p className="text-xs text-gray-600 leading-relaxed line-clamp-3">
                    {article.summary}
                  </p>

                  <div className="flex flex-wrap gap-1 pt-1">
                    {article.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-mono bg-slate-100 text-gray-600 px-2 py-0.5 border border-slate-200">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-5 bg-[#f8fafd] border-t border-slate-200 flex items-center justify-between text-xs text-gray-600">
                <span className="truncate max-w-[150px] font-medium">{article.author}</span>
                <Link 
                  href={`/blog/${article.slug}`}
                  className="font-bold text-[#0033a0] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

      </section>


      {/* ================= TECHNICAL BRIEFING NEWSLETTER BAR ================= */}
      <section className="bg-[#000033] text-white py-16 border-t border-slate-800">
        <div className="max-w-[1440px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-2">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-[#00a3e0] uppercase font-bold tracking-wider">
                <BookOpen className="w-3.5 h-3.5" />
                <span>Executive Engineering Dispatch</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Subscribe to Improx Tech Executive Research
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
                Get our latest cloud architecture benchmarks, data engineering patterns, and enterprise AI analyses delivered bi-weekly to your inbox.
              </p>
            </div>

            <div className="lg:col-span-5">
              {emailSubscribed ? (
                <div className="p-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-200 text-xs flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Thank you! You have been subscribed to the Improx Executive Dispatch.</span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe} className="flex flex-col sm:flex-row gap-2">
                  <div className="relative flex-1">
                    <Mail className="w-4 h-4 text-gray-400 absolute left-3 top-3.5" />
                    <input
                      type="email"
                      required
                      placeholder="corporate.email@enterprise.com"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      className="w-full pl-9 pr-3 py-3 bg-white/10 border border-white/20 text-white placeholder-slate-400 text-xs rounded-[6px] focus:outline-hidden focus:border-[#00a3e0]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-[#0033a0] hover:bg-[#00287a] text-white px-5 py-3 rounded-[6px] text-xs font-bold transition-colors whitespace-nowrap shadow-sm border border-blue-400/30"
                  >
                    Subscribe Dispatch
                  </button>
                </form>
              )}
              <div className="text-[11px] text-slate-400 mt-2">
                Zero spam. Strict enterprise privacy. Unsubscribe anytime with 1-click.
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
