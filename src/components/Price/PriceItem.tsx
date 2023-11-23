import styled from 'styled-components';

interface PriceItemProps {
  name?: string;
  date?: string;
  value: number | string;
}

export default function PriceItem({ name, date, value }: PriceItemProps) {
  return (
    <PriceList>
      <Name>{name}</Name>
      <Date>{date}</Date>
      <Value>{value}</Value>
    </PriceList>
  );
}

const PriceList = styled.li`
  display: flex;
  align-items: center;
  padding: 20px;
  font-weight: 600;
`;

const Name = styled.span``;

const Date = styled.span`
  flex: 1;
  font-size: 13px;
  color: ${({ theme }) => theme.subTextColor};
  margin: 0 5px;
`;

const Value = styled.span``;
