import { PropsWithChildren } from "react";

type TooltipProps = PropsWithChildren<{
  visible: boolean;
}>;

function Tooltip({ visible, children }: TooltipProps) {
  return (
    <span
      className={`tooltip absolute select-none bg-gray-950 px-3 py-2 text-gray-950 ${
        visible ? "opacity-100" : "opacity-0"
      } right-0 top-full mt-3 rounded-md transition duration-300 ease-in-out`}
    >
      <span className="text-sm text-primary-content">{children}</span>
    </span>
  );
}

export default Tooltip;
