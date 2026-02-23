"use client"
import { Heart, Loader2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi, // Import the API type
} from "@/components/ui/carousel"
import { SimilarProducts } from "@/components/SimilarProducts"
import { useGetProductByIdQuery } from "@/lib/features/products/productsApi"
import { useParams } from "next/navigation"
import { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { addToCart } from "@/lib/features/products/cart/cartSlice"
import { toast } from "sonner"

export default function ProductDetails() {
  const { id } = useParams()
  const dispatch = useDispatch()
  
  // Carousel API state for mobile syncing
  const [api, setApi] = useState<CarouselApi>()
  const [current, setCurrent] = useState(0)

  const { data: product, isLoading } = useGetProductByIdQuery(Number(id))
  const [selectedSize, setSelectedSize] = useState(38)

  // Update current slide index when carousel moves
  useEffect(() => {
    if (!api) return
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  if (isLoading) return (
    <div className="h-screen flex items-center justify-center bg-[#e7e7e3]">
      <Loader2 className="animate-spin h-10 w-10 text-blue-600" />
    </div>
  )

  const handleAddToCart = () => {
    if (!product) return
    dispatch(addToCart({
      id: product.id,
      title: product.title,
      price: product.price,
      image: product.images[0],
      quantity: 1,
      size: selectedSize
    }))
    toast.success(`${product.title} added to cart!`, {
      description: `Size: ${selectedSize}, Price: $${product.price}`,
      icon: "👟",
    });
    
  }

  // Use API images if available, otherwise fallback to placeholder
  const images = product?.images || []

  return (
    <div className="bg-[#e7e7e3]">
      <div className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* LEFT: Image Gallery */}
        <div className="lg:col-span-7">
          {/* Desktop View: 4-Image Grid */}
          <div className="hidden lg:grid grid-cols-2 gap-4">
            {images.map((src, i) => (
              <div key={i} className="rounded-[32px] overflow-hidden bg-white/50 border-4 border-white/20">
                <img src={src} alt={`View ${i + 1}`} className="w-full h-auto aspect-square object-cover" />
              </div>
            ))}
          </div>

          {/* Mobile View: Carousel with Functional Thumbnails */}
          <div className="lg:hidden space-y-4">
            <Carousel setApi={setApi} className="w-full">
              <CarouselContent>
                {images.map((src, i) => (
                  <CarouselItem key={i}>
                    <div className="rounded-3xl overflow-hidden bg-white/50 border-4 border-white">
                      <img src={src} alt="Product" className="w-full aspect-square object-contain" />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
            
            {/* Clickable Thumbnails */}
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => api?.scrollTo(i)}
                  className={`relative h-20 w-20 flex-shrink-0 rounded-2xl overflow-hidden border-2 transition-all ${
                    current === i ? "border-[#4f6ef7] ring-2 ring-[#4f6ef7]/20" : "border-white"
                  }`}
                >
                  <img src={src} className="h-full w-full object-cover" />
                  {current !== i && <div className="absolute inset-0 bg-white/40" />}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT: Product Info */}
        <div className="lg:col-span-5 space-y-6">
          <div>
            <Badge className="bg-[#4f6ef7] hover:bg-[#4f6ef7] mb-4 uppercase">New Release</Badge>
            <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 leading-tight uppercase">
              {product?.title}
            </h1>
            <p className="text-3xl font-bold text-[#4f6ef7] mt-2">${product?.price}</p>
          </div>

          {/* Color Selection */}
          <div className="space-y-3">
            <p className="font-bold uppercase text-sm">Color</p>
            <div className="flex gap-3">
              <div className="h-10 w-10 rounded-full border-2 border-zinc-900 bg-[#2a3140] cursor-pointer" />
              <div className="h-10 w-10 rounded-full border-2 border-transparent bg-[#7d8b7d] cursor-pointer" />
            </div>
          </div>

          {/* Size Selection */}
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <p className="font-bold uppercase text-sm">Size</p>
              <button className="text-xs font-bold underline">SIZE CHART</button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {[38, 39, 40, 41, 42, 43, 44, 45, 46, 47].map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`h-12 rounded-lg font-bold transition-all ${
                    selectedSize === size 
                    ? "bg-zinc-900 text-white shadow-lg" 
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
            <Button 
              onClick={handleAddToCart}
              className="flex-1 bg-zinc-900 hover:bg-zinc-800 h-16 uppercase font-bold text-lg rounded-xl"
            >
              Add to Cart
            </Button>
            <Button variant="outline" className="h-16 w-16 border-zinc-900 border-2 rounded-xl">
              <Heart className="h-6 w-6" />
            </Button>
          </div>
          <Button className="w-full bg-[#4f6ef7] hover:bg-blue-700 h-16 uppercase font-bold text-lg rounded-xl">
            Buy it Now
          </Button>

          {/* Product Details Text */}
          <div className="pt-6 border-t border-zinc-300">
            <h4 className="font-bold uppercase text-sm mb-2">About the product</h4>
            <p className="text-zinc-600 text-sm leading-relaxed mb-4">
             {product?.description}
            </p>
          </div>
        </div>
      </div>
      <SimilarProducts />
    </div>
  )
}