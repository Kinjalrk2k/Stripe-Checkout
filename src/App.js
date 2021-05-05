import React, { useState } from "react";
import StripeCheckout from "react-stripe-checkout";
import "./App.css";

function App() {
  const [product, setProduct] = useState({
    name: "React from FB",
    price: 12.5,
    productBy: "facebook",
  });

  const authToken =
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwOGJjOGNlOTAxNjhkMTAxYTIzODMxYSIsImVtYWlsIjoia2luamFscmsyMkBnbWFpbC5jb20iLCJ1c2VyVHlwZSI6IlVTRVIiLCJpYXQiOjE2MjAxNDI5ODksImV4cCI6MTYyMDIyOTM4OX0.vnQdxFozNquh5Ix3alUQnJkWtu1SwjuzE89Y73wYU3c";
  const jobId = "609186b901bf382c82a97015";

  const makePayment = (token) => {
    const body = {
      token,
      product,
    };

    console.log("token:", token);

    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer " + authToken,
    };

    return fetch(`http://localhost:5000/user/booking/${jobId}/paid`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("RESPONSE ", data);
        const { status } = data;
        console.log("STATUS ", status);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="App">
      <StripeCheckout
        stripeKey="pk_test_51IEIaXHogLKNrbADHwvrG0alspTS89MsJwvIjGfiTpve8PmDf0ZvVgEGn6b4p2t44x9CtbYtt1RRBZNqXbYK6FtC00B21BKUKQ"
        token={makePayment}
        name="Buy React"
        amount={product.price * 100}
        shippingAddress
        billingAddress
      >
        <button className="btn-large blue">
          Pay $ {product.price} <i className="material-icons">payments</i>
        </button>
      </StripeCheckout>
    </div>
  );
}

export default App;
