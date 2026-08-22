const API_URL = (import.meta.env.VITE_API_URL || "http://localhost:3000").replace(/\/$/, "");

const request = async (baseUrl, path, options = {}) => {
  const token = localStorage.getItem("token");
  const headers = new Headers(options.headers || {});

  if (options.body && !(options.body instanceof FormData) && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }
  if (token && !headers.has("Authorization")) {
    headers.set("Authorization", `Bearer ${token}`);
  }

  const response = await fetch(`${baseUrl}${path}`, { ...options, headers });
  const contentType = response.headers.get("content-type") || "";
  const payload = response.status === 204
    ? null
    : contentType.includes("application/json")
      ? await response.json()
      : await response.text();

  if (!response.ok) {
    const message = payload?.error?.message || payload?.message || `Request failed (${response.status})`;
    const error = new Error(message);
    error.status = response.status;
    error.payload = payload;
    if (response.status === 401) window.dispatchEvent(new Event("mindweave:unauthorized"));
    throw error;
  }
  return payload;
};

export const api = (path, options) => request(API_URL, path, options);

export const getAuthUser = () => {
  try {
    return JSON.parse(localStorage.getItem("user") || "null");
  } catch {
    return null;
  }
};

export const saveSession = (token) => {
  const payload = JSON.parse(atob(token.split(".")[1].replace(/-/g, "+").replace(/_/g, "/")));
  const user = { id: payload.userId, profileId: payload.profileId, email: payload.email, role: payload.role, permissions: payload.permissions || [] };
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
  return user;
};

export const clearSession = () => {
  ["token", "user", "studentId", "schoolId"].forEach((key) => localStorage.removeItem(key));
};
