import React, { useEffect, Suspense } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import { fetchTopCoins, fetchHomeData } from "./store/DataActions";
import { useAppDispatch, useAppSelector } from "./store/hooks";
import { CircularProgress } from "@mui/material";

//Lazy Loading
const BlockchainPage = React.lazy(() => import("./Pages/BlockchainPage"));
const DAPPsPage = React.lazy(() => import("./Pages/DAPPsPage"));
const HomePage = React.lazy(() => import("./Pages/HomePage"));
const NFTPage = React.lazy(() => import("./Pages/NFTPage"));
const AllPage = React.lazy(() => import("./Pages/AllPage"));
const Web3Page = React.lazy(() => import("./Pages/Web3Page"));
const ContactPage = React.lazy(() => import("./Pages/ContactPage"));
const PageNotFound = React.lazy(() => import("./Pages/PageNotFound"));
const CurrencyDetailPage = React.lazy(
  () => import("./Pages/CurrencyDetailPage")
);

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTopCoins());
    dispatch(fetchHomeData());
  }, []);

  return (
    <Layout>
      <Suspense
        fallback={
          <div className="centered">
            <CircularProgress />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/all/" element={<AllPage />} />
          <Route path="/nft/" element={<NFTPage />} />
          <Route path="/web3/" element={<Web3Page />} />
          <Route path="/blockchain/" element={<BlockchainPage />} />
          <Route path="/DAAPs/" element={<DAPPsPage />} />
          <Route path="/contact/" element={<ContactPage />} />
          <Route path="all/:currencyID" element={<CurrencyDetailPage />} />
          <Route path="*" element={<PageNotFound />}></Route>
        </Routes>
      </Suspense>
    </Layout>
  );
};

export default App;
