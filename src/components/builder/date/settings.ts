import { withDefaults } from '../FormNodeItem';
import { BuilderType } from '../types';
import { DatePanel } from './DatePanel';
import { makeNodeType } from '@/core/form-builder';

const nodeType = makeNodeType('date', {
  attributes: {
    label: 'Date',
  },
});

const settings: BuilderType = {
  nodeType,
  icon: 'octicon:calendar-16',
  components: {
    panel: DatePanel,
    node: withDefaults({ icon: 'octicon:calendar-16' }),
  },
};

export default settings;
