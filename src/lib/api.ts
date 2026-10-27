import type { User } from "@/context/AuthContext";

const API_BASE_URL = (process.env.NEXT_PUBLIC_API_BASE_URL ?? "https://backend.deutpak.com/api").replace(/\/$/, "");

async function post<T>(path: string, body: unknown): Promise<{ ok: boolean; data: T | null }> {
  const res = await fetch(`${API_BASE_URL}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  const data = (await res.json().catch(() => null)) as T | null;
  return { ok: res.ok, data };
}

export type CustomerPayload = {
  firstName: string;
  lastName: string;
  email: string;
  dob: string;
  phoneNumber: string;
  picture: string;
  streetName: string;
  houseNo: string;
  postalCode: string;
  city: string;
  country: string;
  additionalInfo: string;
  passportNo: string;
  passportIssue: string | null;
  passportExpiry: string | null;
  idCardNo: string;
  idCardIssue: string | null;
  idCardExpiry: string | null;
  LicenseNo: string;
  licenseIssue: string | null;
  licenseExpiry: string | null;
};

export async function addCustomer(customer: CustomerPayload): Promise<{ success: boolean; errors?: string[] }> {
  try {
    const { ok, data } = await post<{ errors?: string[] }>("/customer/AddCustomer", customer);
    if (!ok || data?.errors) return { success: false, errors: data?.errors ?? ["Unexpected error"] };
    return { success: true };
  } catch {
    return { success: false, errors: ["Unexpected error"] };
  }
}

type LoginResponse = {
  success: boolean;
  token?: string;
  user?: User;
  message?: string;
  errors?: string[];
};

export async function loginUser(credentials: { email: string; password: string }): Promise<LoginResponse> {
  try {
    const { data } = await post<LoginResponse>("/user/Login", credentials);
    return data ?? { success: false, message: "Unexpected error" };
  } catch {
    return { success: false, message: "Unexpected error" };
  }
}
