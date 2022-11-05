//Local Url
export const APP_URL = "http://127.0.0.1:8000/api";

//Server  URL
//export const APP_URL = "https://educloudapi.com/api";

//Demo Server Url
//export const  APP_URL="http://softtrinedemos.com/api";

export const UI_URL = "http://localhost:3000";
//export const UI_URL = "https://educloudlabs.com";

export const API_TOKEN = localStorage.getItem("token");
export function setToken(token) {
  localStorage.setItem("token", token);
}

export function getToken() {
  return localStorage.getItem("token");
}

export const InstanceImagess = [
  { value: "windows", name: "windows" },
  { value: "ubuntu", name: "ubuntu" },
  // { value: "debian", name: "debian" },
  // { value: "windows-2019", name: "windows-2019" },
];

export const softwares = [
  { value: "1", label: "Firefox" },
  { value: "2", label: "Google Chrome" },
];

export const ZONES = [
  { value: "us-central1-c", name: "us-central1-c" },
  { value: "us-central1-b", name: "us-central1-b" },
  { value: "us-central1-a", name: "us-central1-a" },
  { value: "asia-south2-c", name: "asia-south2-c" },
  { value: "asia-south2-b", name: "asia-south2-b" },
  { value: "asia-south2-a", name: "asia-south2-a" },
  { value: "asia-south1-c", name: "asia-south1-c" },
  { value: "asia-south1-b", name: "asia-south1-b" },
  { value: "asia-south1-a", name: "asia-south1-a" },
];
