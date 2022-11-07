import React from "react";
import Features from "../../components/features/Features";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Mail from "../../components/mail/Mail";
import Nav from "../../components/nav/Nav";
import Propslist from "../../components/proplist/Propslist";

function Home() {
  return (
    <div>
      <Nav />
      <Header />
      <Features />
      <Propslist />
      <Mail />
      <Footer />
    </div>
  );
}

export default Home;
