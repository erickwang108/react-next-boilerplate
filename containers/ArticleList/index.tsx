import React, { FC, memo, useEffect } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { InjectKeys } from 'types/injectKeys';
import { useInjectSaga } from 'utils/injectSaga';
import { Loading } from 'components/Loading';
import { makeSelectLoading, makeSelectArticles } from './selectors';
import { loadArticles } from './actions';
import { ArticleItem } from './components/ArticleItem';
import { ArticleFilter } from './components/ArticleFilter';
import { Article } from 'types/article';
import { Filter } from './types';
import reducer from './reducer';
import saga from './saga';

interface ArticleListProps {
  loading: boolean;
  articles: Article[];
  filter: Filter;
  error: object | boolean;
  loadArticles: () => void;
}

const Container = styled.div`
  width: 500px;
  padding: 24px;
  margin: 24px auto;
  border-radius: 4px;
  background-color: #eee;
`;

const ArticleList: FC<ArticleListProps> = ({ loading, articles, loadArticles }) => {
  useInjectReducer({ key: InjectKeys.article, reducer });
  useInjectSaga({ key: InjectKeys.article, saga });

  useEffect(() => {
    loadArticles();
  }, [loadArticles]);

  return (
    <Container>
      <ArticleFilter />
      {loading && <Loading />}
      {articles?.map?.((article, index) => (
        <ArticleItem key={article.id} index={index + 1} article={article} />
      ))}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  articles: makeSelectArticles(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadArticles: () => dispatch(loadArticles()),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<FC>(withConnect, memo)(ArticleList);
