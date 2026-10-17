import { siteConfig } from '@/data/site';

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="px-6 md:px-12 py-24 border-t border-white/[0.06] max-w-5xl mx-auto w-full"
    >
      {/* Título de Seção Semântico com Numeração Editorial */}
      <div className="flex items-baseline gap-3 mb-10">
        <span className="font-mono text-sm text-[#B08D57] font-semibold">01</span>
        <span className="text-white/20 font-mono" aria-hidden="true">—</span>
        <h2 id="sobre-titulo" className="text-2xl sm:text-3xl font-bold tracking-tight text-[#EDEAE4]">
          Sobre
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
        {/* Parágrafos Factuais */}
        <div className="md:col-span-7 space-y-5 text-base sm:text-lg text-[#9E9A91] leading-relaxed">
          <p>
            {siteConfig.bioParagraph1}
          </p>
          <p>
            {siteConfig.bioParagraph2}
          </p>
        </div>

        {/* Painel de Fatos Rápidos */}
        <div className="md:col-span-5 p-6 rounded-lg bg-[#121214] border border-white/[0.06]">
          <h3 className="font-mono text-xs uppercase tracking-wider text-[#B08D57] pb-3 border-b border-white/[0.06] mb-4">
            Fatos Rápidos
          </h3>

          <dl className="space-y-4">
            {siteConfig.quickFacts.map((fact) => (
              <div key={fact.label} className="flex flex-col">
                <dt className="font-mono text-xs text-[#9E9A91] uppercase tracking-wider">
                  {fact.label}
                </dt>
                <dd className="text-sm font-medium text-[#EDEAE4] mt-0.5">
                  {fact.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
