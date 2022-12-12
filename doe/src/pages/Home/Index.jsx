import React from "react";
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
    </div>
  );
}

export default Index;
