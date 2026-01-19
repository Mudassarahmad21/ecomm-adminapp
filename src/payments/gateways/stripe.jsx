const stripeGateway = {
  name: "stripe",

  pay: async (payload) => {
    console.log("Stripe Payload:", payload);

    // Simulated delay (acts like API call)
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // Dummy success response
    return {
      success: true,
      gateway: "Stripe",
      data: {
        transactionId: "stripe_test_txn_001",
        status: "PAID",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default stripeGateway;
