import "../styles/globals.css";

export default function Home() {
  return (
    <main className="max-w-xl mx-auto text-center py-10">
      <h1 className="text-3xl font-bold mb-4">🚆 Train Schedule App</h1>
      <p className="text-gray-600 mb-6">Авторизуйтесь або зареєструйтесь для перегляду розкладу потягів</p>
      <div className="flex justify-center gap-4">
        <a href="/login" className="bg-blue-600 text-white px-4 py-2 rounded">Login</a>
        <a href="/register" className="bg-green-600 text-white px-4 py-2 rounded">Register</a>
      </div>
    </main>
  );
}