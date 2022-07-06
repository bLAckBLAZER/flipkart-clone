import { ProductCard } from "../../components";

export const ProductList = ({ products }) => {
  return (
    <div className="col-span-4 grid grid-cols-4 bg-white">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
      {products.length === 0 && (
        <h1 className="text-red-600 text-xl font-semibold m-auto col-span-4">
          No products to show
        </h1>
      )}
    </div>
  );
};
