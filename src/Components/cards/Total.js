import React from 'react'

function Total({value}) {
    return (
      <>
        <article>
          {value === "" ? null : (
            <h5>
              {value} <span className="text_small">left</span>
            </h5>
          )}
        </article>
      </>
    );
}

export {Total}
