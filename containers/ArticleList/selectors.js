import { createSelector } from 'reselect';
import { InjectKeys } from 'types/injectKeys';
import { initialState } from './reducer';

const selectState = state => state[InjectKeys.article] || initialState;

export const makeSelectLoading = () =>
  createSelector(
    selectState,
    state => state.loading,
  );

export const makeSelectError = () =>
  createSelector(
    selectState,
    state => state.error,
  );

export const makeSelectArticles = () =>
  createSelector(
    selectState,
    state => state.articles,
  );

export const makeSelectArticleFilter = () =>
  createSelector(
    selectState,
    state => state.filter,
  );
