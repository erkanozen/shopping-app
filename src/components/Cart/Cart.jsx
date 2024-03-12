import "./Cart.css";
import { GrClose } from "react-icons/gr";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Cart = ({ showCart, hiddenCart }) => {
  const { items, clearProduct } = useContext(CartContext);
  console.log(showCart);

  const totalPrice = items.reduce((total, item) => {
    return total + item.price * item.amount;
  }, 0);
  if (showCart === false) return;
  return (
    <div className="cart-container" >
      <div className="cart-head">
        <h3 className="my-cart">Sepetim</h3>
        <GrClose onClick={hiddenCart} className="cart-close" />
      </div>
      {items.map((item) => (
        <CartItem key={item.id} item={item} hiddenCart={hiddenCart} />
      ))}
      {items.length === 0 ? (
        ""
      ) : (
        <div className="cart-info">
          <p className="cart-total">Toplam Değer :</p>
          <span className="cart-price">{totalPrice} TL</span>
        </div>
      )}

      <div className="cart-actions">
        <button className="order-button">Sipariş Ver</button>
        <button onClick={clearProduct} className="clear-button">
          Temizle
        </button>
      </div>
    </div>
  );
};

export default Cart;
