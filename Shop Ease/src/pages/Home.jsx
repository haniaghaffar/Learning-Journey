import HeroSection from "../components/HeroSection";
import { Link } from "react-router-dom";
import { getProductsByCategory } from "../services/productsApi";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const categories = [
    "Home Decoration",
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Groceries",
    "Furniture",
    "Tops",
    "Womens Dresses",
    "Womens Shoes",
    "Mens Shirts",
    "Mens Shoes",
    "Mens Watches",
    "Womens Watches",
    "Womens Bags",
    "Womens Jewellery",
    "Sunglasses",
    "Motorcycle",
  ];

  return (
    <div className="px-6 py-10 max-w-7xl mx-auto space-y-12">
      <HeroSection />
      {categories.map((catg) => (
        <CategorySection key={catg} category={catg} />
      ))}
    </div>
  );
}

function CategorySection({ category }) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["products", category],
    queryFn: () => getProductsByCategory(category),
  });

  if (isLoading)
    return (
      <p className="text-gray-500 text-sm italic">
        Loading {category} products...
      </p>
    );

  if (isError)
    return (
      <p className="text-red-500 text-sm italic">
        Error loading {category} products.
      </p>
    );

  const products = data?.products || [];

  return (
    <section className="bg-white p-6 rounded-2xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 capitalize border-l-4 border-indigo-500 pl-3">
        {category}
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="bg-gray-50 p-5 rounded-2xl shadow hover:shadow-lg hover:-translate-y-1 transition flex flex-col items-center"
          >
            <div className="w-full flex justify-center items-center">
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-contain rounded-xl mb-4 transition-transform duration-300 hover:scale-105"
              />
            </div>

            <h3 className="text-base font-semibold text-gray-800 text-center line-clamp-2 h-12">
              {product.title}
            </h3>

            <p className="text-indigo-600 font-bold text-base mb-4">
              ${product.price}
            </p>

            <Link
              to={`/product/${product.id}`}
              className="px-5 py-2 bg-indigo-600 text-white text-sm rounded-full hover:bg-indigo-700 transition"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
