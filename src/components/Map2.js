import React from "react";
const Map2 = ({ imgUrl, header, description }) => {
  return (
    <div className="product-card">
      <img className="product-image" src={imgUrl} alt="Product2" />
      <div className="product-details">
        <h5 className="product-header">{header}</h5>
        <p className="product-description">{description}</p>
      </div>
    </div>
  );
};
export default Map2;