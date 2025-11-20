import React, { useState, useContext, type ChangeEvent, type FormEvent, } from 'react';
import { loginUser, type LoginPayload } from '../../api/UserApi';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import styles from './UserLogin.module.scss';
import loginImage from '../../images/login-illustration2.png';

interface LoginFormData {
  loginId: string;
  password: string;
}

const UserLogin: React.FC = () => {
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState<LoginFormData>({
    loginId: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const payload: LoginPayload = { ...formData };

    try {
      const result = await loginUser(payload);
      setUser(result.user);
      navigate('/main');
    } catch (error) {
      alert('로그인 중 오류가 발생했습니다.');
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.loginImage}>
        <img
          src={loginImage}
          alt="shopping illustration"
          className={styles.image}
        />
      </div>

      <div className={styles.loginForm}>
        <h2 className={styles.title}>로그인</h2>
        <p className={styles.description}>Enter your details below</p>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            name="loginId"
            placeholder="loginid"
            value={formData.loginId}
            onChange={handleChange}
            className={styles.input}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className={styles.input}
          />
          <button type="submit" className={styles.button}>로그인</button>
        </form>

        <div className={styles.forgotPassword}>
          <a href="#">Forgot Password?</a>
        </div>
      </div>
    </main>
  );
};

export default UserLogin;
