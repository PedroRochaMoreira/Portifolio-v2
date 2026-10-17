import { siteConfig } from '@/data/site';
import { CopyEmail } from '@/components/ui/copy-email';

export function ContactSection() {
  return (
    <section
      id="contato"
      aria-labelledby="contato-titulo"
      className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-5xl mx-auto w-full"
    >
      {/* Título de Seção Semântico */}
      <div className="mb-10">
        <h2 id="contato-titulo" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEAE4]">
          Contato
        </h2>
      </div>

      <div className="p-6 sm:p-10 md:p-12 rounded-lg bg-[#121214] border border-white/[0.06] flex flex-col md:flex-row justify-between items-start md:items-center gap-8 overflow-hidden">
        <div className="w-full md:max-w-md">
          {/* Status de Disponibilidade Discreto */}
          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-[#B08D57]/10 border border-[#B08D57]/20 mb-4">
            <span className="w-2 h-2 rounded-full bg-[#B08D57] animate-pulse" aria-hidden="true" />
            <span className="font-mono text-xs text-[#EDEAE4]">
              Disponível para novos projetos
            </span>
          </div>

          <h3 className="text-xl sm:text-2xl font-semibold text-[#EDEAE4] tracking-tight">
            Vamos conversar?
          </h3>
          <p className="mt-2 text-sm text-[#9E9A91] max-w-md leading-relaxed">
            Se você tem uma oportunidade, projeto ou gostaria de conversar sobre engenharia de software e interfaces, entre em contato direto.
          </p>

          {/* Componente de Cópia Rápida de E-mail */}
          <div className="mt-6">
            <CopyEmail email={siteConfig.links.email} />
          </div>
        </div>

        {/* Links Sociais com WhatsApp, GitHub e LinkedIn */}
        <div className="flex flex-col sm:flex-row md:flex-col gap-3 w-full md:w-auto">
          {/* Botão do WhatsApp solicitado pelo usuário */}
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Conversar com Pedro Rocha no WhatsApp: +55 61 986092449 (abre em nova aba)"
            className="min-h-[48px] px-5 py-3 rounded-md bg-white/[0.02] border border-white/[0.06] hover:border-[#25D366]/40 text-[#EDEAE4] hover:text-white transition-all flex items-center gap-3 font-mono text-xs uppercase tracking-wider focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
          >
            <svg
              className="w-4 h-4 fill-current text-[#25D366]"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
            </svg>
            <span>WhatsApp</span>
          </a>

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
