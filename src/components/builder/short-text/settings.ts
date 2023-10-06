import { withDefaults } from '../FormNodeItem';
import { BuilderType } from '../types';
import { ShortTextPanel } from './ShortTextPanel';
import { makeNodeType } from '@/core/form-builder';

const nodeType = makeNodeType('short-text', {
  attributes: {
    label: 'Short text',
  },
});

const icon = 'octicon:typography-16';
const settings: BuilderType = {
  nodeType,
  icon,
  components: {
    panel: ShortTextPanel,
    node: withDefaults({ icon }),
  },
};

export default settings;
