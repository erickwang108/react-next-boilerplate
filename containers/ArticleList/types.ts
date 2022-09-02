import { Article } from 'types/article';

export enum ActionType {
  LOAD_ARTICLES = 'boilerplate/article/LOAD_ARTICLES',
  LOAD_ARTICLES_SUCCESS = 'boilerplate/article/LOAD_ARTICLES_SUCCESS',
  LOAD_ARTICLES_ERROR = 'boilerplate/article/LOAD_ARTICLES_ERROR',
  CHANGE_ARTICLES_FILTER = 'boilerplate/article/CHANGE_ARTICLES_FILTER',
}

export type Filter = {
  keyword: string;
};

export interface State {
  loading: boolean;
  articles: Article[];
  filter: Filter;
  error: any;
}

export interface ActionLoadArticles {
  type: ActionType.LOAD_ARTICLES;
}

export interface ActionArticlesLoaded {
  type: ActionType.LOAD_ARTICLES_SUCCESS;
  articles: Article[];
}

export interface ActionArticleLoadingError {
  type: ActionType.LOAD_ARTICLES_ERROR;
  error: any;
}

export interface ActionChangeFilter {
  type: ActionType.CHANGE_ARTICLES_FILTER;
  key: string;
  value: string | number;
}

export type Action =
  | ActionLoadArticles
  | ActionArticlesLoaded
  | ActionArticleLoadingError
  | ActionChangeFilter;
