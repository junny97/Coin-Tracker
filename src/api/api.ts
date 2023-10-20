import axios from 'axios';

export const fetchCoins = async () => {
  try {
    const response = await axios.get('https://api.coinpaprika.com/v1/coins');
    return response.data;
  } catch (error) {
    console.error('데이터 불러오기 실패', error);
  }
};

export const fetchCoinInfo = async (coinId: string) => {
  const response = await axios.get(
    `https://api.coinpaprika.com/v1/coins/${coinId}`
  );
  return response.data;
};

export const fetchCoinTickers = async (coinId: string) => {
  const response = await axios.get(
    `https://api.coinpaprika.com/v1/tickers/${coinId}`
  );
  return response.data;
};

export const fetchCoinHistory = async (coinId: string) => {
  const response = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  return response.data;
};
