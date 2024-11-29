import React from "react";
import { useState } from "react";

const Cards = ({ slug, category, img, nameOfService, promoText }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  function handleToggle() {
    setIsExpanded((prev) => (prev = !prev));
  }

  function ViewMore() {
    if (promoText.length > 150) {
      return (
        <span className="moreContent" onClick={() => handleToggle()}>
          {isExpanded ? `View Less` : `View More`}
        </span>
      );
    }
  }
  const dots = promoText.length > 150 ? `...` : ``;
  return (
    <div className="card" id={slug} key={slug}>
      <div className="tag">{category}</div>
      <div className="imgContainer">
        <img src={img} alt={nameOfService} />
      </div>
      <div className="cardContent">
        <p className="cardHeader">{nameOfService}</p>
        <p className="cardText">
          {isExpanded ? promoText : `${promoText.slice(0, 150) + dots}`}
        </p>
        <ViewMore />
      </div>
    </div>
  );
};
export default Cards;
