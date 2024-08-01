import { FC } from "react";

interface Props {
  logo: string;
  ext?: string;
}

const StackLogo: FC<Props> = ({ logo, ext = "svg" }) => {
  return (
    <img
      className="dark:filter stack-logo w-12"
      src={`/images/logos/${logo}.${ext}`}
      alt={`${logo} logo`}
    />
  );
};

export default StackLogo;
