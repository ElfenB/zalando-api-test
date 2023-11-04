/* eslint-disable sonarjs/no-duplicate-string */

import { Flight } from "./Flights.types";

type Props = {
  flight: Flight;
};

export function Flight({ flight }: Props) {
  return (
    <div style={{ border: "1px solid gray", borderRadius: "1rem", padding: "0.3rem 1rem" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h4>
          {flight.flight.icao} - {new Date(flight.arrival.scheduled).toLocaleDateString()}
        </h4>

        <p>Airline: {flight.airline.name}</p>
      </div>

      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <p style={{ marginTop: 0 }}>
          <b>From</b>: <br />
          {flight.departure.airport}
        </p>

        <p style={{ marginTop: 0 }}>
          <b>To</b>:<br />
          {flight.arrival.airport}
        </p>
      </div>

      <div style={{ alignItems: "center", display: "flex", justifyContent: "space-between" }}>
        <p style={{ margin: 0, whiteSpace: "nowrap" }}>
          🛫 {new Date(flight.departure.scheduled).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
        </p>

        <span style={{ borderBottom: "4px dashed gray", height: "1px", margin: "0 1rem", width: "100%" }} />

        <p style={{ margin: 0, whiteSpace: "nowrap" }}>
          {new Date(flight.arrival.scheduled).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })} 🛬
        </p>

        {flight.arrival.delay !== null && (
          <p
            style={{
              color: flight.arrival.delay > 10 ? "red" : "yellow",
              marginLeft: ".3rem",
            }}
          >
            {flight.arrival.delay}
          </p>
        )}
      </div>
    </div>
  );
}
