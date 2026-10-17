import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { siteConfig } from '@/data/site';

interface NavItem {
  name: string;
  link: string;
  num: string;
}

const navItems: NavItem[] = [
  { name: 'Sobre', link: '#sobre', num: '01' },
  { name: 'Projetos', link: '#projetos', num: '02' },
  { name: 'Contato', link: '#contato', num: '03' },
];

export function FloatingNav() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Atualiza a seção ativa com base na rolagem
      const sections = ['sobre', 'projetos', 'contato'];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 200 && rect.bottom >= 200) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 transition-all duration-300',
          scrolled
            ? 'py-3.5 bg-[#0A0A0B]/85 backdrop-blur-md border-b border-white/[0.06] shadow-sm'
            : 'py-6 bg-transparent'
        )}
      >
        {/* Monograma de assinatura — Preservando a identidade PR. */}
        <a
          href="#topo"
          className="group flex items-baseline font-mono text-lg font-bold tracking-tight text-[#EDEAE4] hover:text-white transition-colors"
          aria-label="Pedro Rocha — Início"
        >
          <span>PR</span>
          <span className="text-[#B08D57] transition-transform duration-200 group-hover:scale-125">.</span>
        </a>

        {/* Navegação Principal Semântica */}
        <nav aria-label="Navegação principal">
          <ul className="flex items-center gap-1 sm:gap-2 text-sm">
            {navItems.map((item) => {
              const isActive = activeSection === item.link.replace('#', '');
              return (
                <li key={item.link}>
                  <a
                    href={item.link}
                    aria-current={isActive ? 'page' : undefined}
                    className={cn(
                      'px-3 py-2 rounded-md font-mono text-xs sm:text-sm tracking-wide transition-all inline-flex items-center gap-1.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]',
                      isActive
                        ? 'text-white bg-white/[0.08]'
                        : 'text-[#9E9A91] hover:text-[#EDEAE4] hover:bg-white/[0.04]'
                    )}
                  >
                    <span className="text-[#B08D57] font-semibold">{item.num}</span>
                    <span className="hidden sm:inline font-sans text-xs uppercase tracking-wider">{item.name}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Acesso rápido às redes oficiais com SVGs inline otimizados */}
        <div className="flex items-center gap-3">
          <a
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do GitHub de Pedro Rocha (abre em nova aba)"
            className="p-2 text-[#9E9A91] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] rounded"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
          <a
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Perfil do LinkedIn de Pedro Rocha (abre em nova aba)"
            className="p-2 text-[#9E9A91] hover:text-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57] rounded"
          >
            <svg
              className="w-4 h-4 fill-current"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
          </a>
        </div>
      </header>
    </AnimatePresence>
  );
}
