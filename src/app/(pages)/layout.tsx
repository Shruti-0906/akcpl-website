import type { ReactNode } from "react";

import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const PagesLayout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Breadcrumbs />
      {children}
    </>
  );
};

export default PagesLayout;
