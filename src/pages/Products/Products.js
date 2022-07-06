import axios from "axios";
import { useEffect, useState } from "react";
import { ProductList } from "./ProductList";
import { Filters } from "./Filters";
import {
  filterByBrand,
  filterByGender,
  sortByPrice,
  filterBySize,
} from "../../utils/filterFunctions";
import { defaultFilters } from "./defaultFilters";

export const Products = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [filters, setFilters] = useState(defaultFilters);

  useEffect(() => {
    const getAllProducts = async () => {
      const products = await axios.get("data.json");
      //   console.log(products.data);
      setProducts(products.data);
    };

    getAllProducts();
  }, []);

  const filterFunctions = [
    filterByBrand,
    filterByGender,
    sortByPrice,
    filterBySize,
  ];

  //   let filteredProducts = [];

  useEffect(() => {
    const temp = filterFunctions.reduce(
      (filteredProductsUntilNow, currentFilter) =>
        currentFilter(filteredProductsUntilNow, filters),
      products
    );

    setFilteredProducts(temp);
  }, [filters, products]);

  return (
    <main className="flex-1 grid grid-cols-5 gap-2">
      <Filters filters={filters} setFilters={setFilters} />
      <ProductList products={filteredProducts} filters={filters} />
    </main>
  );
};
