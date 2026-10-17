import { ShaderGradientCanvas, ShaderGradient } from '@shadergradient/react';

/**
 * ShaderGradient configurado com a paleta autoral:
 * Preto profundo (#0A0A0B), bronze escuro (#2A1F13) e acento bronze (#B08D57),
 * velocidade ultra-lenta (0.1) e granulação suave.
 */
export default function ShaderMesh() {
  return (
    <ShaderGradientCanvas
      style={{ width: '100%', height: '100%' }}
      pixelDensity={1}
      fov={45}
      pointerEvents="none"
    >
      <ShaderGradient
        type="plane"
        animate="on"
        uSpeed={0.1}
        uStrength={1.2}
        uDensity={1.0}
        uFrequency={5.5}
        uAmplitude={0}
        color1="#0A0A0B"
        color2="#261B10"
        color3="#B08D57"
        grain="on"
        grainBlending={0.15}
        lightType="3d"
        brightness={1}
      />
    </ShaderGradientCanvas>
  );
}
