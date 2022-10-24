import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CheckoutForm  from "./CheckoutForm";

const PUBLIC_KEY = "pk_live_51IWTnVID26o6k9rjXrTPOnkBZLoLfjla5m03ajG7nlDXty8n6ScJf8p2o53L1hYdRkIemw38lZbS0Q3D2cxaQhej00VR5Jb6Iz";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = (props) => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm description={props.description} onClose={()=>props.onClose()} trackingNumber={props.trackingNumber} price={props.price} onSuccess={()=>props.onSuccess()} />
    </Elements>
  );
};

export default Stripe;