import React from "react";
import About from "../../components/About/About";
import Deal from "../../components/Deal/Deal";
import LatestPost from "../../components/LatestPosts/LatestPost";
import MainArticle from "../../components/MainArticle/MainArticle";
import HeaderSlider from "../../components/Slider/HeaderSlider";
import Subscribe from "../../components/Subscribe/Subscribe";
import TopProducts from "../../components/Top Products/TopProducts";

const Home = () => {
  return (
    <>
      <HeaderSlider />
      <MainArticle />
      <TopProducts />
      <Deal />
      <About />
      <Subscribe/>
      <LatestPost/>
    </>
  );
};

export default Home;
