import { LiaShoppingCartSolid } from "react-icons/lia";
import "./Header.css";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const Header = ({ openCart }) => {
  const cartctx = useContext(CartContext)
  return (
    <header className="header-container">
      <h2 className="header-title">Kurslar</h2>
      <div className="header-cart-container" onClick={openCart}>
        <h3 className="header-cart-title">Sepet</h3>
        <LiaShoppingCartSolid className="cart-icon" />
        <span className="header-amount">{cartctx.items.length}</span>
      </div>
    </header>
  );
};

export default Header;
