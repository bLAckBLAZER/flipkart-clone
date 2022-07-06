import { ProductCard } from "../../components";

export const ProductList = ({ products }) => {
  return (
    <div className="col-span-4 grid grid-cols-3">
      {products.map((product) => (
        <ProductCard product={product} />
      ))}
    </div>
  );
};
