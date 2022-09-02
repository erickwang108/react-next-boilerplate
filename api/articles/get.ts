import { useQuery } from 'react-query';
import { Routes, getRealRouteWithParam } from 'constants/routes';
import { fetchData } from 'modules/fetch';
import { Article } from 'types/article';

export const useArticle = (id?: string) =>
  useQuery([Routes.ArticleDetails, id], () => {
    if (!id) {
      return null;
    }

    const route = getRealRouteWithParam(Routes.ArticleDetails, id);
    return fetchData<Article>(route, { params: { id } });
  });
