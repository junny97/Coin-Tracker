import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import Button from './Button';

const MoveBackBtn = () => {
  const navigate = useNavigate();

  // 버튼에 전달할 접근 가능한 이름 설정
  const buttonAriaLabel = '이전 페이지로 이동';

  const moveBack = () => navigate(-1);

  return (
    <Wrapper>
      <Button
        icon={faChevronLeft}
        onClick={moveBack}
        width={24}
        fontSize={20}
        transparent
        ariaLabel={buttonAriaLabel} // 버튼에 접근 가능한 이름 전달
      />
    </Wrapper>
  );
};

export default MoveBackBtn;

const Wrapper = styled.div``;
