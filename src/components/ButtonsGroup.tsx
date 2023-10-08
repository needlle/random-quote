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
    <div className="flex">
      {actions.map((action, index) => (
        <button
          key={index}
          className={`${index === 0 ? "rounded-l-xl" : "border-l-0"} ${
            index === actions.length - 1 ? "rounded-r-xl" : ""
          } border-2 border-slate-800 px-3 py-2 hover:bg-slate-800`}
          onClick={() => action.onClick()}
        >
          {action.content}
        </button>
      ))}
    </div>
  );
}

export default ButtonsGroup;
