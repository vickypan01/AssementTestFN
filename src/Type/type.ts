export interface Vendor {
  id: number;

  vendorCode: string;

  vendorName: string;

  category: string;

  city: string;

  overview: {
    status: "Active" | "Inactive" | "Blacklisted" | "Pending";

    rating: number;

    establishedYear: number;

    taxId: string;

    registrationDate: string;

    city: string;

    address: string;
  };

  contacts: {
    primaryContact: string;

    email: string;

    phone: string;

    alternatePhone: string;
  };

  performance: {
    deliveryScore: number;

    qualityScore: number;

    complianceScore: number;

    totalOrders: number;

    completedOrders: number;

    cancelledOrders: number;

    averageDeliveryDays: number;
  };

  purchaseHistory: {
    totalPurchaseValue: number;

    lastTransaction: string;

    totalOrders: number;

    activePurchaseOrders: number;

    monthlyPurchases: {
      month: string;
      amount: number;
    }[];
  };

  documents: {
    gstCertificate: string;

    contractAgreement: string;

    complianceCertificate: string;

    insuranceDocument: string;
  }[];
}
