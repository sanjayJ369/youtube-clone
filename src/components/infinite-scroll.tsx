import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { useEffect } from "react";
import { Button } from "./ui/button";

interface InifniteScrollProps {
  isMannual?: boolean;
  hasNextPage?: boolean;
  isFetchingNextPage?: boolean;
  fetchNextPage: () => void;
}

export const InfiniteScroll = ({
  isMannual = false,
  hasNextPage,
  isFetchingNextPage,
  fetchNextPage,
}: InifniteScrollProps) => {
  const { targetRef, isIntersecting } = useIntersectionObserver({
    rootMargin: "0px",
    threshold: 1.0,
  });

  useEffect(() => {
    if (isIntersecting && hasNextPage && !isFetchingNextPage && !isMannual) {
      fetchNextPage();
    }
  }, [
    isIntersecting,
    hasNextPage,
    isFetchingNextPage,
    isMannual,
    fetchNextPage,
  ]);
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <div ref={targetRef} className="h-1">
        {hasNextPage ? (
          <Button
            variant={"secondary"}
            disabled={!hasNextPage || isFetchingNextPage}
            onClick={() => fetchNextPage()}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </Button>
        ) : (
          <p className="text-xs text-muted-foreground">
            Reached the end of the list
          </p>
        )}
      </div>
    </div>
  );
};
