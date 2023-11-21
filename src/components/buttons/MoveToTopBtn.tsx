import styled from 'styled-components';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const MoveToTopBtn = () => {
  const moveToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  // 버튼에 전달할 접근 가능한 이름 설정
  const buttonAriaLabel = '페이지 상단으로 이동';

  return (
    <Wrapper>
      <Button
        icon={faChevronUp}
        onClick={moveToTop}
        ariaLabel={buttonAriaLabel}
      />
    </Wrapper>
  );
};

export default MoveToTopBtn;

const Wrapper = styled.div`
  position: fixed;
  bottom: 30px;
  right: 30px;
`;
