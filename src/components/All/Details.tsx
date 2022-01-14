import React, { useEffect, useState } from "react";
import classes from "./Details.module.css";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import NumberFormat from "react-number-format";
import { useAppSelector } from "../../store/hooks";

interface DetailsProps {
  id: string;
}

const Details: React.FC<DetailsProps> = ({ id }) => {
  Chart.register(...registerables);
  const all = useAppSelector((state) => state.data.topCoins);
  const thisCoin = all.find((each) => each.uuid === id);
  const [cryptoHistory, setCryptoHistory] = useState([]);
  const fetchHistory = async () => {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coin/${id}/history?timePeriod=1y`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "8f249f6c9dmsh451eacaa092832dp181eaejsnc59a1fbc32cb",
        },
      }
    );
    if (!response.ok) {
      return;
    }
    const data = await response.json();
    setCryptoHistory(data.data.history);
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  const labels = cryptoHistory?.map((each: any) =>
    new Date(each?.timestamp).toDateString()
  );
  const allPrices = cryptoHistory?.map((each: any) => Number(each.price));

  console.log(thisCoin);
  return (
    <section className={classes.section}>
      <header className={classes.header}>
        <h1>{thisCoin?.name}</h1>
        <div className={classes.prices}>
          <NumberFormat
            value={Number(thisCoin?.price).toFixed(2)}
            prefix="$"
            displayType="text"
            className={classes.price}
            thousandSeparator
          />
          <span
            className={classes.change}
            style={{
              color: thisCoin?.change < 0 ? "red" : "white",
            }}
          >
            {thisCoin?.change}%
          </span>
        </div>
      </header>
      <div className={classes.chart}>
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: thisCoin?.name,
                data: allPrices,
                backgroundColor:
                  thisCoin?.change > 0
                    ? "rgba(21, 210, 97, 0.282)"
                    : "rgba(255, 0, 0, 0.4)",
                fill: true,
                borderColor:
                  thisCoin?.change > 0
                    ? "rgba(21, 210, 97, 0.282)"
                    : "rgba(255, 0, 0, 0.4)",
                pointRadius: 0,
              },
            ],
          }}
          options={{
            plugins: {
              legend: {
                display: false,
              },
            },
            scales: {
              x: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                // display: false,
              },
              y: {
                // ticks: {
                //   display: false,
                // },
                grid: {
                  display: false,
                },
                // display: false,
              },
            },
          }}
          width={300}
          height={100}
        />
      </div>
    </section>
  );
};

export default Details;
