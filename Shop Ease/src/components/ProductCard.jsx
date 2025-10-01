import { Link } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl p-4 flex flex-col items-center transition transform hover:-translate-y-1">
      <div className="w-full h-56 flex justify-center items-center bg-gray-50 rounded-xl overflow-hidden mb-4">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="object-contain w-full h-full max-h-56 transition-transform duration-300 hover:scale-105"
        />
      </div>

      <h3 className="text-lg font-semibold mb-1 text-center line-clamp-1">
        {product.title}
      </h3>

      <p className="text-indigo-600 font-bold mb-3 text-lg">${product.price}</p>

      <Link
        to={`/product/${product.id}`}
        className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition"
      >
        View Details
      </Link>
    </div>
  );
}
