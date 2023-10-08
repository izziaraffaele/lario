import ThemeRegistry from '@/components/ThemeRegistry';
import { WalletProvider } from '@/components/WalletProvider';

export const metadata = {
  title: 'Lario',
  description: 'The Data Collection layer for Decentralized Organizations',
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
