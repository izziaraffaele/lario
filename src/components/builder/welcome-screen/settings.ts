import { withDefaults } from '../FormNodeItem';
import { BuilderType } from '../types';
import { WelcomeScreenPanel } from './WelcomeScreenPanel';
import { makeNodeType } from '@/core/form-builder';

const nodeType = makeNodeType('welcome-screen', {
  attributes: {
    label: 'Welcome to our survey',
    description: 'This is just a description',
    attachment: {
      type: 'image',
      url: 'https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg',
    },
    attachmentMaxWidth: '300px',
  },
});

const settings: BuilderType = {
  nodeType,
  icon: 'octicon:home-16',
  components: {
    panel: WelcomeScreenPanel,
    node: withDefaults({ icon: 'octicon:home-16' }),
  },
};

export default settings;
