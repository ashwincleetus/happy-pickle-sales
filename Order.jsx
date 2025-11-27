import axios from "axios";
import { useState } from "react";

export default function Order() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    address: "",
    item: "",
    quantity: 1
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const price = form.quantity * 200; // Example price

    await axios.post("http://localhost:5000/api/orders/add", {
      ...form,
      price
    });

    alert("Order Placed Successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Place Order</h2>

      <input placeholder="Name"
        onChange={(e) => setForm({...form, name: e.target.value})}
      />
      
      <input placeholder="Phone"
        onChange={(e) => setForm({...form, phone: e.target.value})}
      />

      <input placeholder="Address"
        onChange={(e) => setForm({...form, address: e.target.value})}
      />

      <input placeholder="Pickle Name"
        onChange={(e) => setForm({...form, item: e.target.value})}
      />

      <input type="number" placeholder="Quantity"
        onChange={(e) => setForm({...form, quantity: e.target.value})}
      />

      <button>Submit Order</button>
    </form>
  );
}