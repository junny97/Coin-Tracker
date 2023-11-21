import axios from 'axios';

const BASE_URL = 'https://api.coinpaprika.com/v1';

export const getCoinList = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/coins`);
    return response.data;
  } catch (error) {
    console.error('데이터 불러오기 실패', error);
  }
};

export const getCoinPriceData = async (coinId: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/tickers/${coinId}`);
    return response.data;
  } catch (error) {
    console.error('데이터 불러오기 실패', error);
  }
};

export const getCoinChartData = async (coinId: string) => {
  try {
    const response = await axios.get(
      `https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`
    );
    return response.data;
  } catch (error) {
    console.error('데이터 불러오기 실패', error);
  }
};
