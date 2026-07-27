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

export interface VendorFormData {
  vendorName: string;

  gst: string;

  pan: string;

  vendorCategory: string;

  address: {
    line1: string;
    city: string;
    state: string;
    pincode: string;
  };

  contactDetails: {
    name: string;
    email: string;
    phone: string;
  };

  bankDetails: {
    accountName: string;
    accountNumber: string;
    ifsc: string;
  };

  paymentTerms: string;

  certifications: string;

  documents: FileList;
}

export interface VendorPerformance {
  month: string;
  vendors: number;
}

export interface VendorCategoryDistribution {
  name: string;
  y: number;
}

export interface MonthlyPurchaseValue {
  month: string;
  value: number;
}

export interface VendorRatingDistribution {
  rating: string;
  value: number;
}

export interface DashboardState {
  vendorPerformanceTrend: VendorPerformance[];
  vendorCategoryDistribution: VendorCategoryDistribution[];
  monthlyPurchaseValue: MonthlyPurchaseValue[];
  vendorRatingDistribution: VendorRatingDistribution[];
}

export interface PerformanceMetric {
  title: string;
  value: number | string;
  status: "Excellent" | "Good" | "Average" | "Poor";
  color: string;
}

export interface PerformanceTrend {
  month: string;
  score: number;
}

export interface RecentIssue {
  id: number;
  issue: string;
  severity: "High" | "Medium" | "Low";
  date: string;
  status: "Open" | "Resolved";
}

export interface VendorPerformanceState {
  metrics: PerformanceMetric[];
  trend: PerformanceTrend[];
  recentIssues: RecentIssue[];
}

export interface PerformanceMetric {
  title: string;
  value: number | string;
  status: string;
  color: string;
}

export interface PerformanceTrend {
  month: string;
  score: number;
}

export interface RecentIssue {
  id: number;
  issue: string;
  severity: "High" | "Medium" | "Low";
  status: "Open" | "Resolved";
  date: string;
}

export interface PerformanceState {
  metrics: PerformanceMetric[];
  trend: PerformanceTrend[];
  recentIssues: RecentIssue[];
}
