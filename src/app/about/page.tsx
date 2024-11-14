import CardWithIcon from "@/components/CardWithIcon";
import OurProcess from "@/components/OurProcess";
import PageHeader from "@/components/PageHeader";
import {
  faArrowsSpin,
  faFlask,
  faMedal,
  faPeopleGroup,
} from "@fortawesome/free-solid-svg-icons";
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
      <section className="container pb-20">
        <h2 className="text-primary">Our Founding Story</h2>
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
        <h2 className="text-primary">What Drives Us</h2>
        <p>
          At CodeVoss, we believe in harnessing the latest technologies to solve
          complex challenges. Whether it&#39;s developing cutting-edge software
          applications, designing intuitive user interfaces, or optimizing
          digital experiences, our team is dedicated to delivering solutions
          that exceed expectations.
        </p>
        <h2 className="text-primary">Join Us on Our Journey</h2>
        <p>
          As we continue to grow, our commitment remains unwavering – to empower
          businesses through technology and innovation. Whether you are a
          startup with a bold vision or an established enterprise seeking
          digital transformation, CodeVoss is your trusted partner.
        </p>
      </section>
      <OurProcess />
      <section className="container content">
        <h2>Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardWithIcon title="Expertise" icon={faFlask}>
            Our team consists of seasoned professionals with a passion for
            innovation.
          </CardWithIcon>
          <CardWithIcon title="Client-Centric" icon={faPeopleGroup}>
            We prioritize understanding your business objectives and delivering
            measurable results.
          </CardWithIcon>
          <CardWithIcon title="Quality Assurance" icon={faMedal}>
            Rigorous testing and QA processes ensure reliable and robust
            solutions.
          </CardWithIcon>
          <CardWithIcon title="Continuous Improvement" icon={faArrowsSpin}>
            We stay ahead of industry trends to provide cutting-edge solutions.
          </CardWithIcon>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
