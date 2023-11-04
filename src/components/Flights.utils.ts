/* eslint-disable camelcase */

import axios from "axios";
import { Data } from "./Flights.types";

export async function getDepFra(): Promise<Data | undefined> {
  const params = {
    access_key: import.meta.env.VITE_API_KEY,
    dep_iata: "FRA",
    limit: 10,
  };

  try {
    const res = await axios.get("http://api.aviationstack.com/v1/flights", { params });

    const data = res.data as Response;

    if ("data" in data) {
      return data.data as Data;
    }
  } catch (err) {
    console.warn(err);
  }

  return undefined;
}
