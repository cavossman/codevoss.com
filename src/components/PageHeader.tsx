import { ReactElement } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Props {
  children: string | ReactElement | ReactElement[];
}

const PageHeader = ({ children }: Props) => {
  return (
    <div
      className={`bg-gradient-to-b from-transparent via-primary-light dark:via-primary-dark to-transparent flex justify-center md:max-h-[500px] max-h-[200px] h-screen mb-9 ${orbitron.className} tracking-wide`}
    >
      <div className="flex flex-col items-center justify-center text-center font-bold text-3xl md:text-5xl">
        {typeof children === "string" ? (
          <h1 className="text-secondary font-bold text-3xl md:text-5xl">
            {children}
          </h1>
        ) : (
          children
        )}
      </div>
    </div>
  );
};

export default PageHeader;
