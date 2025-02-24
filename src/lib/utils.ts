import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function cleanWordPressContent(content: string): string {
  // Remove <p> tags but keep line breaks
  content = content.replace(/<p>/g, '').replace(/<\/p>/g, '\n\n');
  
  // Remove <br> tags
  content = content.replace(/<br\s*\/?>/g, '');
  
  // Remove multiple consecutive line breaks
  content = content.replace(/\n\s*\n/g, '\n\n');
  
  // Trim extra whitespace
  content = content.trim();
  
  return content;
} 