'use client';
import { useState, useEffect } from 'react';

export default function Header({ onOpenModal, isLoggedIn, handleLogout, search, setSearch }: { onOpenModal: (type: 'login' | 'register') => void;isLoggedIn: boolean; handleLogout: () => void; search: string; setSearch: (value: string) => void; }) {
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null
  return (
    <header className="flex justify-between items-center p-4 shadow bg-white mb-6">
      <h1 className="text-2xl font-bold">Train Schedule</h1>
      <input
        type="text"
        placeholder="Search trains..."
        className="p-2 border rounded max-w-xs w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="flex gap-4">
        {isLoggedIn ? (
          <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">
            Logout
          </button>
        ) : (
          <>
            <button onClick={() => onOpenModal('login')} className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">Login</button>
            <button onClick={() => onOpenModal('register')} className="bg-green-500 text-white px-4 py-2 rounded cursor-pointer">Register</button>
          </>
        )}
      </div>
    </header>
  );
}