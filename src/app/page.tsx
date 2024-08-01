import ContactModal from "@/components/ContactModal";
import PageHeader from "@/components/PageHeader";
import {
  faArrowTrendUp,
  faLaptop,
  faLink,
  faSackDollar,
  faStopwatch,
  faUserAstronaut,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeVoss | Software Solutions",
  description: "Your partner in software development.",
};

const HomePage = () => {
  return (
    <>
      <PageHeader>
        <span className="uppercase tracking-wide dark:text-white mb-2 md:mb-5">
          From Concept
        </span>
        <span className="uppercase tracking-wide text-secondary mb-1 md:mb-3">
          to Code
        </span>
        <ContactModal>
          <div className="text-base md:text-lg dark:text-white font-normal border border-black dark:border-white rounded px-2 md:px-3 py-1 md:py-2 mt-3">
            Get in Touch
          </div>
        </ContactModal>
      </PageHeader>
      <section className="container">
        <h2 className="dark:text-secondary">Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card order-1 flex justify-between items-center">
            <h3 className="mb-0">Websites</h3>
            <a href="/services" className="btn btn-secondary btn-sm">
              Learn More
            </a>
          </div>
          <div className="card order-2">
            <p>
              Unlock your digital potential with our expert web development
              services. From captivating designs to seamless functionality, we
              specialize in creating tailored websites that elevate your online
              presence. Harness the power of user-friendly interfaces and
              responsive designs to engage your audience and drive growth.
            </p>
          </div>
          <div className="card order-3 lg:order-1 flex justify-between items-center">
            <h3 className="mb-0">Software</h3>
            <a href="/services" className="btn btn-secondary btn-sm">
              Learn More
            </a>
          </div>
          <div className="card order-4">
            <p>
              Elevate your business with our bespoke software development
              solutions. Whether you need custom applications, robust APIs, or
              scalable software systems, we blend cutting-edge technology with
              innovative solutions to meet your unique needs. Transform ideas
              into reality and streamline operations with our expert team of
              developers and engineers.
            </p>
          </div>
          <div className="card order-5 lg:order-1 flex justify-between items-center">
            <h3 className="mb-0">Consultation</h3>
            <a href="/services" className="btn btn-secondary btn-sm">
              Learn More
            </a>
          </div>
          <div className="card order-6">
            <p>
              Discover how our tailored consultation services can transform your
              operations. We will work with you to assess your needs, identify
              opportunities for improvement, and develop customized strategies
              to drive success and efficiency across your business.
            </p>
          </div>
          {/* <div className="grid md:grid-cols-3 gap-4">
            <div className="card md:col-span-1">
              <h3 className="">Copywriting</h3>
            </div>
            <div className="card md:col-span-2">
              <p>
                Custom content is king in the age of the search engine. Increase
                traffic and engagement with custom copywriting services that not
                only optimize your online presence but also resonate with your
                audience, driving conversions and enhancing brand authority.
              </p>
              <a href="/services" className="btn btn-secondary btn-sm">
                Learn More
              </a>
            </div>
          </div> */}
        </div>
      </section>
      <section className="container">
        <h2 className="dark:text-secondary">Why Choose Us for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Increased Efficiency{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faStopwatch}
                />
              </div>
            </h3>
            <p>Automate repetitive tasks to focus on strategic activities.</p>
          </div>
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Scalable Solutions{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faArrowTrendUp}
                />
              </div>
            </h3>
            <p>
              Our eCommerce and API solutions are designed to grow with your
              business, adapting to increasing demands and evolving
              requirements.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Seamless Integration{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faLink}
                />
              </div>
            </h3>
            <p>
              Benefit from our expertise in integrating various systems and
              platforms, including custom APIs and CRM systems, to ensure smooth
              data flow and enhanced functionality.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Optimized User Experience{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faUserAstronaut}
                />
              </div>
            </h3>
            <p>
              With our customized eCommerce solutions, including platforms like
              WordPress and Shopify, you can provide an engaging and efficient
              shopping experience for your customers.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Cost Savings{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faSackDollar}
                />
              </div>
            </h3>
            <p>
              Reduce operational costs and improve ROI by automating processes
              and optimizing your technology stack for efficiency.
            </p>
          </div>
          <div className="bg-white dark:bg-dark-light p-4 rounded-lg">
            <h3 className="flex gap-4 items-center text-secondary justify-between">
              Custom Solutions{" "}
              <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-light dark:bg-dark">
                <FontAwesomeIcon
                  className="dark:text-white inline w-4"
                  icon={faLaptop}
                />
              </div>
            </h3>
            <p>
              Receive tailored solutions that align with your unique business
              needs, whether it's developing secure APIs, automating processes,
              or creating high-performance eCommerce sites.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;
