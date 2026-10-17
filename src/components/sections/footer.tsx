export function FooterSection() {
  return (
    <footer className="px-6 md:px-12 py-12 border-t border-white/[0.06] max-w-5xl mx-auto w-full flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#9E9A91]">
      <div className="flex items-center gap-2">
        <a
          href="#topo"
          className="text-[#EDEAE4] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#B08D57] rounded"
          aria-label="Voltar ao topo da página"
        >
          <span>PR</span>
          <span className="text-[#B08D57]">.</span>
        </a>
        <span className="text-white/20" aria-hidden="true">|</span>
        <span>Engenharia de software e design de interface.</span>
      </div>

      <p className="tabular-nums">
        © 2026 Pedro Rocha.
      </p>
    </footer>
  );
}
