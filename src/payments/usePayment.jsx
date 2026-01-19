import gateways from "./index";

const usePayment = () => {
  const initiatePayment = async (gatewayName, payload) => {
    const gateway = gateways[gatewayName];

    if (!gateway) {
      throw new Error("Unsupported payment gateway");
    }

    return await gateway.pay(payload);
  };

  return { initiatePayment };
};

export default usePayment;