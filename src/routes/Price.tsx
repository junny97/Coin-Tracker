import React from 'react';
import styled from 'styled-components';
import { IPrice, ICoinId } from '../interface';
import { useQuery } from '@tanstack/react-query';
import { fetchCoinTickers } from '../api/api';

const Container = styled.div`
  background-color: ${(props) => props.theme.bgAccentColor};
  margin-top: 0.5em;
  width: 100%;
  border-radius: 1em;
  padding: 1em 2em;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.th`
  padding: 0.5em;
  text-align: left;
  font-weight: bold;
  border-right: 1px solid #ddd;
`;
const SubTableHeader = styled(TableHeader)`
  font-weight: normal;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ddd;
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 0.5em;
  margin-bottom: 0.05em;
`;

const TableCell = styled.td`
  padding: 0.4em;
  text-align: center;
`;

const SmallText = styled.span`
  font-size: 14px;
  text-align: center;
`;

interface PercentChangeCellProps {
  isNegative: boolean;
}

const PercentChangeCell = styled(SmallText)<PercentChangeCellProps>`
  color: ${(props) => (props.isNegative ? '#FF033E' : '#00AC28')};

  &.main {
    font-size: 16px;
    padding: 0.5em;
  }
`;

export default function Price({ coinId }: ICoinId) {
  const { isLoading, data } = useQuery<IPrice>({
    queryKey: ['tickers', coinId],
    queryFn: () => fetchCoinTickers(coinId),
  });

  return (
    <Container>
      {isLoading ? (
        <span>Loading...</span>
      ) : (
        <Table>
          <tbody>
            <TableRow>
              <TableHeader>Attribute</TableHeader>
              <TableCell>Value</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader>Price</TableHeader>
              <TableCell>${data?.quotes.USD.price.toFixed(3)}</TableCell>
              <SubTableHeader>
                {' '}
                <SmallText>Percent Change (1H)</SmallText>
              </SubTableHeader>
              <TableCell>
                {' '}
                <PercentChangeCell
                  isNegative={
                    data?.quotes.USD.percent_change_1h !== undefined &&
                    data.quotes.USD.percent_change_1h < 0
                  }
                >
                  {data?.quotes.USD.percent_change_1h}%
                </PercentChangeCell>
              </TableCell>
              <SubTableHeader>
                {' '}
                <SmallText>Percent Change (24H)</SmallText>
              </SubTableHeader>
              <TableCell>
                {' '}
                <PercentChangeCell
                  isNegative={
                    data?.quotes.USD.percent_change_24h !== undefined &&
                    data.quotes.USD.percent_change_24h < 0
                  }
                >
                  {data?.quotes.USD.percent_change_24h}%
                </PercentChangeCell>
              </TableCell>
              <SubTableHeader>
                {' '}
                <SmallText>Percent Change (7D) </SmallText>
              </SubTableHeader>
              <TableCell>
                <PercentChangeCell
                  isNegative={
                    data?.quotes.USD.percent_change_7d !== undefined &&
                    data.quotes.USD.percent_change_7d < 0
                  }
                >
                  {data?.quotes.USD.percent_change_7d}%
                </PercentChangeCell>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader>Market Capitalization</TableHeader>
              <TableCell>${data?.quotes.USD.market_cap.toFixed(3)}</TableCell>
              <SubTableHeader>
                {' '}
                <SmallText>Percent Change (24H) </SmallText>
              </SubTableHeader>
              <TableCell>
                <PercentChangeCell
                  isNegative={
                    data?.quotes.USD.market_cap_change_24h !== undefined &&
                    data.quotes.USD.market_cap_change_24h < 0
                  }
                >
                  {data?.quotes.USD.market_cap_change_24h}%
                </PercentChangeCell>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader>Trading Volume (24H)</TableHeader>
              <TableCell>${data?.quotes.USD.volume_24h.toFixed(3)}</TableCell>
              <SubTableHeader>
                {' '}
                <SmallText>Percent Change (24H)</SmallText>
              </SubTableHeader>
              <TableCell>
                {' '}
                <PercentChangeCell
                  isNegative={
                    data?.quotes.USD.volume_24h_change_24h !== undefined &&
                    data.quotes.USD.volume_24h_change_24h < 0
                  }
                >
                  {data?.quotes.USD.volume_24h_change_24h}%
                </PercentChangeCell>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeader>All-Time High</TableHeader>
              <TableCell>${data?.quotes.USD.ath_price.toFixed(3)}</TableCell>
            </TableRow>
            <TableRow>
              <TableHeader>Price Now / All-Time High</TableHeader>
              <PercentChangeCell
                className='main'
                isNegative={
                  data?.quotes.USD.percent_from_price_ath !== undefined &&
                  data.quotes.USD.percent_from_price_ath < 0
                }
              >
                {data?.quotes.USD.percent_from_price_ath}%
              </PercentChangeCell>
            </TableRow>
          </tbody>
        </Table>
      )}
    </Container>
  );
}
