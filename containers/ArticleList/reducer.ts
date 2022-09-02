import produce from 'immer';
import { Action, State, ActionType } from './types';

// The initial state of the App
export const initialState = {
  loading: false,
  error: false,
  articles: [],
  filter: {
    keyword: '',
  },
};

const reducer = (state: State = initialState, action: Action) =>
  produce(state, (draft: State) => {
    switch (action.type) {
      case ActionType.LOAD_ARTICLES: {
        draft.loading = true;
        draft.error = null;
        draft.articles = [];
        break;
      }
      case ActionType.LOAD_ARTICLES_SUCCESS: {
        draft.loading = false;
        draft.articles = action.articles;
        break;
      }
      case ActionType.CHANGE_ARTICLES_FILTER: {
        const { key } = action;
        if (Object.keys(draft.filter).includes(key)) {
          draft.filter = { ...draft.filter, [key]: action.value };
        }
        break;
      }
      case ActionType.LOAD_ARTICLES_ERROR: {
        draft.loading = false;
        draft.error = action.error;
        break;
      }
    }
  });

export default reducer;
