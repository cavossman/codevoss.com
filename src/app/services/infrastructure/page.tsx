import CardWithIcon from "@/components/CardWithIcon";
import LogoGroup from "@/components/LogoGroup";
import PageHeader from "@/components/PageHeader";
import ProcessItem from "@/components/ProcessItem";
import {
  faChartLine,
  faCode,
  faComputer,
  faGlobeAmericas,
  faListCheck,
  faMoneyBillTrendUp,
  faRocket,
} from "@fortawesome/free-solid-svg-icons";
import { Metadata } from "next/types";

export const metadata: Metadata = {
  title: "Laravel API Development | CodeVoss",
  description:
    "CodeVoss enhances IT infrastructure with AWS and Terraform, providing scalable, secure, and efficient cloud solutions. We design and manage infrastructure for optimal performance, cost-efficiency, and reliability. Contact us to maximize efficiency and uptime.",
};

const InfrastructurePage = () => {
  return (
    <>
      <PageHeader>
        <>
          <span className="text-primary">Infrastructure Consultation</span>
          <LogoGroup logos={["aws", "terraform", "docker"]} />
        </>
      </PageHeader>
      <section className="container content pb-12">
        <h2>Enhance Your IT Infrastructure with AWS and Terraform</h2>
        <p>
          At CodeVoss, we leverage Amazon Web Services (AWS) and Terraform to
          enhance the reliability, performance, and efficiency of your IT
          infrastructure. AWS provides scalable, secure, and highly available
          cloud services, allowing us to design and manage your infrastructure
          for optimal performance and cost-efficiency. With AWS’s global network
          and security features, we ensure your applications remain accessible
          and protected.
        </p>

        <h2>Maximize Efficiency and Uptime</h2>
        <p>
          At CodeVoss, we are committed to delivering cloud infrastructure
          solutions that maximize efficiency and uptime. Our expertise in AWS
          and Terraform allows us to provide reliable, scalable, and secure
          infrastructure that supports your business growth. Trust us to create
          a cloud environment that adapts to your needs and drives your success.
        </p>
      </section>

      <section className="container content">
        <h2 className="mb-12">Our Approach</h2>

        <div className="grid lg:grid-cols-3 gap-6">
          <ProcessItem title="Assessment and Planning" icon={faListCheck}>
            We begin by assessing your current infrastructure and understanding
            your business goals. This allows us to design a tailored solution
            that meets your specific needs. Our planning process includes
            identifying the right AWS services and Terraform configurations to
            optimize your infrastructure for performance and cost-efficiency.
          </ProcessItem>
          <ProcessItem title="Implementation and Deployment" icon={faRocket}>
            Our team of experts implements the planned infrastructure using AWS
            and Terraform. We ensure that the deployment process is smooth and
            that your infrastructure is set up correctly and efficiently. Our
            approach minimizes downtime and disruptions, ensuring a seamless
            transition to the new setup.
          </ProcessItem>
          <ProcessItem title="Monitoring and Optimization" icon={faComputer}>
            Once your infrastructure is deployed, we continuously monitor its
            performance to ensure it meets your business goals. We use advanced
            monitoring tools to track key metrics and identify areas for
            improvement. Our ongoing optimization efforts ensure that your
            infrastructure remains efficient, cost-effective, and adaptable to
            your evolving needs.
          </ProcessItem>
        </div>
      </section>

      <section className="container content">
        <h2>Why Choose Our AWS and Terraform Solutions?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <CardWithIcon
            title="Scalable and Secure Cloud Services"
            icon={faChartLine}
          >
            AWS offers a comprehensive suite of cloud services that are
            scalable, secure, and highly available. We utilize AWS to build and
            manage your IT infrastructure, ensuring it can handle varying
            workloads and maintain high availability. AWS&apos;s advanced
            security features protect your data and applications, providing
            peace of mind that your systems are secure.
          </CardWithIcon>
          <CardWithIcon
            title="Optimal Performance and Cost-Efficiency"
            icon={faMoneyBillTrendUp}
          >
            We design your infrastructure with performance and cost-efficiency
            in mind. By leveraging AWS’s diverse services, we can optimize your
            infrastructure to meet your specific needs while controlling costs.
            Our solutions ensure that you get the most out of your investment in
            cloud technology.
          </CardWithIcon>
          <CardWithIcon
            title="Global Network and Availability"
            icon={faGlobeAmericas}
          >
            With AWS’s global network, we ensure that your applications are
            accessible from anywhere in the world. AWS’s extensive
            infrastructure and services support high availability and
            reliability, minimizing downtime and ensuring that your applications
            remain operational at all times.
          </CardWithIcon>
          <CardWithIcon
            title="Infrastructure as Code with Terraform"
            icon={faCode}
          >
            Using Terraform, we manage your infrastructure as code, enabling
            consistent and repeatable deployments while reducing manual errors.
            This automation facilitates rapid provisioning, efficient resource
            management, and effective cost control. Terraform allows us to
            define your infrastructure in a declarative configuration file,
            making it easy to version control and collaborate on infrastructure
            changes.
          </CardWithIcon>
        </div>
      </section>
    </>
  );
};

export default InfrastructurePage;
