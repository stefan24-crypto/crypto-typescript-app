import React, { useEffect, useState } from "react";
import classes from "./Card.module.css";
import { Chart, registerables } from "chart.js";
import { Line } from "react-chartjs-2";
import NumberFormat from "react-number-format";
import { useNavigate } from "react-router";

interface CardProps {
  name: string;
  price: string;
  change: number;
  id: string;
  bg: string;
  icon: string;
}

const Card: React.FC<CardProps> = ({ name, price, change, id, bg, icon }) => {
  const navigate = useNavigate();
  return (
    <div className={classes.card} onClick={() => navigate(`/all/${id}`)}>
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

          <span
            className={classes.change}
            style={{
              color: change < 0 ? "red" : "white",
            }}
          >
            {change}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
