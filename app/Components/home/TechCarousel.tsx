import Image from 'next/image';

const TECHNOLOGIES = [
  { name: 'TypeScript', icon: '/images/tech/typescript.svg' },
  { name: 'Next.js', icon: '/images/tech/nextjs.svg' },
  { name: 'React', icon: '/images/tech/react.svg' },
  { name: 'Node.js', icon: '/images/tech/nodejs.svg' },
  { name: 'Python', icon: '/images/tech/python.svg' },
  { name: 'Go', icon: '/images/tech/go.svg' },
  { name: 'PostgreSQL', icon: '/images/tech/postgresql.svg' },
  { name: 'Redis', icon: '/images/tech/redis.svg' },
  { name: 'Docker', icon: '/images/tech/docker.svg' },
  { name: 'Kubernetes', icon: '/images/tech/kubernetes.svg' },
  { name: 'AWS', icon: '/images/tech/aws.svg' },
  { name: 'Kafka', icon: '/images/tech/kafka.svg' },
  { name: 'GraphQL', icon: '/images/tech/graphql.svg' },
  { name: 'Terraform', icon: '/images/tech/terraform.svg' },
];

export default function TechCarousel() {
  return (
    <div className="w-full border-t border-white/10 bg-[#000022]/95 backdrop-blur-md py-4 overflow-hidden relative select-none">
      <div className="max-w-[1440px] mx-auto px-6 flex flex-col md:flex-row md:items-center gap-4">
        
        {/* Static Header Label: Plain Text with Hover Transition */}
        <div className="flex items-center shrink-0 pr-4 md:border-r border-white/15 z-10">
          <span className="text-xs font-semibold uppercase tracking-wider text-slate-300 hover:text-white transition-colors duration-200 cursor-default">
            Technologies We Work With
          </span>
        </div>

        {/* Carousel / Running Marquee Track */}
        <div className="flex-1 overflow-hidden relative">
          {/* Subtle Left and Right Gradient Fades */}
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-[#000022] to-transparent z-10 pointer-events-none" />
          <div className="hidden md:block absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-[#000022] to-transparent z-10 pointer-events-none" />

          <div className="animate-tech-marquee flex items-center gap-3">
            {/* First sequence */}
            {TECHNOLOGIES.map((tech) => (
              <div
                key={`tech-1-${tech.name}`}
                className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] bg-white/5 border border-white/10 hover:border-[#00a3e0]/60 hover:bg-white/10 transition-all shrink-0 cursor-default"
              >
                <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain transition-transform duration-300 ease-out group-hover:scale-125"
                  />
                </div>
                <span className="text-xs text-slate-200 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}

            {/* Duplicate sequence for continuous infinite loop */}
            {TECHNOLOGIES.map((tech) => (
              <div
                key={`tech-2-${tech.name}`}
                className="group inline-flex items-center gap-2.5 px-3 py-1.5 rounded-[6px] bg-white/5 border border-white/10 hover:border-[#00a3e0]/60 hover:bg-white/10 transition-all shrink-0 cursor-default"
              >
                <div className="relative w-4 h-4 shrink-0 flex items-center justify-center">
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={16}
                    height={16}
                    className="w-4 h-4 object-contain transition-transform duration-300 ease-out group-hover:scale-125"
                  />
                </div>
                <span className="text-xs text-slate-200 font-medium whitespace-nowrap group-hover:text-white transition-colors">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
