import { dataActions } from "./data-slice";

export const symbols = ["BTC", "ETH", "USDT", "SOL", "ADA"];

export const fetchHomeData = () => {
  return async (dispatch: any) => {
    const fetchData = async () => {
      const fetchedData = [];
      for (let i = 0; i < 5; i++) {
        const response = await fetch(
          `https://coinranking1.p.rapidapi.com/coins?symbols=${symbols[i]}&limit=1`,
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
          throw new Error("Could Not Fetch Data!");
        }

        const data = await response.json();
        fetchedData.push(data);
      }
      return fetchedData;
    };

    try {
      const coinData = await fetchData();
      dispatch(dataActions.setCurrencyForHome(coinData));
    } catch (e) {
      console.log(e);
    }
  };
};

export const fetchTopCoins = () => {
  return async (dispatch: any) => {
    const fetchTheData = async () => {
      const response = await fetch(
        "https://coinranking1.p.rapidapi.com/coins",
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
        throw new Error("Could Not Fetch Data!");
      }

      const data = await response.json();
      return data?.data?.coins;
    };
    try {
      const coinData = await fetchTheData();
      dispatch(dataActions.setTopCoins(coinData));
    } catch (e) {
      console.log(e);
    }
  };
};
