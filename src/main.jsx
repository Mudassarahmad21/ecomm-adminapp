import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import ThemeContext from "./context/ThemeContext";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51SqfvERPePUBpE7yMea99etR43t16DjJUf3NTNmEG3wZWXcCKV5VUc91flhNPCtNDmnwDvwbL02bW4zsEkxnE0Z600euGflikK",
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter basename="/">
      <Elements stripe={stripePromise}>
        <ThemeContext>
          <App />
        </ThemeContext>
      </Elements>
    </BrowserRouter>
  </StrictMode>,
);
