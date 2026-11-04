"use client";

import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useSwiper, useSwiperSlide } from "swiper/react";

import { useReducedMotion } from "@/hooks";
import { cn } from "@/lib";

import type { MediaItem, VideoPlayback } from "./types";

interface MediaSlideProps {
  item: MediaItem;
  playback: VideoPlayback;
  priority?: boolean;
  sizes?: string;
  className?: string;
}

const MediaSlide = ({
  item,
  playback,
  priority = false,
  sizes = "100vw",
  className,
}: MediaSlideProps) => {
  const swiper = useSwiper();
  const { isActive } = useSwiperSlide();
  const reducedMotion = useReducedMotion();
  const videoRef = useRef<HTMLVideoElement>(null);
  const pausedAutoplay = useRef(false);
  const [failed, setFailed] = useState(false);
  const [started, setStarted] = useState(false);
  const [wasActive, setWasActive] = useState(isActive);

  const isBackground = item.kind === "video" && playback === "auto";
  const shouldAutoPlay = isBackground && !reducedMotion;

  if (wasActive !== isActive) {
    setWasActive(isActive);
    if (!isActive && started) setStarted(false);
  }

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (isActive) {
      if (shouldAutoPlay) void video.play().catch(() => {});
      return;
    }

    video.pause();
    video.currentTime = 0;
  }, [isActive, shouldAutoPlay]);

  const handlePlay = () => {
    if (isBackground) return;
    if (swiper?.autoplay?.running) {
      swiper.autoplay.stop();
      pausedAutoplay.current = true;
    }
  };

  const handleHalt = () => {
    if (isBackground) return;
    if (pausedAutoplay.current) {
      swiper?.autoplay?.start();
      pausedAutoplay.current = false;
    }
  };

  const startPlayback = () => {
    setStarted(true);
    void videoRef.current?.play().catch(() => {});
  };

  const attachVideo = (node: HTMLVideoElement | null) => {
    videoRef.current = node;
    if (node?.error) setFailed(true);
  };

  if (item.kind === "image") {
    return (
      <Image
        src={item.src}
        alt={item.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    );
  }

  if (failed) {
    return item.poster ? (
      <Image
        src={item.poster}
        alt={item.alt}
        fill
        sizes={sizes}
        priority={priority}
        className={cn("object-cover", className)}
      />
    ) : null;
  }

  return (
    <>
      <video
        ref={attachVideo}
        src={item.src}
        poster={item.poster}
        playsInline
        preload="metadata"
        muted={isBackground}
        loop={isBackground}
        controls={!isBackground && started}
        aria-hidden={isBackground || undefined}
        aria-label={isBackground ? undefined : item.alt}
        tabIndex={isBackground ? -1 : undefined}
        onPlay={handlePlay}
        onPause={handleHalt}
        onEnded={handleHalt}
        onError={() => setFailed(true)}
        className={cn("h-full w-full object-cover", className)}
      />
      {!isBackground && !started && (
        <button
          type="button"
          aria-label={`Play video: ${item.alt}`}
          onClick={startPlayback}
          className={cn(
            "absolute inset-0 grid place-items-center bg-secondary/30",
            "transition hover:bg-secondary/40 focus-visible:ring-2",
            "focus-visible:ring-primary focus-visible:outline-none",
          )}
        >
          <span className="grid size-16 place-items-center rounded-full bg-white/90 text-primary shadow-lg">
            <Play
              className="size-7 translate-x-0.5"
              fill="currentColor"
              strokeWidth={1}
              aria-hidden="true"
            />
          </span>
        </button>
      )}
    </>
  );
};

export default MediaSlide;
