import Image from "next/image";

export default function Header() {
  return (
    <header
      className="sticky top-0 z-50 flex items-center justify-between h-16 px-4 
                   border-b border-neutral/60 bg-dark/70 "
    >
      <div className="flex items-center gap-2">
        <Image
          src="/icons/logo.png"
          alt="Logo"
          width={26}
          height={26}
          className="object-cover"
          priority
        />
        <h1 className="font-semibold text-xs md:text-lg">Mario Francisco</h1>
      </div>

      <div className="flex h-12 px-2 rounded-xl items-center gap-3">
        <button className="md:px-3 px-2 py-2 hover:scale-[1.02] transition cursor-pointer bg-neutral font-bold text-xs md:text-sm rounded-md">
          Get in touch 🚀
        </button>

        <div className="relative w-10 h-10">
          <Image
            src="/images/mario03-fr.png"
            alt="Mario"
            fill
            className="rounded-full object-cover border border-zinc-700"
            sizes="40px"
            priority
          />
        </div>
      </div>
    </header>
  );
}
