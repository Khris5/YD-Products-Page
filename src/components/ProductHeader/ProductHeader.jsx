import "../../assets/styles/productHeader.css";

const ProductHeader = ({ title, text }) => {
  return (
    <div className="productsHeader">
      <div className="headerContainer">
        <h1>
          <span>{title}</span>
        </h1>
        <p>{text}</p>
      </div>
    </div>
  );
};
export default ProductHeader;
