import { Star } from "@phosphor-icons/react/dist/ssr";
import { cn } from "@/lib/utils";

export function StarRating({
  rating,
  className,
}: {
  rating: number;
  className?: string;
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, index) => {
        const filled = index + 1 <= Math.round(rating);
        return (
          <Star
            key={index}
            weight={filled ? "fill" : "regular"}
            className={cn("h-4 w-4", filled ? "text-gold" : "text-white/25")}
          />
        );
      })}
    </div>
  );
}
