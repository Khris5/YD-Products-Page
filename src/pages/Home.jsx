import "../App.css";
import Navbar from "../components/navbar/navbar.jsx";
import ProductHeader from "../components/ProductHeader/ProductHeader.jsx";
import MainSection from "../components/CardsAndCategories/MainSection.jsx";
import Footer from "../components/footer/footer.jsx";
function Home() {
  return (
    <>
      <div className="allContent">
        <Navbar />
        <ProductHeader
          title="Our Products"
          text="YellowDot offers digital content, robust technical platforms for Video, Gaming, SMS, USSD, IVR, OBD and Smart Messaging, Consistently providing services that bring significant value to our customers"
        />
        <MainSection />
        <Footer />
      </div>
    </>
  );
}

export default Home;
