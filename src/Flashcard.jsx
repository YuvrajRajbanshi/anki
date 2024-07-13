import React, { useState, useEffect, useRef } from "react";
import flashApi from "./flashApi";

export default function Flashcard() {
  const [flippedCardId, setFlippedCardId] = useState(null);
  const [heights, setHeights] = useState([]);

  const frontEl = useRef([]);
  const backEl = useRef([]);

  function setMaxHeight(index) {
    if (frontEl.current[index] && backEl.current[index]) {
      const frontHeight = frontEl.current[index].getBoundingClientRect().height;
      const backHeight = backEl.current[index].getBoundingClientRect().height;
      setHeights((prevHeights) => {
        const newHeights = [...prevHeights];
        newHeights[index] = Math.max(frontHeight, backHeight, 100);
        return newHeights;
      });
    }
  }

  useEffect(() => {
    flashApi.forEach((_, index) => {
      setMaxHeight(index);
    });
  }, []);

  useEffect(() => {
    const handleResize = () => {
      flashApi.forEach((_, index) => {
        setMaxHeight(index);
      });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    // Recalculate the height for the currently flipped card
    if (flippedCardId !== null) {
      const index = flashApi.findIndex((flash) => flash.id === flippedCardId);
      setMaxHeight(index);
    }
  }, [flippedCardId]);

  return (
    <>
      {flashApi.map((flash, index) => (
        <div
          key={flash.id}
          className={`card ${flippedCardId === flash.id ? "flip" : ""}`}
          style={{ height: heights[index] || "initial" }}
          onClick={() =>
            setFlippedCardId(flippedCardId === flash.id ? null : flash.id)
          }
        >
          <div className="front" ref={(el) => (frontEl.current[index] = el)}>
            {flash.Quest}
          </div>
          <div className="back" ref={(el) => (backEl.current[index] = el)}>
            {flash.ans}
          </div>
        </div>
      ))}
    </>
  );
}
