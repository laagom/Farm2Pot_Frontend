import React from 'react';
import styles from './Sidebar.module.scss';

// 메뉴 항목 타입 정의
export interface MenuItem {
  id: string;
  label: string;
}

interface SidebarProps {
  // 현재 활성화된 메뉴 ID
  activeMenu: string;
  // 메뉴 클릭 시 실행될 함수
  onMenuClick: (menuId: string) => void;
}

// 메뉴 항목 데이터
const menuItems: MenuItem[] = [
  { id: 'profile', label: '👤 프로필 설정' },
  { id: 'orders', label: '📦 주문 내역' },
  { id: 'wishlist', label: '💖 관심 상품' },
  { id: 'coupons', label: '🎫 쿠폰/혜택' },
  { id: 'inquiries', label: '💬 1:1 문의' },
];

const Sidebar: React.FC<SidebarProps> = ({ activeMenu, onMenuClick }) => {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul className={styles.menuList}>
          {menuItems.map((item) => (
            <li key={item.id} className={styles.menuItem}>
              <button
                type="button"
                className={`${styles.menuButton} ${activeMenu === item.id ? styles.active : ''}`}
                onClick={() => onMenuClick(item.id)}
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;