import * as React from "react"
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

const SIMILAR_PRODUCTS = [
      {
          id: 1,
            title: "Nike Air Max 270",
            slug: "nike-air-max-270",
            price: 150,
            description: "Experience the ultimate comfort and style with Nike Air Max 270, featuring a large Air unit for cushioning and a sleek design.",
            category: {
              id: 1,
              name: "Sneakers",
                image: "/categories/sneakers.png",
                slug: "sneakers"
            },
            images: ["/products1.png"]

        },
        {
          id: 2,
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            slug: "adidas-4dfwd-x-parley-running-shoes",
            price: 150,
            description: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            category: {
              id: 1,
              name: "Sneakers",
                image: "/categories/sneakers.png",
                slug: "sneakers"
            },
            images: ["/products2.png"]

        },
        {
          id: 3,
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            slug: "adidas-4dfwd-x-parley-running-shoes",
            price: 150,
            description: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            category: {
              id: 1,
              name: "Sneakers",
                image: "/categories/sneakers.png",
                slug: "sneakers"
            },
            images: ["/products2.png"]

        },
        {
          id: 4,
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            slug: "adidas-4dfwd-x-parley-running-shoes",
            price: 150,
            description: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            category: {
              id: 1,
              name: "Sneakers",
                image: "/categories/sneakers.png",
                slug: "sneakers"
            },
            images: ["/products2.png"]

        },
        {
          id: 5,
            title: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            slug: "adidas-4dfwd-x-parley-running-shoes",
            price: 150,
            description: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
            category: {
              id: 1,
              name: "Sneakers",
                image: "/categories/sneakers.png",
                slug: "sneakers"
            },
            images: ["/products2.png"]

        },
//   { id: 1, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/products1.png", isNew: true },
//   { id: 2, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/products2.png", isNew: true },
//   { id: 3, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/review-shoe-1.png", isNew: true },
//   { id: 4, name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES", price: "$125", image: "/review-shoe-2.png", isNew: true },
]

export function SimilarProducts() {
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
          {SIMILAR_PRODUCTS.map((product) => (
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