'use client';
import '@rainbow-me/rainbowkit/styles.css';

import { WagmiConfig } from 'wagmi';
import { chains, wagmiConfig } from '@/utils/wagmiConfig';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

export function WalletProvider({ children }: React.PropsWithChildren) {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
}
