import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import NumberFormat from "react-number-format";

interface CardProps {
  name: string;
  price: string;
  change: number;
  id: string;
  bg: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ name, price, change, id, bg, icon }) => {
  Chart.register(...registerables);
  const [cryptoHistory, setCryptoHistory] = useState([]);
  const fetchHistory = async () => {
    const response = await fetch(
      `https://coinranking1.p.rapidapi.com/coin/${id}/history/1y`,
      {
        method: "GET",
        headers: {
          "x-rapidapi-host": "coinranking1.p.rapidapi.com",
          "x-rapidapi-key":
            "4bcf5adffcmsh7785cfd15e01ff7p184939jsn77c6abb52786",
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

  return (
    <div className={classes.card}>
      <div className={classes.info}>
        <div className={classes.name}>
          <h1>{name}</h1>
          <div>
            <img src={icon} alt="icon" className={classes.img} />
          </div>
        </div>
        <div className={classes.prices}>
          <NumberFormat
            value={Number(price).toFixed(2)}
            prefix="$"
            displayType="text"
            className={classes.price}
            thousandSeparator
          />

          <span className={classes.change}>{change}%</span>
        </div>
      </div>
      <div className={classes.chart}>
        <Line
          data={{
            labels: labels,
            datasets: [
              {
                label: name,
                data: allPrices,
                backgroundColor:
                  change > 0
                    ? "rgba(21, 210, 97, 0.282)"
                    : "rgba(255, 0, 0, 0.4)",
                fill: true,
                borderColor:
                  change > 0
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
                display: false,
              },
              y: {
                ticks: {
                  display: false,
                },
                grid: {
                  display: false,
                },
                display: false,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default Card;
