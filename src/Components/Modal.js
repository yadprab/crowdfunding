import React, { useContext } from 'react'
import { dataContext } from "./context";
import {useWindowSize} from 'react-use';
import Confetti from 'react-confetti'

function Modal() {
 const { setData, data } = useContext(dataContext);
 const {width, height} = useWindowSize();
 console.log(data);
    return (
      <>
        <section className="modal">
          <svg
            width={64}
            height={64}
            xmlns="http://www.w3.org/2000/svg"
            id="ham"
          >
            <g fill="none" fillRule="evenodd">
              <circle fill="#3CB3AB" cx={32} cy={32} r={32} />
              <path
                stroke="#FFF"
                strokeWidth={5}
                d="M20 31.86L28.093 40 44 24"
              />
            </g>
          </svg>

          <h3> Thanks for your support!</h3>
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>

          <button
            className="secondary--button"
            onClick={() => {
              setTimeout(() => {
                setData({
                  ...data,
                  modalState: false,
                });
              }, 500);
            }}
          >
            
            Got it!
          </button>
        </section>
        <Confetti width={width} height={height}  style={{zIndex:-1}}/>
      </>
    );
}

export { Modal}
