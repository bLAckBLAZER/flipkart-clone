import { defaultFilters } from "./defaultFilters";

export const Filters = ({ filters, setFilters }) => {
  const { selectedBrands, selectedGenders, sortBy, selectedSizes } = filters;

  const toggleBrand = (brand) => {
    if (selectedBrands.includes(brand)) {
      return selectedBrands.filter((item) => item !== brand);
    }
    return selectedBrands.concat(brand);
  };

  const toggleGender = (gender) => {
    if (selectedGenders.includes(gender)) {
      return selectedGenders.filter((item) => item !== gender);
    }
    return selectedGenders.concat(gender);
  };

  const toggleSize = (size) => {
    if (selectedSizes.includes(size)) {
      return selectedSizes.filter((item) => item !== size);
    }
    return selectedSizes.concat(size);
  };

  return (
    <aside className="flex flex-col">
      <button
        className="text-blue-600"
        onClick={() => setFilters(defaultFilters)}
      >
        CLEAR ALL
      </button>
      <ul>
        <li className="my-3">
          <h2 className="mb-1">Sort By</h2>
          <div>
            <input
              type="radio"
              id="low-to-high"
              value="low-to-high"
              checked={sortBy === "low-to-high"}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: e.target.value,
                })
              }
            />
            <label htmlFor="low-to-high" className="ml-1">
              Price - Low to High
            </label>
          </div>
          <div>
            <input
              type="radio"
              id="high-to-low"
              value="high-to-low"
              checked={sortBy === "high-to-low"}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  sortBy: e.target.value,
                })
              }
            />
            <label htmlFor="high-to-low" className="ml-1">
              Price - High to Low
            </label>
          </div>
        </li>
        <li className="my-3">
          <h2 className="mb-1">Brands</h2>
          <div>
            <input
              type="checkbox"
              id="adidas"
              value="adidas"
              checked={selectedBrands.includes("adidas")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedBrands: toggleBrand(e.target.value),
                })
              }
            />
            <label htmlFor="adidas" className="ml-1">
              Adidas
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="nike"
              value="nike"
              checked={selectedBrands.includes("nike")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedBrands: toggleBrand(e.target.value),
                })
              }
            />
            <label htmlFor="nike" className="ml-1">
              Nike
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="puma"
              value="puma"
              checked={selectedBrands.includes("puma")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedBrands: toggleBrand(e.target.value),
                })
              }
            />
            <label htmlFor="puma" className="ml-1">
              Puma
            </label>
          </div>
        </li>
        <li className="my-3">
          <h2 className="mb-1">Genders</h2>
          <div>
            <input
              type="checkbox"
              id="men"
              value="men"
              checked={selectedGenders.includes("men")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedGenders: toggleGender(e.target.value),
                })
              }
            />
            <label htmlFor="men" className="ml-1">
              Men
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="women"
              value="women"
              checked={selectedGenders.includes("women")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedGenders: toggleGender(e.target.value),
                })
              }
            />
            <label htmlFor="women" className="ml-1">
              Women
            </label>
          </div>
        </li>
        <li className="my-3">
          <h2 className="mb-1">Sizes</h2>
          <div>
            <input
              type="checkbox"
              id="S"
              value="S"
              checked={selectedSizes.includes("S")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedSizes: toggleSize(e.target.value),
                })
              }
            />
            <label htmlFor="S" className="ml-1">
              S
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="M"
              value="M"
              checked={selectedSizes.includes("M")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedSizes: toggleSize(e.target.value),
                })
              }
            />
            <label htmlFor="M" className="ml-1">
              M
            </label>
          </div>

          <div>
            <input
              type="checkbox"
              id="L"
              value="L"
              checked={selectedSizes.includes("L")}
              onChange={(e) =>
                setFilters({
                  ...filters,
                  selectedSizes: toggleSize(e.target.value),
                })
              }
            />
            <label htmlFor="L" className="ml-1">
              L
            </label>
          </div>
        </li>
      </ul>
    </aside>
  );
};
