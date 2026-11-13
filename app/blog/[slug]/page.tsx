import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { 
  ChevronRight, 
  ArrowLeft, 
  Calendar, 
  Clock, 
  CheckCircle2
} from 'lucide-react';
import { blogPosts, getBlogPostBySlug, getAllBlogSlugs } from '../../data/blogData';
import EngineeringBlogSection from '../../Components/EngineeringBlogSection';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    return {
      title: 'Article Not Found | Improx Tech',
    };
  }

  return {
    title: `${post.title} | Improx Tech Research`,
    description: post.summary,
  };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="bg-white text-gray-900 min-h-screen selection:bg-[#0033a0] selection:text-white">
      
      {/* ================= LIGHT EDITORIAL SUBPAGE HEADER ================= */}
      <section className="bg-slate-50 border-b border-slate-200 py-10 lg:py-14">
        <div className="max-w-[1440px] mx-auto px-6">
          
          {/* Breadcrumb Navigation */}
          <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-6 flex-wrap">
            <Link href="/" className="hover:text-gray-900 transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <Link href="/blog" className="hover:text-gray-900 transition-colors">Insights &amp; Research</Link>
            <ChevronRight className="w-3.5 h-3.5 text-gray-400" />
            <span className="text-[#0033a0] font-medium truncate max-w-xs">{post.title}</span>
          </nav>

          <div className="max-w-4xl space-y-4">
            
            <div className="flex flex-wrap items-center gap-3 text-xs">
              <span className="px-3 py-1 rounded-[6px] bg-blue-50 border border-blue-200 text-[#0033a0] font-bold uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5" />
                <span>{post.date}</span>
              </span>
              <span className="text-gray-500 flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{post.readTime}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-[#000033] leading-tight">
              {post.title}
            </h1>

            <div className="pt-2 flex items-center gap-3 text-xs text-gray-600">
              <div className="w-9 h-9 rounded-[6px] bg-[#000033] text-white flex items-center justify-center font-bold text-xs">
                {post.author.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-gray-900">{post.author}</div>
                <div className="text-gray-500">{post.authorRole}</div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ================= ARTICLE MAIN CONTENT & SIDEBAR ================= */}
      <section className="py-14 lg:py-20 max-w-[1440px] mx-auto px-6 border-b border-slate-200">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Main Article Body */}
          <article className="lg:col-span-8 space-y-10">
            
            {/* Article Local Hero Image */}
            <div className="relative h-64 sm:h-80 lg:h-96 w-full rounded-[6px] overflow-hidden shadow-sm bg-slate-900 border border-slate-300">
              <Image
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 65vw"
                priority
              />
            </div>

            {/* Executive Abstract */}
            <div className="p-6 sm:p-8 rounded-[6px] bg-slate-50 border-l-4 border-l-[#0033a0] border-y border-r border-slate-300 text-sm sm:text-base text-gray-700 leading-relaxed space-y-2">
              <div className="text-xs font-bold uppercase tracking-wider text-[#0033a0]">Executive Summary</div>
              <p className="font-medium text-gray-900">{post.summary}</p>
            </div>

            {/* Key Takeaways */}
            <div className="p-6 sm:p-8 rounded-[6px] bg-[#f8fafd] border border-slate-300 space-y-4">
              <h3 className="text-lg font-bold text-[#000033]">Key Architectural Takeaways</h3>
              <ul className="space-y-3">
                {post.takeaways.map((takeaway, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-gray-700 leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#0033a0] shrink-0 mt-0.5" />
                    <span>{takeaway}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Section by Section Content */}
            <div className="space-y-10">
              {post.content.map((sec, idx) => (
                <div key={idx} className="space-y-4">
                  <h2 className="text-2xl sm:text-3xl font-bold text-[#000033] leading-snug">
                    {sec.heading}
                  </h2>

                  <div className="space-y-4 text-sm sm:text-base text-gray-700 leading-relaxed">
                    {sec.body.map((para, pIdx) => (
                      <p key={pIdx}>{para}</p>
                    ))}
                  </div>

                  {sec.codeSnippet && (
                    <div className="bg-[#000022] text-slate-200 rounded-[6px] p-5 font-mono text-xs overflow-x-auto border border-slate-800 space-y-1 mt-4">
                      <pre><code>{sec.codeSnippet}</code></pre>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Tags Row */}
            <div className="pt-6 border-t border-slate-200 flex flex-wrap items-center gap-2">
              <span className="text-xs font-bold text-gray-500 mr-2">Tags:</span>
              {post.tags.map((tag) => (
                <span key={tag} className="text-xs bg-slate-100 text-gray-700 px-3 py-1 rounded-[6px] border border-slate-200 font-mono">
                  #{tag}
                </span>
              ))}
            </div>

            {/* Back to Blog */}
            <div className="pt-4">
              <Link 
                href="/blog" 
                className="inline-flex items-center gap-2 text-xs font-bold text-[#0033a0] hover:text-[#00287a] transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to All Publications</span>
              </Link>
            </div>

          </article>


          {/* Right Sidebar */}
          <aside className="lg:col-span-4 space-y-8">
            
            {/* Author Bio Card */}
            <div className="p-7 rounded-[6px] bg-slate-50 border border-slate-300 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#0033a0]">About the Author</h4>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[6px] bg-[#000033] text-white flex items-center justify-center font-bold text-base">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">{post.author}</div>
                  <div className="text-xs text-gray-500">{post.authorRole}</div>
                </div>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">
                Specializing in enterprise cloud architecture, distributed systems, and modern digital engineering at Improx Tech.
              </p>
            </div>

            {/* Related Research Articles */}
            <div className="p-7 rounded-[6px] bg-white border border-slate-300 space-y-4 shadow-2xs">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500">Related Research</h4>
              <div className="space-y-4">
                {relatedPosts.map((related) => (
                  <Link 
                    key={related.slug}
                    href={`/blog/${related.slug}`}
                    className="block group space-y-1 border-b border-slate-100 pb-3 last:border-0 last:pb-0"
                  >
                    <div className="text-[11px] font-bold text-[#0033a0] uppercase">{related.category}</div>
                    <div className="text-xs font-bold text-gray-900 group-hover:text-[#0033a0] transition-colors line-clamp-2">
                      {related.title}
                    </div>
                    <div className="text-[10px] text-gray-400">{related.readTime} • {related.date}</div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Consultation Card */}
            <div className="p-8 rounded-[6px] bg-[#000033] text-white space-y-4 border border-slate-800">
              <h4 className="text-lg font-bold">Have an Architectural Challenge?</h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schedule a consultation with our senior engineering directors to review your enterprise roadmap.
              </p>
              <Link
                href="/contact"
                className="block text-center w-full bg-[#0033a0] hover:bg-[#00287a] text-white font-semibold py-3.5 rounded-[6px] text-xs transition-colors shadow-sm"
              >
                Schedule Architecture Consultation
              </Link>
            </div>

          </aside>

        </div>
      </section>

      {/* ================= ENGINEERING INSIGHTS & KNOWLEDGE HUB SECTION ================= */}
      <EngineeringBlogSection 
        filterCategory={post.category} 
        title="More Enterprise Research & Analysis"
        subtitle="Explore related architecture blueprints, cloud patterns, and executive briefs."
      />

    </div>
  );
}
