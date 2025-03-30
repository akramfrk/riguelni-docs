import type { Metadata, Viewport } from "next"
import UnderDevelopment from "@/components/shared/under-development"

export const metadata: Metadata = {
  title: "404 - Page Not Found | Riguelni",
  description: "The page you're looking for doesn't exist.",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function NotFound() {
  return <UnderDevelopment />
} 