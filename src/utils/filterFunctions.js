export const filterByBrand = (products, filters) => {
  if (filters.selectedBrands.length === 0) {
    return products;
  }

  return products.filter((product) =>
    filters.selectedBrands.includes(product.brand)
  );
};

export const filterByGender = (products, filters) => {
  if (filters.selectedGenders.length === 0) {
    return products;
  }
  return products.filter((product) =>
    filters.selectedGenders.includes(product.gender)
  );
};

export const sortByPrice = (products, filters) => {
  const temp = [...products];
  if (filters.sortBy === "low-to-high") {
    return temp.sort((a, b) => a.price - b.price);
  }
  return temp.sort((a, b) => b.price - a.price);
};

export const filterBySize = (products, filters) => {
  if (filters.selectedSizes.length === 0) {
    return products;
  }
  return products.filter((product) =>
    filters.selectedSizes.includes(product.size)
  );
};
