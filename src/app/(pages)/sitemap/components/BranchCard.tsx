import Link from "next/link";

import { liveRoutes } from "@/config";
import { cn } from "@/lib";

import type { Branch, Destination } from "./branches";

const DestinationList = ({
  items,
  nested = false,
}: {
  items: readonly Destination[];
  nested?: boolean;
}) => (
  <ul className={cn("flex flex-col", nested && "ml-3 border-l border-black/10")}>
    {items.map((item) => {
      const href =
        item.href && liveRoutes.includes(item.href) ? item.href : undefined;

      return (
        <li key={item.label} className="flex flex-col">
          <span className="flex items-center gap-2 py-1.5 pl-3 before:h-px before:w-2 before:shrink-0 before:bg-black/20 before:content-['']">
            {href ? (
              <Link
                href={href}
                className="font-roboto text-sm text-secondary transition-colors hover:text-primary focus-visible:ring-2 focus-visible:ring-primary focus-visible:outline-none"
              >
                {item.label}
              </Link>
            ) : (
              <span className="font-roboto text-sm text-secondary/45">
                {item.label}
              </span>
            )}
          </span>

          {item.children?.length ? (
            <DestinationList items={item.children} nested />
          ) : null}
        </li>
      );
    })}
  </ul>
);

const BranchCard = ({ branch }: { branch: Branch }) => {
  const { Icon, title, kicker, description, accent, destinations } = branch;

  return (
    <article
      className={cn(
        "flex break-inside-avoid flex-col rounded-sm border border-black/10 border-l-4 bg-white",
        accent,
      )}
    >
      <header className="flex gap-3 p-5">
        <Icon
          strokeWidth={1.5}
          className="mt-0.5 size-5 shrink-0 text-secondary/60"
          aria-hidden="true"
        />
        <div className="flex flex-col gap-1">
          <h2 className="font-roboto text-base font-bold text-black">
            {title}
          </h2>
          <p className="font-roboto text-[10px] font-bold tracking-[0.18em] text-primary-subtle uppercase">
            {kicker}
          </p>
          <p className="mt-1 font-roboto text-xs leading-relaxed text-secondary/60">
            {description}
          </p>
        </div>
      </header>

      <div className="flex-1 border-t border-black/10 px-5 py-4">
        <DestinationList items={destinations} />
      </div>
    </article>
  );
};

export default BranchCard;
