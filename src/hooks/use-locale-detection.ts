"use client";

import { useState, useEffect, useMemo } from "react";
import { useLocale } from "next-intl";
import { 
  detectBestLocale, 
  detectLocaleFromBrowser, 
  detectLocaleFromTimezone,
  getCookieLocale
} from "@/lib/locale-detection";
import type { Locale } from "@/i18n/routing";

/**
 * Hook that provides locale detection information and utilities.
 * 
 * @returns Object containing:
 *  - currentLocale: The active locale
 *  - detectedLocale: Best locale detected from browser/timezone
 *  - isAutoDetected: Whether the current locale was auto-detected
 *  - hasPreference: Whether user has saved a preference
 */
export function useLocaleDetection() {
  const currentLocale = useLocale() as Locale;
  const [mounted, setMounted] = useState(false);
  
  // Only run detection after mount to avoid hydration mismatch
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  
  // Compute detection state (runs on every render but that's ok, it's fast)
  const detectedLocale = mounted ? detectBestLocale() : null;
  const hasPreference = mounted ? !!getCookieLocale() : false;
  const isAutoDetected = mounted && !hasPreference && detectedLocale === currentLocale;
  
  return {
    currentLocale,
    detectedLocale,
    isAutoDetected,
    hasPreference,
  };
}

/**
 * Hook that detects if the visitor's browser locale differs from the current locale.
 * Useful for showing a language suggestion banner.
 * 
 * @returns Object containing:
 *  - shouldSuggest: Whether to suggest a different locale
 *  - suggestedLocale: The suggested locale based on browser
 *  - currentLocale: The active locale
 */
export function useLocaleSuggestion() {
  const currentLocale = useLocale() as Locale;
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);
  
  // Compute suggested locale (only after mount to avoid hydration issues)
  const suggestedLocale = useMemo(() => {
    if (!mounted) return null;
    
    // Don't suggest if user has explicitly chosen a language
    const cookieLocale = getCookieLocale();
    if (cookieLocale) return null;
    
    // Try to detect from browser first, then timezone
    const browserLocale = detectLocaleFromBrowser();
    const timezoneLocale = detectLocaleFromTimezone();
    const detected = browserLocale || timezoneLocale;
    
    // Only suggest if detected locale differs from current
    return (detected && detected !== currentLocale) ? detected : null;
  }, [mounted, currentLocale]);
  
  return {
    shouldSuggest: !!suggestedLocale && suggestedLocale !== currentLocale,
    suggestedLocale,
    currentLocale,
  };
}
