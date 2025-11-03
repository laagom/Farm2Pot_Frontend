// Login.tsx
import { useState } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from './UserLogin.module.scss';

// TODO: 실제로는 useAuthContext 등을 사용
const UserLogin = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault(); // 폼 제출 시 새로고침 방지

    // TODO: 여기에 실제 로그인 로직 또는 useAuthContext 사용
    // 일단은 그냥 로그인 되었다고 가정

    // 쿼리 파라미터로 전달된 리디렉션 경로로 이동
    const redirectPath = searchParams.get('pathname') || '/user/main';
    navigate(redirectPath, { replace: true });
  };

  // 입력값 변경 핸들러
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'id') setId(value);
    if (name === 'password') setPassword(value);
  };

  return (
    <div className={styles.loginContainer}>
      <div className={styles.loginBox}>
        <h2>로그인</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.inputGroup}>
            <label htmlFor="id">아이디</label>
            <input
              type="text"
              id="id"
              name="id"
              placeholder="아이디를 입력하세요."
              value={id}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">비밀번호</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="비밀번호를 입력하세요."
              value={password}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.loginBtn}>
            로그인
          </button>
          <div className={styles.loginFooter}>
            <a href="#">비밀번호 찾기</a>
            <span> | </span>
            <a href="#">회원가입</a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserLogin;
