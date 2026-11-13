import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { selectedProjects, Project } from '@/app/data/projectsData';

export default function SelectedWorkSection() {
  // If no verified projects exist yet, hide this section entirely
  if (!selectedProjects || selectedProjects.length === 0) {
    return null;
  }

  return (
    <section className="py-24 bg-white text-slate-900 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-wider text-[#0033a0] font-semibold mb-2">
            Selected Work
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-slate-900 mb-4">
            Recent engineering deliveries.
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Real systems designed and delivered for production environments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {selectedProjects.map((project: Project) => (
            <div
              key={project.slug}
              className="border border-slate-200 rounded-[6px] overflow-hidden card-hover flex flex-col justify-between bg-white"
            >
              {project.image && (
                <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover card-image-zoom"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#0033a0] uppercase tracking-wider">
                    {project.clientIndustry}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 mt-2 mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {project.summary}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech: string) => (
                      <span
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-[6px] bg-slate-100 text-slate-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <Link
                  href={`#`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-[#0033a0] hover:text-[#00287a] group transition-colors"
                >
                  <span>View Case Details</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
