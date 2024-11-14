import { Orbitron } from "next/font/google";
import Logo from "../Logo";

const orbitron = Orbitron({ subsets: ["latin"] });

const LinkedInLogo = () => {
  return (
    <div
      className={`w-[300px] h-[300px] bg-dark ${orbitron.className} text-white flex items-center justify-center`}
    >
      {/* logo font size has to be edited in logo component - 130px */}
      <Logo />
    </div>
  );
};

export default LinkedInLogo;
