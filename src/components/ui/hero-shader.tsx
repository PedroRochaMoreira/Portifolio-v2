import { lazy, Suspense, useState, useEffect } from 'react';
import { usePrefersReducedMotion } from '@/hooks/use-reduced-motion';

/**
 * Componente dinâmico carregado via React.lazy para isolar o Three.js do bundle crítico.
 */
const LazyShaderMesh = lazy(() => import('./shader-mesh'));

/**
 * Componente do ShaderGradient com arquitetura resiliente:
 * 1. Fallback estático em CSS renderizado imediatamente (zero impacto no LCP inicial).
 * 2. Carregamento sob demanda (React.lazy) somente após a hidratação e montagem.
 * 3. Fallback imediato se o usuário tiver 'prefers-reduced-motion', Save-Data ou WebGL desabilitado.
 */
export function HeroShader() {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    // Se o usuário prefere movimento reduzido ou conexão econômica, mantemos o fallback estático
    if (prefersReducedMotion) return;

    const nav = navigator as unknown as { connection?: { saveData?: boolean } };
    if (nav.connection?.saveData) return;

    // Checagem segura de suporte a WebGL no navegador
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      if (!gl) return;
    } catch {
      return;
    }

    // Carregamento lazy após o primeiro paint
    const timer = setTimeout(() => {
      setCanRenderWebGL(true);
    }, 400);

    return () => clearTimeout(timer);
  }, [prefersReducedMotion]);

  return (
    <div
      aria-hidden="true"
      className="absolute inset-0 pointer-events-none overflow-hidden select-none"
    >
      {/* Fallback Estático em CSS — Gradiente suave bronze/preto (WCAG e LCP otimizado) */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-20%,rgba(176,141,87,0.12),rgba(10,10,11,0.95))]" />

      {/* Camada WebGL carregada dinamicamente via Suspense */}
      {canRenderWebGL && (
        <div className="absolute inset-0 opacity-50 mix-blend-screen transition-opacity duration-1000">
          <Suspense fallback={null}>
            <LazyShaderMesh />
          </Suspense>
        </div>
      )}

      {/* Linhas de grade sutis para reforçar o tom arquitetural/editorial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
    </div>
  );
}
