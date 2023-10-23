import React from 'react';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../recoil/atoms';
import styled from 'styled-components';

const ToggleBtn = styled.button<{ isActive: boolean }>`
  font-size: 1.1rem;
  background-color: ${(props) =>
    props.isActive ? 'lightgray' : 'transparent'};
  color: ${(props) => props.theme.accentColor};
  transition: 0.3s ease-in-out all;
  @media screen and (max-width: 600px) {
    font-size: 0.8rem;
  }
`;

const Container = styled.div`
  display: flex;
  height: 2.5rem;
  border: solid ${(props) => props.theme.accentColor} 3px;
  border-radius: 1.1em;
  color: ${(props) => props.theme.accentColor};
  ${ToggleBtn}:first-child {
    border-right: solid ${(props) => props.theme.accentColor} 3px;
    border-radius: 1.2em 0 0 1.2em;
  }
  ${ToggleBtn}:last-child {
    border-radius: 0 1.2em 1.2em 0;
  }
  @media screen and (max-width: 600px) {
    height: 2rem;
  }
`;

export default function DarkModeBtn() {
  const [darkMode, setDarkMode] = useRecoilState(isDarkAtom);
  const toggleDarkAtom = () => setDarkMode((prev) => !prev);
  return (
    <Container>
      <ToggleBtn onClick={toggleDarkAtom} isActive={!darkMode}>
        Light
      </ToggleBtn>
      <ToggleBtn onClick={toggleDarkAtom} isActive={darkMode}>
        Dark
      </ToggleBtn>
    </Container>
  );
}
