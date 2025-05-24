export default function ConfirmDeleteModal({ onConfirm, onCancel }: { onConfirm: () => Promise<void>; onCancel: () => void }) {
  return (
    <div style={{ backgroundColor: "rgba(128,128,128,0.5)" }} className="fixed inset-0 backdrop-blur-sm duration-500 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-sm text-center">
        <p className="text-lg font-semibold mb-4">Are you sure you want to delete this train?</p>
        <div className="flex justify-center gap-4">
          <button onClick={onConfirm} className="bg-red-600 text-white px-4 py-2 rounded cursor-pointer">Delete</button>
          <button onClick={onCancel} className="bg-gray-400 text-white px-4 py-2 rounded cursor-pointer">Cancel</button>
        </div>
      </div>
    </div>
  );
}