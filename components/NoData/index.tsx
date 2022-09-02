import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const IconContainer = styled.div`
  display: flex;
  font-weight: 600;
  margin-top: 12px;
`;

const TextContainer = styled.div`
  display: flex;
  font-weight: 400;
  font-size: 14px;
  margin-top: 12px;
`;

export function NoData() {
  return (
    <Container>
      <IconContainer>icon</IconContainer>
      <TextContainer>暂无数据，请稍后重试...</TextContainer>
    </Container>
  );
}
