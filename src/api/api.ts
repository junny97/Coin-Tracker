import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';
export const fetchCoins = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`);
    return response.data;
  } catch (error) {
    console.error('데이터 불러오기 실패', error);
  }
};

export const fetchCoinInfo = async (coinId: string) => {
  const response = await axios.get(`${BASE_URL}/coins/${coinId}`);
  return response.data;
};

export const fetchCoinTickers = async (coinId: string) => {
  const response = await axios.get(`${BASE_URL}/tickers/${coinId}?quotes=USD`);
  return response.data;
};

export const fetchCoinHistory = async (coinId: string) => {
  const response = await axios.get(
    `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
  );
  return response.data;
};
