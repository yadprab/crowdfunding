
import React, { useState } from 'react'

import {Close} from './Close'
import {Input} from './Input'
import {Modal} from '../Modal'
import {obj} from './PriceCards';
function PriceComp() {
const [Success, setSuccess] = useState(false)
    const data = [
      {
        id: "Pledge with no reward",
        title: "Pledge with no reward",
        sub: "",

        body: `Choose to support us without a reward if you simply believe in our project. As a backer, 
                you will be signed up to receive product updates via email.`,
        isDisabled: false,
        count:'',
        pledge:''
      },
      ...obj,
    ];

    
  
    return (
      <>
        <section className={`floating--section ${Success?'success':''}`}>
          {!Success ? (
            <section className="price--comp">
              <Close />
              <h3>Back this project</h3>
              <article>
                <p>
                  Want to support us in bringing Mastercraft Bamboo Monitor
                  Riser out in the world?
                </p>
              </article>
              <article className="price--cards">
                {data.map((dt) => {
                  return (
                    <Input
                      key={dt.title}
                      inputObj={{
                        title: dt.title,
                        isDisabled: dt.isDisabled,
                        sub: dt.sub,
                        body: dt.body,
                        count:dt.count,
                        pledge:dt.pledge,
                        Success,
                        setSuccess,
                      }}
                    />
                  );
                })}
              </article>
            </section>
          ) : (
            <Modal />
          )}
        </section>
      </>
    );
}

export{ PriceComp}
