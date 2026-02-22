"use client";

import React, { useRef, useState, useEffect } from "react";

const SCROLL_SPEED = 0.3; // pixels per frame

export function ScrollCarousel({ children }: { children: React.ReactNode }) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const touchTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    // request animation frame id
    let rafId: number;

    // runs on each animation frame
    const tick = () => {
      if (!isPaused && el) {
        el.scrollLeft += SCROLL_SPEED;
        // duplicated childrent content = twice width for scrollWidth
        const halfWidth = el.scrollWidth / 2;
        // scrolled past first set of children, resent scroll position to start (second set begins)
        if (el.scrollLeft >= halfWidth) {
          el.scrollLeft -= halfWidth;
        }
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  // clear timeout on unmount
  useEffect(() => {
    return () => {
      if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    };
  }, []);

  const childArray = React.Children.toArray(children);

  // pause scroll on touch end and resume after 1.5 seconds
  const handleTouchEnd = () => {
    setIsPaused(true);
    if (touchTimeoutRef.current) clearTimeout(touchTimeoutRef.current);
    touchTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
      touchTimeoutRef.current = null;
    }, 1500);
  };

  // when user takes control: clamp scroll to first set so they only see one set
  const handleUserTakeControl = () => {
    const el = scrollRef.current;
    if (el) {
      const halfWidth = el.scrollWidth / 2;
      if (el.scrollLeft >= halfWidth) {
        el.scrollLeft = el.scrollLeft - halfWidth;
      }
    }
    setIsPaused(true);
  };

  // show duplicate only when auto-scrolling (lg breakpoint); hide on md/sm or when user manually scrolls
  const showDuplicate = !isPaused;

  return (
    <div
      className="flex flex-col gap-[40px] lg:flex-row lg:overflow-x-auto lg:pb-4 lg:-mx-[1px] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      ref={scrollRef}
      onMouseEnter={handleUserTakeControl}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleUserTakeControl}
      onTouchEnd={handleTouchEnd}
    >
      {/* first set — always visible */}
      {childArray.map((child, i) =>
        React.isValidElement(child)
          ? React.cloneElement(child, { key: `a-${i}` })
          : child
      )}
      {/* second set — only on lg when auto-scrolling; hidden on md/sm or when user manually scrolls */}
      {showDuplicate && (
        <div className="hidden lg:contents">
          {childArray.map((child, i) =>
            React.isValidElement(child)
              ? React.cloneElement(child, { key: `b-${i}` })
              : child
          )}
        </div>
      )}
    </div>
  );
}
