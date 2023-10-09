import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../Store/storeReducer';
const MainHeader = (props) => {
  const cartCheck=useSelector(state=>state.cart.cart)
  const fetchPOST=useSelector(state=>state.cart.storing)
  const fail=useSelector(state=>state.cart.failed)
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
          {!fetchPOST ? <CartButton /> :<><div><h1>Storing Data</h1></div></>}
          {fail && <h1>Failed to store</h1>}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
