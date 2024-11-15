import ContactModal from "@/components/ContactModal";
import PageHeader from "@/components/PageHeader";
import StackLogo from "@/components/StackLogo";
import { IconName } from "@fortawesome/fontawesome-svg-core";
import {
  faHandHoldingDollar,
  faProjectDiagram,
  faServer,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next/types";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Services Offered | CodeVoss",
  description: "CodeVoss specializes in PHP, TypeScript, Laravel, React, Next.",
};

const LogoGroup: FC<{ logos: (IconName | string)[] }> = ({ logos }) => {
  return (
    <span className="flex gap-8 mt-4 items-center">
      {logos.map((logo) => {
        return <StackLogo key={logo} logo={logo} />;
      })}
    </span>
  );
};

const ServicesPage = () => {
  return (
    <>
      <PageHeader>Services</PageHeader>
      <section className="container grid lg:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-primary">Ecommerce Websites</h2>
          <p>
            We specialize in designing and developing robust eCommerce websites
            using WordPress and Shopify, tailored to meet your unique business
            needs. Our solutions are crafted to enhance user experience,
            streamline navigation, and drive conversions. Whether you&apos;re
            looking for the flexibility of WordPress with WooCommerce or the
            streamlined functionality of Shopify, we build platforms that engage
            customers and support your sales objectives.
          </p>
          <p>
            Our expertise ensures that your eCommerce site not only looks
            impressive but also performs flawlessly. By leveraging the strengths
            of WordPress and Shopify, we deliver customized, user-friendly, and
            efficient online stores that transform your business and boost your
            success in the digital marketplace.
            <br />
            <a
              href="/services/websites"
              className="mt-4 btn btn-primary btn-sm"
            >
              Learn More
            </a>
          </p>
        </div>
        <div className="flex col-span items-center justify-center">
          <div className="hidden lg:flex items-center w-32 h-32 border-8 border-dark-light rounded-full p-6">
            <FontAwesomeIcon icon={faHandHoldingDollar} />
          </div>
        </div>
      </section>
      <section className="container grid lg:grid-cols-4">
        <div className="col-span-3 order-2">
          <h2 className="text-primary">API Development</h2>
          <p>
            We harness the power of Laravel to create secure, scalable APIs that
            integrate seamlessly with your systems. Laravel&apos;s robust PHP
            framework enables us to build APIs that are both flexible and
            reliable, ensuring efficient data exchange and enhanced
            functionality for your applications.
          </p>
          <p>
            Our API development services are designed to maximize your
            applications&apos; capabilities and streamline your operations. By
            leveraging Laravel&apos;s advanced features, we deliver solutions
            that meet your specific needs, drive performance, and facilitate
            smooth integration, helping you unlock your applications&apos; full
            potential and achieve your business goals.
            <br />
            <a href="/services/apis" className="mt-4 btn btn-primary btn-sm">
              Learn More
            </a>
          </p>
        </div>
        <div className="flex col-span items-center justify-center">
          <div className="hidden lg:flex items-center w-32 h-32 border-8 border-dark-light rounded-full p-6">
            <FontAwesomeIcon icon={faProjectDiagram} />
          </div>
        </div>
      </section>
      <section className="container grid lg:grid-cols-4">
        <div className="col-span-3">
          <h2 className="text-primary">Infrastructure Management</h2>
          <p>
            We leverage Amazon Web Services (AWS) and Terraform to enhance the
            reliability, performance, and efficiency of your IT infrastructure.
            AWS provides scalable, secure, and highly available cloud services,
            allowing us to design and manage your infrastructure for optimal
            performance and cost-efficiency. With AWS’s global network and
            security features, we ensure your applications remain accessible and
            protected.
          </p>
          <p>
            Using Terraform, we manage your infrastructure as code, enabling
            consistent and repeatable deployments while reducing manual errors.
            This automation facilitates rapid provisioning, efficient resource
            management, and effective cost control. Our approach involves
            assessing your needs, implementing tailored solutions, and
            continuously monitoring and optimizing your setup to ensure it meets
            your business goals. Trust us to deliver a cloud infrastructure that
            maximizes efficiency and uptime while adapting to your evolving
            needs.
            <br />
            <a
              href="/services/infrastructure"
              className="mt-4 btn btn-primary btn-sm"
            >
              Learn More
            </a>
          </p>
        </div>
        <div className="flex col-span items-center justify-center">
          <div className="hidden lg:flex items-center w-32 h-32 border-8 border-dark-light rounded-full p-6">
            <FontAwesomeIcon icon={faServer} />
          </div>
        </div>
      </section>
      {/* <section className="container">
        <div className="col-span-3"></div>
        <h2 className="text-primary">Automation</h2>
        <p>
          Streamline your operations and reduce manual effort with our
          automation solutions. We implement automation technologies tailored to
          your business processes, enhancing productivity and minimizing errors.
        </p>

        <h2 className="text-primary">Custom Solutions</h2>
        <p>
          Have a unique challenge? We thrive on solving complex problems.{" "}
          <ContactModal>Contact us</ContactModal> today to discuss how we can
          tailor our services to meet your specific needs.
        </p>
      </section> */}
    </>
  );
};

export default ServicesPage;
