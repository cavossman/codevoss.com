import CardWithIcon from "@/components/CardWithIcon";
import LogoGroup from "@/components/LogoGroup";
import OurProcess from "@/components/OurProcess";
import PageHeader from "@/components/PageHeader";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Web Solutions | CodeVoss",
  description:
    "CodeVoss specializes in designing and developing robust eCommerce websites using WordPress and Shopify. Our custom solutions enhance user experience, streamline navigation, and drive conversions. Contact us today to transform your online store.",
};

const WebsitesPage = () => {
  return (
    <>
      <PageHeader>
        <>
          <span className="text-primary">Web Solutions</span>
          <LogoGroup
            logos={["wordpress-simple", "shopify", "laravel", "react", "vuejs"]}
          />
        </>
      </PageHeader>
      <section className="container content">
        <h2>Elevate Your Online Store with Our Expert eCommerce Solutions</h2>
        <p>
          Welcome to CodeVoss, where we specialize in designing and developing
          robust eCommerce websites using WordPress and Shopify. Our team of
          experienced developers and designers is dedicated to creating tailored
          solutions that meet your unique business needs, ensuring that your
          online store stands out in the competitive digital marketplace.
        </p>
        <h3>WordPress with WooCommerce</h3>
        <p>
          For businesses seeking the flexibility and scalability of WordPress,
          we offer expert development services using WooCommerce. This powerful
          plugin allows you to turn your WordPress site into a fully functional
          eCommerce platform. With WooCommerce, you can enjoy a range of
          features including product management, inventory tracking, secure
          payments, and more. Our team will customize your WooCommerce store to
          meet your specific requirements, ensuring a seamless integration with
          your WordPress site.
        </p>
        <h3>Benefits of WooCommerce:</h3>
        <ul>
          <li>
            <strong>Flexibility:</strong> Customize your store with a wide range
            of themes and plugins.
          </li>
          <li>
            <strong>Scalability:</strong> Grow your store with ease as your
            business expands.
          </li>
          <li>
            <strong>SEO-Friendly:</strong> Benefit from WordPress&apos;s
            powerful SEO capabilities.
          </li>
          <li>
            <strong>Community Support:</strong> Access a large community of
            developers and resources.
          </li>
        </ul>

        <h2>Shopify</h2>
        <p>
          If you prefer a more streamlined and user-friendly platform, Shopify
          is an excellent choice. Known for its ease of use and robust
          functionality, Shopify enables you to set up and manage your online
          store with minimal hassle. Our team of Shopify experts will design and
          develop a custom store that meets your needs, from product listings
          and payment processing to inventory management and customer support.
        </p>

        <h3>Benefits of Shopify:</h3>
        <ul>
          <li>
            <strong>Ease of Use:</strong> Simple setup and management with an
            intuitive interface.
          </li>
          <li>
            <strong>Security:</strong> Reliable and secure payment gateways.
          </li>
          <li>
            <strong>Mobile-Friendly:</strong> Responsive designs that look great
            on all devices.
          </li>
          <li>
            <strong>App Integrations:</strong> Enhance your store with a wide
            range of apps and tools.
          </li>
        </ul>

        <h2>Transform Your Business</h2>
        <p>
          At CodeVoss, we’re committed to helping you succeed in the digital
          marketplace. Our expertise in WordPress and Shopify allows us to
          deliver customized, user-friendly, and efficient eCommerce solutions
          that transform your business and boost your success. Let us help you
          create an online store that not only looks impressive but also drives
          sales and supports your growth.
        </p>
      </section>
      <OurProcess />
      <section className="container content">
        <h2>Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardWithIcon title="Custom Design & Development" icon={faUser}>
            At CodeVoss, we understand that every business is unique.
            That&apos;s why we offer custom design and development services that
            align with your brand identity and business goals. Whether
            you&apos;re starting from scratch or looking to revamp your existing
            online store, our team will work closely with you to create a
            visually appealing and functional website that reflects your vision.
          </CardWithIcon>
          <CardWithIcon title="Client-Centric" icon={faUser}>
            User experience is at the heart of our design philosophy. We create
            intuitive and engaging interfaces that make it easy for your
            customers to navigate your site and find what they&apos;re looking
            for. Our goal is to enhance the user journey, ensuring that visitors
            have a seamless and enjoyable shopping experience from start to
            finish.
          </CardWithIcon>
          <CardWithIcon title="Streamlined Navigation" icon={faUser}>
            A well-structured website is key to driving conversions. We design
            websites with streamlined navigation, making it simple for your
            customers to browse products, access information, and complete
            purchases. By organizing your site in a logical and user-friendly
            manner, we help reduce bounce rates and increase customer
            satisfaction.
          </CardWithIcon>
          <CardWithIcon title="Drive Conversions" icon={faUser}>
            Our eCommerce solutions are crafted to convert visitors into
            customers. Through strategic design, effective call-to-actions, and
            optimized checkout processes, we focus on driving sales and
            maximizing your return on investment. We utilize best practices in
            eCommerce to ensure that your site not only attracts visitors but
            also encourages them to make a purchase.
          </CardWithIcon>
        </div>
      </section>
    </>
  );
};

export default WebsitesPage;
