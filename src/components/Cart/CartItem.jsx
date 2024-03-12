import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";
import "./CartItem.css";
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";
import { IoIosClose } from "react-icons/io";

const CartItem = ({ item }) => {
  const { image, name, price, amount } = item;
  const { removeProduct , increase ,decrease } = useContext(CartContext);

  return (
    <div className="cartitem-container">
      <img className="cartitem-image" src={image} alt="#" />
      <div className="cartitem-info-container">
        <h3 className="cartitem-name">{name}</h3>
        <div className="cartitem-head">
          <p className="cartitem-price">₺ {price} </p>
          <CiCircleMinus onClick={()=> decrease(item.id , item.price)} className="cartitem-minus" />
          <span className="cartitem-amount">{amount}</span>
          <CiCirclePlus onClick={()=> increase(item.id, 1 , item.price)} className="cartitem-plus" />
          <IoIosClose
            onClick={() => removeProduct(item)}
            className="cartitem-close"
          />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
