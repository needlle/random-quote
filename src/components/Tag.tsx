import { PropsWithChildren } from "react";

function Tag({ children }: PropsWithChildren) {
  return (
    <div className="rounded-full border border-indigo-500 px-3 py-0.5 text-sm text-indigo-500">
      {children}
    </div>
  );
}

export default Tag;
