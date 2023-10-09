import { PropsWithChildren } from "react";

function Tag({ children }: PropsWithChildren) {
  return (
    <span className="self-center rounded-full border border-accent px-3 py-0.5 text-center text-xs text-accent sm:text-sm">
      {children}
    </span>
  );
}

export default Tag;
