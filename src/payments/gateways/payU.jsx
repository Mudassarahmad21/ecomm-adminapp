const payuGateway = {
  name: "payu",

  pay: async (payload) => {
    console.log("PayU Payload:", payload);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      gateway: "PayU",
      data: {
        transactionId: "payu_test_txn_004",
        referenceId: "payu_ref_789",
        status: "SUCCESS",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default payuGateway;
