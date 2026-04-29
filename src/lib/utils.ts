import { type ClassValue, clsx } from 'clsx';

export function cn(...inputs: ClassValue[]) {
  try {
    return clsx(inputs);
  } catch {
    return inputs.filter(Boolean).join(' ');
  }
}
