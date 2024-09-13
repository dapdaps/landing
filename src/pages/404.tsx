import { useRouter } from 'next/router';
import { useCallback } from 'react';
import styled from 'styled-components';

import { useSimpleLayout } from '@/hooks/useLayout';
import type { NextPageWithLayout } from '@/utils/types';

const StyledContainer = styled.div`
  width: 100vw;
  height: 100vh;
  color: #fff;
  font-size: 32px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: url('/images/404.png') no-repeat center center;
  background-size: cover;
`;

const StyledButton = styled.button`
  width: 164px;
  height: 46px;
  border-radius: 10px;
  background: #ebf479;
  padding: 0px 18px;
  color: #000;
  text-align: center;
  font-family: Montserrat;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-top: 20px;
`;

const StyledLogo = styled.img`
    width: 304px;
    margin-bottom: 46px;
`

const StyledText = styled.div`
    font-family: Montserrat;
    font-size: 20px;
    font-weight: 400;
    line-height: 24px;
    text-align: center;
    margin-bottom: 60px;
`

const StyledLink = styled.span`
    color: #ebf479;
    border-bottom: 1px solid #ebf479;
    &:hover {
        cursor: pointer;
    }
`

const BASE_URL = process.env.NEXT_PUBLIC_APP_URL || 'https://app.dapdap.net';


const NotFoundPage: NextPageWithLayout = () => {
    const router = useRouter();
    const currentPath = router.asPath;
  
    const handleRedirect = useCallback(() => {
      const newUrl = `${BASE_URL}${currentPath}`;
      router.push(newUrl).catch((error) => {
        console.error('Navigation failed:', error);
      });
    }, [currentPath, router]);
  
    return (
      <StyledContainer>
        <StyledLogo src="/images/404-logo.png" alt="404" />
        <StyledText>
          URL has been updated to{' '}
          <StyledLink onClick={(e) => {
            e.preventDefault();
            handleRedirect();
          }}>
            {BASE_URL}{currentPath}
          </StyledLink>
        </StyledText>
        <StyledButton onClick={handleRedirect}>
          Go to DapDap
        </StyledButton>
      </StyledContainer>
    );
};

NotFoundPage.getLayout = useSimpleLayout;
export default NotFoundPage;
