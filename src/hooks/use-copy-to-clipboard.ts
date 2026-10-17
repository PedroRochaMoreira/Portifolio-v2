import { useState, useCallback } from 'react';

/**
 * Hook para copiar texto para a área de transferência de forma segura e acessível.
 * Fornece estado booleano temporizado para dar feedback visual e sonoro/aria ao usuário.
 */
export function useCopyToClipboard(timeout = 2000) {
  const [copied, setCopied] = useState(false);

  const copy = useCallback(
    async (text: string): Promise<boolean> => {
      if (!navigator?.clipboard) {
        // Fallback para navegadores legados
        try {
          const textArea = document.createElement('textarea');
          textArea.value = text;
          textArea.style.position = 'fixed';
          textArea.style.opacity = '0';
          document.body.appendChild(textArea);
          textArea.focus();
          textArea.select();
          document.execCommand('copy');
          document.body.removeChild(textArea);
          setCopied(true);
          setTimeout(() => setCopied(false), timeout);
          return true;
        } catch {
          return false;
        }
      }

      try {
        await navigator.clipboard.writeText(text);
        setCopied(true);
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (err) {
        console.error('Falha ao copiar:', err);
        return false;
      }
    },
    [timeout]
  );

  return { copied, copy };
}
