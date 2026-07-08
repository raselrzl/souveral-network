import { cn } from "@/lib/utils";
import Marquee from "./Marquee";

const reviews = [
  {
    name: "Erik Johansson",
    username: "@erikj",
    body: "The platform transformed how we manage operations across our business units. Fast, reliable, and incredibly intuitive.",
    img: "bg-green-500",
  },
  {
    name: "Sofia Lindberg",
    username: "@sofial",
    body: "The attention to detail and scalability of the system exceeded our expectations from day one.",
    img: "bg-blue-500",
  },
  {
    name: "João Silva",
    username: "@joaos",
    body: "Implementation was seamless and the results were immediate. It has become an essential part of our workflow.",
    img: "bg-red-500",
  },
  {
    name: "Maria Ferreira",
    username: "@mariaf",
    body: "An outstanding digital experience that combines performance, simplicity, and enterprise-grade reliability.",
    img: "bg-yellow-500",
  },
  {
    name: "Lars Andersson",
    username: "@larsa",
    body: "The system scales effortlessly with our growth and provides exactly the visibility we need across operations.",
    img: "bg-purple-500",
  },
  {
    name: "Ana Costa",
    username: "@anac",
    body: "Professional, modern, and exceptionally well designed. It has streamlined several of our internal processes.",
    img: "bg-pink-500",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  username,
  body,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-neutral-950/10 bg-neutral-950/1 hover:bg-neutral-950/5",
        // dark styles
        "dark:border-neutral-50/10 dark:bg-neutral-50/10 dark:hover:bg-neutral-50/15",
      )}
    >
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(125%_125%_at_50%_10%,rgba(255,255,255,0)_40%,#335fee_100%)] pointer-events-none"></div>
      <div className="flex flex-row items-center gap-2">
        <div className={cn("rounded-full w-8 h-8", img)}></div>
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium text-foreground text-white">
            {name}
          </figcaption>
          <p className="text-xs font-medium text-muted-foreground text-white">
            {username}
          </p>
        </div>
      </div>
      <blockquote className="mt-2 text-sm text-white">{body}</blockquote>
    </figure>
  );
};

const MarqueeDemo = () => {
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-lg py-10">
      <Marquee pauseOnHover className="[--duration:20s]">
        {firstRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <Marquee reverse pauseOnHover className="[--duration:20s]">
        {secondRow.map((review) => (
          <ReviewCard key={review.username} {...review} />
        ))}
      </Marquee>
      <svg
        className="absolute top-0 left-0 z-2 w-full h-full mix-blend-overlay opacity-50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id="noise6">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.6"
              numOctaves="4"
            />
          </filter>
        </defs>
        <rect width="100%" height="100%" filter="url(#noise6)" />
      </svg>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-linear-to-r from-yellow-500"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-linear-to-l from-red-900"></div>
    </div>
  );
};

export default MarqueeDemo;
