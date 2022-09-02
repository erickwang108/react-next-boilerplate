import React, { FC, useMemo } from 'react';
import { useRouter } from 'next/router';
import styled from 'styled-components';
import { NavMenu } from './NavMenu';

const Logo = styled.div`
  height: 32px;
  margin: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
  background: rgba(255, 255, 255, 0.2);
`;

const StyledSider = styled.div`
  overflow: auto;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
`;

const StyledLayout = styled.div`
  background: #fff;
`;

export const PageLayout: FC = ({ children }) => {
  const router = useRouter();
  const isLoginPage = useMemo(() => {
    const { pathname } = router;
    return ['/user/login'].includes(pathname);
  }, [router]);

  return (
    <StyledLayout>
      {isLoginPage ? (
        children
      ) : (
        <>
          <StyledSider>
            <Logo>LOGO</Logo>
            <NavMenu />
          </StyledSider>
          <StyledLayout style={{ marginLeft: 200 }}>{children}</StyledLayout>
        </>
      )}
    </StyledLayout>
  );
};
