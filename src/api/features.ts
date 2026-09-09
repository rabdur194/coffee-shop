import api from "../lib/axios";
import type { Feature } from "../types/feature";

export const getFeatures = async (): Promise<Feature[]> => {
  const response = await api.get("/features");
  return response.data;
};
