import React from "react";
import Headers from "../layouts/Header";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import Menu from "../layouts/Menu";
import CartShow from "../layouts/Cart/CartShow";
const Cart = () => {
  return (
    <>
      <Headers />
      <Menu />
     
      {/* Content */}
      <CartShow />
      {/* End content */}
      <Footer />
      <EndFooter />
    </>
  );
};

export default Cart;
