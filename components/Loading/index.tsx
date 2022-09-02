import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export function Loading() {
  return <Container>loading...</Container>;
}
