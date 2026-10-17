import { projectsData } from '@/data/projects';
import { ProjectCard } from '@/components/ui/project-card';
import { siteConfig } from '@/data/site';

export function ProjectsSection() {
  return (
    <section
      id="projetos"
      aria-labelledby="projetos-titulo"
      className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-5xl mx-auto w-full"
    >
      {/* Título de Seção Semântico */}
      <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 mb-12">
        <h2 id="projetos-titulo" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEAE4]">
          Projetos
        </h2>

        <p className="font-mono text-xs text-[#9E9A91] tracking-wide">
          Estudos de caso em destaque
        </p>
      </div>

      {/* Grade de Projetos */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>

      {/* Chamada para repositórios adicionais no GitHub */}
      <div className="mt-12 p-6 rounded-lg bg-[#121214]/50 border border-white/[0.04] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-semibold text-[#EDEAE4]">
            Outros experimentos e repositórios
          </h3>
          <p className="text-xs text-[#9E9A91] mt-1">
            Algoritmos, estruturas de dados e protótipos de interface estão disponíveis publicamente.
          </p>
        </div>

        <a
          href={siteConfig.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Ver todos os repositórios públicos de Pedro Rocha no GitHub (abre em nova aba)"
          className="inline-flex items-center gap-2 px-4 py-2 rounded font-mono text-xs uppercase tracking-wider text-[#B08D57] hover:text-[#C5A065] border border-[#B08D57]/30 hover:border-[#B08D57] transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] whitespace-nowrap self-start sm:self-auto"
        >
          <span>Acessar GitHub</span>
          <svg className="w-3.5 h-3.5 stroke-current fill-none" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
          </svg>
        </a>
      </div>
    </section>
  );
}
