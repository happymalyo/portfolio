import { IoIosLink } from "react-icons/io";

export default function LinkButton({
  onClick,
  isCopied,
}: {
  onClick: () => void;
  isCopied: boolean;
}) {
  return (
    <div className="relative group w-fit">
      <button
        onClick={onClick}
        className="inline-flex items-center gap-2 text-purple-300 p-2 rounded-md hover:bg-slate-700 transition duration-200 cursor-pointer"
        aria-label="Copy link"
      >
        <IoIosLink size={20} />
        {isCopied ? "Copied!" : ""}
      </button>

      {/* Tooltip */}
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-white text-black text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition pointer-events-none">
        Copy link
      </span>
    </div>
  );
}
