'use client';
import { useEffect, useState } from 'react';
import { useCreateTrainMutation, useDeleteTrainMutation, useGetTrainsQuery, useUpdateTrainMutation } from '../services/api';
import TrainForm from './TrainForm';
import AuthModal from './AuthModal';
import Header  from './Header';
import TrainCard from './TrainCard';
import ConfirmDeleteModal from './ConfirmDeleteModal';


export default function TrainsPageContent() {
  const { data, isLoading, refetch } = useGetTrainsQuery();
  const [createTrain] = useCreateTrainMutation();
  const [updateTrain] = useUpdateTrainMutation();
  const [deleteTrain] = useDeleteTrainMutation();
  const [editing, setEditing] = useState<any | null>(null);
  const [search, setSearch] = useState<string>('');
  const [showForm, setShowForm] = useState<boolean>(false);
  const [authModal, setAuthModal] = useState<'login' | 'register' | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [deleteId, setDeleteId] = useState<number | null>(null);
  const handleCreate = async (train: any) => {
    await createTrain(train);
    setShowForm(false);
    refetch();
  };

  const handleUpdate = async (train: any) => {
     await updateTrain({ id: editing.id, ...train });
  setEditing(null);     
  setShowForm(false);     
  refetch(); 
  };

  const handleDelete = async () => {
    if (deleteId !== null) {
      await deleteTrain(deleteId);
      setDeleteId(null);
      refetch();
    }
  };

  const onCancel = () => {
    setShowForm(false); setEditing(null);
  }

    const handleLogout = () => {
    localStorage.removeItem('token');
    location.reload();
  };

    useEffect(() => {
    setIsLoggedIn(!!localStorage.getItem('token'));
  }, []);

  return (
    <div className="max-w-[1200px] mx-auto px-4">
      <Header
        onOpenModal={(type) => setAuthModal(type)}
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        search={search}
        setSearch={setSearch}
      />

      {authModal && <AuthModal  type={authModal}
    onClose={() => setAuthModal(null)}
    onSuccessLogin={() => {
      setIsLoggedIn(true);
      refetch(); 
    }}/>}

      <div className="flex justify-end mb-4">
        {isLoggedIn && (
          <button onClick={() => { setShowForm(true); setEditing(null); }} className="bg-green-600 text-white px-4 py-2 rounded cursor-pointer">
            + Add Train
          </button>
        )}
      </div>

      {showForm && (
        <div className="bg-white  rounded shadow ">
          <TrainForm
            onSubmit={editing ? handleUpdate : handleCreate}
            onCancel={onCancel}
            initialData={editing}
          />
        </div>
      )}

            {deleteId !== null && (
        <ConfirmDeleteModal
          onConfirm={handleDelete}
          onCancel={() => setDeleteId(null)}
        />
      )}

      {isLoading ? (
        <p>Loading...</p>
      ) : data && data.length === 0 ? (
        <div className="text-center text-gray-600 text-xl py-10">
          ПОКИ ЩО НЕМАЄ ПОТЯГІВ. ДОДАЙТЕ ПЕРШИЙ!
        </div>
      ) : (
        <div className="space-y-4">
          {data?.filter((train: any) => train.from.toLowerCase().includes(search.toLowerCase()) || train.to.toLowerCase().includes(search.toLowerCase()))
            .map((train: any) => (
              <TrainCard
                key={train.id}
                train={train}
                onEdit={(t) => { setShowForm(true); setEditing(t); }}
                onAskDelete={(id: number) => setDeleteId(id)}
              />
            ))}
        </div>
      )}
    </div>
  );
}