import ContactModal from "@/components/ContactModal";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "CodeVoss | Software Solutions",
  description: "Your partner in software development.",
};

const HomePage = () => {
  return (
    <>
      <PageHeader>
        <span className="uppercase tracking-wide text-white mb-2 md:mb-5">
          From Concept
        </span>
        <span className="uppercase tracking-wide text-secondary mb-1 md:mb-3">
          to Code
        </span>
        <ContactModal>
          <div className="text-base md:text-lg text-white font-normal border rounded px-2 md:px-3 py-1 md:py-2 mt-3">
            Get in Touch
          </div>
        </ContactModal>
      </PageHeader>
      <section className="container">
        <h2>Services</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="border rounded-lg p-4">
            <strong className="block text-secondary pb-3">Websites</strong>
            <p className="mb-0">
              Unlock your digital potential with our expert web development
              services. From captivating designs to seamless functionality, we
              specialize in creating tailored websites that elevate your online
              presence. Harness the power of user-friendly interfaces and
              responsive designs to engage your audience and drive growth.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <strong className="block text-secondary pb-3">Software</strong>
            <p className="mb-0">
              Elevate your business with our bespoke software development
              solutions. Whether you need custom applications, robust APIs, or
              scalable software systems, we blend cutting-edge technology with
              innovative solutions to meet your unique needs. Transform ideas
              into reality and streamline operations with our expert team of
              developers and engineers.
            </p>
          </div>
          <div className="border rounded-lg p-4">
            <strong className="block text-secondary pb-3">Copywriting</strong>
            <p className="mb-0">
              Custom content is king in the age of the search engine. Increase
              traffic and engagement with custom copywriting services that not
              only optimize your online presence but also resonate with your
              audience, driving conversions and enhancing brand authority.
            </p>
          </div>
        </div>
      </section>
      {/* <section className="container">
        <h2>Content</h2>
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <div className="border md:col-span-1 rounded-lg p-3">pretty</div>
          <div className="border md:col-span-2 rounded-lg p-3">content</div>
        </div>
        <div className="grid md:grid-cols-3 gap-4 mb-5">
          <div className="border md:col-span-2 rounded-lg p-3">pretty</div>
          <div className="border md:col-span-1 rounded-lg p-3">content</div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
