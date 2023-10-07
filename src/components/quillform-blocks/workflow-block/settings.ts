import { BlockTypeInterface } from '@quillforms/blocks';
import { WorkflowBlock } from './WorkflowBlock';

const settings: BlockTypeInterface = {
  name: 'workflow',
  title: 'Workflow block',
  // icon:
  supports: {
    editable: true,
    required: true,
    description: true,
  },
  attributes: { workflow: { type: 'object', default: { steps: [] } } },
  display: WorkflowBlock as React.FC,
};

export default settings;
