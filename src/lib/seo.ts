import { Metadata } from "next"
import { SITE_CONFIG } from "./constants"

interface SEOProps {
  title: string
  description: string
  path?: string
  ogImage?: string
  noIndex?: boolean
}

export function generateMetadata({
  title,
  description,
  path = "",
  ogImage,
  noIndex,
}: SEOProps): Metadata {
  const url = `${SITE_CONFIG.url}${path}`
  const image = ogImage || `${SITE_CONFIG.url}/icon.svg`

  return {
    title,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url,
      siteName: SITE_CONFIG.name,
      locale: "en_KE",
      type: "website",
      images: [{ url: image, width: 180, height: 180 }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      images: [image],
    },
    ...(noIndex ? { robots: { index: false, follow: false } } : {}),
  }
}

export const defaultMetadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "Kenyan law",
    "AI lawyer",
    "legal AI",
    "Kenya legal research",
    "AI legal assistant",
    "M-Wakili",
    "Kenya constitution",
    "Kenyan advocate",
    "legal tech Kenya",
    "Nairobi lawyer",
  ],
  authors: [{ name: SITE_CONFIG.name, url: SITE_CONFIG.url }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  metadataBase: new URL(SITE_CONFIG.url),
  openGraph: {
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_KE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.name} - ${SITE_CONFIG.tagline}`,
    description: SITE_CONFIG.description,
  },
  icons: {
    icon: "/icon.svg",
    shortcut: "/favicon.ico",
    apple: "/apple-icon.svg",
  },
  manifest: "/manifest.webmanifest",
}
