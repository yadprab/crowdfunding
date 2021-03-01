import { Button } from 'Components/Button'
import React, { useState } from 'react'

function Intro() {
  const [Bookmark, setBookmark] = useState(false)

    return (
      <>
        <article className="cards intro--section">
          <img src="/images/logo-mastercraft.svg" alt="" />
          <h1> Mastercraft Bamboo Monitor Riser</h1>
          <p>
            A beautiful & handcrafted monitor stand to reduce neck and eye
            strain.
          </p>

          <article className="button--section">
            <Button
              buttonObj={{
                value: "back this project",
                isDisabled: false,
              }}
            />
            <div className="bookmark--section">
              <button
                className="bookmark"
                onClick={() => {
                  setBookmark(!Bookmark);
                }}
              >
                <svg
                  width="56"
                  height="56"
                  xmlns="http://www.w3.org/2000/svg"
                  id="ham"
                >
                  <g fill="none" fillRule="evenodd">
                    <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                    <path
                      fill={Bookmark ? "#4bb543" : "#B1B1B1"}
                      d="M23 19v18l5-5.058L33 37V19z"
                    />
                  </g>
                </svg>
              </button>

              <button
                className="secondary--button bookmark--button"
                onClick={() => {
                  setBookmark(!Bookmark);
                }}
              >
                {Bookmark ? "Bookmarked" : "Bookmark"}
              </button>
            </div>
          </article>
        </article>
      </>
    );
}

export  {Intro}
