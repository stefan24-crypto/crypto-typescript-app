import React from "react";
import { useAppSelector } from "../../store/hooks";
import Card from "./Card";
import classes from "./Top.module.css";

const Top: React.FC = () => {
  const all = useAppSelector((state) => state.data.topCoins);
  return (
    <section className={classes.top}>
      <header className={classes.header}>
        <h1>CrytoCurrencies</h1>
      </header>
      <main className={classes.main}>
        {all.map((each) => (
          <Card
            key={each.id}
            id={each.id}
            name={each.name}
            price={each.price}
            change={each.change}
            bg={each.color}
            icon={each.iconUrl}
          />
        ))}
      </main>
    </section>
  );
};

export default Top;
