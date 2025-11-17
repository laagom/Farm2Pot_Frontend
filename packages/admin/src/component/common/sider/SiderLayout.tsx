import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "../sider/SiderLayout.module.scss";

type Props = {
  children?: React.ReactNode;
};

function SiderLayout({ children }: Props) {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate(); // navigate 함수 가져오기

  return (
    <>
      {/* 사이드바 */}
      <aside
        className={`${styles.adminLayout__sidebar} ${open ? styles.open : ""}`}
      >
        {/* 사이드바 토글 버튼 */}
        <button
          className={styles.adminLayout__sidebar__toggleBtn}
          onClick={() => setOpen(!open)}
        >
          {open ? "⬅" : "➡"}
        </button>

        {/* Write 버튼 */}
        <button
          className={styles.adminLayout__sidebar__writeBtn}
          onClick={() => navigate("/admin/products/new")}
        >
          {open ? "Write" : "✚"}
        </button>

        {/* 메뉴 목록 */}
        {open && (
          <ul className={styles.adminLayout__sidebar__menu}>
            <li>
              <Link to="/admin/products">Product List</Link>
            </li>
            <li>
              <Link to="/admin/inventory">Inventory</Link>
            </li>
            <li>
              <Link to="/admin/policy">Policy</Link>
            </li>
            <li>
              <Link to="/admin/box">Box</Link>
            </li>
            <li>
              <Link to="/admin/etc">Etc</Link>
            </li>
          </ul>
        )}
      </aside>
      {/* 메인 컨텐츠 영역 */}
      <main className={styles.adminLayout__content}>{children}</main>
    </>
  );
}

export default SiderLayout;
