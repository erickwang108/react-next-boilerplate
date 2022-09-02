import { Article } from 'types/article';

import {
  ActionType,
  ActionChangeFilter,
  ActionLoadArticles,
  ActionArticlesLoaded,
  ActionArticleLoadingError,
} from './types';

export const loadArticles = (): ActionLoadArticles => ({
  type: ActionType.LOAD_ARTICLES,
});

export const articlesLoaded = (articles: Article[]): ActionArticlesLoaded => ({
  type: ActionType.LOAD_ARTICLES_SUCCESS,
  articles,
});

export const articleLoadingError = (error: any): ActionArticleLoadingError => ({
  type: ActionType.LOAD_ARTICLES_ERROR,
  error,
});

export const changeFilter = (key: string, value: string | number): ActionChangeFilter => ({
  type: ActionType.CHANGE_ARTICLES_FILTER,
  key,
  value,
});
