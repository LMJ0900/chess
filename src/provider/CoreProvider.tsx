import React, { Fragment } from 'react';

import ReactQueryProvider from '@/provider/ReactQueryProvider';
import ToastProvider from '@/provider/ToastProvider';

type Props = {
  children: React.ReactNode;
};

export default function CoreProvider({ children }: Props) {
  return (
    <Fragment>
      <ReactQueryProvider>
        {children}
        <ToastProvider />
      </ReactQueryProvider>
    </Fragment>
  );
}
