export default function Home() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Welcome to Our Pickle Store</h1>
      <p>Fresh, homemade, authentic pickles delivered to your doorstep!</p>

      <a href="/products">
        <button style={{
          padding: "10px 20px",
          marginTop: "20px",
          background: "green",
          color: "#ffffffff",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer"
        }}>
          View Products
        </button>
      </a>
    </div>
  );
}