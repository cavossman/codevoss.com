import ContactModal from "@/components/ContactModal";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Services Offered | CodeVoss",
  description: "CodeVoss specializes in PHP, TypeScript, Laravel, React, Next.",
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader>Services</PageHeader>
      <section className="container" style={{ maxWidth: "70ch" }}>
        <h2 className="text-secondary">Ecommerce Websites</h2>
        <p>
          Transform your business with our customized ecommerce solutions. We
          specialize in designing and developing robust ecommerce websites that
          enhance user experience and drive conversions.
        </p>

        <h2 className="text-secondary">API Development</h2>
        <p>
          Unlock the full potential of your applications with our API
          development services. We create secure and scalable APIs that
          integrate seamlessly with your systems, enabling efficient data
          exchange and functionality.
        </p>

        <h2 className="text-secondary">Infrastructure Management</h2>
        <p>
          Ensure the reliability and performance of your IT infrastructure with
          our management services. From cloud solutions to on-premises setups,
          we optimize your infrastructure for maximum efficiency and uptime.
        </p>

        <h2 className="text-secondary">Automation</h2>
        <p>
          Streamline your operations and reduce manual effort with our
          automation solutions. We implement automation technologies tailored to
          your business processes, enhancing productivity and minimizing errors.
        </p>

        <h2 className="text-secondary">Custom Solutions</h2>
        <p>
          Have a unique challenge? We thrive on solving complex problems.{" "}
          <ContactModal>Contact us</ContactModal> today to discuss how we can
          tailor our services to meet your specific needs.
        </p>
      </section>
    </>
  );
};

export default ServicesPage;
