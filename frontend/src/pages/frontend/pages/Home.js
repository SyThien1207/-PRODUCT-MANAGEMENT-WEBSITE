import React from "react";
import "../public/bootstrap/css/bootstrap.min.css";
import "../public/fontawesome/css/all.min.css";
import "../public/css/frontend.css";
import Headers from "../layouts/Header";
import Menu from "../layouts/Menu";
import Slider from "../layouts/Slider";

import Post from "../layouts/Post";
import Footer from "../layouts/Footer";
import EndFooter from "../layouts/EndFooter";
import ProductNew from "../layouts/ProductNew";
import ProductSale from "../layouts/ProductSale";


const Home = () => {
  return (
    <div style={{ flexDirection: "column" }}>
      <Headers />
      <Menu />
      <Slider />
      <ProductNew />
      <ProductSale/>
      <Post />
      <Footer />
      <EndFooter/>
    </div>
  );
};

export default Home;
