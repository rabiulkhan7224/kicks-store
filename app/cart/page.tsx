import { Trash2, Heart, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { SimilarProducts } from "@/components/SimilarProducts"

const CART_ITEM = {
  name: "DROPSET TRAINER SHOES",
  category: "Men's Road Running Shoes",
  color: "Enamel Blue/ University White",
  price: 130.00,
  size: 10,
  quantity: 1,
  image: "/products1.png"
}

export default function CartPage() {
  const delivery = 6.99
  const total = CART_ITEM.price + delivery

  return (
    <div className="max-w-7xl mx-auto p-4 md:p-10 bg-[#f3f3f3] min-h-screen">
      {/* Promo Header */}
      <div className="mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-2">Saving to celebrate</h1>
        <p className="text-zinc-600 text-sm md:text-base">
          Enjoy up to 60% off thousands of styles during the End of Year sale - while supplies last. No code needed.
        </p>
        <div className="mt-2 text-sm font-bold">
          <a href="#" className="underline">Join us</a> or <a href="#" className="underline">Sign-in</a>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* LEFT: Your Bag */}
        <div className="lg:col-span-8 bg-white rounded-[32px] p-6 md:p-8">
          <div className="mb-6">
            <h2 className="text-2xl md:text-3xl font-bold">Your Bag</h2>
            <p className="text-zinc-500 text-sm mt-1">Items in your bag not reserved- check out now to make them yours.</p>
          </div>

          <div className="flex flex-col md:flex-row gap-6 py-6 border-t border-zinc-100">
            {/* Product Image */}
            <div className="w-full md:w-48 aspect-square bg-[#eceef0] rounded-2xl overflow-hidden p-4">
              <img src={CART_ITEM.image} alt={CART_ITEM.name} className="w-full h-full object-contain mix-blend-multiply" />
            </div>

            {/* Product Details */}
            <div className="flex-1 flex flex-col justify-between">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold text-zinc-900">{CART_ITEM.name}</h3>
                  <p className="text-zinc-500 font-medium">{CART_ITEM.category}</p>
                  <p className="text-zinc-500 font-medium">{CART_ITEM.color}</p>
                </div>
                <p className="text-xl font-bold text-[#4f6ef7]">${CART_ITEM.price.toFixed(2)}</p>
              </div>

              <div className="flex flex-wrap gap-6 mt-4">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-500">Size {CART_ITEM.size}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-zinc-500">Quantity {CART_ITEM.quantity}</span>
                  <ChevronDown className="h-4 w-4" />
                </div>
              </div>

              <div className="flex gap-4 mt-6">
                <button className="text-zinc-900 hover:text-zinc-600"><Heart className="h-6 w-6" /></button>
                <button className="text-zinc-900 hover:text-zinc-600"><Trash2 className="h-6 w-6" /></button>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Order Summary */}
        <div className="lg:col-span-4 space-y-6">
          <div className="bg-transparent">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">Order Summary</h2>
            
            <div className="space-y-4 font-semibold text-zinc-900">
              <div className="flex justify-between">
                <span className="uppercase">1 Item</span>
                <span>${CART_ITEM.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase">Delivery</span>
                <span>${delivery.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="uppercase">Sales Tax</span>
                <span>-</span>
              </div>
              <Separator className="bg-zinc-300 h-[2px]" />
              <div className="flex justify-between text-xl md:text-2xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>

            <Button className="w-full bg-[#232323] hover:bg-black text-white h-14 rounded-xl mt-8 uppercase font-bold text-sm tracking-widest">
              Checkout
            </Button>

            <button className="w-full text-left underline font-bold mt-6 text-zinc-900">
              Use a promo code
            </button>
          </div>
        </div>
      </div>
    <SimilarProducts />
    </div>
  )
}