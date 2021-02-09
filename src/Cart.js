import React, { useEffect, useContext } from "react";
import "./style.css";
import { ShopContext } from "./Context";

export default function Cart() {
  const shopContext = useContext(ShopContext);

  const { cart, deleteFromCart, deleteAll } = shopContext;

  return (
    <section className="cart container">
      <h2>Carrito</h2>
      {cart.length === 0 && <h3>No has comprado nada master!!</h3>}
      {cart.length !== 0 &&
        cart.map((item, i) => (
          <div className="row" key={item.id + i + Math.random()}>
            <div className="col">
              <div
                className="card"
                style={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "row"
                }}
              >
                <img
                  src={item.img}
                  className="card-img-top"
                  style={{ width: "20%" }}
                />
                <div
                  className="card-body card-body-cart"
                  style={{
                    display: "flex",
                    justifyContent: "space-between"
                  }}
                >
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">{item?.quantity}</p>
                  <p className="card-text" style={{ color: "green", marginLeft: ".6rem"}}>${item.price}</p>
                  <button
                    href="#"
                    className="btn btn-danger"
                    onClick={() => deleteFromCart(item.id)}
                  >
                    X
                  </button>
                </div>
              </div>

            </div>

          </div>

        ))}
      <button 
        className="btn btn-danger"
        onClick={() => deleteAll()}
      >Borrar todo</button>
    </section>
  );
}
