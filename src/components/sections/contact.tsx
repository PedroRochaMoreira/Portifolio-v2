import { siteConfig } from '@/data/site';
import { CopyEmail } from '@/components/ui/copy-email';

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-5xl mx-auto w-full"
    >
      {/* Título de Seção com Numeração Editorial */}
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-[#B08D57] font-semibold">03</span>
        <span className="text-white/20 font-mono" aria-hidden="true">—</span>
        <h2 id="contato-titulo" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEAE4]">
          Contato
        </h2>
      </div>

      <div className="p-8 sm:p-12 rounded-lg bg-[#121214] border border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        <div>
          {/* Status de Disponibilidade Discreto */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-[#EDEAE4]">
              Disponível para estágios e projetos
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#EDEAE4] tracking-tight">
            Vamos trabalhar juntos?
          </h3>
          <p className="mt-2 text-sm text-[#9E9A91] max-w-md leading-relaxed">
            Se você tem uma oportunidade, projeto ou gostaria de conversar sobre engenharia de software e interfaces, entre em contato direto.
          </p>

          {/* Componente de Cópia Rápida de E-mail */}
          <div className="mt-6">
            <CopyEmail email={siteConfig.links.email} />
          </div>
        </div>

        {/* Links Sociais com SVGs Inline e Rótulos Visíveis */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do GitHub de Pedro Rocha (abre em nova aba)"
            className="min-h-[48px] px-5 py-3 rounded-md bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] text-[#EDEAE4] hover:text-white transition-all flex items-center gap-3 font-mono text-xs uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub</span>
          </a>

          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do LinkedIn de Pedro Rocha (abre em nova aba)"
            className="min-h-[48px] px-5 py-3 rounded-md bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.2] text-[#EDEAE4] hover:text-white transition-all flex items-center gap-3 font-mono text-xs uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
