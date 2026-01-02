import CoreProvider from '@/provider/CoreProvider';
import '@/style/globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body>
        <CoreProvider>{children}</CoreProvider>
      </body>
    </html>
  );
}
