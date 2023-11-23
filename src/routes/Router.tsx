import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CoinDetail from '../pages/CoinDetail';
import Coins from '../pages/Coins';
export default function Router() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path='/' element={<Coins />}></Route>
        <Route path=':coinId/*' element={<CoinDetail />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
