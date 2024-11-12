import ContactForm from "./ContactForm";

const ContactFormInline = () => {
  return (
    <section className="bg-dark-light py-20">
      <div className="container grid lg:grid-cols-2 gap-10 lg:gap-20">
        <div>
          <h2 className="text-primary">Contact Us</h2>
          <p>
            Whether you're looking for a quote or just looking to talk over your
            options, shoot us a message and we will get back to you promptly.
          </p>
        </div>
        <div className="bg-dark p-8 rounded-lg">
          <h3 className="text-primary">Get Started Today!</h3>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactFormInline;
