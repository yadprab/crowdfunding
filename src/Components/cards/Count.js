import React, { useContext } from 'react'
import CountUp from 'react-countup'
import {dataContext} from '../context'
function Count() {
  const {data} = useContext(dataContext)
const {amount, total}= data
    return (
      <>
        <article className=" cards count--section">
          <article className="amount">
            <h2>
              <CountUp end={amount} prefix="$" />
            </h2>
            <p className="text_small">of $100,000 backed</p>
          </article>
          <article className="total">
            <h2>
              <CountUp end={total} />
            </h2>
            <p className="text_small">total backers</p>
          </article>
          <article className="amount">
            <h2>
            
              <CountUp end={56} />
            </h2>
            <p className="text_small">days left</p>
          </article>

          <article className="progress--bar">
            <div className="bar"></div>
          </article>
        </article>
      </>
    );
}

export {Count}
