import { call, put, select, takeLatest } from 'redux-saga/effects';
import { articlesLoaded, articleLoadingError } from './actions';
import { getArticles } from 'api/articles/list';
import { Article } from 'types/article';
import { makeSelectArticleFilter } from './selectors';
import { ActionType, Filter } from './types';

export function* fetchArticles() {
  try {
    const filter: Filter = yield select(makeSelectArticleFilter());
    const articles: Article[] = yield call(getArticles, filter);
    yield put(articlesLoaded(articles));
  } catch (err) {
    yield put(articleLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* articleData() {
  yield takeLatest(ActionType.LOAD_ARTICLES, fetchArticles);
}
