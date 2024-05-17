import React from "react";
import Section1 from "../../components/Home/Section1";
import Section2 from "../../components/Home/Section2";
import Section3 from "../../components/Home/Section3";

const Home = () => {
  return (
    <div className="container flex flex-row h-[100vh]">
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};

export default Home;
