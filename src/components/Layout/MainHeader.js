import CartButton from '../Cart/CartButton';
import classes from './MainHeader.module.css';
import { useDispatch,useSelector } from 'react-redux';
import { cartActions } from '../Store/storeReducer';
const MainHeader = (props) => {
  const cartCheck=useSelector(state=>state.cart.cart)
  return (
    <header className={classes.header}>
      <h1>ReduxCart</h1>
      <nav>
        <ul>
          <li>
          <CartButton />
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
