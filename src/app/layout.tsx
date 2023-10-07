import ThemeRegistry from '@/components/ThemeRegistry';
import { WalletProvider } from '@/components/WalletProvider';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

export default function RootLayout({ children }: React.PropsWithChildren) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <WalletProvider>{children}</WalletProvider>
        </ThemeRegistry>
      </body>
    </html>
  );
}
