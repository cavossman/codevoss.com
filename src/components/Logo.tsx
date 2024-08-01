import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ["latin"] });

const Logo = () => {
  return (
    <div id="logo" className={`font-bold text-5xl ${orbitron.className}`}>
      {/* <img className="size-20" src="/logo.png" /> */}
      <span className="text-dark dark:text-white">C</span>
      <span className="text-secondary">V</span>
    </div>
  );
};

export default Logo;
