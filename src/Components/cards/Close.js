import React, { useContext } from 'react'
import {dataContext} from '../context'
function Close() {
    const{ setData, data} = useContext(dataContext)
    return (
      <>
        <button id='icon--button'  className='close' onClick={()=>{setData({
            ...data,
            modalState:false,
        })}}>
          <svg
            width={14}
            height={15}
            xmlns="http://www.w3.org/2000/svg"
            id="ham"
          >
            <g fill="#000" fillRule="evenodd">
              <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
              <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
            </g>
          </svg>
        </button>
      </>
    );
}

export  {Close}
