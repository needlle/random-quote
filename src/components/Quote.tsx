import useQuote from "../hooks/use-quote";
import quoteBackground from "../assets/bg-image-random-quote.svg";
import shuffleIcon from "../assets/shuffle.svg";
import linkIcon from "../assets/link.svg";
import Tag from "./Tag";
import ButtonsGroup from "./ButtonsGroup";

function Quote() {
  const quote = useQuote();

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <div className="mb-5 w-2/5 rounded-xl bg-slate-800">
        <div
          className="flex flex-col items-center gap-3 rounded-xl px-12 py-8"
          style={{
            userSelect: "none",
            backgroundImage: `url(${quoteBackground})`,
            backgroundPosition: "bottom right",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span className="text-lg font-bold text-white">
            {quote.data?.author}
          </span>
          <div className="flex gap-2">
            {quote.data?.tags.map((tag) => <Tag>{tag}</Tag>)}
          </div>
          <span className="mb-4 mt-4 text-center text-2xl text-slate-400">
            “{quote.data?.content}”
          </span>
        </div>
      </div>
      <ButtonsGroup
        actions={[
          {
            content: <img src={shuffleIcon} className="w-8" />,
            onClick: () => quote.refetch(),
          },
          {
            content: <img src={linkIcon} className="w-8" />,
            onClick: () => {},
          },
        ]}
      />
    </div>
  );
}

export default Quote;
