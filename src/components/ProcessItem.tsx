import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ProcessItem = ({
  title,
  icon,
  children,
}: {
  title: string;
  icon: IconDefinition;
  children: string;
}) => (
  <div className="process-item flex lg:flex-col items-start gap-4 lg:gap-8">
    <div className="icon w-fit p-1 border-dark-light border-4 lg:border-[12px] bg-dark rounded-full">
      <FontAwesomeIcon className="h-10 lg:h-12 w-10 lg:w-12 p-3" icon={icon} />
    </div>
    <div>
      <h3>{title}</h3>
      <p>{children}</p>
    </div>
  </div>
);

export default ProcessItem;
