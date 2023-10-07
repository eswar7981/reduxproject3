import { useDispatch,useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { cartActions } from '../Store/storeReducer';

const CartButton = (props) => {

  const cartCheck=useSelector(state=>state.cart.cart)
  const dispatch=useDispatch()
   
  const cartCloseHandler=(e)=>{
    e.preventDefault()
    dispatch(cartActions.closeCart())
  }

  const cartOpenHandler=(e)=>{
    e.preventDefault()
    dispatch(cartActions.openCart())
  }

  return (<>
    {cartCheck==='open' && <><button onClick={cartCloseHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button></>
  }
  {cartCheck==='close' && <><button onClick={cartOpenHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>1</span>
    </button></>
  }
  
  
  </>
  );
};

export default CartButton;
