const razorpayGateway = {
  name: "razorpay",

  pay: async (payload) => {
    console.log("Razorpay Payload:", payload);

    // simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return {
      success: true,
      gateway: "Razorpay",
      data: {
        transactionId: "razorpay_test_txn_001",
        orderId: "order_test_123",
        paymentId: "pay_test_456",
        status: "PAID",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default razorpayGateway;
