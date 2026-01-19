const ccavenueGateway = {
  name: "ccavenue",

  pay: async (payload) => {
    console.log("CCAvenue Payload:", payload);

    // simulate redirect-based processing
    await new Promise((resolve) => setTimeout(resolve, 1200));

    return {
      success: true,
      gateway: "CCAvenue",
      data: {
        transactionId: "ccav_test_txn_001",
        orderId: "ccav_order_789",
        trackingId: "ccav_track_123",
        status: "Success",
        paymentMode: "NetBanking",
        amount: payload.totalAmount,
        currency: payload.currency,
        items: payload.items,
        createdAt: new Date().toISOString(),
      },
    };
  },
};

export default ccavenueGateway;
