import axios from "axios";
import { API_HOST } from "./config";

export const getProductItem = async id => {
  try {
    const response = await axios.get(`${API_HOST}/${id}`);
    return response;
  } catch (error) {
    console.log(error);
  }
};
