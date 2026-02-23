import { Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const REVIEWS = [
  {
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    author: { name: "User 1", image: "/avatar1.png" },
    productImage: "/review-shoe-1.png",
  },
  {
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    author: { name: "User 2", image: "/avatar2.png" },
    productImage: "/review-shoe-2.png",
  },
  {
    title: "Good Quality",
    comment: "I highly recommend shopping from kicks",
    rating: 5.0,
    author: { name: "User 3", image: "/avatar3.png" },
    productImage: "/review-shoe-3.png",
  },
]

export function ReviewsSection() {
  return (
    <section className="w-full  py-12 px-6 md:px-10">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl md:text-6xl font-bold text-zinc-900 uppercase tracking-tighter">
          Reviews
        </h2>
        <Button 
          className="bg-[#4f6ef7] hover:bg-[#3d56d4] text-white font-semibold px-6 py-2 rounded-lg text-xs md:text-sm uppercase tracking-wider"
        >
          See All
        </Button>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {REVIEWS.map((review, index) => (
          <Card key={index} className="border-none overflow-hidden rounded-[32px] bg-white pb-0">
            {/* Review Content Header */}
            <CardHeader className="p-6 pb-4">
              <div className="flex justify-between items-start">
                <div className="space-y-1">
                  <h3 className="text-xl font-bold text-zinc-900">{review.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed max-w-[200px]">
                    {review.comment}
                  </p>
                </div>
                <Avatar className="h-12 w-12 ring-2 ring-white">
                  <AvatarImage src={review.author.image} />
                  <AvatarFallback>{review.author.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              
              {/* Star Rating */}
              <div className="flex items-center gap-1 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-orange-400 text-orange-400" />
                ))}
                <span className="ml-2 text-sm font-bold text-zinc-900">{review.rating.toFixed(1)}</span>
              </div>
            </CardHeader>

            {/* Product/Lifestyle Image */}
            <div className="relative h-[300px] w-full mt-2">
              <img
                src={review.productImage}
                alt="Product review"
                className="absolute inset-0 w-full h-full object-cover"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  )
}