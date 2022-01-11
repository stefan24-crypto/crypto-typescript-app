import React, { useEffect } from "react";
import { Route, Routes } from "react-router";
import Layout from "./components/Layout/Layout";
import BlockchainPage from "./Pages/BlockchainPage";
import DAPPsPage from "./Pages/DAPPsPage";
import HomePage from "./Pages/HomePage";
import NFTPage from "./Pages/NFTPage";
import AllPage from "./Pages/AllPage";
import Web3Page from "./Pages/Web3Page";
import { fetchHomeData, fetchTopCoins } from "./store/DataActions";
import { useAppDispatch } from "./store/hooks";
import ContactPage from "./Pages/ContactPage";

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchHomeData());
    dispatch(fetchTopCoins());
  }, []);

  //open link in a new window!

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/all/" element={<AllPage />} />
        <Route path="/nft/" element={<NFTPage />} />
        <Route path="/web3/" element={<Web3Page />} />
        <Route path="/blockchain/" element={<BlockchainPage />} />
        <Route path="/DAAPs/" element={<DAPPsPage />} />
        <Route path="/contact/" element={<ContactPage />} />
      </Routes>
    </Layout>
  );
};

export default App;
