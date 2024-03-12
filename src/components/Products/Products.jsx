import ProductItem from "./ProductItem";
import ProductData from "../../ProductData";
import "./Products.css";

const Products = () => {
  return (
    <div className="products">
      {ProductData.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Products;
