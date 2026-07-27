import type { Vendor } from "../Type/type";

const vendorNames = [
  "Tech Solutions",
  "Global Supplies",
  "Alpha Traders",
  "Prime Industries",
  "Vision Electronics",
  "Metro Distributors",
  "NextGen Systems",
  "Bright Enterprises",
  "Skyline Traders",
  "Future Innovations",
];

const categories = [
  "Electronics",
  "Furniture",
  "Office Supplies",
  "IT Services",
  "Manufacturing",
  "Construction",
  "Healthcare",
  "Logistics",
];

const contactPersons = [
  "John Smith",
  "Sarah Wilson",
  "David Brown",
  "Emily Clark",
  "Michael Johnson",
  "Sophia Taylor",
  "James Anderson",
  "Olivia Thomas",
];

const cities = [
  "New York",
  "Chicago",
  "Dallas",
  "San Francisco",
  "Los Angeles",
  "Seattle",
  "Boston",
  "Austin",
];

const statuses: Vendor["overview"]["status"][] = [
  "Active",
  "Inactive",
  "Blacklisted",
  "Pending",
];

export const vendors: Vendor[] = Array.from({ length: 100 }, (_, index) => {
  const vendorName = vendorNames[index % vendorNames.length]!;
  const category = categories[index % categories.length]!;
  const city = cities[index % cities.length]!;
  const contact = contactPersons[index % contactPersons.length]!;
  const status = statuses[index % statuses.length]!;

  const totalPurchase = Number((Math.random() * 900000 + 100000).toFixed(2));

  return {
    id: index + 1,

    vendorCode: `VEN-${String(index + 1).padStart(4, "0")}`,

    vendorName: `${vendorName} ${index + 1}`,

    category,

    city,

    overview: {
      status,

      rating: Number((Math.random() * 4 + 1).toFixed(1)),

      establishedYear: 1990 + (index % 30),

      taxId: `GST-${Math.floor(Math.random() * 900000)}`,

      registrationDate: `202${index % 5}-0${(index % 9) + 1}-15`,

      city,

      address: `${index + 10} Business Street`,
    },

    contacts: {
      primaryContact: contact,

      email: `vendor${index + 1}@company.com`,

      phone: `+1-555-${String(index + 1000)}`,

      alternatePhone: `+1-444-${String(index + 2000)}`,
    },

    performance: {
      deliveryScore: Math.floor(Math.random() * 40) + 60,

      qualityScore: Math.floor(Math.random() * 40) + 60,

      complianceScore: Math.floor(Math.random() * 40) + 60,

      totalOrders: Math.floor(Math.random() * 200) + 20,

      completedOrders: Math.floor(Math.random() * 150) + 10,

      cancelledOrders: Math.floor(Math.random() * 10),

      averageDeliveryDays: Math.floor(Math.random() * 10) + 2,
    },

    purchaseHistory: {
      totalPurchaseValue: totalPurchase,

      lastTransaction: new Date(2025, index % 12, (index % 28) + 1)
        .toISOString()
        .split("T")[0]!,

      totalOrders: Math.floor(Math.random() * 200) + 20,

      activePurchaseOrders: Math.floor(Math.random() * 20) + 1,

      monthlyPurchases: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"].map(
        (month) => ({
          month,
          amount: Math.floor(Math.random() * 100000),
        }),
      ),
    },

    documents: [
      {
        gstCertificate: "gst_certificate.pdf",

        contractAgreement: "contract.pdf",

        complianceCertificate: "compliance.pdf",

        insuranceDocument: "insurance.pdf",
      },
    ],
  };
});
