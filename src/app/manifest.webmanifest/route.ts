import { NextResponse } from "next/server"
import { SITE_CONFIG } from "@/lib/constants"

export async function GET() {
  const manifest = {
    name: SITE_CONFIG.name,
    short_name: "M-Wakili",
    description: SITE_CONFIG.description,
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#7c3aed",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/apple-icon.svg", sizes: "180x180", type: "image/svg+xml" },
    ],
  }

  return NextResponse.json(manifest, {
    headers: { "content-type": "application/manifest+json" },
  })
}
