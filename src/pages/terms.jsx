import "../App.css";
import "../assets/styles/MainSection.css";
import Navbar from "../components/navbar/navbar.jsx";
import ProductHeader from "../components/ProductHeader/ProductHeader.jsx";
import Footer from "../components/footer/footer.jsx";
import { useState, useEffect } from "react";
import Card from "../components/Card/Card.jsx";

function Terms() {
  const [cards, setCards] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

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
            return <Card {...item} key={item.slug} title={item.nameOfService} promoText={item.promoText} titleLink={item.termsCondition} id={item.slug} />;
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Terms;
