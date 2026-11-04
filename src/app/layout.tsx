import { Cormorant_Garamond, Roboto, Space_Mono } from "next/font/google";

import { JsonLd } from "@/components/seo";
import { GoogleAnalytics } from "@/components/shared/Analytics";
import { CookieConsent } from "@/components/shared/CookieConsent";
import { jsonLdGraph, organizationNode, websiteNode } from "@/lib/jsonld";
import { rootMetadata } from "@/lib/seo";

import "./globals.css";
import LayoutWrapper from "./LayoutWrapper";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--cormorant",
  display: "swap",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--roboto",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--space-mono",
  display: "swap",
});

export const metadata = rootMetadata;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-IN"
      className={`${cormorant.variable} ${roboto.variable} ${spaceMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col font-roboto">
        <JsonLd data={jsonLdGraph(organizationNode(), websiteNode())} />
        <LayoutWrapper>{children}</LayoutWrapper>

        {/* Both sit outside the page chrome on purpose: a page that hides the
            navbar and footer still has to ask, and still has to be gated. */}
        <CookieConsent />
        <GoogleAnalytics />
      </body>
    </html>
  );
}
