import styled from 'styled-components';

const PriceContainer = styled.div`
  background-color: ${(props) => props.theme.bgAccentColor};
  padding: 10px 20px;
  border-radius: 10px;
`;

const PriceList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const List = styled.li`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.accentColor};
  }
`;

interface PriceProps {
  price?: number | string;
  maxPrice?: number | string;
  maxDate?: string;
  oneWeekDate?: number;
}

export default function Price({
  price,
  maxPrice,
  maxDate,
  oneWeekDate,
}: PriceProps) {
  return (
    <>
      <PriceContainer>
        <PriceList>
          <List>실시간 가격정보: {price} USD</List>
          <List>7일간 평균가: {oneWeekDate} USD</List>
          <List>최고가 갱신일: {maxDate} </List>
          <List>최고가: {maxPrice} USD </List>
        </PriceList>
      </PriceContainer>
    </>
  );
}
