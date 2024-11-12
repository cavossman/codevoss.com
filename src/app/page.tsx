import CardWithIcon from "@/components/CardWithIcon";
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
        <span className="uppercase tracking-wide text-primary mb-1 md:mb-3">
          to Code
        </span>
        <ContactModal>
          <div className="text-base md:text-lg dark:text-white font-normal border border-black dark:border-white rounded px-2 md:px-3 py-1 md:py-2 mt-3">
            Get in Touch
          </div>
        </ContactModal>
      </PageHeader>
      <section className="container content">
        <h2>Our Services</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="card order-1 flex justify-between items-center">
            <h3 className="mb-0">Websites</h3>
            <a href="/services/websites" className="btn btn-primary btn-sm">
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
            <a href="/services/apis" className="btn btn-primary btn-sm">
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
            <a href="/services" className="btn btn-primary btn-sm">
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
              <a href="/services" className="btn btn-primary btn-sm">
                Learn More
              </a>
            </div>
          </div> */}
        </div>
      </section>
      <section className="container content">
        <h2>Why Choose Us for Your Business</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
          <CardWithIcon title="Increased Efficiency" icon={faStopwatch}>
            Automate repetitive tasks to focus on strategic activities.
          </CardWithIcon>
          <CardWithIcon title="Scalable Solutions" icon={faArrowTrendUp}>
            Our eCommerce and API solutions are designed to grow with your
            business, adapting to increasing demands and evolving requirements.
          </CardWithIcon>
          <CardWithIcon title="Seamless Integration" icon={faLink}>
            Benefit from our expertise in integrating various systems and
            platforms, including custom APIs and CRM systems, to ensure smooth
            data flow and enhanced functionality.
          </CardWithIcon>

          <CardWithIcon
            title=" Optimized User Experience"
            icon={faUserAstronaut}
          >
            With our customized eCommerce solutions, including platforms like
            WordPress and Shopify, you can provide an engaging and efficient
            shopping experience for your customers.
          </CardWithIcon>
          <CardWithIcon title="Cost Savings" icon={faSackDollar}>
            Reduce operational costs and improve ROI by automating processes and
            optimizing your technology stack for efficiency.
          </CardWithIcon>
          <CardWithIcon title="Custom Solutions" icon={faLaptop}>
            Receive tailored solutions that align with your unique business
            needs, whether it&apos;s developing secure APIs, automating
            processes, or creating high-performance eCommerce sites.
          </CardWithIcon>
        </div>
      </section>
    </>
  );
};

export default HomePage;
