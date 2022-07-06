import { SearchBar } from "../SearchBar/SearchBar";

export const Navbar = () => {
  return (
    <nav className="p-2 bg-[#2874F0]  text-white">
      <div class="flex gap-8 m-auto w-4/5 items-center">
        <div class="flex flex-col hover:cursor-pointer">
          <a href="">
            <img
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt=""
              className="w-16"
            />
          </a>
          <small className="flex">
            <i>
              Explore <span className="text-[#F6E00A]">Plus</span>
            </i>
            <img
              width="20"
              src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png"
            ></img>
          </small>
        </div>
        <SearchBar />
        <button className="bg-white text-[#2874F0] font-medium  px-2 py-1 w-28 hover:cursor-pointer">
          Login
        </button>
        <a className="font-medium hover:cursor-pointer">Become a seller</a>
        <div className="font-medium hover:cursor-pointer">
          More <span className="rotate-90">{">"}</span>
        </div>
        <div className="font-medium hover:cursor-pointer">
          <i class="fa-solid fa-cart-shopping mr-2"></i>
          Cart
        </div>
      </div>
    </nav>
  );
};
