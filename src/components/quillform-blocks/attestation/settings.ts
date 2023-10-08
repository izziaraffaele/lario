import { BlockTypeInterface } from '@quillforms/blocks';
import { AttestationBlock } from './AttestationBlock';

const settings: BlockTypeInterface = {
  name: 'attestation',
  title: 'Issue attestation',
  // icon:
  supports: {
    editable: true,
    required: true,
    description: true,
  },
  display: AttestationBlock as React.FC,
  attributes: {
    attestationType: { type: 'string', default: 'offchain' },
  },
};

export default settings;
