'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useLoginMutation, useRegisterMutation } from '../services/api';

export default function AuthModal({
  type,
  onClose,
  onSuccessLogin,
}: {
  type: 'login' | 'register';
  onClose: () => void;
  onSuccessLogin: () => void;
}) {
  const isLogin = type === 'login';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes('@')) return setError('Invalid email');
    if (password.length < 6) return setError('Password too short');
    setError('');
    try {
      if (isLogin) {
       const res = await login({ email, password }).unwrap();
  localStorage.setItem('token', res.access_token);
  onSuccessLogin();
      } else {
       await register({ email, password }).unwrap();
  onSuccessLogin();
      }
      onClose();
      router.push('/trains');
    } catch (err) {
       console.error('Login/Register error:', err);
      setError('Auth failed');
    }
  };

  return (
    <div   style={{ backgroundColor: "rgba(128,128,128,0.5)" }} className="fixed inset-0  backdrop-blur-sm duration-500 flex items-center justify-center z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow-md w-full max-w-sm relative"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 cursor-pointer"
        >
          ✕
        </button>
        <h2 className="text-xl font-semibold text-center mb-4">
          {isLogin ? 'Already have an account? Login' : 'Dont have an account? Register'}
        </h2>
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          className="w-full border rounded p-2 mb-2"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded p-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button className="w-full bg-blue-600 text-white p-2 rounded cursor-pointer">
          {isLogin ? 'Login' : 'Register'}
        </button>
      </form>
    </div>
  );
}