'use client'
import { ChevronLeft, ChevronRight } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import ProductCard from "./productCard"
import { useGetProductsQuery } from "@/lib/features/products/productsApi"



export function SimilarProducts() {
  const { data: products , isLoading,isError } = useGetProductsQuery({ limit: 20 });
  
  return (
    <section className="w-full py-12 px-4 md:px-10 bg-[#e7e7e3]">
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full"
      >
        {/* Header with Navigation */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl md:text-5xl font-bold text-zinc-900 tracking-tight">
            You may also like
          </h2>
          <div className="flex gap-2">
            <CarouselPrevious className="static translate-y-0 h-10 w-10 bg-zinc-400 border-none text-white hover:bg-zinc-500" />
            <CarouselNext className="static translate-y-0 h-10 w-10 bg-zinc-800 border-none text-white hover:bg-zinc-900" />
          </div>
        </div>

        {/* Product Cards */}
        <CarouselContent className="-ml-4">
          {products?.map((product) => (
            <CarouselItem 
              key={product.id} 
              // sm:basis-1/2 (2 items) | lg:basis-1/4 (4 items)
              className="pl-4 basis-1/2 lg:basis-1/4"
            >
             <ProductCard product={product} />
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Custom Pagination Indicator */}
        <div className="flex justify-center gap-2 mt-10">
          <div className="h-1.5 w-12 bg-[#4f6ef7] rounded-full" />
          <div className="h-1.5 w-12 bg-zinc-300 rounded-full" />
          <div className="h-1.5 w-12 bg-zinc-300 rounded-full" />
          <div className="h-1.5 w-12 bg-zinc-300 rounded-full" />
        </div>
      </Carousel>
    </section>
  )
}