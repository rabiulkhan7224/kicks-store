import * as React from "react"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Card, CardContent } from "@/components/ui/card"

const CATEGORIES = [
  {
    title: "Lifestyle Shoes",
    image: "/products2.png", 
    href: "#",
  },
  {
    title: "Basketball Shoes",
    image: "/products1.png", 
    href: "#",
  },
  {
    title: " Shoes",
    image: "/products1.png", 
    href: "#",
  },
  {
    title: "Basketball",
    image: "/products1.png", 
    href: "#",
  },
  // Add more items to see the carousel in action
]

export function CategorySection() {
  return (
    <div className="w-full bg-[#1a1a1a] p-6 md:p-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        {/* Header Section */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tight">
            Categories
          </h2>
          
          {/* Custom Navigation Positioning */}
          <div className="flex gap-2 relative">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-zinc-400 hover:bg-zinc-300 border-none" />
            <CarouselNext className="static translate-y-0 h-10 w-10 bg-white hover:bg-zinc-200 border-none" />
          </div>
        </div>

        {/* Carousel Content */}
        <div className="bg-white rounded-tl-[40px] md:rounded-tl-[60px] p-4">
        <CarouselContent className="-ml-4 ">
          {CATEGORIES.map((category, index) => (
            <CarouselItem key={index} className="pl-4 basis-full md:basis-1/2">
              <Card className="border-none overflow-hidden bg-[#eceef0]">
                <CardContent className="p-0 flex flex-col min-h-[450px] md:min-h-[500px]">
                  {/* Image Container */}
                  <div className="flex-1 flex items-center justify-center p-8">
                    <img
                      src={category.image}
                      alt={category.title}
                      className="max-w-full h-auto object-contain transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                  
                  {/* Footer Text & Action */}
                  <div className="p-8 md:p-10 flex justify-between items-end">
                    <h3 className="text-2xl md:text-4xl font-bold text-zinc-900 leading-tight max-w-[200px]">
                      {category.title.split(' ').map((word, i) => (
                        <span key={i} className="block">{word}</span>
                      ))}
                    </h3>
                    <a 
                      href={category.href}
                      className="bg-zinc-900 text-white p-3 rounded-lg hover:bg-zinc-700 transition-colors"
                    >
                      <ArrowUpRight className="h-6 w-6" />
                    </a>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        </div>
      </Carousel>
    </div>
  )
}