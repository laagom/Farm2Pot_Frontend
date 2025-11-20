import React, { useState, type ChangeEvent, type FormEvent, } from 'react';
import { registerUser, type RegisterPayload } from '../../api/UserApi';
import styles from './SignUp.module.scss'; // SCSS 모듈 임포트

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState<Omit<RegisterPayload, 'loginType' | 'status'>>({
    loginId: '',
    password: '',
    email: '',
    name: '',
    phoneNo: '',
    birthDay: '',
    gender: '',
  });

  const fields: {
    label: string;
    name: keyof typeof formData;
    type?: string;
    required?: boolean;
    placeholder?: string;
    options?: { value: string; label: string }[];
  }[] = [
    { label: '아이디', name: 'loginId', type: 'text', required: true },
    { label: '비밀번호', name: 'password', type: 'password', required: true },
    { label: '이메일', name: 'email', type: 'email', required: true },
    { label: '닉네임 (이름)', name: 'name', type: 'text', required: true },
    { label: '전화번호', name: 'phoneNo', type: 'text', placeholder: '010-0000-0000' },
    { label: '생년월일', name: 'birthDay', type: 'date' },
    {
      label: '성별',
      name: 'gender',
      options: [
        { value: '', label: '선택' },
        { value: 'M', label: '남성' },
        { value: 'F', label: '여성' },
      ],
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const payload: RegisterPayload = { ...formData, loginType: 'loginid', status: 1 };
    try {
      const result = await registerUser(payload);
      alert('회원가입이 완료되었습니다!');
      console.log(result);
    } catch (error) {
      alert('회원가입 중 오류가 발생했습니다.');
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <h2>회원가입</h2>
        <form onSubmit={handleSubmit} className={styles.form}>
          {fields.map(field => (
            <div key={field.name}>
              <label>{field.label}{field.required && '*'}</label>
              {field.options ? (
                <select name={field.name} value={formData[field.name]} onChange={handleChange}>
                  {field.options.map(opt => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                  ))}
                </select>
              ) : (
                <input
                  type={field.type || 'text'}
                  name={field.name}
                  value={formData[field.name]}
                  onChange={handleChange}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              )}
            </div>
          ))}

          <button type="submit">저장</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
