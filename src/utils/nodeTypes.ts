import { makeNodeType } from '@/core/form-builder';

const welcomeScreen = makeNodeType('welcome-screen', 'octicon:home-16', {
  attributes: {
    label: 'Welcome',
    attachment: {
      type: 'image',
      url: 'https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg',
    },
    attachmentMaxWidth: '300px',
  },
});

const connectWallet = makeNodeType('connect-wallet', 'ion:wallet-outline', {
  attributes: {
    label: 'Connect Wallet',
  },
});

const web3Gate = makeNodeType('web3-gate', 'octicon:shield-lock-16', {
  attributes: {
    label: 'Web3 gate',
  },
});

const shortText = makeNodeType('short-text', 'octicon:typography-16', {
  attributes: {
    label: 'Short text',
  },
});

const date = makeNodeType('date', 'octicon:calendar-16', {
  attributes: {
    label: 'Date',
  },
});

export const nodeTypes = [
  welcomeScreen,
  connectWallet,
  web3Gate,
  shortText,
  date,
];
