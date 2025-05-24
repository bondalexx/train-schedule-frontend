export default   function TrainCard({ train, onEdit, onAskDelete }: any) {
  return (
    <div className="bg-white shadow p-4 rounded flex justify-between items-center">
      <div>
        <div className="text-lg font-semibold">{train.from} → {train.to}</div>
        <div className="text-sm text-gray-500">Departure: {new Date(train.departure).toLocaleString()}</div>
        <div className="text-sm text-gray-500">Arrival: {new Date(train.arrival).toLocaleString()}</div>
      </div>
      <div className="flex gap-2">
        <button onClick={() => onEdit(train)} className="bg-yellow-400 px-3 py-1 rounded cursor-pointer">Edit</button>
        <button onClick={() => onAskDelete(train.id)} className="bg-red-500 text-white px-3 py-1 rounded cursor-pointer">Delete</button>
      </div>
    </div>
  );
}