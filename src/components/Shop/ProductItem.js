import { useDispatch, useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../Store/storeReducer';

const ProductItem = (props) => {
  const { id,title, price, description } = props;

  const dispatch=useDispatch()
  
  const addItemHandler=(e,item)=>{
    e.preventDefault()
    dispatch(cartActions.addItemToCart(item))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={(e)=>addItemHandler(e,{id:id,title:title,price:price,quantity:1})}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
