import { res, mockFlight } from "./Flights.mockData";

export type Data = (typeof res)["data"];

export type Flight = typeof mockFlight;
