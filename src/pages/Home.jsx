import React from "react";
import AboutUs from "../components/Home/AboutUs";
import Hero from "../components/Home/Hero";
import WhatWeDo from "../components/Home/WhatWeDo";
import Layout from "../components/Layout";
import Team from "../components/Team";

function Home() {
  return (
    <div>
      <Layout>
        <Hero />
        <AboutUs />
        <WhatWeDo />
        <Team />
      </Layout>
    </div>
  );
}

export default Home;
