import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Função utilitária para combinar classes do Tailwind CSS de forma segura,
 * evitando conflitos de especificidade e permitindo condicionais limpos.
 *
 * Exemplo de uso:
 * cn('px-4 py-2 text-sm', isActive && 'bg-bronze-primary text-black')
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}
