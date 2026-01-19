import stripeGateway from "./gateways/stripe";
import paypalGateway from "./gateways/paypal";
import razorpayGateway from "./gateways/razorpay";
import payuGateway from "./gateways/payU";
import paytmGateway from "./gateways/paytm";
import ccavenueGateway from "./gateways/ccAvenue";

const gateways = {
  stripe: stripeGateway,
  paypal: paypalGateway,
  razorpay: razorpayGateway,
  payu: payuGateway,
  paytm: paytmGateway,
  ccavenue: ccavenueGateway,
};

export default gateways;