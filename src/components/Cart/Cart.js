import Card from "../UI/Card";
import classes from "./Cart.module.css";
import CartItem from "./CartItem";
import { UseSelector, useSelector } from "react-redux/es/hooks/useSelector";
const Cart = (props) => {
  const items = useSelector((state) => state.cart.items);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {items.map((item) => (
          <>
            <CartItem
              item={{ id:item.id,title:item.title, quantity:item.quantity, total: 18, price:item.price}}
            />
          </>
        ))}
      </ul>
    </Card>
  );
};

export default Cart;
