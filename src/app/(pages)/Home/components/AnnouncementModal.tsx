"use client";

import { X } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import type { MouseEvent } from "react";

import { useAppReady } from "@/hooks";
import { cn } from "@/lib";

import { ANNOUNCEMENT } from "./announcement";

const STORAGE_KEY = `akc-announcement-${ANNOUNCEMENT.id}`;

const OPEN_DELAY_MS = 900;

const hasBeenSeen = () => {
  try {
    return sessionStorage.getItem(STORAGE_KEY) !== null;
  } catch {
    return false;
  }
};

const markSeen = () => {
  try {
    sessionStorage.setItem(STORAGE_KEY, "1");
  } catch {
    // Storage blocked (private mode, disabled cookies) — show the modal anyway.
  }
};

const AnnouncementModal = () => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const appReady = useAppReady();

  useEffect(() => {
    if (!appReady || hasBeenSeen()) return;

    const timer = setTimeout(() => {
      markSeen();
      setIsOpen(true);
    }, OPEN_DELAY_MS);

    return () => clearTimeout(timer);
  }, [appReady]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen && !dialog.open) dialog.showModal();
    if (!isOpen && dialog.open) dialog.close();
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [isOpen]);

  const close = () => setIsOpen(false);

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) close();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby="announcement-title"
      onClose={close}
      onClick={handleBackdropClick}
      className={cn(
        /* The third width keeps the card from outgrowing the viewport: the
           picture is 1080x1380, so capping the width at that ratio of the
           available height bounds the height too, and nothing has to scroll. */
        "m-auto w-[min(92vw,540px,calc(78dvh*0.783))] overflow-hidden rounded-lg bg-white p-0",
        "shadow-[0_24px_70px_rgba(0,31,52,0.32)]",
        "backdrop:bg-secondary/60 backdrop:backdrop-blur-[2px]",
      )}
    >
      <div className="relative border-t-[3px] border-primary bg-white">
        <button
          type="button"
          onClick={close}
          aria-label="Close announcement"
          className="absolute top-3.5 right-3.5 z-10 cursor-pointer rounded-sm bg-white/80 p-1.5 text-[#8a9bb5] hover:bg-black/5 hover:text-secondary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
        >
          <X className="size-5" aria-hidden="true" />
        </button>

        <p
          id="announcement-title"
          className="flex items-center gap-3 px-7 pt-7 pb-5 font-roboto text-[11px] font-bold tracking-[0.22em] text-primary-subtle uppercase sm:px-9 sm:pt-8"
        >
          <span aria-hidden="true" className="h-px w-7 bg-primary-subtle/50" />
          {ANNOUNCEMENT.eyebrow}
        </p>

        {/* Full bleed to the card edges: the artwork is a finished card in its
            own right, so a white margin around it would read as a mistake. */}
        <Image
          src={ANNOUNCEMENT.image.src}
          alt={ANNOUNCEMENT.image.alt}
          width={ANNOUNCEMENT.image.width}
          height={ANNOUNCEMENT.image.height}
          quality={100}
          priority={false}
          sizes="(min-width: 600px) 540px, 92vw"
          className="block h-auto w-full"
        />
      </div>
    </dialog>
  );
};

export default AnnouncementModal;
