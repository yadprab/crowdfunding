import React, { useContext } from "react";
import {dataContext}  from './context'
function Button({ buttonObj }) {
  const { value, isDisabled } = buttonObj;
  const {setData, data} = useContext(dataContext)

  return (
    <>
      <button
      onClick={()=>{setData({
         ...data,
        modalState:true,
       
      })}}
        type="button"
        className={`secondary--button ${isDisabled ? "disable" : ""}`}
        disabled={isDisabled}
      >
        {value}
      </button>
    </>
  );
}

export { Button };
