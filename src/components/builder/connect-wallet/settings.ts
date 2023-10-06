import { withDefaults } from '../FormNodeItem';
import { BuilderType } from '../types';
import { ConnectWalletPanel } from './ConnectWalletPanel';
import { makeNodeType } from '@/core/form-builder';

const nodeType = makeNodeType('connect-wallet', {
  attributes: {
    label: 'Connect Wallet',
  },
});

const settings: BuilderType = {
  nodeType,
  icon: 'ion:wallet-outline',
  components: {
    panel: ConnectWalletPanel,
    node: withDefaults({ icon: 'ion:wallet-outline' }),
  },
};

export default settings;
