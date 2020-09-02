import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;

/*
 * IOS com Emulador: localhost
 * IOS com fisico : IP da máquina
 * 
 * 
 */
