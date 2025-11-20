import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';

import React from 'react';
import UserLogin from '../component/login/UserLogin';
import UserLayout from './UserLayout';
import BaseRoute from './BaseRoute';
import SignUp from '../component/signup/SignUp';
import MyPage from '../component/mypage/MyPage';

const router = createBrowserRouter([
  // 유저 페이지
  {
    path: '/user',
    element: <BaseRoute />, // <Outlet /> 포함
    children: [
      {
        index: true,
        element: <Navigate to="/login" replace />, // 기본 경로는 login으로 리디렉션
      },
      {
        path: 'login',
        element: <UserLogin />, // 로그인 페이지는 BaseRoute 안으로
      },
      {
        path: 'main',
        element: <UserLayout />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'mypage',
        element: <MyPage />,
      },
    ],
  },
  // 로그인 페이지를 별도로 루트 경로에 설정하지 않음
  {
    path: '/',
    element: <Navigate to="/user/login" replace />, // 루트에서는 로그인 페이지로 리디렉션
  },
]);

// 루트에 라우터 제공
export default function RouteSetup() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

