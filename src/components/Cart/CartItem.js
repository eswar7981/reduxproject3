import { useDispatch, useSelector } from 'react-redux';
import classes from './CartItem.module.css';
import { cartActions } from '../Store/storeReducer';
const CartItem = (props) => {
  const { id,title, quantity, total, price } = props.item;
  const dispatch=useDispatch()
  
  const itemDecreaseHandler=(e,id)=>{
    e.preventDefault()
    dispatch(cartActions.decreaseItemQuantity(id))
    
  }  

  const itemIncreaseHandler=(e,id)=>{
    e.preventDefault()
    dispatch(cartActions.increaseItemQuantity(id))
  }  

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ${total.toFixed(2)}{' '}
          <span className={classes.itemprice}>(${price.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
        <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={(e)=>itemDecreaseHandler(e,id)}>-</button>
          <button onClick={(e)=>itemIncreaseHandler(e,id)}>+</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
