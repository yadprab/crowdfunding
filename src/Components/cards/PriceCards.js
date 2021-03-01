import { Button } from "Components/Button";
import React, { useContext } from "react";
import { obj } from "./obj";
import { Total } from "./Total";
import {dataContext} from '../context';

function PriceCards() {
  const [obj1, obj2, obj3] = obj;

  const { data } = useContext(dataContext);
  obj1["count"] = data.bamboo;
  obj2["count"] = data.black;
  obj3["count"] = data.disabled;
  obj1["pledge"] = data.pledgeBam;
  obj2["pledge"] = data.pledgeBla;
  obj3["pledge"] = data.pledgeDis;

  return (
    <>
      <article className="price--cards">
        {obj.map((dt) => {
          return (
            <article
              className={`price--comp ${
                dt.isDisabled || dt.count === 0 ? "out--of--stock" : ""
              }`}
              key={dt.id}
            >
              <h4>{dt.title}</h4>
              <p className="text_small pledge">{dt.sub}</p>
              <p >{dt.body}</p>
              <Total value={dt.count} />
              <Button
                buttonObj={{
                  value: `${
                    dt.isDisabled || dt.count === 0
                      ? "out of stock"
                      : "select reward"
                  }`,
                  isDisabled: dt.count===0?true:false,
                }}
              />
            </article>
          );
        })}
      </article>
    </>
  );
}

export { PriceCards, obj };

