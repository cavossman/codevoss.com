import {
  faBrain,
  faHelmetSafety,
  faPaintBrush,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import ProcessItem from "./ProcessItem";

// default process.
const OurProcess = () => {
  return (
    <section className="container content">
      <h2 className="mb-12">Our Development Process</h2>

      <div className="grid lg:grid-cols-4 gap-6">
        <ProcessItem title="Consultation & Strategy" icon={faBrain}>
          We begin with a detailed consultation to understand your business
          goals, target audience, and specific requirements. Based on this
          information, we develop a comprehensive strategy that outlines the
          project scope, timeline, and deliverables.
        </ProcessItem>
        <ProcessItem title="Design & Development" icon={faPaintBrush}>
          Our design team creates visually stunning and user-friendly layouts
          that align with your brand. Once the design is approved, our
          developers bring it to life using the latest technologies and best
          practices in eCommerce development.
        </ProcessItem>
        <ProcessItem title="Testing & Launch" icon={faRocket}>
          Before going live, we rigorously test your site to ensure it performs
          flawlessly across all devices and browsers. We check for usability,
          functionality, and security to provide a seamless shopping experience
          for your customers. Once testing is complete, we launch your site and
          monitor its performance to ensure everything runs smoothly.
        </ProcessItem>
        <ProcessItem
          title="Ongoing Support & Maintenance"
          icon={faHelmetSafety}
        >
          We believe in building long-term relationships with our clients. Our
          support doesn’t end at launch. We offer ongoing maintenance and
          support services to keep your site updated, secure, and performing at
          its best. Whether you need technical assistance, updates, or new
          features, we’re here to help.
        </ProcessItem>
      </div>
    </section>
  );
};

export default OurProcess;
