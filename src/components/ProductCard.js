import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../utils/redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state) => state.cart.items);
  const cartItem = cartItems.find((i) => i.id === item.id);

  const count = cartItem?.quantity || 0;

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 p-4 flex flex-col justify-between">
      <img src={item.image} alt={item.title} className="h-40 object-contain mx-auto mb-3"  />
      <h2 className="text-sm font-medium text-gray-800 line-clamp-2 h-10">{item.title}</h2>

      <div className="grid grid-cols-2 items-center">
        <p className="text-green-600 font-semibold text-lg mt-1">₹ {item.price}</p>

        {count === 0 ? (
          <button
            onClick={() => dispatch(addToCart(item))}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 rounded-md transition"
          >
            Add
          </button>
        ) : (
          <div className="flex items-center gap-2 px-2 py-1 rounded-md">
            {count>0 && <button
              onClick={() => dispatch(removeFromCart(item))}
              className="text-red-500 font-bold"
            >
              -
            </button>}
            <span className="font-medium">{count}</span>
            <button
              onClick={() => dispatch(addToCart(item))}
              className="text-green-600 font-bold"
            >
              +
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductCard;