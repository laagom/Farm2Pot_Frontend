import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss'; // SCSS 모듈 임포트

const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>밥to밥</h1>

      <nav className={styles.nav}>
        <Link to="/" className={styles.link}>Home</Link>
        <Link to="/user/contact" className={styles.link}>Contact</Link>
        <Link to="/user/about" className={styles.link}>About</Link>
        <Link to="/user/signup" className={styles.link}>SignUp</Link>
        <Link to="/user/login" className={styles.link}>LogIn</Link>
        <Link to="/user/mypage" className={styles.link}>MyPage</Link>
      </nav>

      <div className={styles.search}>
        <input
          type="text"
          placeholder="What are you looking for?"
          className={styles.searchInput}
        />
      </div>
    </header>
  );
};

export default Header;
