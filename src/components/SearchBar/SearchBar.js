export const SearchBar = () => {
  return (
    <div className="bg-white w-2/5 flex px-4 py-1 items-center">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search for products, brands and more"
        className="flex-1"
      />
      <i class="fa-solid fa-magnifying-glass text-black"></i>
    </div>
  );
};
