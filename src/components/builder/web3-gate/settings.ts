import { withDefaults } from '../FormNodeItem';
import { BuilderType } from '../types';
import { Web3GatePanel } from './Web3GatePanel';
import { makeNodeType } from '@/core/form-builder';

const nodeType = makeNodeType('web3-gate', {
  attributes: {
    label: 'Web3 gate',
  },
});

const settings: BuilderType = {
  nodeType,
  icon: 'octicon:shield-lock-16',
  components: {
    panel: Web3GatePanel,
    node: withDefaults({ icon: 'octicon:shield-lock-16' }),
  },
};

export default settings;
