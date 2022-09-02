export enum Routes {
  ArticleList = '/api/articles/list',
  ArticleDetails = '/api/articles/getById',
}

// dynamic route generator
export const getRealRouteWithParam = (
  route: Routes,
  params?: string | Record<string, string>
): string => {
  if (!params) {
    return route;
  }

  if (typeof params === 'string') {
    return route.replace(':id', params);
  }

  return Object.keys(params).reduce((str, key) => {
    return str.replace(`:${key}`, params[key]);
  }, route);
};
