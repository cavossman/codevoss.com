import { IconName } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { FC } from "react";

const StackLogo: FC<{
  logo: IconName | string;
}> = ({ logo }) => {
  if (["mysql", "terraform"].includes(logo)) {
    return (
      <Image
        className="filter stack-logo w-12"
        src={`/images/logos/${logo}.svg`}
        alt={`${logo} logo`}
      />
    );
  }

  return <FontAwesomeIcon className="w-12" icon={["fab", logo as IconName]} />;
};

export default StackLogo;
