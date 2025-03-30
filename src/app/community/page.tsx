import type { Metadata, Viewport } from "next"
import CommunityContent from "@/components/community/community-content"

export const metadata: Metadata = {
  title: "Community | Riguelni",
  description: "Meet the team behind Riguelni",
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
}

export default function CommunityPage() {
  return <CommunityContent />
}

