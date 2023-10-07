import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";
function App() {
  const checkCart = useSelector((state) => state.cart.cart);
  const items = useSelector((state) => state.cart.items);
  return (
    <Layout>
      {checkCart === "open" && <Cart />}
      <Products />

      {items.map((item) => (
        <>
        <div className="item">
          <h1>{item.title}</h1> <h1>{item.price}</h1>
          <h1>{item.quantity}</h1>
          </div>
        </>
      ))}
    </Layout>
  );
}

export default App;
