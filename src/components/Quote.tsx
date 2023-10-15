import useQuote from "../hooks/use-quote";
import Tag from "./Tag";
import ButtonsGroup from "./ButtonsGroup";
import { MouseEventHandler, useRef, useState } from "react";
import Tooltip from "./Tooltip";
import ShuffleIcon from "./icons/ShuffleIcon";
import LinkIcon from "./icons/LinkIcon";
import Loader from "./Loader";

function Quote() {
  const quoteElement = useRef<HTMLDivElement | null>(null);
  const quoteContainer = useRef<HTMLDivElement | null>(null);
  const [quoteId, setQuoteId] = useState<string | undefined>(
    location.search?.slice(1) || undefined,
  );
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const quote = useQuote(quoteId);

  const onMove: MouseEventHandler = (e) => {
    const offsetLeft = quoteElement.current?.offsetLeft ?? 0;
    const offsetTop = quoteElement.current?.offsetTop ?? 0;
    quoteContainer.current?.setAttribute(
      "style",
      `--x-quote: ${e.clientX - offsetLeft}px; --y-quote: ${
        e.clientY - offsetTop
      }px;; --x-quote-bg: ${e.clientX}px; --y-quote-bg: ${e.clientY}px;`,
    );
  };

  return (
    <div
      ref={quoteContainer}
      className="quote-background-light z-1 relative flex h-full w-full flex-col items-center justify-center overflow-hidden"
      onMouseMove={onMove}
    >
      <div
        ref={quoteElement}
        className="quote z-0 mx-12 mb-5 rounded-xl p-0.5 shadow-xl md:w-2/3 lg:w-1/2 2xl:w-2/5"
      >
        <div className="rounded-xl bg-primary">
          <div className="flex flex-col items-center gap-3 rounded-xl bg-quote bg-contain bg-right-bottom bg-no-repeat px-12 py-8">
            {quote.isLoading ? (
              <Loader className="my-12 h-20 w-20 text-accent" />
            ) : (
              <>
                <span className="font-bold text-white sm:text-lg">
                  {quote.data?.author}
                </span>
                <div className="flex gap-2">
                  {quote.data?.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
                </div>
                <span className="my-4 text-center text-xl text-primary-content sm:text-2xl">
                  “{quote.data?.content}”
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      <div className="relative z-0">
        <ButtonsGroup
          actions={[
            {
              content: <ShuffleIcon className="h-8 w-8" />,
              onClick: () => {
                if (quoteId) {
                  setQuoteId(undefined);
                }
                quote.refetch();
              },
            },
            {
              content: <LinkIcon className="h-8 w-8" />,
              onClick: () => {
                navigator.clipboard
                  .writeText(`${location.origin}/?${quote.data?._id ?? ""}`)
                  .then(() => {
                    setIsTooltipVisible(true);
                    setTimeout(() => {
                      setIsTooltipVisible(false);
                    }, 2000);
                  });
              },
            },
          ]}
        />
        <Tooltip visible={isTooltipVisible}>Link copied !</Tooltip>
      </div>
    </div>
  );
}

export default Quote;
