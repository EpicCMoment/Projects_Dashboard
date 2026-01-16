import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import {
  BadgeCheck,
  BadgeInfo,
  FileBadge,
  LockKeyhole,
  Search,
} from "lucide-react";

const statusBadgeVariants = {
  draft: {
    text: "Draft",
    style: "",
  },

  active: {
    text: "Active",
    style: "",
  },

  review: {
    text: "Review",
    style: "",
  },

  approved: {
    text: "Approved",
    style: "",
  },

  locked: {
    text: "Locked",
    style: "",
  },
};

const statusBadgeIcons = {
  draft: <FileBadge />,

  active: <BadgeInfo />,

  review: <Search />,

  approved: <BadgeCheck />,

  locked: <LockKeyhole />,
};

interface StatusBadgeProps {
  variant: keyof typeof statusBadgeVariants | string | undefined;
}

export function StatusBadge({ variant }: StatusBadgeProps) {
  const variantConfig = statusBadgeVariants[variant];

  return (
    <Badge className={cn(variantConfig.style, "mx-2")}>
      {statusBadgeIcons[variant]}
      {variantConfig.text}
    </Badge>
  );
}
