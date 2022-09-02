import React, { FC, memo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { makeSelectArticleFilter } from '../selectors';
import { changeFilter, loadArticles } from '../actions';
import { Filter } from '../types';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
`;

const Input = styled.input`
  font-size: 15px;
  margin-right: 4px;
  font-weight: 550;
`;

const Button = styled.button`
  margin-left: 16px;
`;

type ArticleFilterProps = {
  filter: Filter;
  loadArticles: () => void;
  onChangeFilter: (key: string, value: string | number) => void;
};

const FilterPanel: FC<ArticleFilterProps> = ({ filter, onChangeFilter, loadArticles }) => {
  return (
    <Container>
      <Input value={filter.keyword} onChange={(e) => onChangeFilter('keyword', e.target.value)} />
      <Button onClick={() => loadArticles()}>Filter</Button>
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  filter: makeSelectArticleFilter(),
});

const mapDispatchToProps = (dispatch: Dispatch) => ({
  loadArticles: () => dispatch(loadArticles()),
  onChangeFilter: (key: string, value: string | number) => dispatch(changeFilter(key, value)),
});

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export const ArticleFilter = compose<FC>(withConnect, memo)(FilterPanel);
