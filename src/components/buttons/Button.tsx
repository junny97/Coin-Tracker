import styled from 'styled-components';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ButtonProps {
  icon: IconProp;
  onClick: () => void;
  width?: number;
  fontSize?: number;
  transparent?: boolean;
  ariaLabel?: string;
}

const Button = ({
  icon,
  onClick,
  width = 48,
  fontSize = 24,
  transparent = false,
  ariaLabel = '',
}: ButtonProps) => {
  return (
    <Wrapper
      onClick={onClick}
      width={width}
      fontSize={fontSize}
      transparent={transparent}
      aria-label={ariaLabel}
    >
      <FontAwesomeIcon icon={icon} />
      {/* Add accessible hidden text */}
      <A11yHidden>{ariaLabel}</A11yHidden>
    </Wrapper>
  );
};

export default Button;

export const Wrapper = styled.button<{
  width?: number;
  fontSize?: number;
  transparent?: boolean;
}>`
  position: relative;
  width: ${(props) => props.width + 'px'};
  height: ${(props) => props.width + 'px'};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.transparent ? 'transparent' : props.theme.btnBgColor};
  border-radius: 50%;
  color: ${(props) => props.theme.textColor};
  font-size: ${(props) => props.fontSize + 'px'};
  cursor: pointer;

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: ${(props) => props.theme.accentColor};
    }
  }
`;

const A11yHidden = styled.span`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  width: 1px;
`;
