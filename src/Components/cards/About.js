import React, { useContext } from 'react'
import {PriceCards} from './PriceCards'
import {PriceComp} from './PriceComp'
import { dataContext } from "../context";
function About() {
const {data} = useContext(dataContext)

  
    return (
      <>
        <section className=" cards about--section">
          <h3>About this project</h3>
          <article>
            <p >
              The Mastercraft Bamboo Monitor Riser is a sturdy and stylish
              platform that elevates your screen to a more comfortable viewing
              height. Placing your monitor at eye level has the potential to
              improve your posture and make you more comfortable while at work,
              helping you stay focused on the task at hand.
            </p>
            <p >
              Featuring artisan craftsmanship, the simplicity of design creates
              extra desk space below your computer to allow notepads, pens, and
              USB sticks to be stored under the stand.
            </p>
          </article>
          <PriceCards />
         {data.modalState? <PriceComp />:null}
        </section>
      </>
    );
}

export { About
}