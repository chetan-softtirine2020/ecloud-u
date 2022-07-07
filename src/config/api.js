
//Local Url
//export const APP_URL = "http://127.0.0.1:8000/api";

//Server  URL
export const APP_URL = "https://educloudlabs-api.com/api";

//Demo Server Url
//export const  APP_URL="http://softtrinedemos.com/api";

//export const UI_URL = "http://localhost:3000";
export const UI_URL = "https://educloudlabs.com";

export const API_TOKEN = localStorage.getItem("token");
export function setToken(token) {
  localStorage.setItem("token", token);
} 


export function getToken() {
  return localStorage.getItem("token");
}
