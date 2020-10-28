import React from "react";

import Banner from "./Banner";
import Header from "./Header";
import Event from "./Event/Event";
import Footer from "./Footer/Footer";

const Home = () => {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Event></Event>
      <Footer></Footer>
    </div>
  );
};

export default Home;
