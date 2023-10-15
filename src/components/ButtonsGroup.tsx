import { ReactNode } from "react";

type ButtonsGroupAction = {
  content: ReactNode;
  onClick: () => void;
};

type ButtonsGroupProps = {
  actions: ButtonsGroupAction[];
};

function ButtonsGroup({ actions }: ButtonsGroupProps) {
  return (
    <div className="flex px-5">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${index === 0 ? "rounded-l-xl" : "border-l-0"} ${
            index === actions.length - 1 ? "rounded-r-xl" : ""
          } relative border-2 border-accent/75 px-3 py-2 text-accent/75 hover:bg-accent/75 hover:text-primary`}
          onClick={() => action.onClick()}
        >
          {action.content}
        </button>
      ))}
    </div>
  );
}

export default ButtonsGroup;
