import type { Metadata } from "next"
import CommunityContent from "@/components/community/community-content"

export const metadata: Metadata = {
  title: "Community | Riguelni",
  description: "Meet the team behind Riguelni",
}

export default function CommunityPage() {
  return <CommunityContent />
}

