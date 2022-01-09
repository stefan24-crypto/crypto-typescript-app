import React from "react";
import { updateRestTypeNode } from "typescript";
import classes from "./CurrencyCard.module.css";
import { symbols } from "../../store/DataActions";

import NumberFormat from "react-number-format";

interface CurrencyCardProps {
  icons: any[];
  name: string;
  price: string;
  upOrDownPercentage: number;
  symbol: string;
}

const CurrencyCard: React.FC<CurrencyCardProps> = ({
  icons,
  name,
  price,
  upOrDownPercentage,
  symbol,
}) => {
  const thisIcon = icons.find((each) => each.name === symbol);
  return (
    <div className={classes.card}>
      <header className={classes.header}>
        <div>
          <img src={thisIcon.icon} alt="icon" />
        </div>
      </header>
      <main className={classes.info}>
        <p className={classes.name}>{name}</p>
        <NumberFormat
          prefix="$"
          thousandSeparator
          value={Number(price).toFixed(2)}
          fixedDecimalScale={true}
          displayType="text"
          className={classes.price}
        />
        <span>{upOrDownPercentage}%</span>
      </main>
    </div>
  );
};

export default CurrencyCard;
