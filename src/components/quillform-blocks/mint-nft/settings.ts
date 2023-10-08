import { BlockTypeInterface } from '@quillforms/blocks';
import { MintNFTBlock } from './MintNFTBlock';

const settings: BlockTypeInterface = {
  name: 'mint-nft',
  title: 'Mint NFT',
  // icon:
  supports: {
    editable: true,
    required: true,
    description: true,
  },
  display: MintNFTBlock as React.FC,
  attributes: {
    contractAddress: { type: 'string' },
    token: { type: 'string' },
    tokenAmount: { type: 'string' },
  },
};

export default settings;
