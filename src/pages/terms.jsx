import "../App.css";
import "../assets/styles/MainSection.css";
import Navbar from "../components/navbar/navbar.jsx";
import ProductHeader from "../components/ProductHeader/ProductHeader.jsx";
import Footer from "../components/footer/footer.jsx";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

function Terms() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const location = useLocation();
  console.log(location);

  useEffect(() => {
    const jsonData = async () => {
      try {
        const getData = await fetch("src/assets/content/content.json");
        if (!getData.ok) {
          setIsError(true);
          setIsLoading(false);
        }
        const finalData = await getData.json();
        setCards(finalData);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
    jsonData();
  }, []);
  if (isLoading) {
    return (
      <div id="loading-spinner">
        <div className="spinner"></div>
      </div>
    );
  }
  const Cards = ({ slug, nameOfService, promoText, termsCondition }) => {
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
        <div className="cardContent">
          <p className="cardHeader">
            <a
              href={termsCondition ? termsCondition : `#`}
              className="cardLink"
              target="_blank"
            >
              {nameOfService}
            </a>
          </p>
          <p className="cardText">
            {isExpanded ? promoText : `${promoText.slice(0, 150) + dots}`}
          </p>
          <ViewMore />
        </div>
      </div>
    );
  };

  return (
    <div className="allContent">
      <Navbar />
      <ProductHeader
        title="Terms And Conditions"
        text="Terms and Conditions of YD products/services"
      />
      <div className="mainSection">
        <div className="ydProducts">
          {cards.map((item) => {
            return <Cards {...item} key={item.slug} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
