const paypalGateway = {
  name: "paypal",

  pay: async (payload) => {
    console.log("Paypal Payload:", payload);

    // Simulated delay (acts like API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dummy success response
    return {
      success: true,
      gateway: "Paypal",
      data: {
        transactionId: "paypal_test_txn_002",
        status: "PAID",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default paypalGateway;
