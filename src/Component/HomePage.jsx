import React, { useEffect } from "react";
import CarouselComponent from "./CarouselComponent";
import CallToActions from "./CallToAction";
import Banner from "./Banner";
import Banners from "./Banners";
import ProductVideos from "./ProductVideos";
import ProductCard from "./ProductCards";
import Map from "./Map";
import Hero from "./Hero";

const HomePage = () => {
  useEffect(() => {
    // Scroll to the top of the page when the component is mounted or when ProductId changes
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <CarouselComponent />
      <Hero />
      <ProductCard />
      <Banner />
      <Banners />
      <ProductVideos />
      <CallToActions />
      <Map />
    </>
  );
};

export default HomePage;
