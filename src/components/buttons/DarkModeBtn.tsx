import React from 'react';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { useRecoilState } from 'recoil';
import { isDarkAtom } from '../../recoil/atoms';
import styled from 'styled-components';
import Button from './Button';

interface DarkModeBtnProps {
  width?: number;
  fontSize?: number;
}

const DarkModeBtn = ({ width = 48, fontSize = 24 }: DarkModeBtnProps) => {
  const [isDark, setIsDark] = useRecoilState(isDarkAtom);
  const toggleMode = () => setIsDark((prev) => !prev);

  // 버튼에 전달할 접근 가능한 이름 설정
  const buttonAriaLabel = isDark ? '라이트 모드로 전환' : '다크 모드로 전환';

  return (
    <Button
      icon={isDark ? faSun : faMoon}
      onClick={toggleMode}
      width={width}
      fontSize={fontSize}
      ariaLabel={buttonAriaLabel} // 버튼에 접근 가능한 이름 전달
    />
  );
};

export default DarkModeBtn;
