// Root.tsx
import { Link, Outlet } from "react-router-dom";

import TopLayout from "@core/component/common/top/TopLayout";
import styles from "./BaseRoute.module.scss";

export default function BaseRoute() {
  return (
    <div>
      {/* 공통 Top 레이아웃 */}
      <TopLayout />

      <header className={styles.routeHeader}>
        <div className={styles.routeHeader__headerContent}>
          {/* 서비스 이름 */}
          <h1 className={styles.routeHeader__headerContent__serviceName}>
            밭to밥
          </h1>

          {/* 네비게이션 링크 추가 */}
          <nav className={styles.routeHeader__headerContent__nav}>
            <Link to="/admin/products">Product List</Link>
            <Link to="/admin/inventory">Inventory</Link>
            <Link to="/admin/policy">Policy</Link>
            <Link to="/admin/box">Box</Link>
            <Link to="/admin/etc">Etc</Link>
          </nav>
        </div>
      </header>

      {/* 하위 라우트들이 여기에 렌더링됨 */}
      <Outlet />
    </div>
  );
}
