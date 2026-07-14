# Locale Detection Library

This directory contains utilities for automatic locale detection and management.

## Files

### `locale-detection.ts`

Client-side utilities for locale detection and preference management.

**Key Functions:**

- `detectBestLocale()` - Detects the best locale using multiple strategies
- `saveLocalePreference(locale)` - Saves user's language preference to cookie
- `getCookieLocale()` - Retrieves saved locale from cookie
- `detectLocaleFromBrowser()` - Detects locale from browser language
- `detectLocaleFromTimezone()` - Detects locale from browser timezone

**Usage Example:**

```typescript
import { detectBestLocale, saveLocalePreference } from "@/lib/locale-detection";

// Detect best locale
const locale = detectBestLocale();

// Save user preference
saveLocalePreference("de");
```

## Customization

### Adding New Countries

To add support for new countries, update the `countryToLocale` map in `src/middleware.ts`:

```typescript
const countryToLocale: Record<string, string> = {
  // Add your country code here
  NL: "en", // Netherlands -> English (or add Dutch if supported)
  PT: "en", // Portugal -> English (or add Portuguese if supported)
  // ... existing mappings
};
```

### Adding New Timezones

To add timezone-based detection, update the `timezoneToLocale` map in `src/lib/locale-detection.ts`:

```typescript
const timezoneToLocale: Record<string, Locale> = {
  "Europe/Amsterdam": "en", // Add when Dutch is supported
  "Europe/Lisbon": "en", // Add when Portuguese is supported
  // ... existing mappings
};
```

### Adding New Locales

To add a completely new language:

1. Update `src/i18n/routing.ts`:
   ```typescript
   export const locales = ["en", "de", "fr", "es", "it", "nl"] as const;
   ```

2. Add translations in `messages/` directory

3. Update the country and timezone mappings as described above

4. Add the locale to metadata in `src/app/[locale]/layout.tsx`

## Testing

Test locale detection locally:

```javascript
// In browser console:

// Test cookie preference
document.cookie = "NEXT_LOCALE=de; path=/; max-age=31536000";
location.reload();

// Check current cookie
document.cookie.match(/NEXT_LOCALE=([^;]+)/)?.[1];

// Clear preference
document.cookie = "NEXT_LOCALE=; path=/; max-age=0";
```

## Notes

- Server-side geolocation (middleware) takes precedence over client-side detection
- Cookie preference has the highest priority
- Geolocation headers are typically only available in production (Cloudflare/Vercel)
- The Accept-Language header is used as a fallback by next-intl middleware
