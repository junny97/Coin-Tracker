import { Helmet } from 'react-helmet';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import goBack from '../assets/goBack.svg';
import goBack_white from '../assets/goBack_white.svg';
import Chart from './Chart';
import Price from './Price';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';
import { IInfo, IPrice, ICoinId } from '../interface';
import {
  Switch,
  Route,
  useParams,
  useLocation,
  Link,
  useRouteMatch,
} from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinInfo, fetchCoinTickers } from '../api/api';
import DarkModeBtn from '../components/DarkModeBtn';

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 20px auto;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 30px;
`;

const GoBackBtn = styled.button`
  border: none;
  appearance: none;
  background: none;
  cursor: pointer;

  background: url(${goBack}) no-repeat center;
  width: 50px;
  height: 50px;
  /* background-color: lightgray; */
`;

const GoBackWhite = styled.button`
  border: none;
  appearance: none;
  background: none;
  cursor: pointer;
  background: url(${goBack_white}) no-repeat center;
  width: 50px;
  height: 50px;
`;

const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;

const Loader = styled.span`
  text-align: center;
  display: block;
  font-size: 24px;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: ${(props) => props.theme.bgAccentColor};
  padding: 10px 20px;
  border-radius: 10px;
`;
const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;
const Description = styled.p`
  margin: 20px 0px;
`;

const TabContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

const Tab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 400;
  background-color: ${(props) => props.theme.bgAccentColor};
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.accentColor : props.theme.textColor};
  a {
    display: block;
  }
`;
interface RouteState {
  name: string;
}

export default function CoinDetail() {
  const { coinId } = useParams<ICoinId>();
  const { state } = useLocation<RouteState>();
  const { isLoading: infoLoading, data: infoData } = useQuery<IInfo>({
    queryKey: ['info', coinId],
    queryFn: () => fetchCoinInfo(coinId),
  });
  const { isLoading: tickersLoading, data: tickersData } = useQuery<IPrice>({
    queryKey: ['tickers', coinId],
    queryFn: () => fetchCoinTickers(coinId),
    // refetchInterval: 5000,
    // refetchIntervalInBackground: true,
  });
  const priceMatch = useRouteMatch('/:coinId/price');
  const chartMatch = useRouteMatch('/:coinId/chart');
  const loading = infoLoading || tickersLoading;
  const isDark = useRecoilValue(isDarkAtom);
  const history = useHistory();

  return (
    <Container>
      <Helmet>
        <title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </title>
      </Helmet>
      <Header>
        {isDark ? (
          <GoBackWhite onClick={() => history.push('/')}></GoBackWhite>
        ) : (
          <GoBackBtn onClick={() => history.push('/')}></GoBackBtn>
        )}
        <Title>
          {state?.name ? state.name : loading ? 'Loading...' : infoData?.name}
        </Title>
        <DarkModeBtn />
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank</span>
              <span>{infoData?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol</span>
              <span>${infoData?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Price</span>
              <span>${tickersData?.quotes.USD.price.toFixed(0)}</span>
            </OverviewItem>
          </Overview>
          <Description>{infoData?.description}</Description>
          <Overview>
            <OverviewItem>
              <span>Total Suply</span>
              <span>{tickersData?.total_supply}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Max Supply</span>
              <span>{tickersData?.max_supply}</span>
            </OverviewItem>
          </Overview>
          <TabContainer>
            <Tab $isActive={chartMatch !== null}>
              <Link to={`/${coinId}/chart`}>Chart</Link>
            </Tab>
            <Tab $isActive={priceMatch !== null}>
              <Link to={`/${coinId}/price`}>Price</Link>
            </Tab>
          </TabContainer>
          <Switch>
            <Route path={`/:coinId/price`}>
              <Price coinId={coinId} />
            </Route>
            <Route path={`/:coinId/chart`}>
              <Chart coinId={coinId} />
            </Route>
          </Switch>
        </>
      )}
    </Container>
  );
}
