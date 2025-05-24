'use client';
import { useState, useEffect } from 'react';

interface TrainFormProps {
  initialData?: any;
  onSubmit: (data: any) => void;
  onCancel: () => void;
}

export default function TrainFormModal({ initialData, onSubmit, onCancel }: TrainFormProps) {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');
  const [departure, setDeparture] = useState('');
  const [arrival, setArrival] = useState('');

useEffect(() => {
  if (initialData) {
    setFrom(initialData.from);
    setTo(initialData.to);
    setDeparture(initialData.departure?.slice(0, 16));
    setArrival(initialData.arrival?.slice(0, 16));
  } else {
    setFrom('');
    setTo('');
    setDeparture('');
    setArrival('');
  }
}, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!from || !to) return alert('Please enter stations');
    if (new Date(departure) >= new Date(arrival)) return alert('Invalid time');
    onSubmit({ from, to, departure, arrival });
  };

  return (
    <div style={{ backgroundColor: "rgba(128,128,128,0.5)" }} className="fixed inset-0  backdrop-blur-sm duration-500 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md relative">
        <button type="button" onClick={onCancel} className="absolute top-2 right-2 text-gray-500 cursor-pointer">✕</button>
        <h2 className="text-xl font-bold mb-4">{initialData ? 'Edit Train' : 'Add Train'}</h2>
        <input value={from} onChange={(e) => setFrom(e.target.value)} placeholder="From" className="w-full border p-2 rounded mb-2" />
        <input value={to} onChange={(e) => setTo(e.target.value)} placeholder="To" className="w-full border p-2 rounded mb-2" />
        <input value={departure} onChange={(e) => setDeparture(e.target.value)} type="datetime-local" className="w-full border p-2 rounded mb-2" />
        <input value={arrival} onChange={(e) => setArrival(e.target.value)} type="datetime-local" className="w-full border p-2 rounded mb-4" />
        <div className="flex justify-end gap-2">
          <button type="submit" className={`${initialData ? "bg-yellow-400 text-[black]" : "bg-green-500 text-white"}  px-4 py-2 rounded cursor-pointer`}>{initialData ? 'Update' : 'Create'}</button>
          <button type="button" onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer">Cancel</button>
        </div>
      </form>
    </div>
  );
}