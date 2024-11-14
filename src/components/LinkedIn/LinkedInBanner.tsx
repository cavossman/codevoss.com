import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const LinkedInBanner = () => {
  return (
    <div
      className={`w-[1584px] h-[396px] bg-dark ${orbitron.className} text-white flex items-center justify-end pe-20`}
    >
      <span className="text-[42px] tracking-wider">
        empowering <span className="text-primary">your</span> business through
        innovation
      </span>{" "}
    </div>
  );
};

export default LinkedInBanner;
