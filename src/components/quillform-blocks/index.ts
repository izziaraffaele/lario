import { registerBlockType, BlockTypeInterface } from '@quillforms/blocks';
import { registerCoreBlocks } from '@quillforms/react-renderer-utils';

export { default as workflowBlock } from './workflow-block';
export { default as connectWalletBlock } from './connect-wallet-block';

export function registerCustomBlocks(types: BlockTypeInterface[]) {
  types.forEach((v) => registerBlockType(v.name, v));
}

let initialized = false;

export function registerBlocks(types?: BlockTypeInterface[]) {
  if (!initialized) {
    initialized = true;
    registerCoreBlocks();
    if (types) {
      registerCustomBlocks(types);
    }
  }
}
