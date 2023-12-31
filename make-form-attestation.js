const { toBytes } = require('viem');

const attributes = [
  {
    id: 'welcome',
    type: 'welcome-screen',
    attributes: {
      label: 'Welcome',
      description: 'This is just a description',
      attachment: {
        type: 'image',
        url: 'https://quillforms.com/wp-content/uploads/2022/01/4207-ai-1.jpeg',
      },
      attachmentMaxWidth: '300px',
    },
  },
  {
    id: 'wallet',
    type: 'connect-wallet',
    attributes: {
      label: 'Connect your wallet',
    },
  },
  {
    id: 'requirements',
    type: 'workflow',
    attributes: {
      label: 'Verify reputation',
      workflow: [
        {
          type: 'verifyEnsOwnership',
          label: 'ENS name holder',
          params: {},
        },
        {
          type: 'verifyTokenOwnership',
          label: 'ERC20 holder',
          params: { type: 'token', token: '' },
        },
        {
          type: 'verifyTokenOwnership',
          label: 'ETHRome POAP holder',
          params: { type: 'poap', token: '' },
        },
      ],
    },
  },
  {
    id: 'comment',
    type: 'long-text',
    attributes: {
      label: 'Comment',
    },
  },
].map(
  (item) => `0x${Buffer.from(toBytes(JSON.stringify(item))).toString('hex')}`
);

console.log(
  attributes.join('\n\n')
  // reactEas.encodeAttestationData(
  //   {
  //     title: 'Basic form',
  //     description: 'This is just a basic form with web3 capabilities',
  //     attributes,
  //   },
  //   [
  //     { type: 'string', name: 'title' },
  //     { type: 'string', name: 'description' },
  //     { type: 'bytes[]', name: 'attributes' },
  //   ]
  // )
);
