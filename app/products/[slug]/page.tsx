"use client"
import * as React from "react"
import { Heart, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

const PRODUCT = {
  name: "ADIDAS 4DFWD X PARLEY RUNNING SHOES",
  price: "$125.00",
  colors: ["#2a3140", "#7d8b7d"],
  sizes: [38, 39, 40, 41, 42, 43, 44, 45, 46, 47],
  images: ["/products1.png", 
    "/products2.png", "/review-shoe-1.png", "review-shoe-2.png"],
}

export  default function ProductDetails() {
  const [selectedSize, setSelectedSize] = React.useState(38)

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10 bg-[#e7e7e3]">
      
      {/* LEFT: Image Gallery */}
      <div className="lg:col-span-7">
        {/* Desktop View: 4-Image Grid */}
        <div className="hidden lg:grid grid-cols-2 gap-4">
          {PRODUCT.images.map((src, i) => (
            <div key={i} className="rounded-[32px] overflow-hidden bg-white/50">
              <img src={src} alt={`View ${i + 1}`} className="w-full h-auto object-cover" />
            </div>
          ))}
        </div>

        {/* Mobile View: Carousel with Thumbnails */}
        <div className="lg:hidden space-y-4">
          <Carousel className="w-full">
            <CarouselContent>
              {PRODUCT.images.map((src, i) => (
                <CarouselItem key={i}>
                  <div className="rounded-3xl overflow-hidden bg-white/50">
                    <img src={src} alt="Product" className="w-full aspect-square object-contain" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            {/* Simple Pagination Dots could go here */}
          </Carousel>
          <div className="flex gap-2 overflow-x-auto pb-2">
            {PRODUCT.images.map((src, i) => (
              <img key={i} src={src} className="h-20 w-20 rounded-xl bg-white/50 border object-cover" />
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Product Info */}
      <div className="lg:col-span-5 space-y-6">
        <div>
          <Badge className="bg-[#4f6ef7] hover:bg-[#4f6ef7] mb-4">New Release</Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 leading-tight">
            {PRODUCT.name}
          </h1>
          <p className="text-2xl font-bold text-[#4f6ef7] mt-2">{PRODUCT.price}</p>
        </div>

        {/* Color Selection */}
        <div className="space-y-3">
          <p className="font-bold uppercase text-sm">Color</p>
          <div className="flex gap-3">
            {PRODUCT.colors.map((color, i) => (
              <div 
                key={i} 
                className={`h-10 w-10 rounded-full border-2 cursor-pointer ${i === 0 ? 'border-zinc-900' : 'border-transparent'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Size Selection */}
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <p className="font-bold uppercase text-sm">Size</p>
            <button className="text-xs font-bold underline">SIZE CHART</button>
          </div>
          <div className="grid grid-cols-5 gap-2">
            {PRODUCT.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`h-12 rounded-lg font-bold transition-colors ${
                  selectedSize === size 
                  ? "bg-zinc-900 text-white" 
                  : "bg-white text-zinc-400 hover:bg-zinc-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3">
          <Button className="flex-1 bg-zinc-900 hover:bg-zinc-800 h-14 uppercase font-bold text-lg">
            Add to Cart
          </Button>
          <Button variant="outline" className="h-14 w-14 border-zinc-900">
            <Heart className="h-6 w-6" />
          </Button>
        </div>
        <Button className="w-full bg-[#4f6ef7] hover:bg-blue-700 h-14 uppercase font-bold text-lg">
          Buy it Now
        </Button>

        {/* Product Details Text */}
        <div className="pt-6 border-t border-zinc-300">
          <h4 className="font-bold uppercase text-sm mb-2">About the product</h4>
          <p className="text-zinc-600 text-sm leading-relaxed mb-4">
            Shadow Navy / Army Green
          </p>
          <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-2">
            <li>Pay over time in interest-free installments with Affirm or Klarna.</li>
            <li>Join adiClub to get unlimited free standard shipping.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}