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
    style: "bg-gray-400",
  },

  active: {
    text: "Active",
    style: "bg-green-400",
  },

  review: {
    text: "Review",
    style: "bg-amber-500",
  },

  approved: {
    text: "Approved",
    style: "bg-blue-400",
  },

  locked: {
    text: "Locked",
    style: "bg-red-600 text-white",
  },
  unknown: {
    text: "Unknown",
    style: "",
  },
};

const statusBadgeIcons = {
  draft: <FileBadge />,

  active: <BadgeInfo />,

  review: <Search />,

  approved: <BadgeCheck />,

  locked: <LockKeyhole />,

  unknown: <Search />,
};

export type StatusBadgeVariant = keyof typeof statusBadgeVariants;
interface StatusBadgeProps {
  variant: StatusBadgeVariant;
}

export function StatusBadge({ variant = "unknown" }: StatusBadgeProps) {
  const variantConfig = statusBadgeVariants[variant];

  return (
    <Badge className={cn(variantConfig.style, "mx-2")}>
      {statusBadgeIcons[variant]}
      {variantConfig.text}
    </Badge>
  );
}
