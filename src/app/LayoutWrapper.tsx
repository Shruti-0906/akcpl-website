"use client";
import Footer from "@/components/shared/Footer/Footer";
import { Loader } from "@/components/shared/Loader";
import Navbar from "@/components/shared/Navbar/Navbar";
import { usePathname } from "next/navigation";
import React from "react";

const NO_LAYOUT: readonly string[] = [];

const LayoutWrapper = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const showLayout = !NO_LAYOUT.includes(pathname);

  return (
    <>
      <Loader />
      {showLayout && <Navbar />}
      <main className="min-h-[calc(100vh-94px)]">{children}</main>
      {showLayout && <Footer />}
    </>
  );
};

export default LayoutWrapper;
