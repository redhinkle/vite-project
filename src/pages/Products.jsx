import React from "react";
import styles from "../components/styles.css";
import products from "../data/products.json";
const Products = () => {
  return (
    <>
      {/* {console.log(
        products[1].options.map((o) => {
          return o;
        })
      )} */}
      <p id="product">Products By Us!</p>
      <div id="productList">
        {products.map((product) => {
          return (
            <div className="products" key={product.sku}>
              <img src={product.img} width="200px" />
              <p style={{ fontSize: 1.25 + "em" }}>{product.title}</p>
              <p style={{ fontSize: 0.95 + "em", textAlign: "center" }}>
                {product.desc}
              </p>
              {product.options ? (
                <ul>
                  {product.options.map((o) => {
                    return <li key={o}>{o}</li>;
                  })}
                </ul>
              ) : (
                ""
              )}

              <p>${product.price}</p>
              <p>Product Number: {product.sku}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Products;
