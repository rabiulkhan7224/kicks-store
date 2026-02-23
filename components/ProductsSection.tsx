import ProductCard from "./productCard";
import { Button } from "./ui/button";


const ProductsSection = () => {

    const products = [
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
    ]
    return (
         <section className="container mx-auto max-w-7xl px-4 py-8 md:py-16">
      <div className="flex justify-between items-end mb-10">
        <h2 className="text-secondary text-2xl md:text-7xl font-semibold capitalize md:uppercase leading-[0.9]">
          Don&apos;t Miss Out <br /> New Drops
        </h2>
        <Button
          size="sm"
          className="bg-primary hover:bg-[#3b54b5] text-white font-medium uppercase px-6 py-5 rounded-lg text-sm shadow-lg transition-all active:scale-95"
        >
          Shop New Drops
        </Button>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
        {products?.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}

export default ProductsSection;