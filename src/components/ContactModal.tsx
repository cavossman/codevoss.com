"use client";
import React, { ReactNode, useState } from "react";
import Modal from "./Modal";
import ContactForm from "./ContactForm";

const ContactModal: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      <Modal
        title="Contact Us"
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <ContactForm onSubmit={() => setIsOpen(false)}/>
      </Modal>
      <span className="contact-modal cursor-pointer" onClick={openModal}>
        {children}
      </span>
    </>
  );
};

export default ContactModal;
