import React from "react";
import Header from "../components/Header";
import SpecialtyMenu from "../components/SpecialityMenu";
import TopDoctor from "../components/TopDoctor";
import Banner from "../components/Banner";

const Home = () => {
  return (
    <div>
      <Header />
      <SpecialtyMenu />
      <TopDoctor />
      <Banner />
    </div>
  );
};

export default Home;
