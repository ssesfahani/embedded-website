import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import * as React from "react";

// Placeholder image URLs
const placeholderImages = [
  "/carousel-1.png",
  "/carousel-2.png",
  "/carousel-3.png",
  "/carousel-4.png",
  "/carousel-5.png",
];

const getImageDescription = (index: number): string => {
  const descriptions = [
    "Twitter/X embed being fixed in Discord chat",
    "Reddit embed being processed and improved",
    "TikTok embed with enhanced preview functionality",
    "Instagram embed working properly in Discord",
    "Multiple social media embeds working seamlessly"
  ];
  return descriptions[index] || `social media embed functionality ${index + 1}`;
};

interface ImageCarouselProps {
  className?: string;
  autoPlay?: boolean;
  interval?: number;
  loop?: boolean;
}

export function ImageCarousel({
  className,
  autoPlay = true,
  interval = 6000,
  loop = true,
}: ImageCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>();

  React.useEffect(() => {
    if (!api || !autoPlay) return;

    const intervalId = setInterval(() => {
      api.scrollNext();
    }, interval);

    return () => clearInterval(intervalId);
  }, [api, autoPlay, interval]);

  // Handle edge case for looping
  React.useEffect(() => {
    if (!api || !loop) return;

    const onSelect = () => {
      // If we can't scroll next and loop is enabled, we should be able to!
      if (!api.canScrollNext()) {
        api.scrollTo(0);
      }
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, loop]);

  return (
    <Carousel className={className} setApi={setApi} opts={{ loop: loop }}>
      <CarouselContent>
        {placeholderImages.map((image, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={image}
                  alt={`Embedded Discord Bot screenshot showing ${getImageDescription(index)} - demonstration of embed fixing functionality`}
                  className="h-auto w-full object-cover transition-all hover:scale-105"
                  loading={index === 0 ? "eager" : "lazy"}
                />
              </div>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-2" />
      <CarouselNext className="right-2" />
    </Carousel>
  );
}
