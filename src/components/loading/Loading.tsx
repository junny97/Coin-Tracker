import React from 'react';
import styled from 'styled-components';
import Clock from '../../assets/images/clock.gif';
export default function Loading() {
  return (
    <Wrapper>
      <Img src={Clock} alt='로딩중' />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: 80vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 80px;
`;
