export const ProductCard = ({ product }) => {
  const { id, title, price, image, rating, size, brand, idealFor } = product;

  return (
    <div className="flex flex-col border-2 border-black-600  max-w-175 p-2">
      <figure className="w-175 h-96 m-auto">
        <img src={image} className="object-contain h-full"></img>
      </figure>

      <h1>{brand}</h1>
      <h2>{title}</h2>
      <strong>{`₹${price}`}</strong>
      <small>{size}</small>
      <small>{idealFor}</small>
    </div>
  );
};
