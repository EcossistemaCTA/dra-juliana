"use client";

import {
  createContext,
  useContext,
  useEffect,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { cn } from "@/lib/utils";

export type CarouselItem = {
  src?: string;
  title: string;
  category: string;
  content: ReactNode;
};


interface CarouselProps {
  items: ReactNode[];
  initialScroll?: number;
}

export const CarouselContext = createContext<{
  onCardClose: (index: number) => void;
  currentIndex: number;
}>({
  onCardClose: () => {},
  currentIndex: 0,
});

export const Carousel = ({ items, initialScroll = 0 }: CarouselProps) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft = initialScroll;
      checkScrollability();
    }
  }, [initialScroll]);

  const checkScrollability = () => {
    if (!carouselRef.current) return;

    const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
    setCanScrollLeft(scrollLeft > 0);
    setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 1);
  };

  const scrollLeft = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: -320, behavior: "smooth" });
  };

  const scrollRight = () => {
    if (!carouselRef.current) return;
    carouselRef.current.scrollBy({ left: 320, behavior: "smooth" });
  };

  const handleCardClose = (index: number) => {
    if (!carouselRef.current) return;

    const cardWidth = window.innerWidth < 768 ? 240 : 384;
    const gap = window.innerWidth < 768 ? 12 : 20;
    const scrollPosition = (cardWidth + gap) * (index + 1);

    carouselRef.current.scrollTo({
      left: scrollPosition,
      behavior: "smooth",
    });

    setCurrentIndex(index);
  };

  return (
    <CarouselContext.Provider value={{ onCardClose: handleCardClose, currentIndex }}>
      <div className="relative w-full">
        <div
          ref={carouselRef}
          onScroll={checkScrollability}
          className="flex w-full overflow-x-auto overscroll-x-contain scroll-smooth py-6 [scrollbar-width:none] md:py-12"
        >
          <div className="flex min-w-max flex-row justify-start gap-4 pl-4 md:gap-5">
            {items.map((item, index) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: 0.12 * index, ease: "easeOut" },
                }}
                key={`card-${index}`}
                className="rounded-[2rem] last:pr-[6%] md:last:pr-0"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex justify-end gap-2 pr-1 md:pr-2">
          <button
            type="button"
            onClick={scrollLeft}
            disabled={!canScrollLeft}
            aria-label="Ver cards anteriores"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:border-gold/40 enabled:hover:text-gold-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={scrollRight}
            disabled={!canScrollRight}
            aria-label="Ver próximos cards"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-deep/10 bg-white text-deep shadow-sm transition enabled:hover:-translate-y-0.5 enabled:hover:border-gold/40 enabled:hover:text-gold-deep disabled:cursor-not-allowed disabled:opacity-40"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </CarouselContext.Provider>
  );
};

export const Card = ({
  card,
  index,
  layout = false,
}: {
  card: CarouselItem;
  index: number;
  layout?: boolean;
}) => {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const { onCardClose } = useContext(CarouselContext);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        handleClose();
      }
    };

    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open]);

  useOutsideClick(containerRef, () => handleClose());

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    onCardClose(index);
  };

  return (
    <>
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 h-screen overflow-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 h-full w-full bg-black/80 backdrop-blur-lg"
            />
            <motion.div
              ref={containerRef}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              {...(layout ? { layoutId: `card-${card.title}` } : {})}
              className="relative z-[60] mx-auto my-10 h-fit max-w-5xl rounded-[2rem] bg-white p-4 font-sans md:p-10"
            >
              <button
                type="button"
                onClick={handleClose}
                className="sticky top-4 right-0 ml-auto flex h-9 w-9 items-center justify-center rounded-full bg-deep text-white"
                aria-label="Fechar detalhamento"
              >
                <X className="h-4 w-4" />
              </button>

              <motion.p
                {...(layout ? { layoutId: `category-${card.title}` } : {})}
                className="text-base font-medium text-deep"
              >
                {card.category}
              </motion.p>

              <motion.h3
                {...(layout ? { layoutId: `title-${card.title}` } : {})}
                className="mt-4 text-2xl font-semibold text-deep md:text-5xl"
              >
                {card.title}
              </motion.h3>

              <div className="py-10">{card.content}</div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      <motion.button
        {...(layout ? { layoutId: `card-${card.title}` } : {})}
        onClick={handleOpen}
        type="button"
        className={cn(
          "group relative z-10 flex h-72 w-64 flex-col items-start justify-end overflow-hidden rounded-[2rem] shadow-[0_25px_60px_rgba(14,32,42,0.18)] transition duration-300 hover:-translate-y-1 md:h-[38rem] md:w-[23rem]",
          card.src ? "bg-deep" : "bg-[#2d2d2d]",
        )}
      >
        <div
          className={cn(
            "pointer-events-none absolute inset-0 z-10",
            card.src ? "bg-gradient-to-b from-black/20 via-black/15 to-black/75" : "bg-gradient-to-b from-black/10 via-black/5 to-black/40",
          )}
        />

        <div className="relative z-20 p-6 md:p-8">
          <motion.p
            {...(layout ? { layoutId: `category-${card.category}` } : {})}
            className="text-left text-xs font-medium uppercase tracking-[0.25em] text-cream/80 md:text-sm"
          >
            {card.category}
          </motion.p>
          <motion.h3
            {...(layout ? { layoutId: `title-${card.title}` } : {})}
            className="mt-3 max-w-[16rem] text-left font-display text-2xl text-white md:text-4xl"
          >
            {card.title}
          </motion.h3>
        </div>

        {card.src && (
          <img
            src={card.src}
            alt={card.title}
            className="absolute inset-0 z-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
        )}
      </motion.button>

    </>
  );
};

export const BlurImage = ({
  src,
  alt,
  className,
  ...rest
}: {
  src: string;
  alt: string;
  className?: string;
  [key: string]: unknown;
}) => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <img
      className={cn(
        "h-full w-full transition duration-300",
        isLoading ? "blur-sm" : "blur-0",
        className,
      )}
      onLoad={() => setIsLoading(false)}
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...rest}
    />
  );
};

function useOutsideClick(
  ref: RefObject<HTMLDivElement | null>,
  callback: () => void,
) {
  useEffect(() => {
    const listener = (event: MouseEvent | TouchEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      callback();
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, callback]);
}
