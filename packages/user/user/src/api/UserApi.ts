import axios from 'axios';

const API_BASE_URL = 'http://localhost:8082';

// -------------------- 회원가입 --------------------
export interface RegisterPayload {
  loginId: string;
  password: string;
  email: string;
  name: string;
  phoneNo?: string;
  birthDay?: string;
  gender?: string;
  loginType: string;
  status: number;
}

export const registerUser = async (data: RegisterPayload) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/user/auth/register`, data);
    return response.data;
  } catch (error) {
    console.error('회원가입 요청 실패:', error);
    throw error;
  }
}
// -------------------- 로그인 --------------------
export interface LoginPayload {
  loginId: string;
  password: string;
}

export const loginUser = async (data: LoginPayload) => {
  try {
    //const response = await axios.post(`${API_BASE_URL}/user/auth/login`, data);
    //return response.data;
    // 실제 요청 대신 무조건 성공하도록 처리
    return Promise.resolve({ message: '로그인 성공', user: { loginId: data.loginId } });
  } catch (error) {
    console.error('로그인 요청 실패:', error);
    throw error;
  }
}
;
