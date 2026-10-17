import { siteConfig } from '@/data/site';
import { HeroShader } from '@/components/ui/hero-shader';

export function HeroSection() {
  return (
    <section
      id="topo"
      className="relative min-h-[90vh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-20 overflow-hidden"
    >
      {/* Assinatura visual do hero: shader de alta sobriedade com fallback CSS imediato */}
      <HeroShader />

      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Identificação de papel editorial */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-6">
          <span className="w-2 h-2 rounded-full bg-[#B08D57]" aria-hidden="true" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#9E9A91]">
            {siteConfig.role}
          </span>
        </div>

        {/* H1 Semântico Único: Nome do profissional */}
        <h1 className="text-5xl sm:text-7xl md:text-8xl font-bold tracking-tight text-[#EDEAE4] leading-[1.05]">
          Pedro Rocha
          <span className="text-[#B08D57]">.</span>
        </h1>

        {/* Posicionamento factual sem clichês */}
        <p className="mt-6 text-lg sm:text-xl md:text-2xl text-[#9E9A91] max-w-2xl font-normal leading-relaxed">
          Estudante de Engenharia de Software focado em engenharia de interface, sistemas de design e front-end de produção.
        </p>

        {/* CTAs com alvos acessíveis (>= 44px) */}
        <div className="flex flex-wrap items-center gap-4 mt-10">
          <a
            href="#projetos"
            className="min-h-[48px] px-6 py-3 rounded-md bg-[#EDEAE4] text-[#0A0A0B] font-mono text-xs uppercase tracking-wider font-semibold hover:bg-white transition-all shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
          >
            Ver Projetos
          </a>

          <a
            href="#contato"
            className="min-h-[48px] px-6 py-3 rounded-md bg-transparent border border-white/[0.15] text-[#EDEAE4] font-mono text-xs uppercase tracking-wider hover:border-[#B08D57] hover:text-white transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
          >
            Entrar em Contato
          </a>
        </div>
      </div>
    </section>
  );
}
