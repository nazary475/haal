import { redirect } from "next/navigation";
import type { Metadata } from "next";

/**
 * Root page — redirects to the default locale (English at /en/).
 *
 * With localePrefix: "always" (required for static export), every locale
 * gets a URL prefix including English. The root path redirects to /en/.
 *
 * For visitors with browser language preferences, a client-side redirect
 * could be added here to detect and redirect to their preferred locale.
 * For now, we default to English.
 */

export const metadata: Metadata = {
  title: "Haal Lab — Engineering Intelligent Systems",
  description:
    "Deep-tech AI engineering company. We build private AI systems, LLM applications, RAG, and AI infrastructure for European organizations.",
  metadataBase: new URL("https://haal-lab.solutions"),
  alternates: {
    canonical: "/",
    languages: {
      en: "/en",
      de: "/de",
      fr: "/fr",
      es: "/es",
      it: "/it",
    },
  },
  openGraph: {
    title: "Haal Lab — Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    url: "https://haal-lab.solutions",
    siteName: "Haal Lab",
    locale: "en",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Haal Lab — Engineering Intelligent Systems",
    description:
      "Deep-tech AI engineering company. Private AI systems, LLM applications, RAG, and AI infrastructure.",
    creator: "@haallab",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootPage() {
  redirect("/en");
}
