'use client';

import React from 'react';
import { toast } from 'react-toastify';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';

import { ApiResponse } from '@/api/support/response/ApiResponse';

type Props = {
  children: React.ReactNode;
};

export default function ReactQueryProvider({ children }: Props) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: 3,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        refetchOnReconnect: false,
      },
      mutations: {
        onError: (res: Error) => {
          const errorResponse = res as unknown as ApiResponse<null, null>;

          if (errorResponse.error?.message) {
            toast.error(errorResponse.error.message);
          }
        },
      },
    },
  });

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
