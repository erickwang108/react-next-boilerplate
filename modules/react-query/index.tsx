import { QueryClient, QueryClientProvider } from 'react-query';
import React, { FC } from 'react';
import { DefaultOptions } from 'react-query/types/core/types';

export const DEFAULT_QUERY_OPTIONS: DefaultOptions<unknown> = {
  queries: {
    staleTime: process.env.NODE_ENV === 'production' ? 60 * 1000 : 5 * 60 * 1000,
    cacheTime: 1000,
    retry: false,
    retryOnMount: false,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
    notifyOnChangeProps: 'tracked',
  },
};

const queryClient = new QueryClient({
  defaultOptions: DEFAULT_QUERY_OPTIONS,
});

export const QueryProvider: FC = ({ children }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
