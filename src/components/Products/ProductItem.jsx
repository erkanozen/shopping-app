import "./ProductItem.css";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
import { useContext } from "react";
import { CartContext } from "../../context/CartProvider";

const ProductItem = ({ product }) => {
  const { addProduct, items } = useContext(CartContext);
  const findItems = items.find((item) => product.id === item.id);
  return (
    <div className="productItem-container">
      <img className="product-image" src={product.image} alt="" />
      <div className="product-info-container">
        <h3 className="product-name">{product.name}</h3>
        <p className="product-info">{product.info}</p>
      </div>
      <div className="product-price-head">
        <span className="product-price">{product.price} TL</span>
        <div className="product-icons">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStarHalfAlt />
        </div>
      </div>
      <button
        className={`product-button ${findItems && "active"}`}
        disabled={findItems}
        onClick={() => addProduct(product)}
      >
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductItem;
