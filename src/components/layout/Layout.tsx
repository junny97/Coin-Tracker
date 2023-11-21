import styled from 'styled-components';
import { Helmet } from 'react-helmet-async';

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ title, children }: LayoutProps) {
  return (
    <Wrapper>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      {children}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  max-width: 480px;
  min-height: 100vh;
  margin: 0 auto;
  padding: 0 20px;
`;
