import React from "react";
import Footer from "../../components/Footer";
import ComoDoar from "./ComoDoar";
import Home from "./Home";
import NossoObjetivo from "./NossoObjetivo";
import Problema from "./Problema";
import Sobre from "./Sobre";
import VoceSabia from "./VoceSabia";

function Index() {
  return (
    <div>
      <Home />
      <Sobre />
      <Problema />
      <VoceSabia />
      <NossoObjetivo />
      <ComoDoar />
      <Footer />
    </div>
  );
}

export default Index;
