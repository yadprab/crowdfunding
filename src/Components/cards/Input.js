
import React, { useState } from "react";
import { Pledge } from "./Pledge";
import {Total} from './Total';
function Input({inputObj}) {
    const {title, isDisabled,sub, body, setSuccess,count, pledge}=inputObj


  const [Check, setCheck] = useState({
    state:false,
    id:'',
  });

  return (
    <>
      <article
        className={`price--compArc ${isDisabled || count===0 ? "out--of--stock" : ""} ${
          Check.state ? "bod" : ""
        }`}
      >
        <article className='box--total'>
          <article className="box">
            <label className="label">
              <input
                type="radio"
                name="check"
                id={`check--${title.slice(0, 6)}`}
                disabled={isDisabled || count===0 ?true:false}
                onChange={(e) => {
                  if (e.target.value === "on") {
                    setCheck({
                      id: e.target.id,
                      state: true,
                    });
                  }
                }}
              />
              <div
                className={`check--mark ${Check.state ? "check" : ""} `}
              ></div>
            </label>

            <h3>
              {title}
              <span className="text_small pledge">{sub}</span>
            </h3>
          </article>
          <Total value={count}/>
        </article>
        <p>{body}</p>

        {Check.state && <Pledge name={Check.id} setSuccess={setSuccess}  value={pledge}/>}
      </article>
    </>
  );
}

export  {Input};
