"use client"

import * as React from "react"
import useEmblaCarousel from "embla-carousel-react"
import { ArrowLeft, ArrowRight } from "lucide-react"
import AutoScroll from 'embla-carousel-auto-scroll'

import { cn } from "../lib/utils"
import { Button } from "./button"

const CarouselContext = React.createContext(null)

function useCarousel() {
    const context = React.useContext(CarouselContext)

    if (!context) {
        throw new Error("useCarousel must be used within a <Carousel />")
    }

    return context
}

const Carousel = React.forwardRef(
    (
        {
            orientation = "horizontal",
            opts,
            setApi,
            plugins,
            className,
            children,
            loop = true,
            autoplay = true,
            ...props
        },
        ref
    ) => {
        const [carouselRef, api] = useEmblaCarousel(
            {
                ...opts,
                axis: orientation === "horizontal" ? "x" : "y",
                loop,
                dragFree: true,
                containScroll: "trimSnaps",
                speed: 5,
                skipSnaps: false
            },
            [AutoScroll({
                playOnInit: true,
                stopOnInteraction: false,
                stopOnMouseEnter: true
            }), ...(plugins || [])]
        )


        const [canScrollPrev, setCanScrollPrev] = React.useState(false)
        const [canScrollNext, setCanScrollNext] = React.useState(false)

        const onSelect = React.useCallback((api) => {
            if (!api) {
                return
            }

            setCanScrollPrev(api.canScrollPrev())
            setCanScrollNext(api.canScrollNext())
        }, [])

        const resetAutoScroll = React.useCallback(() => {
            if (api && api.plugins().autoScroll) {
                api.plugins().autoScroll.reset()
            }
        }, [api])

        const scrollPrev = React.useCallback(() => {
            api?.scrollPrev();
            resetAutoScroll();
        }, [api, resetAutoScroll]);

        const scrollNext = React.useCallback(() => {
            api?.scrollNext();
            resetAutoScroll();
        }, [api, resetAutoScroll]);


        const handleMouseEnter = React.useCallback(() => {
            if (api && api.plugins().autoScroll) {
                api.plugins().autoScroll.stop();
            }
        }, [api]);

        const handleMouseLeave = React.useCallback(() => {
            if (api && api.plugins().autoScroll) {
                api.plugins().autoScroll.play();
            }
        }, [api]);


        const handleKeyDown = React.useCallback(
            (event) => {
                if (event.key === "ArrowLeft") {
                    event.preventDefault()
                    scrollPrev()
                } else if (event.key === "ArrowRight") {
                    event.preventDefault()
                    scrollNext()
                }
                resetAutoScroll()
            },
            [scrollPrev, scrollNext, resetAutoScroll]
        )



        React.useEffect(() => {
            if (!api || !setApi) {
                return
            }

            setApi(api)
        }, [api, setApi])

        React.useEffect(() => {
            if (!api) {
                return
            }

            onSelect(api)
            api.on("reInit", onSelect)
            api.on("select", onSelect)

            return () => {
                api?.off("select", onSelect)
            }
        }, [api, onSelect])

        return (
            <CarouselContext.Provider
                value={{
                    carouselRef,
                    api: api,
                    opts,
                    orientation:
                        orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
                    scrollPrev,
                    scrollNext,
                    canScrollPrev,
                    canScrollNext,
                }}
            >
                <div
                    ref={ref}
                    onKeyDownCapture={handleKeyDown}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    className={cn("relative", className)}
                    role="region"
                    aria-roledescription="carousel"
                    {...props}
                >
                    {children}
                </div>
            </CarouselContext.Provider>
        )
    }
)
Carousel.displayName = "Carousel"

const CarouselContent = React.forwardRef(({ className, ...props }, ref) => {
    const { carouselRef, orientation } = useCarousel()

    return (
        <div ref={carouselRef} className="overflow-hidden">
            <div
                ref={ref}
                className={cn(
                    "flex",
                    orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
                    className
                )}
                {...props}
            />
        </div>
    )
})
CarouselContent.displayName = "CarouselContent"

const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
    const { orientation } = useCarousel()

    return (
        <div
            ref={ref}
            role="group"
            aria-roledescription="slide"
            className={cn(
                "min-w-0 shrink-0 grow-0 basis-full",
                orientation === "horizontal" ? "pl-4" : "pt-4",
                className
            )}
            {...props}
        />
    )
})
CarouselItem.displayName = "CarouselItem"

const CarouselPrevious = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { orientation, scrollPrev } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute h-8 w-8 rounded-full",
                    orientation === "horizontal"
                        ? "-left-12 top-1/2 -translate-y-1/2"
                        : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
                    className
                )}
                onClick={scrollPrev}
                {...props}
            >
                <ArrowLeft className="h-4 w-4" />
                <span className="sr-only">Previous slide</span>
            </Button>
        )
    }
)

const CarouselNext = React.forwardRef(
    ({ className, variant = "outline", size = "icon", ...props }, ref) => {
        const { orientation, scrollNext } = useCarousel()

        return (
            <Button
                ref={ref}
                variant={variant}
                size={size}
                className={cn(
                    "absolute h-8 w-8 rounded-full",
                    orientation === "horizontal"
                        ? "-right-12 top-1/2 -translate-y-1/2"
                        : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
                    className
                )}
                onClick={scrollNext}
                {...props}
            >
                <ArrowRight className="h-4 w-4" />
                <span className="sr-only">Next slide</span>
            </Button>
        )
    }
)

export {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselPrevious,
    CarouselNext,
}
