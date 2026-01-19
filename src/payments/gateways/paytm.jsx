const paytmGateway = {
  name: "paytm",

  pay: async (payload) => {
    console.log("Paytm Payload:", payload);

    // simulate Paytm processing
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      gateway: "Paytm",
      data: {
        transactionId: "paytm_test_txn_005",
        orderId: "paytm_order_456",
        status: "TXN_SUCCESS",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default paytmGateway;
