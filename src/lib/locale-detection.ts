/**
 * Client-side locale detection utilities.
 * 
 * Provides fallback mechanisms for locale detection when server-side
 * geolocation headers are not available.
 */

import { locales, type Locale } from "@/i18n/routing";

/**
 * Map of timezone to likely locale.
 * Used as a fallback when geolocation APIs are not available.
 */
const timezoneToLocale: Record<string, Locale> = {
  // German-speaking timezones
  "Europe/Berlin": "de",
  "Europe/Vienna": "de",
  "Europe/Zurich": "de",
  
  // French-speaking timezones
  "Europe/Paris": "fr",
  "Europe/Brussels": "fr",
  "Europe/Luxembourg": "fr",
  "Europe/Monaco": "fr",
  
  // Spanish-speaking timezones
  "Europe/Madrid": "es",
  "America/Mexico_City": "es",
  "America/Buenos_Aires": "es",
  "America/Bogota": "es",
  "America/Lima": "es",
  "America/Santiago": "es",
  
  // Italian-speaking timezones
  "Europe/Rome": "it",
  "Europe/Vatican": "it",
  "Europe/San_Marino": "it",
};

/**
 * Detects the user's likely locale based on browser timezone.
 * This is a fallback method when server-side geolocation is not available.
 */
export function detectLocaleFromTimezone(): Locale | null {
  try {
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return (timezoneToLocale[timezone] as Locale) || null;
  } catch {
    return null;
  }
}

/**
 * Detects the user's preferred locale from browser language settings.
 */
export function detectLocaleFromBrowser(): Locale | null {
  if (typeof navigator === "undefined") return null;
  
  const browserLang = navigator.language || (navigator as any).userLanguage;
  if (!browserLang) return null;
  
  // Extract primary language code (e.g., "en-US" -> "en")
  const primaryLang = browserLang.split("-")[0].toLowerCase();
  
  // Check if it matches one of our supported locales
  if (locales.includes(primaryLang as Locale)) {
    return primaryLang as Locale;
  }
  
  return null;
}

/**
 * Attempts to detect the best locale for the user using multiple strategies.
 * 
 * Detection order:
 * 1. Saved cookie preference
 * 2. Browser language
 * 3. Browser timezone
 * 4. Default (en)
 */
export function detectBestLocale(): Locale {
  // Check cookie first
  const cookieLocale = getCookieLocale();
  if (cookieLocale) return cookieLocale;
  
  // Try browser language
  const browserLocale = detectLocaleFromBrowser();
  if (browserLocale) return browserLocale;
  
  // Try timezone
  const timezoneLocale = detectLocaleFromTimezone();
  if (timezoneLocale) return timezoneLocale;
  
  // Default
  return "en";
}

/**
 * Saves the user's locale preference to a cookie.
 */
export function saveLocalePreference(locale: Locale): void {
  document.cookie = `NEXT_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
}

/**
 * Gets the saved locale preference from cookie.
 */
export function getCookieLocale(): Locale | null {
  if (typeof document === "undefined") return null;
  
  const match = document.cookie.match(/NEXT_LOCALE=([^;]+)/);
  const locale = match?.[1];
  
  if (locale && locales.includes(locale as Locale)) {
    return locale as Locale;
  }
  
  return null;
}

/**
 * Clears the saved locale preference.
 */
export function clearLocalePreference(): void {
  document.cookie = "NEXT_LOCALE=; path=/; max-age=0";
}
