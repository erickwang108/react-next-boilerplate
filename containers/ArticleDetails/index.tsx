import React, { FC } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Loading } from 'components/Loading';
import { useArticle } from 'api/articles/get';

const Container = styled.div`
  width: 50%;
  padding: 16px;
  margin: 0 auto;
  border-radius: 4px;
  background-color: #ccc;
`;

const TopContainer = styled.a`
  font-size: 16px;
  font-weight: bold;
`;

const ArticleContent = styled.div`
  margin: 8px;
`;

const TitleContainer = styled.div`
  font-size: 18px;
  margin: 8px;
  font-weight: bold;
`;

const SubTitleContainer = styled.div`
  margin: 8px;
  font-size: 16px;
`;

export const ArticleDetails: FC = () => {
  const router = useRouter();
  const { isLoading, data } = useArticle(router.query.id as string);

  return (
    <Container>
      <TopContainer>
        <Link href="/article/list">Back</Link>
      </TopContainer>
      <ArticleContent>
        {isLoading ? (
          <Loading />
        ) : (
          data && (
            <>
              <TitleContainer>{data.title}</TitleContainer>
              <SubTitleContainer>{data.subTitle}</SubTitleContainer>
            </>
          )
        )}
      </ArticleContent>
    </Container>
  );
};
