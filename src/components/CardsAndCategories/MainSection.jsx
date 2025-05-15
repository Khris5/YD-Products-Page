import { useEffect, useState } from "react";
import "../../assets/styles/MainSection.css";
import Card from "../Card/Card.jsx";

const MainSection = () => {
  const categoryList = [
    { name: `All`, dataCategory: `all` },
    { name: `Game`, dataCategory: `game` },
    { name: `Lottery`, dataCategory: `lottery` },
    { name: `Entertainment`, dataCategory: `entertainment` },
    { name: `Lifestyle`, dataCategory: `lifestyle` },
    { name: `Shopping`, dataCategory: `shopping` },
    { name: `Health`, dataCategory: `health` },
  ];
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const [cards, setCards] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

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

  const filteredData =
    activeCategory === `All`
      ? cards
      : cards.filter((item) => item.category === activeCategory);

  return (
    <div className="mainSection">
      <div className="categoriesContainer">
        <h2>Categories</h2>
        <ul className="categoryList">
          {categoryList.map((category) => {
            return (
              <li
                className={`categories ${
                  activeCategory === category.name ? `activeCategory` : ""
                }`}
                key={category.dataCategory}
                onClick={() => {
                  setActiveCategory(category.name);
                }}
              >
                {category.name}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="ydProducts">
        {filteredData.map((item) => {
          return <Card {...item} key={item.slug} categoryTag={item.category} imageSrc={item.img} title={item.nameOfService} promoText={item.promoText} id={item.slug} />;
        })}
      </div>
    </div>
  );
};
export default MainSection;
