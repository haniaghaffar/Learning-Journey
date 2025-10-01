import ProductCard from "./ProductCard";
import { useQuery } from "@tanstack/react-query";
import { getAllProducts } from "../services/productsApi";

export default function ProductsList() {
  const { data: products, isLoading, isError } = useQuery({
    queryKey: ["products"],
    queryFn: getAllProducts,
  });

  if (isLoading) return <p className="text-center py-10">Loading products...</p>;
  if (isError) return <p className="text-center py-10 text-red-500">Failed to load products.</p>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
