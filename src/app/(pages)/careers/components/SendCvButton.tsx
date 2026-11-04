"use client";

import { Button } from "@/components";

import { useApply } from "./ApplyFlow";

const SendCvButton = () => {
  const openApply = useApply();

  return (
    <Button
      onClick={() => openApply(null)}
      className="cursor-pointer rounded-sm bg-primary-subtle px-8 py-4 font-bold tracking-[0.04em] hover:bg-primary-light"
    >
      Send us your CV <span aria-hidden="true">&rarr;</span>
    </Button>
  );
};

export default SendCvButton;
