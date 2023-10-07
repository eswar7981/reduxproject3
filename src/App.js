import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useSelector } from 'react-redux';
function App() {
  const checkCart=useSelector(state=>state.cart.cart)
  return (
    <Layout>
      {checkCart==='open' &&   <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
