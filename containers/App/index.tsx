import React, { FC, useEffect, memo } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { compose, Dispatch } from 'redux';
import { createStructuredSelector } from 'reselect';
import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import { makeSelectRepos, makeSelectLoading, makeSelectError } from './selectors';
import { loadRepos } from './actions';
import reducer from './reducer';
import saga from './saga';

interface AppPanelProps {
  loading: boolean;
  error: object | boolean;
  repos: { id: number; name: string }[];
  onChangeUsername: (username: string) => void;
}

const Container = styled.div`
  margin: 18px;
  height: 100vh;
`;

const key = 'app';

const App: FC<AppPanelProps> = ({ loading, repos, onChangeUsername }) => {
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    onChangeUsername('erickwang108');
  }, [onChangeUsername]);

  return (
    <Container>
      {loading && 'loading...'}
      {repos && repos.map(({ id, name }) => <div key={id}>{name}</div>)}
    </Container>
  );
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch: Dispatch) {
  return {
    onChangeUsername: (username: string) => dispatch(loadRepos(username)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

export default compose<FC>(withConnect, memo)(App);
