const MetaMaskSDK = require('@metamask/sdk');

const sdk = new MetaMaskSDK({
  shouldShimWeb3: false,
  showQRCode: true,
});

const ethereum = sdk.getProvider();

const start = async () => {
  const accounts = await ethereum.request({
    method: 'eth_requestAccounts',
    params: [],
  });

  console.log('request accounts', accounts);

  const msgParams = {
    types: {
      EIP712Domain: [
        { name: 'name', type: 'string' },
        { name: 'version', type: 'string' },
        { name: 'chainId', type: 'uint256' },
        { name: 'verifyingContract', type: 'address' },
      ],
      Person: [
        { name: 'name', type: 'string' },
        { name: 'wallet', type: 'address' },
      ],
      Mail: [
        { name: 'from', type: 'Person' },
        { name: 'to', type: 'Person' },
        { name: 'contents', type: 'string' },
      ],
    },
    primaryType: 'Mail',
    domain: {
      name: 'Ether Mail',
      version: '1',
      chainId: '0x1',
      verifyingContract: '0xCcCCccccCCCCcCCCCCCcCcCccCcCCCcCcccccccC',
    },
    message: {
      from: {
        name: 'Cow',
        wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
      },
      to: {
        name: 'Bob',
        wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
      },
      contents: 'Hello, Bob!',
    },
  };

  const from = accounts[0];

  const signResponse = await ethereum.request({
    method: 'eth_signTypedData_v3',
    params: [from, JSON.stringify(msgParams)],
  });

  console.log('sign response', signResponse);
};

start();
