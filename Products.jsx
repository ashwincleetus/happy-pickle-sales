import { Link } from "react-router-dom";

export default function Products() {
  const productList = [
    { 
      name: "Fish Pickle", 
      price: 250, 
      image: "https://www.spicychickenpickle.com/cdn/shop/files/Fiery_Fish_Pickle_Empress_Jar.png?v=1743523162" 
    },
    { 
      name: "Prawn Pickle", 
      price: 300, 
      image: "https://prakruthipickles.com/wp-content/uploads/2023/11/imim.jpg" 
    },
    { 
      name: "Mango Pickle", 
      price: 120, 
      image: "https://i0.wp.com/www.pepperdelight.com/wp-content/uploads/2017/04/pepper-delight-kerala-mango-pickle-1.jpg?resize=1296%2C1767" 
    },
    { 
      name: "Lemon Pickle (Narthangai)", 
      price: 150, 
      image: "https://tiimg.tistatic.com/fp/1/009/410/citron-pickle-narthangai--719.jpg" 
    }
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>

      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {productList.map((p, i) => (
          <div key={i} style={{
            border: "1px solid #ccc",
            borderRadius: "10px",
            padding: "20px",
            width: "200px",
            textAlign: "center"
          }}>
            <img 
              src={p.image} 
              alt={p.name} 
              style={{ width: "100%", borderRadius: "8px", marginBottom: "10px" }} 
            />
            <h3>{p.name}</h3>
            <p>Price: ₹{p.price}</p>

            <Link to="/order">
              <button style={{
                padding: "8px 15px",
                background: "orange",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Order Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
