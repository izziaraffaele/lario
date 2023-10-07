import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createConfig } from 'wagmi';
import { mainnet, baseGoerli } from 'wagmi/chains';
// import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

const { chains: wagmiChains, publicClient } = configureChains(
  [mainnet, baseGoerli],
  [
    // alchemyProvider({ apiKey: process.env.ALCHEMY_ID }),
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Form builder',
  projectId: process.env.WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: wagmiChains,
});

export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const chains = wagmiChains;
