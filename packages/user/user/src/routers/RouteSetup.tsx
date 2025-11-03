import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import React from 'react';
import UserLogin from '../component/login/UserLogin';
import About from './About';
import Profile from './Profile';
import UserLayout from './UserLayout';
import BaseRoute from './BaseRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin />, // 로그인 페이지 라우트
  },
  {
    path: '/user/login',
    element: <UserLogin />, // 로그인 페이지 라우트
  },
  // 유저 페이지
  {
    path: '/user',
    element: <BaseRoute />, // <Outlet /> 포함
    children: [
      {
        index: true,
        element: <Navigate to="main" replace />,
      },
      {
        path: 'main',
        element: <UserLayout />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'profile',
        element: <Profile />,
      },
    ],
  },
]);

// 루트에 라우터 제공
// !는 이 값은 절대 null이 아니다라고 TypeScript에게 말해주는 문구임
// 이 파일에서는 export만 합니다 (렌더링은 main.tsx에서)
export default function RouteSetup() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
