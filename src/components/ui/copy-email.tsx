import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';
import { cn } from '@/lib/utils';

interface CopyEmailProps {
  email: string;
  className?: string;
}

export function CopyEmail({ email, className }: CopyEmailProps) {
  const { copied, copy } = useCopyToClipboard();

  return (
    <div className={cn('inline-flex flex-col sm:flex-row items-start sm:items-center gap-3', className)}>
      <button
        type="button"
        onClick={() => copy(email)}
        aria-label={copied ? 'E-mail copiado para a área de transferência' : `Copiar e-mail ${email}`}
        className="group min-h-[48px] px-5 py-3 rounded-md bg-[#121214] border border-[#B08D57]/30 hover:border-[#B08D57] text-[#EDEAE4] hover:text-white transition-all flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B08D57]"
      >
        <span className="font-mono text-sm tracking-wide text-[#EDEAE4]">
          {email}
        </span>

        {/* Ícone de feedback */}
        <span className="p-1 rounded bg-white/[0.04] text-[#B08D57] group-hover:text-[#C5A065] transition-colors">
          {copied ? (
            <svg
              className="w-4 h-4 stroke-current fill-none text-emerald-400"
              viewBox="0 0 24 24"
              strokeWidth="2.5"
              aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
            </svg>
          ) : (
            <svg
              className="w-4 h-4 stroke-current fill-none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              aria-hidden="true"
            >
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
        </span>

        <span className="font-mono text-xs uppercase tracking-wider text-[#9E9A91] group-hover:text-[#EDEAE4]">
          {copied ? 'Copiado!' : 'Copiar'}
        </span>
      </button>

      {/* Região de anúncio acessível para leitores de tela */}
      <span className="sr-only" role="status" aria-live="polite">
        {copied ? 'E-mail copiado com sucesso para a área de transferência.' : ''}
      </span>
    </div>
  );
}
