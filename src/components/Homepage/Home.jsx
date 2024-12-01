import React from "react";
import Banner from "./Banner";
import Neighbourhood from "./Neighbourhood";
import ChooseUs from "./ChooseUs";
import Featured from "./Featured";
import About from "./About";
import Blog from "./Blog";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <>
      <Banner />
      <Neighbourhood />
      <ChooseUs />
      <Featured />
      <About />
      {/* <Blog /> */}
      {/* <Testimonials /> */}
    </>
  );
};

export default Home;
