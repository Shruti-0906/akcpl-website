import { JsonLd } from "@/components/seo";
import { pageSeo } from "@/lib";

import AppointmentFormSection from "./sections/AppointmentFormSection";
import ContactDetailsSection from "./sections/ContactDetailsSection";

const seo = pageSeo({
  title: "Contact Us",
  description:
    "Get in touch with Apex Kidney Care — reach us by phone or email, or book an appointment online.",
  path: "/contact",
});

export const metadata = seo.metadata;

const ContactPage = () => {
  return (
    <>
      <JsonLd data={seo.jsonLd} />
      <ContactDetailsSection />
      <AppointmentFormSection />
    </>
  );
};

export default ContactPage;
