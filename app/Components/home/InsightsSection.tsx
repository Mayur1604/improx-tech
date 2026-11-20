import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Calendar } from 'lucide-react';
import { blogPosts } from '@/app/data/blogData';

export default function InsightsSection() {
  const featuredArticle = blogPosts[0];
  const recentArticles = blogPosts.slice(1, 3);

  return (
    <section className="py-20 lg:py-28 bg-white/95 backdrop-blur-xs border-b border-slate-200/90">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-wider text-[#0033a0] hover:text-[#00287a] font-semibold mb-2 transition-colors duration-200 cursor-default inline-block">
              Engineering Insights
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 leading-tight mb-4">
              Technical articles &amp; architecture notes.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Perspectives from our engineering team on building scalable applications, cloud infrastructure, and data systems.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors self-start md:self-auto shrink-0"
          >
            <span>View All Insights</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Editorial Layout: 1 Featured Lead Story + 2 Recent Articles */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Featured Article (Tech Mahindra Insights Featured Card) */}
          {featuredArticle && (
            <div className="group lg:col-span-7 bg-white border border-slate-200 rounded-[8px] overflow-hidden shadow-2xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0033a0]/50 transition-all duration-300 ease-out flex flex-col justify-between">
              <div className="relative aspect-[16/9] w-full bg-slate-900 overflow-hidden">
                <Image
                  src={featuredArticle.image}
                  alt={featuredArticle.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent" />
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <div className="flex items-center gap-2.5">
                      <span className="font-mono text-[11px] font-semibold px-2.5 py-0.5 rounded-[4px] bg-blue-50 text-[#0033a0] border border-blue-100">
                        {featuredArticle.category}
                      </span>
                      <span className="inline-flex items-center gap-1 text-slate-500">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{featuredArticle.date}</span>
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {featuredArticle.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug group-hover:text-[#0033a0] transition-colors">
                    <Link href={`/blog/${featuredArticle.slug}`}>
                      {featuredArticle.title}
                    </Link>
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                    {featuredArticle.summary}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500 font-medium">By {featuredArticle.author}</span>
                  <Link
                    href={`/blog/${featuredArticle.slug}`}
                    className="font-semibold text-[#0033a0] inline-flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          )}

          {/* 2 Recent Articles (Tech Mahindra What's New / Insights Cards) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {recentArticles.map((article) => (
              <div
                key={article.slug}
                className="group relative bg-white border border-slate-200 rounded-[8px] p-6 sm:p-7 shadow-2xs hover:shadow-xl hover:-translate-y-1.5 hover:border-[#0033a0]/50 transition-all duration-300 ease-out flex-1 flex flex-col justify-between space-y-4 overflow-hidden"
              >
                {/* Accent top highlight */}
                <div 
                  aria-hidden="true"
                  className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#0033a0] to-[#00a3e0] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />

                <div className="space-y-2.5">
                  <div className="flex items-center justify-between text-xs text-slate-500">
                    <span className="font-mono text-[11px] font-semibold px-2 py-0.5 rounded-[4px] bg-blue-50 text-[#0033a0] border border-blue-100">
                      {article.category}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-slate-500">
                      <Clock className="w-3.5 h-3.5" />
                      {article.readTime}
                    </span>
                  </div>

                  <h4 className="text-base sm:text-lg font-bold text-slate-900 leading-snug group-hover:text-[#0033a0] transition-colors">
                    <Link href={`/blog/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h4>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>{article.date}</span>
                  <Link
                    href={`/blog/${article.slug}`}
                    className="font-semibold text-[#0033a0] inline-flex items-center gap-1 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>Read Analysis</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
