
export interface LanguageProps {
  language: string;
  setLanguage?: (language: string) => void;
}

// Lista de lenguajes soportados
export type SupportedLanguage = 'es' | 'en';

// Utilidad para validar un lenguaje
export const isValidLanguage = (lang?: string): lang is SupportedLanguage => {
  return lang === 'es' || lang === 'en';
};

// Obtener un lenguaje válido (con valor por defecto)
export const getValidLanguage = (lang?: string): SupportedLanguage => {
  return isValidLanguage(lang) ? lang : 'es';
};
