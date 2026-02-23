"use client"
import { Trash2, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SimilarProducts } from "@/components/SimilarProducts"
import { useWishlist } from "@/lib/hooks/useWishlist"
import { useCart } from "@/lib/hooks/useCart"

export default function CartPage() {
  const { items, totalPrice, totalItems, remove, updateQty, isEmpty } = useCart();
  const { toggle, isInWishlist } = useWishlist();
  
  const delivery = isEmpty ? 0 : 6.99;
  const salesTax = 0;
  const grandTotal = totalPrice + delivery + salesTax;

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 bg-[#f3f3f3] min-h-screen">
      {/* Promo Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Saving to celebrate</h1>
        <p className="text-zinc-600 text-sm md:text-base">
          Enjoy up to 60% off thousands of styles during the End of Year sale.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Your Bag */}
        <div className="lg:col-span-8 bg-white rounded-[32px] p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Your Bag</h2>
            {isEmpty ? (
              <p className="text-zinc-500 mt-4 text-lg">Your bag is empty.</p>
            ) : (
              <p className="text-zinc-500 text-sm mt-1">Items in your bag are not reserved.</p>
            )}
          </div>

          <div className="space-y-6">
            {items.map((item) => (
              <div key={`${item.id}-${item.size}`} className="flex flex-col md:flex-row gap-6 py-6 border-t border-zinc-100 first:border-t-0">
                {/* Product Image */}
                <div className="w-full md:w-48 aspect-square bg-[#eceef0] rounded-2xl overflow-hidden p-4">
                  <img src={item.image} alt={item.title} className="w-full h-full object-contain mix-blend-multiply" />
                </div>

                {/* Product Details */}
                <div className="flex-1 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-zinc-900 uppercase">{item.title}</h3>
                      <p className="text-zinc-500 font-medium">Size: {item.size}</p>
                    </div>
                    <p className="text-xl font-bold text-[#4f6ef7]">${(item.price * item.quantity).toFixed(2)}</p>
                  </div>

                  <div className="flex flex-wrap gap-6 mt-4">
                    {/* Quantity Selector */}
                    <div className="flex items-center gap-3 bg-zinc-50 px-3 py-1 rounded-lg border">
                      <button 
                        onClick={() => updateQty(item.id, item.size, item.quantity - 1)}
                        className="text-xl font-bold px-2"
                      >-</button>
                      <span className="font-bold text-zinc-700">{item.quantity}</span>
                      <button 
                        onClick={() => updateQty(item.id, item.size, item.quantity + 1)}
                        className="text-xl font-bold px-2"
                      >+</button>
                    </div>
                  </div>

                  <div className="flex gap-4 mt-6">
                    <button 
                      onClick={() => toggle(item.id)}
                      className={`transition-colors ${isInWishlist(item.id) ? "text-red-500" : "text-zinc-900"}`}
                    >
                      <Heart className={`h-6 w-6 ${isInWishlist(item.id) ? "fill-current" : ""}`} />
                    </button>
                    <button 
                      onClick={() => remove(item.id, item.size)}
                      className="text-zinc-900 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-6 w-6" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-transparent">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 font-semibold text-zinc-900">
              <div className="flex justify-between">
                <span className="uppercase">{totalItems} Item{totalItems !== 1 && 's'}</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase">Delivery</span>
                <span>{delivery === 0 ? "FREE" : `$${delivery.toFixed(2)}`}</span>
              </div>
              <Separator className="bg-zinc-300 h-[2px]" />
              <div className="flex justify-between text-xl md:text-2xl font-bold">
                <span>Total</span>
                <span>${grandTotal.toFixed(2)}</span>
              </div>
            </div>

            <Button 
              disabled={isEmpty}
              className="w-full bg-[#232323] hover:bg-black text-white h-14 rounded-xl mt-8 uppercase font-bold text-sm tracking-widest disabled:opacity-50"
            >
              Checkout
            </Button>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <SimilarProducts />
      </div>
    </div>
  )
}