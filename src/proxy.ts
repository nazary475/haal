import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";
import type { NextRequest } from "next/server";

/**
 * Middleware for automatic locale detection based on visitor location.
 * 
 * Detection priority:
 * 1. User's cookie preference (if they've manually selected a language)
 * 2. Geolocation-based detection (via Cloudflare/Vercel headers)
 * 3. Accept-Language header from browser
 * 4. Default to English
 */

// Map country codes to preferred locales
const countryToLocale: Record<string, string> = {
  // German-speaking countries
  DE: "de", // Germany
  AT: "de", // Austria
  CH: "de", // Switzerland (also has French and Italian, but German is primary)
  LI: "de", // Liechtenstein
  
  // French-speaking countries
  FR: "fr", // France
  BE: "fr", // Belgium (French-speaking regions)
  LU: "fr", // Luxembourg
  MC: "fr", // Monaco
  
  // Spanish-speaking countries
  ES: "es", // Spain
  MX: "es", // Mexico
  AR: "es", // Argentina
  CO: "es", // Colombia
  PE: "es", // Peru
  VE: "es", // Venezuela
  CL: "es", // Chile
  EC: "es", // Ecuador
  GT: "es", // Guatemala
  CU: "es", // Cuba
  BO: "es", // Bolivia
  DO: "es", // Dominican Republic
  HN: "es", // Honduras
  PY: "es", // Paraguay
  SV: "es", // El Salvador
  NI: "es", // Nicaragua
  CR: "es", // Costa Rica
  PA: "es", // Panama
  UY: "es", // Uruguay
  
  // Italian-speaking countries
  IT: "it", // Italy
  SM: "it", // San Marino
  VA: "it", // Vatican City
  
  // English-speaking countries (and default for most others)
  GB: "en", // United Kingdom
  US: "en", // United States
  CA: "en", // Canada (English regions)
  AU: "en", // Australia
  NZ: "en", // New Zealand
  IE: "en", // Ireland
  ZA: "en", // South Africa
  IN: "en", // India
  SG: "en", // Singapore
  PH: "en", // Philippines
  MY: "en", // Malaysia
  PK: "en", // Pakistan
  NG: "en", // Nigeria
  KE: "en", // Kenya
  GH: "en", // Ghana
};

/**
 * Detects locale based on geographic location from request headers.
 */
function detectLocaleFromGeo(request: NextRequest): string | undefined {
  // Try Cloudflare's geolocation header
  const cfCountry = request.headers.get("cf-ipcountry");
  if (cfCountry && countryToLocale[cfCountry]) {
    return countryToLocale[cfCountry];
  }
  
  // Try Vercel's geolocation header
  const vercelCountry = request.headers.get("x-vercel-ip-country");
  if (vercelCountry && countryToLocale[vercelCountry]) {
    return countryToLocale[vercelCountry];
  }
  
  // Try other common geolocation headers
  const xCountry = request.headers.get("x-country-code");
  if (xCountry && countryToLocale[xCountry]) {
    return countryToLocale[xCountry];
  }
  
  return undefined;
}

const intlMiddleware = createMiddleware(routing);

export default function middleware(request: NextRequest) {
  // Check if user is accessing root path or a locale path
  const { pathname } = request.nextUrl;
  
  // If user hasn't selected a locale yet (accessing root or without locale prefix)
  const hasLocalePrefix = routing.locales.some((locale) => 
    pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  
  if (!hasLocalePrefix && pathname === "/") {
    // Check if user has a saved preference in cookie
    const cookieLocale = request.cookies.get("NEXT_LOCALE")?.value;
    if (cookieLocale && routing.locales.includes(cookieLocale as any)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${cookieLocale}`;
      return Response.redirect(url);
    }
    
    // Try to detect from geolocation
    const geoLocale = detectLocaleFromGeo(request);
    if (geoLocale && routing.locales.includes(geoLocale as any)) {
      const url = request.nextUrl.clone();
      url.pathname = `/${geoLocale}`;
      return Response.redirect(url);
    }
  }
  
  // Let next-intl middleware handle the rest (including Accept-Language header)
  return intlMiddleware(request);
}

export const config = {
  // Match all pathnames except for:
  // - API routes
  // - Static files (_next/static)
  // - Image optimization files (_next/image)
  // - Favicon and other public files (logo.svg, manifest.json, etc.)
  matcher: ["/((?!api|_next/static|_next/image|.*\\..*).*)"],
};
