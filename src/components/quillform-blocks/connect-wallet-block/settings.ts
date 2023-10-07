import { BlockTypeInterface } from '@quillforms/blocks';
import {ConnectWalletBlock} from './ConnectWalletBlock';

const settings: BlockTypeInterface = {
  name: 'connect-wallet',
  title: 'Connect wallet block',
  // icon:
  supports: {
    editable: true,
    required: true,
    description: true,
  },
  display: ConnectWalletBlock as React.FC,
};

export default settings;
