import { ReactElement } from "react";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

interface Props {
  children: string | ReactElement | ReactElement[];
}

const PageHeader = ({ children }: Props) => {
  return (
    <div
      className={`flex justify-center md:py-[100px] py-[50px] h-auto mb-9 ${orbitron.className} tracking-wide`}
    >
      <div className="flex flex-col items-center justify-center text-center font-bold text-3xl md:text-5xl">
        {typeof children === "string" ? (
          <h1 className="text-primary font-bold text-3xl md:text-5xl">
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
