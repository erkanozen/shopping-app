import { useState } from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Cart from "./components/Cart/Cart";
import "./App.css";
import Backdrop from "./components/Backdrop/Backdrop";


function App() {
  const [showCart, setShowCart] = useState(false);

  const openCart = () => {
    setShowCart(true);
  };

  const hiddenCart = () => {
    setShowCart(false);
  };

  return (
    <div className="App">
      {showCart && <Backdrop hiddenCart={hiddenCart}/>}
      <Cart hiddenCart = {hiddenCart} showCart={showCart} />
      <Header openCart= {openCart} />
      <Hero />
      <h2>KURSLAR</h2>
      <Products />
    </div>
  );
}

export default App;
