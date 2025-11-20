// Root.tsx
import { Outlet } from 'react-router-dom';

//import TopLayout from '../component/common/top/TopLayout';
import Header from '../component/common/Header';
import Footer from '../component/common/Footer';

export default function BaseRoute() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}
