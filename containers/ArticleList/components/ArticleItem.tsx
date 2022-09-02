import React, { FC } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { Article } from 'types/article';

const Container = styled.div`
  margin-top: 12px;
  padding: 12px;
  border-radius: 4px;
  background-color: #ccc;
  text-decoration: none;
  color: black;
`;

const ArticleIndex = styled.span`
  font-size: 15px;
  margin-right: 4px;
  font-weight: 550;
`;

const Title = styled.a`
  display: flex;
  flex: 3;
  font-size: 18px;
  font-weight: 700;
`;

const ViewContainer = styled.span`
  flex: 1;
  text-align: right;
`;

const SubTitle = styled.div`
  font-size: 14px;
  font-weight: 500;
  margin: 8px 24px;
`;

type ArticleItemProps = {
  index: number;
  article: Article;
};

export const ArticleItem: FC<ArticleItemProps> = ({ index, article }) => {
  return (
    <Container>
      <Title>
        <ArticleIndex>{index}.</ArticleIndex>
        {article.title}
        <ViewContainer>
          <Link href={`/article/details/${article.id}`}>view</Link>
        </ViewContainer>
      </Title>
      <SubTitle>{article.subTitle}</SubTitle>
    </Container>
  );
};
