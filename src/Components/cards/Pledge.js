import React, { useContext, useState } from "react";
import {dataContext} from '../context';
function Pledge({ name, setSuccess, value }) {

  const {data, setData} = useContext(dataContext);
     const [AmountVal, setAmountVal] = useState({
       Bambo:25,
       Black:75,
       state:false
     })
   
const handleChange = (e) => {

    const val = parseInt(e.target.value);
    const id = e.target.id;
    

  if (e.target.value===''|| undefined||null) {

    setAmountVal({
      ...AmountVal,
      state:false
    });
    return;
    
  }
  
  setAmountVal({
    ...AmountVal,
    [id]: val,
    state:true
  });




 
   switch (id) {
     case "Bambo":
     
        setData({
          ...data,
         
          amount: data.amount + AmountVal.Bambo,

        });
       break;

     case "Black":
      
       setData({
         ...data,
        
         amount: data.amount + AmountVal.Black,

       });

       break;

     default:
       break;
   }
}

  return (
    <>
      <section
        className={`pledge--section  ${
          name === "check--Pledge" ? "pledge--dis" : ""
        }`}
      >
        <h4>ENTER YOUR PLEDGE</h4>

        <div className="button--inp--section">
          <input
            type="number"
            name={name}
            id={name.slice(7, 12)}
            required
            min={value}
            value={
              name.slice(7, 12) === "Black" ? AmountVal.Black : AmountVal.Bambo
            }
            onChange={handleChange}
          />
          <button
          
            id="continue"
            className="secondary--button"
            onClick={() => {

              const n = name.slice(7, 12);
               
               
               if (n === "Pledg"){
                setSuccess(true);
                setData({
                  ...data,
                  total: data.total + 1,
                 
                 
                });


               }else if (n === "Black" && AmountVal.Black === 75) {
                   setSuccess(true);
                   setData({
                     ...data,
                     total: data.total + 1,
                     black: data.black - 1,
                     amount: data.amount + AmountVal.Black,
                   });
                 }else if (n === "Black") {
                   setSuccess(true);
                   setData({
                     ...data,
                     total: data.total + 1,
                     black: data.black - 1,
                   });
                 } else if (n === "Bambo" && AmountVal.Bambo === 25) {
                setSuccess(true);
                setData({
                  ...data,
                  total: data.total + 1,
                  bamboo: data.bamboo - 1,
                  amount: data.amount + AmountVal.Bambo,
                });
              }else if (n === "Bambo") {
                setSuccess(true);
                setData({
                  ...data,
                  total: data.total + 1,
                  bamboo: data.bamboo - 1,
                });
              }
             
            }}
          >
            continue
          </button>
        </div>
      </section>
    </>
  );
}

export { Pledge };
