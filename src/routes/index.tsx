/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { lazy } from 'react';

import AccessGuard from 'components/Guards/AccessGuard';
import CstmContainer from 'components/CstmContainer';

interface IRoute {
  index?: boolean;
  path?: string;
  guard?: any;
  layout?: React.FC;
  component: any;
}

const routes: IRoute[] = [
  {
    index: true,
    layout: CstmContainer,
    path: '/',
    component: lazy(() => import('pages/Home')),
  },
  {
    index: true,
    guard: AccessGuard,
    layout: CstmContainer,
    path: '/quiz',
    component: lazy(() => import('pages/Quiz')),
  },
  {
    index: true,
    guard: AccessGuard,
    layout: CstmContainer,
    path: '/result',
    component: lazy(() => import('pages/Result')),
  },
];

export default routes;
