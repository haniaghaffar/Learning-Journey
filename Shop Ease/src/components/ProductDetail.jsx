import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import {
  addToCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import { getProductById, getProductsByCategory } from "../services/productsApi";
import ProductCard from "../components/ProductCard";

export default function ProductDetail() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const cartItems = useSelector((state) => state.cart.items);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductById(id),
  });

  const { data: related, isLoading: loadingRelated } = useQuery({
    queryKey: ["related", product?.category],
    queryFn: () => getProductsByCategory(product?.category),
    enabled: !!product,
  });

  if (isLoading) return <p>Loading product details...</p>;
  if (isError) return <p>Error loading product.</p>;

  const relatedProducts =
    related?.products?.filter((p) => p.id !== product.id) || [];
  const inCart = cartItems.find((item) => item.id === product.id);

  return (
    <div className="p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-6 text-sm text-blue-600 hover:underline"
      >
        ← Back
      </button>

      <div className="grid md:grid-cols-2 gap-4 md:gap-6 items-start">
        <div className="flex justify-center md:justify-end">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="w-[280px] md:w-[400px] lg:w-[450px] h-auto rounded-xl shadow-md object-contain"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
          <p className="text-gray-700 leading-relaxed">{product.description}</p>

          <div className="flex flex-col gap-2 text-sm text-gray-600">
            <p>
              <strong>Brand:</strong> {product.brand || "N/A"}
            </p>
            <p>
              <strong>Category:</strong> {product.category}
            </p>
            <p>
              <strong>Rating:</strong>{" "}
              <span className="text-yellow-500">★</span> {product.rating}
            </p>
            <p>
              <strong>Stock:</strong>{" "}
              {product.stock > 0 ? (
                <span className="text-green-600">
                  In Stock ({product.stock})
                </span>
              ) : (
                <span className="text-red-500">Out of Stock</span>
              )}
            </p>
          </div>

          <p className="text-2xl font-semibold text-green-600">
            ${product.price}
          </p>

          {inCart ? (
            <div className="flex items-center gap-4 mt-2">
              <button
                onClick={() => dispatch(decrementQuantity(product.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                -
              </button>

              <span className="text-lg font-semibold">{inCart.quantity}</span>

              <button
                onClick={() => dispatch(incrementQuantity(product.id))}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
              >
                +
              </button>

              <button
                onClick={() => navigate("/cart")}
                className="ml-4 px-4 py-1 bg-green-600 text-white rounded hover:bg-green-700 transition"
              >
                Go to Cart
              </button>
            </div>
          ) : (
            <button
              onClick={() => dispatch(addToCart({ ...product, quantity: 1 }))}
              className="mt-2 bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Add to Cart
            </button>
          )}
        </div>
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4 text-gray-900">
        Related Products
      </h2>
      {loadingRelated ? (
        <p>Loading related products...</p>
      ) : (
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
          {relatedProducts.slice(0, 8).map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
        </div>
      )}
    </div>
  );
}
