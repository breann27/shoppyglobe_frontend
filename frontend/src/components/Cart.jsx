import { useSelector, useDispatch } from 'react-redux';
import {
  removeFromCart,
  increaseQuantity,
  decreaseQuantity,
  clearCart,
} from '../redux/cartSlice';

const Cart = () => {
  const { cartItems } = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartItems.length === 0) {
    return <div className="p-4 text-center text-gray-500">Your cart is empty.</div>;
  }

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Your Cart</h2>

      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between border-b py-4">
          <div className="flex items-center gap-4">
            <img src={item.thumbnail} alt={item.title} className="w-24 h-24 object-cover rounded" />
            <div>
              <h3 className="font-semibold">{item.title}</h3>
              <p>${item.price} x {item.quantity}</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button onClick={() => dispatch(decreaseQuantity(item.id))} className="px-2 py-1 border rounded">-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(increaseQuantity(item.id))} className="px-2 py-1 border rounded">+</button>
            <button onClick={() => dispatch(removeFromCart(item.id))} className="ml-4 px-3 py-1 bg-red-500 text-white rounded">
              Remove
            </button>
          </div>
        </div>
      ))}

      <div className="mt-6 text-right">
        <p className="text-xl font-bold">Total: ${totalAmount.toFixed(2)}</p>
        <button
          onClick={() => dispatch(clearCart())}
          className="mt-2 px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-900"
        >
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
