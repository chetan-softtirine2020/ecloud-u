//export const APP_URL = "http://127.0.0.1:8000/api";
export const  APP_URL="https://educloudlabs-api.com/api";

export const API_TOKEN=localStorage.getItem('token');
export function setToken(token){
      localStorage.setItem('token',token);
}
export function getToken(){
 return localStorage.getItem('token');
}
