import { IconName } from "@fortawesome/fontawesome-svg-core";
import StackLogo from "./StackLogo";
import { FC } from "react";

const LogoGroup: FC<{ logos: (IconName | string)[] }> = ({ logos }) => {
  return (
    <span className="flex gap-8 mt-4 items-center">
      {logos.map((logo) => {
        return <StackLogo key={logo} logo={logo} />;
      })}
    </span>
  );
};

export default LogoGroup;
