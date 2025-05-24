import { ReduxProvider } from '../providers';
import '../styles/globals.css';
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="p-4 bg-gray-100">
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}