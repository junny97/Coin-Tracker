import styled, { keyframes } from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from '@fortawesome/free-brands-svg-icons';
export default function CardSlide() {
  return (
    <CardSliderContainer>
      <CardContainer>
        <Card>
          <a
            href='https://youtu.be/Gc2en3nHxA4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              <FontAwesomeIcon icon={faYoutube} />
              What is Bitcoin?
            </h2>
            <p>The most watched Bitcoin introduction video ever</p>
          </a>
        </Card>
        <Card>
          <a
            href='https://youtu.be/Gc2en3nHxA4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              <FontAwesomeIcon icon={faYoutube} />
              What is Dogecoin?
            </h2>
            <p>TSHIB Explained with Animations Meme or Something More?</p>
          </a>
        </Card>
        <Card>
          <a
            href='https://youtu.be/TDGq4aeevgY'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              <FontAwesomeIcon icon={faYoutube} />
              What is Ethereum?
            </h2>
            <p>3 minute explanation of Ethereum by inventor Vitalik Buterin</p>
          </a>
        </Card>
        <Card>
          <a
            href='https://youtu.be/Gc2en3nHxA4'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              <FontAwesomeIcon icon={faYoutube} />
              What is Dogecoin?
            </h2>
            <p>TSHIB Explained with Animations Meme or Something More?</p>
          </a>
        </Card>
        <Card>
          <a
            href='https://youtu.be/jGjmOjD_F-o'
            target='_blank'
            rel='noopener noreferrer'
          >
            <h2>
              <FontAwesomeIcon icon={faYoutube} />
              What is the Shiba Inu?
            </h2>
            <p>SHIB Explained with Animations Meme or Something More?</p>
          </a>
        </Card>
      </CardContainer>
    </CardSliderContainer>
  );
}

const CardSliderContainer = styled.div`
  overflow: hidden;
  margin-bottom: 24px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.cardBgColor};
`;

const CardSlideAnimation = keyframes`
0%{
  transform: translateX(0%);
}
 15%, 25%{
  transform: translateX(-20%);
};
40%, 50%{
  transform: translateX(-40%);
};
65%, 75%{
  transform: translateX(-60%);
};
90%, 100%{
  transform: translateX(-80%);
}; 
`;

const CardContainer = styled.div`
  display: flex;
  width: 500%;
  animation: ${CardSlideAnimation} 16s ease-in-out infinite;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

  padding: 30px 40px;
  color: ${({ theme }) => theme.cardTextColor};
  cursor: pointer;
  svg {
    padding-right: 8px;
    color: red;
  }

  h2 {
    margin-bottom: 28px;
    font-size: 24px;
    font-weight: 700;
  }

  p {
    white-space: pre-line;
  }
`;
