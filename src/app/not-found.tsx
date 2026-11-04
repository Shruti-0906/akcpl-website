import { Breadcrumbs } from "@/components/shared/Breadcrumbs";

const NOT_FOUND_TRAIL = [
  { label: "Home", href: "/" },
  { label: "Page Not Found" },
] as const;

const NotFoundPage = () => {
  return (
    <>
      <Breadcrumbs trail={NOT_FOUND_TRAIL} />
      <div>NotFoundPage</div>
    </>
  );
};

export default NotFoundPage;
