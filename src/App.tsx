import { FloatingNav } from '@/components/ui/floating-nav';
import { HeroSection } from '@/components/sections/hero';
import { AboutSection } from '@/components/sections/about';
import { ProjectsSection } from '@/components/sections/projects';
import { ContactSection } from '@/components/sections/contact';
import { FooterSection } from '@/components/sections/footer';

export function App() {
  return (
    <div className="relative min-h-screen bg-[#0A0A0B] text-[#EDEAE4] selection:bg-[#B08D57]/30 selection:text-white noise-overlay">
      {/* Skip Link para Acessibilidade por Teclado (WCAG 2.2 AA) */}
      <a
        href="#conteudo-principal"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-[#EDEAE4] focus:text-[#0A0A0B] focus:font-mono focus:text-xs focus:uppercase focus:font-bold focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B08D57]"
      >
        Pular para o conteúdo principal
      </a>

      {/* Navegação Flutuante Fixa */}
      <FloatingNav />

      {/* Landmark Principal <main> Obrigatório */}
      <main id="conteudo-principal">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      {/* Rodapé Editorial */}
      <FooterSection />
    </div>
  );
}

export default App;
