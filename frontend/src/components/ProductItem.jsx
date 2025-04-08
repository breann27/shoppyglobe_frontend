import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <div className="border rounded p-4 shadow hover:shadow-lg transition duration-200">
      <img src={product.thumbnail} alt={product.title} className="w-full h-40 object-cover rounded mb-2" />
      <h2 className="font-semibold">{product.title}</h2>
      <p className="text-sm text-gray-600">{product.description.substring(0, 60)}...</p>
      <p className="font-bold mt-2">${product.price}</p>
      <Link to={`/product/${product.id}`} className="text-blue-500 mt-2 inline-block">View Details</Link>
    </div>
  );
};

export default ProductItem;
