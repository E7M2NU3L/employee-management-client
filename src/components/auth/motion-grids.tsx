import { cn } from "@/lib/utils";
import { InteractiveGridPattern } from "@/components/ui/interactive-grid-pattern";

export function MotionGrids({children} : {
    children : React.ReactNode
}) {
  return (
    <div className="relative flex min-h-[90vh] w-full flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
      <div className="z-10">
        {children}
      </div>
      <InteractiveGridPattern
        className={cn(
          "[mask-image:radial-gradient(600px_circle_at_center,white,transparent)]",
        )}
        width={60}
        height={60}
        squares={[80, 80]}
        squaresClassName="hover:fill-primary"
      />
    </div>
  );
}
