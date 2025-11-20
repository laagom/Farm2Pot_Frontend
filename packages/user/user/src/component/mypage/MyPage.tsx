import React, { useState, useMemo } from 'react';
import Sidebar from './Sidebar';
import styles from './Mypage.module.scss';
// 콘텐츠 컴포넌트 불러오기
import ProfileSettings from './content/ProfileSettings';
import OrderHistory from './content/OrderHistory';
import Wishlist from './content/WishList';
// import ... 기타 콘텐츠 컴포넌트

const MyPage: React.FC = () => {
  // 현재 활성화된 메뉴 상태. 초기값은 'profile'로 설정합니다.
  const [activeMenu, setActiveMenu] = useState<string>('profile');

  // Sidebar에서 메뉴 클릭 시 호출될 핸들러
  const handleMenuClick = (menuId: string) => {
    setActiveMenu(menuId);
  };

  // activeMenu 값에 따라 렌더링할 컴포넌트를 결정하는 로직
  const CurrentContent = useMemo(() => {
    switch (activeMenu) {
      case 'profile':
        return ProfileSettings;
      case 'orders':
        return OrderHistory;
      case 'wishlist':
        return Wishlist;
      case 'coupons':
        return () => <div>🎫 쿠폰/혜택 내용입니다.</div>; // 인라인 더미
      case 'inquiries':
        return () => <div>💬 1:1 문의 내용입니다.</div>; // 인라인 더미
      default:
        return () => <div>선택된 메뉴가 없습니다.</div>;
    }
  }, [activeMenu]);

  return (
    <div className={styles.mypageContainer}>
      <main className={styles.mainContent}>
        {/* 좌측 메뉴 (Sidebar) */}
        <Sidebar activeMenu={activeMenu} onMenuClick={handleMenuClick} />
        
        {/* 우측 콘텐츠 영역 */}
        <section className={styles.contentArea}>
          <h2>{activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)}</h2>
          <hr />
          <CurrentContent />
        </section>
      </main>
    </div>
  );
};

export default MyPage;