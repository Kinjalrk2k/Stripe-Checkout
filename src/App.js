// import React, { useState } from "react";
// import StripeCheckout from "react-stripe-checkout";
// import "./App.css";

// function App() {
//   const [product, setProduct] = useState({
//     name: "React from FB",
//     price: 12.5,
//     productBy: "facebook",
//   });

//   const authToken = process.env.REACT_APP_AUTH_TOKEN;
//   const paidUrl =
//     "http://localhost:5000/user/booking/609186b901bf382c82a97015/paid";

//   const headers = {
//     "Content-Type": "application/json",
//     Authorization: "Bearer " + authToken,
//   };

//   const makePayment = (token) => {
//     const body = {
//       token,
//       product,
//     };

//     console.log("Stripe Token:", token);

//     return fetch(paidUrl, {
//       method: "POST",
//       headers,
//       body: JSON.stringify(body),
//     })
//       .then((response) => response.json())
//       .then((data) => console.log("RESPONSE ", data))
//       .catch((error) => console.log(error));
//   };

//   return (
//     <div className="App">
//       <StripeCheckout
//         stripeKey={process.env.REACT_APP_STRIPE_KEY}
//         token={makePayment}
//         name="Buy React"
//         amount={product.price * 100}
//         shippingAddress
//         billingAddress
//       >
//         <button className="btn-large blue">
//           Pay $ {product.price} <i className="material-icons">payments</i>
//         </button>
//       </StripeCheckout>
//     </div>
//   );
// }

// export default App;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./App.css";

// Make sure to call loadStripe outside of a component’s render to avoid recreating the Stripe object on every render.
// Specicy Stripe Publishable API key here
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

// Initialize Stripe Elements
export default function App() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        {/* <div class="col" style={{ width: "25rem" }}> */}
        {/* <div class="card"> */}
        {/* <div class="card-content"> */}
        <CheckoutForm />
        {/* </div> */}
        {/* </div> */}
        {/* </div> */}
      </Elements>
    </div>
  );
}
