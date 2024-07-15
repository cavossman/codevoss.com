"use client";
import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type ModalProps = {
  title?: string;
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};

const Modal: React.FC<ModalProps> = ({ title, isOpen, onClose, children }) => {
  // Close modal function
  const closeModal = () => {
    onClose();
  };

  // Add event listener for escape key press
  useEffect(() => {
    // Listen for escape key press to close modal
    const handleEscapeKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscapeKey);

    return () => {
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, []);

  // Handle click outside of modal to close it
  const handleOutsideClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return (
    <>
      {isOpen &&
        createPortal(
          <div
            className="fixed top-0 left-0 z-50 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center"
            onClick={handleOutsideClick}
          >
            <div className="bg-dark w-96 p-6 rounded-lg shadow-lg">
              <div className="flex justify-between pb-6">
                <strong>{title}</strong>
                <button
                  className="top-2 right-2 text-white focus:outline-none"
                  onClick={closeModal}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <div>{children}</div>
            </div>
          </div>,
          document.body
        )}
    </>
  );
};

export default Modal;
