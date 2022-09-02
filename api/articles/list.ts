import { Routes } from 'constants/routes';
import { fetchData } from 'modules/fetch';
import { Article } from 'types/article';

export const getArticles = async (params: Record<string, string | number>) =>
  fetchData<Article[]>(Routes.ArticleList, { params });
