export interface Vendor {
  id: number;
  vendorName: string;
  vendorCode: string;
  category: string;
  contactPerson: string;
  city: string;
  rating: number;
  status: "Active" | "Inactive" | "Pending";
  lastTransaction: string;
  totalPurchaseValue: number;
}

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
  "Daniel White",
  "Emma Harris",
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
  "Denver",
  "Atlanta",
];

const statuses: Vendor["status"][] = ["Active", "Inactive", "Pending"];

export const vendors: Vendor[] = Array.from({ length: 100 }, (_, index) => ({
  id: index + 1,
  vendorName: `${vendorNames[index % vendorNames.length]} ${Math.floor(index / 10) + 1}`,
  vendorCode: `VEN-${String(index + 1).padStart(4, "0")}`,
  category: categories[index % categories.length],
  contactPerson: contactPersons[index % contactPersons.length],
  city: cities[index % cities.length],
  rating: (index % 5) + 1,
  status: statuses[index % statuses.length],
  lastTransaction: new Date(2025, index % 12, (index % 28) + 1)
    .toISOString()
    .split("T")[0],
  totalPurchaseValue: Number((Math.random() * 900000 + 10000).toFixed(2)),
}));
