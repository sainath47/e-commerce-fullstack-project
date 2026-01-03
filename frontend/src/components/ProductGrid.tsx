import { motion } from "framer-motion";
import { Star, Heart } from "lucide-react";
// import { useEffect, useState } from "react";

const products = [
  {
    id: 1,
    name: "Premium Leather Bag",
    price: "$299",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop",
    category: "Leather Goods"
  },
  {
    id: 2,
    name: "Luxury Gold Watch",
    price: "$1,299",
    rating: 5.0,
    image: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?w=400&h=400&fit=crop",
    category: "Timepieces"
  },
  {
    id: 3,
    name: "High-End Headphones",
    price: "$599",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop",
    category: "Tech"
  },
  {
    id: 4,
    name: "Designer Sunglasses",
    price: "$399",
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400&h=400&fit=crop",
    category: "Accessories"
  }
]

// Define the nested structures first
// interface Dimensions {
//   width: number;
//   height: number;
//   depth: number;
// }

// interface Review {
//   rating: number;
//   comment: string;
//   date: string;
//   reviewerName: string;
// }

// export interface Product {
//   id: number;
//   title: string;
//   description: string;
//   category: string;
//   price: number;
//   discountPercentage: number;
//   rating: number;
//   stock: number;
//   tags: string[];
//   brand: string;
//   sku: string;
//   weight: number;
//   dimensions: Dimensions;
//   warrantyInformation: string;
//   shippingInformation: string;
//   availabilityStatus: string;
//   reviews: Review[];
//   returnPolicy: string;
//   minimumOrderQuantity: number;
//   images: string[]; // Array of image URLs
//   thumbnail: string;
// }





export default function ProductGrid() {
// const [products, setProducts] = useState<Product[]>([]);

// useEffect(() => {
//   fetch("http://localhost:8000/")
//     .then((res) => res.json())
//     .then((data)=>{
//       console.log("data", data.products.products)
//       setProducts(data.products.products)
//     });
// }, []);

  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-4">
            Featured Collection
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Handpicked items that represent the pinnacle of quality and design
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden rounded-2xl bg-gray-800 border border-gray-700 hover:border-yellow-400/50 transition-all duration-300">
                <div className="aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <button className="absolute top-4 right-4 p-2 bg-black/50 rounded-full text-white hover:text-red-400 transition-colors">
                  <Heart className="h-4 w-4" />
                </button>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs text-yellow-400 uppercase tracking-wide">
                      {product.category}
                    </span>
                    <div className="flex items-center gap-1">
                      <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-gray-400">
                        {product.rating}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-lg font-medium text-white mb-2 group-hover:text-yellow-400 transition-colors">
                    {product.name}
                  </h3>

                  <p className="text-xl font-bold text-white">
                    {product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <button className="bg-yellow-400 text-black hover:bg-yellow-300 transition-colors rounded-full px-8 py-4 text-base font-medium">
            View All Products
          </button>
        </motion.div>
      </div>
    </section>
  );
}
