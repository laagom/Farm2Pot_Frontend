import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import React from 'react';
import UserLogin from '../gate/UserLogin';
import About from './About';
import Profile from './Profile';

const router = createBrowserRouter([
  {
    path: '/',
    element: <UserLogin />, // 로그인 페이지 라우트
  },
  {
    path: '/user/login',
    element: <UserLogin />, // 로그인 페이지 라우트
  },
  // 관리자 페이지
  {
    path: '/user',
    element: <UserLogin />, // <Outlet /> 포함
    children: [
      { index: true, element: <UserLogin /> }, // /
      { path: 'main', element: <UserLogin /> }, // /main
      { path: 'about', element: <About /> }, // /about
      { path: 'profile', element: <Profile /> }, // /profile
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
