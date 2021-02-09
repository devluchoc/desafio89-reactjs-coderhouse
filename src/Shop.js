import React, { useContext } from "react";
import "./style.css";
import { ShopContext } from "./Context";
import { ShopingContext } from "./ShopContext";

export default function Shop() {
  const shopContext = useContext(ShopContext);
  const shopContext2 = useContext(ShopingContext);

  console.log(shopContext2);

  const { products, addToCart } = shopContext;

  return (
    <section className="shop container">
      <h1>Tienda</h1>
      {products.length === 0 && <h2>estamos cerrados!</h2>}
      {products.length !== 0 &&
        products.map((product, i) => (
          <div className="row" key={product.id + i + Math.random()}>
            <div className="col">
              <div className="card" style={{ width: "100%" }}>
                <img src={product.img} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">{product.price}</p>
                  <button
                    href="#"
                    className="btn btn-primary"
                    onClick={() => addToCart(product.id)}
                  >
                    Agregar al carrito
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
    </section>
  );
}
