import React from "react";
import Header from "./Header";
import Carousel from "./Carousel";
import OurStory from "./OurStory";
import OurBlog from "./OurBlog";
import Footer from "./Footer";
import Benefit from "./Benefit";

const AboutUs = () => {
  return (
    <div
      style={{
        background: "#EEE",
      }}
    >
      <Header />
      <Carousel />
      <OurStory />
      <OurBlog />
      <Benefit />
      <Footer />
    </div>
  );
};

export default AboutUs;
