import ContactModal from "@/components/ContactModal";
import PageHeader from "@/components/PageHeader";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "About Us | CodeVoss",
  description:
    "Founded in 2024, CodeVoss services businesses from startup to IPO.",
};

const AboutPage = () => {
  return (
    <>
      <PageHeader>About</PageHeader>
      <section className="container" style={{ maxWidth: "70ch" }}>
        <h2 className="text-secondary">Our Founding Story</h2>
        <p>
          Founded in 2024 by Collin and Jenny Vossman, CodeVoss began with a
          shared passion for technology and a vision to create impactful
          solutions for businesses worldwide.
        </p>
        <p>
          Collin honed his skills in software development, specializing in
          ecommerce websites, API development, infrastructure management, and
          automation. His passion for technology and knack for problem-solving
          have been instrumental in shaping CodeVoss&#39;s commitment to
          innovation. His expertise ensures that we deliver robust solutions
          that leverage cutting-edge technologies to meet the dynamic needs of
          our clients.
        </p>
        <p>
          Jenny, drawing from her years in marketing and strategy, brings a keen
          understanding of market dynamics and consumer behavior. Her strategic
          insights and customer-centric approach ensure that CodeVoss not only
          meets but exceeds client expectations.
        </p>
        <h2 className="text-secondary">What Drives Us</h2>
        <p>
          At CodeVoss, we believe in harnessing the latest technologies to solve
          complex challenges. Whether it&#39;s developing cutting-edge software
          applications, designing intuitive user interfaces, or optimizing
          digital experiences, our team is dedicated to delivering solutions
          that exceed expectations.
        </p>
        <h2 className="text-secondary">Our Approach</h2>
        <p>
          We pride ourselves on our collaborative approach and commitment to
          quality. From initial concept to final deployment, we work closely
          with our clients to understand their unique needs and deliver
          tailor-made solutions that drive success. Our agile methodology
          ensures flexibility and efficiency at every stage of development.
        </p>
        <h2 className="text-secondary">Why Choose Us?</h2>
        <ul className="mb-4">
          <li>
            <strong className="text-primary-dark dark:text-primary">
              Expertise:
            </strong>{" "}
            Our team consists of seasoned professionals with a passion for
            innovation.
          </li>
          <li>
            <strong className="text-primary-dark dark:text-primary">
              Client-Centric:
            </strong>{" "}
            We prioritize understanding your business objectives and delivering
            measurable results.
          </li>
          <li>
            <strong className="text-primary-dark dark:text-primary">
              Quality Assurance:
            </strong>{" "}
            Rigorous testing and QA processes ensure reliable and robust
            solutions.
          </li>
          <li>
            <strong className="text-primary-dark dark:text-primary">
              Continuous Improvement:
            </strong>{" "}
            We stay ahead of industry trends to provide cutting-edge solutions.
          </li>
        </ul>
        <h2 className="text-secondary">Join Us on Our Journey</h2>
        <p>
          As we continue to grow, our commitment remains unwavering – to empower
          businesses through technology and innovation. Whether you are a
          startup with a bold vision or an established enterprise seeking
          digital transformation, CodeVoss is your trusted partner.
        </p>
        <p>
          <strong className="text-secondary">Get in Touch:</strong> Ready to
          take your business to the next level?{" "}
          <ContactModal>Contact us</ContactModal> today to discuss how we can
          collaborate and turn your ideas into reality.
        </p>
      </section>
    </>
  );
};

export default AboutPage;
