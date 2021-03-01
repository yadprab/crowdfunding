import React, { useState } from "react";
import { About } from "./cards/About";
import { Count } from "./cards/Count";
import { Intro } from "./cards/Intro";
import { Nav } from './Nav';
import {dataContext} from './context'
function Header() {
  const [data, setData] = useState({
    modalState: false,
    amount: 89914,
    total: 5000,
    bamboo: 101,
    black:75,
    disabled:0,
    pledgeBam:25,
    pledgeBla:75,
    pledgeDis:200,

  });
  return (
    <>
      <header>
        <Nav />

        <section className="card--section">
          <dataContext.Provider value={{data, setData}}>
            <Intro />
            <Count />
            <About />
          </dataContext.Provider>
        </section>
      </header>
    </>
  );
}

export { Header };
