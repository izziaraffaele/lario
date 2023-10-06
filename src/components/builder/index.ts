import { BuilderType } from './types';

import welcomeScreen from './welcome-screen';
import date from './date';
import shortText from './short-text';
import web3Gate from './web3-gate';
import connectWallet from './connect-wallet';

export const builderTypes: BuilderType[] = [
  welcomeScreen,
  date,
  shortText,
  web3Gate,
  connectWallet,
];

export * from './types';

export * from './LayoutDrawer';
export * from './LayoutHeader';
export * from './LayoutSidebar';

export * from './StartNode';
export * from './EndNode';
