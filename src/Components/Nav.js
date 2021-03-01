import React, { useState } from "react";
import {Svg} from './Svg'
import {Menu} from './Menu';
import {CloseSvg} from './CloseSvg';
function Nav() {
  const [MenuClose, setMenuClose] = useState(false)
  return (
    <>
      <nav>
        <section className="logo--section">
          <img src="/images/logo.svg" alt="logo" />
        </section>

        <ul className="desktop--nav">
          <li>
            <a href="/">About</a>
          </li>
          <li>
            <a href="/">Discover</a>
          </li>
          <li>
            <a href="/">Get started</a>
          </li>
        </ul>
        <button
          id="icon--button"
          onClick={() => {
            setMenuClose(!MenuClose);
          }}
        >
          {MenuClose ? <CloseSvg /> : <Svg />}
        </button>
      </nav>
     { MenuClose&&<Menu/>}
    </>
  );
}

export { Nav };
