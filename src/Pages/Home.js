import React from "react";
import "../Css/Home.css";
import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import Categories from "../Components/Categories";
import Speekeasy from "../Components/Speekeasy";
import GetinTouch from "../Components/GetinTouch";
import Footer from "../Components/Footer";
import Therapycategories from "../Components/Therapycategories";
import Subscribe from "../Components/Subscribe";
import TopUpButton from "../Components/TopUpButton.js"
const Home = () => {
  return (
    <div className="home-main">
      <Navbar />
      <TopUpButton />
      <Header />
      <Categories />
      <Therapycategories />
      <Subscribe />
      {/* <Speekeasy /> */}
      <GetinTouch />
      <Footer />
    </div>
  );
};

export default Home;
