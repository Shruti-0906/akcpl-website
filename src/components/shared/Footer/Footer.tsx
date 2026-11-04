import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import {
  FacebookIcon,
  InstagramIcon,
  LinkedinIcon,
  XIcon,
  YoutubeIcon,
} from "@/components/icons";
import { CookiePreferencesLink } from "@/components/shared/CookieConsent";
import { footerLegal, footerNav, organization, site } from "@/config";

const LEGAL_LINK_CLASSES =
  "text-xs text-black/55 transition-colors hover:text-primary-subtle focus-visible:text-primary-subtle focus-visible:outline-none";

const BLURB =
  "India's pioneering renal care network combining clinical excellence, validated data science, education, and innovation to transform kidney health outcomes across the nation.";

const SOCIALS = [
  { label: "Facebook", href: organization.social.facebook, Icon: FacebookIcon },
  { label: "X", href: organization.social.x, Icon: XIcon },
  { label: "LinkedIn", href: organization.social.linkedin, Icon: LinkedinIcon },
  {
    label: "Instagram",
    href: organization.social.instagram,
    Icon: InstagramIcon,
  },
  { label: "YouTube", href: organization.social.youtube, Icon: YoutubeIcon },
] as const;

/** Hover uses the subtle primary, not the light one - #009ee3 only reaches
 *  about 2.9:1 against white, where #0075a9 clears the 4.5:1 threshold. */
const LINK_CLASSES =
  "text-sm text-black/70 transition-colors hover:text-primary-subtle focus-visible:text-primary-subtle focus-visible:outline-none";

/**
 * Some footer entries point off-site - the manuals open in their flipbook
 * reader, for instance - so those get a new tab rather than navigating the
 * visitor away mid-browse.
 */
const FooterLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) =>
  /^https?:\/\//.test(href) ? (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      draggable={false}
      className={className}
    >
      {children}
    </a>
  ) : (
    <Link href={href} draggable={false} className={className}>
      {children}
    </Link>
  );

const Footer = () => (
  <footer className="bg-gray-100 text-black">
    <div className="mx-auto px-6 py-16 xl:px-15">
      <div className="grid gap-12 lg:grid-cols-[1.5fr_repeat(4,1fr)]">
        <div className="max-w-sm">
          <Image
            src={organization.logo}
            alt={site.name}
            width={100}
            height={100}
            className="w-24 object-contain"
          />

          <p className="mt-6 text-sm leading-relaxed text-black/65">{BLURB}</p>

          <ul className="mt-8 flex flex-wrap items-center gap-3">
            {SOCIALS.map(({ label, href, Icon }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="grid size-10 place-items-center rounded-full bg-black/6 text-black transition-colors hover:bg-primary hover:text-white focus-visible:bg-primary focus-visible:text-white focus-visible:outline-none"
                >
                  <Icon className="size-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {footerNav.map((column) => (
          <div key={column.label}>
            <h2 className="text-xs font-medium tracking-[0.14em] text-black/55 uppercase">
              {column.label}
            </h2>

            <ul className="mt-5 space-y-3">
              {column.children?.map((link) =>
                link.href ? (
                  <li key={link.label}>
                    <FooterLink href={link.href} className={LINK_CLASSES}>
                      {link.label}
                    </FooterLink>
                  </li>
                ) : null,
              )}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14 border-t border-black/10 pt-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <p className="text-xs text-black/55">
            © {new Date().getFullYear()} {site.name}. All rights reserved. |
            Mumbai, India
          </p>

          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {footerLegal.map((link) =>
              link.href ? (
                <li key={link.label}>
                  <FooterLink href={link.href} className={LEGAL_LINK_CLASSES}>
                    {link.label}
                  </FooterLink>
                </li>
              ) : null,
            )}

            {/* Withdrawing has to be as easy as granting, so the reopen link
                sits with the other legal links rather than behind a page. */}
            <li>
              <CookiePreferencesLink className={LEGAL_LINK_CLASSES} />
            </li>
          </ul>
        </div>

        <p className="mt-5 text-xs text-black/45 md:text-right">
          Designed and Built using AI
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
