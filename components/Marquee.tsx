import { marqueeItems } from "@/data";

export default function Marquee() {
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="border-t border-grey-1 border-b py-4 overflow-hidden whitespace-nowrap bg-cream">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="inline-flex items-center">
            <span className="font-serif text-[1.05rem] italic text-grey-3 px-10 tracking-[-0.01em]">
              {item}
            </span>
            <span className="text-grey-2 -mx-4">·</span>
          </span>
        ))}
      </div>
    </div>
  );
}
