import axios from "axios";

const baseURL = "https://fakestoreapi.com";

const useAxios = axios.create({
  baseURL: baseURL,
});

export default useAxios;
