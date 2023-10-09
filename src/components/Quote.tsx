import useQuote from "../hooks/use-quote";
import shuffleIcon from "../assets/shuffle.svg";
import linkIcon from "../assets/link.svg";
import Tag from "./Tag";
import ButtonsGroup from "./ButtonsGroup";
import { useState } from "react";
import Tooltip from "./Tooltip";

function Quote() {
  const [quoteId, setQuoteId] = useState<string | undefined>(
    location.search?.slice(1) || undefined,
  );
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const quote = useQuote(quoteId);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mx-12 mb-5 rounded-xl bg-primary md:w-2/3 lg:w-1/2 2xl:w-2/5">
        <div className="flex select-none flex-col items-center gap-3 rounded-xl bg-quote bg-contain bg-right-bottom bg-no-repeat px-12 py-8">
          <span className="font-bold text-white sm:text-lg">
            {quote.data?.author}
          </span>
          <div className="flex gap-2">
            {quote.data?.tags.map((tag) => <Tag key={tag}>{tag}</Tag>)}
          </div>
          <span className="my-4 text-center text-xl text-primary-content sm:text-2xl">
            “{quote.data?.content}”
          </span>
        </div>
      </div>
      <div className="relative">
        <ButtonsGroup
          actions={[
            {
              content: <img src={shuffleIcon} className="w-8" />,
              onClick: () => {
                if (quoteId) {
                  setQuoteId(undefined);
                }
                quote.refetch();
              },
            },
            {
              content: <img src={linkIcon} className="w-8" />,
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
