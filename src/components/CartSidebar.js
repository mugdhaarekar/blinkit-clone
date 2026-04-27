import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, addToCart } from "../utils/redux/slices/cartSlice";
import { useNavigate } from "react-router-dom";

const CartSidebar = ({ isOpen, setIsOpen }) => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div
      className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg transform transition-transform duration-300 
      ${isOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="p-4 flex justify-between">
        <h2 className="font-bold text-lg">Cart</h2>
        <button onClick={() => setIsOpen(false)}>X</button>
      </div>

      {cartItems.map((item) => (
        <div key={item.id} className="p-3 border-b">
            <div className="grid grid-cols-3">
                <h3 className="text-sm">{item.title}</h3>
                <p className="font-bold text-green-700">₹ {item.price}</p>
                <img src={item.image} alt={item.title} className="h-20" />
            </div>


          <div className="flex items-center gap-2 mt-2">
            <button  onClick={() => dispatch(removeFromCart(item))}>-</button>
            <span>{item.quantity}</span>
            <button onClick={() => dispatch(addToCart(item))}>+</button>
          </div>
        </div>
      ))}
      <div className="p-4 border-t">
        <h3 className="font-bold mb-2">Total: ₹ {total}</h3>

        <button
          onClick={() => navigate("/checkout")}
          className="bg-black text-white w-full p-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default CartSidebar;