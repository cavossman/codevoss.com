import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FC, ReactElement } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardWithIcon: FC<{
  title: string;
  children: ReactElement | string;
  icon: IconDefinition;
}> = ({ title, children, icon }) => {
  return (
    <div className="bg-dark-light p-4 rounded-lg">
      <h3 className="flex gap-4 items-center text-primary justify-between">
        {title}
        <div className="flex items-center py-3 px-4 rounded-lg aspect-square bg-dark">
          <FontAwesomeIcon className="text-white inline w-4" icon={icon} />
        </div>
      </h3>
      <p>{children}</p>
    </div>
  );
};

export default CardWithIcon;
