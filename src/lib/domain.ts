export type Tone = "info" | "success" | "warning" | "danger" | "neutral";

export interface Customer {
  id: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  address: string;
  stage: string;
  lastActivity: string;
}

export interface Vehicle {
  id: string;
  model: string;
  variant: string;
  colour: string;
  chassis: string;
  engine: string;
  purchasePrice: number;
  sellingPrice: number;
  status: string;
}

export interface RecordRow {
  id: string;
  primary: string;
  secondary: string;
  detail: string;
  date: string;
  status: string;
  amount?: number;
}

export interface SearchRecord {
  type: "CUSTOMER" | "BOOKING" | "VEHICLE" | "FINANCE" | "INSURANCE" | "REGISTRATION";
  id: string;
  title: string;
  subtitle: string;
  href: string;
}

export interface NotificationItem {
  id: string;
  title: string;
  detail: string;
  tone: Tone;
  href: string;
}

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR", maximumFractionDigits: 0 }).format(value);

export const toneForStatus = (status: string): Tone => {
  const value = status.toLowerCase();
  if (["approved", "completed", "delivered", "available", "issued", "active", "ready"].some((word) => value.includes(word))) return "success";
  if (["rejected", "lost", "blocked", "overdue"].some((word) => value.includes(word))) return "danger";
  if (["pending", "review", "processing", "submitted", "reserved", "transit", "requirement", "awaiting stock"].some((word) => value.includes(word))) return "warning";
  if (["finance", "booked", "open", "enquiry", "draft"].some((word) => value.includes(word))) return "info";
  return "neutral";
};