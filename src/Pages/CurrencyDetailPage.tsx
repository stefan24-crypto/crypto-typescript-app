import React from "react";
import { useParams } from "react-router";
import Details from "../components/All/Details";

const CurrencyDetailPage: React.FC = () => {
  const params = useParams();

  return <Details id={params.currencyID!.toString()!} />;
};

export default CurrencyDetailPage;
