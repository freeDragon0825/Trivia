/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React, { Suspense, Fragment } from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import LoadingBar from 'components/LoadingBar';

interface IRoute {
  index?: boolean;
  path?: string;
  guard?: any;
  layout?: React.FC;
  component: any;
}

export default function renderRoutes(routes: IRoute[] = []) {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingBar />}>
        <Routes>
          {routes.map((route: IRoute, i: number) => {
            const Component = route.component;
            const Guard = route.guard || Fragment;
            const Layout = route.layout || Fragment;
            return (
              <Route
                key={i}
                path={route.path!}
                index={route.index!}
                element={
                  <Guard>
                    <Layout>
                      <Component />
                    </Layout>
                  </Guard>
                }
              />
            );
          })}
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
