import Link from "next/link";
import Logo from "./Logo";
import ContactModal from "./ContactModal";

const Footer = () => {
  return (
    <footer>
      <div className="flex justify-between container py-9">
        <div>
          <Logo />
          <span>CodeVoss Software Solutions</span>
          <ContactModal>
            <div className="block text-xs md:text-lg text-center dark:text-white font-normal border rounded px-2 md:px-3 py-1 mt-4">
              Get in Touch
            </div>
          </ContactModal>
        </div>
        <ul>
          <li className="font-bold mb-2 bg-gradient-to-r pb-2 from-primary-dark via-white to-secondary">
            <span className="bg-dark pt-1 pb-2 mb">Navigation</span>
          </li>
          <li className="text-sm py-1">
            <Link href="/services">Services</Link>
          </li>
          <li className="text-sm py-1">
            <Link href="/about">About Us</Link>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
