import { useSelector } from "react-redux";
import { useRef, useState } from "react";
import { checkValidData } from "../utils/validate";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const nameRef = useRef(null);
  const addressRef = useRef(null);
  const phoneRef = useRef(null);
  const [error, setError] = useState("");
  const navigate = useNavigate()

  const total = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );


  const handleSubmit = (e) => {
    e.preventDefault();

    const name = nameRef.current.value;
    const address = addressRef.current.value;
    const phone = phoneRef.current.value;
    if (!name || !address || !phone) {
      setError("All fields are required");
      return;
    }
    const formError = checkValidData(name, phone);
    setError(formError);
    if (formError === null) {
      alert("Order placed successfully!")
      navigate("/")
    }
  };

  return (
    <div className="p-6 max-w-lg mx-auto bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4">Checkout</h2>

      <div className="mb-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between text-sm">
            <span>{item.title}</span>
            <span>
              {item.quantity} × ₹{item.price}
            </span>
          </div>
        ))}
        <h3 className="font-bold mt-2">Total: ₹ {total}</h3>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-3" >
        <input
          type="text"
          name="name"
          ref={nameRef}
          placeholder="Full Name"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="address"
          ref={addressRef}
          placeholder="Address"
          className="border p-2 rounded"
        />
        <input
          type="text"
          name="phone"
          ref={phoneRef}
          placeholder="Phone Number"
          className="border p-2 rounded"
        />

        {error && <p className="text-red-500">{error}</p>}

        <button className="bg-green-600 text-white p-2 rounded">
          Place Order
        </button>
      </form>
    </div>
  );
};

export default Checkout;