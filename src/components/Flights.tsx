import { useCallback, useState } from "react";
import { Flight } from "./Flight";
import { Data, Flight as F } from "./Flights.types";
import { getDepFra } from "./Flights.utils";

export function Flights() {
  const [data, setData] = useState<Data | undefined>();

  const loadData = useCallback(async () => {
    const apiData = await getDepFra();
    apiData?.sort((a, b) => new Date(a.arrival.scheduled).getDate() - new Date(b.arrival.scheduled).getDate());
    setData(apiData);
  }, []);

  return (
    <div>
      <h1>Flights FRA departing</h1>
      <button onClick={loadData}>Load</button>

      <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", marginTop: "1rem" }}>
        {data?.map((f, i) => <Flight key={i} flight={f as unknown as F} />)}
      </div>
    </div>
  );
}
