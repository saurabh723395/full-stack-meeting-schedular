import './globals.css';
import { KindeProvider } from '@kinde-oss/kinde-auth-nextjs/server';

export const metadata = {
  title: 'Meeting Scheduler',
  description: 'Dynamic meeting scheduler with Firebase and Kinde authentication',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <KindeProvider>
          <div className="min-h-screen flex flex-col">
            {children}
          </div>
        </KindeProvider>
      </body>
    </html>
  );
}
