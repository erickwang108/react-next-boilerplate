import React, { FC } from 'react';
import styled from 'styled-components';

const NavHeaderContainer = styled.div`
  position: relative;
  padding: 12px;
  display: flex;
  border-radius: 4px;
  background: #ddd;
`;

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  font-size: 16px;
  font-weight: bold;
`;

const ToolbarContainer = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;
  font-weight: normal;
  font-size: 14px;
`;

const ContentContainer = styled.div``;

type NavHeaderProps = {
  header?: React.ReactNode;
  tools?: React.ReactNode;
};

export const NavHeader: FC<NavHeaderProps> = ({ header, tools, children }) => {
  return (
    <NavHeaderContainer>
      <LeftContainer>{header}</LeftContainer>
      <ToolbarContainer>{tools}</ToolbarContainer>
      <ContentContainer>{children}</ContentContainer>
    </NavHeaderContainer>
  );
};
