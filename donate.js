document.addEventListener('DOMContentLoaded', function() {
  const cashAppBtn = document.getElementById('cashAppBtn');
  const paypalBtn = document.getElementById('paypalBtn');
  const cryptoBtn = document.getElementById('cryptoBtn');

  cashAppBtn.addEventListener('click', function() {
    // Call your backend API endpoint for Cash App donation
    // Replace `YOUR_BACKEND_API_URL` with the actual URL of your backend API endpoint
    fetch('https://api.cash.app/management/v1')
      .then(function(response) {
        // Handle the response from the backend API
        if (response.ok) {
          alert('Donation via Cash App successful!');
        } else {
          alert('Donation via Cash App failed. Please try again later.');
        }
      })
      .catch(function(error) {
        alert('An error occurred while processing the donation via Cash App.');
        console.error(error);
      });
  });


  /*Added a GitHub API as placeholder below */
  cryptoBtn.addEventListener('click', function() {
    // Call your backend API endpoint for crypto donation
    // Replace `YOUR_BACKEND_API_URL` with the actual URL of your backend API endpoint
    fetch('https://api.github.com ')
      .then(function(response) {
        // Handle the response from the backend API
        if (response.ok) {
          initiateEthereumTransaction();
        } else {
          alert('Donation via Crypto failed. Please try again later.');
        }
      })
      .catch(function(error) {
        alert('An error occurred while processing the donation via Crypto.');
        console.error(error);
      });
  });

  const connectWallet = async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.web3.eth.getAccounts();
      const walletAddress = accounts[0];
      console.log(`Wallet: ${walletAddress}`);
    } else {
      console.log('No wallet');
    }
  };

  connectWallet();

  // Connect Wallet
  document.getElementById('connect-button').addEventListener('click', async () => {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' });
      window.web3 = new Web3(window.ethereum);
      const accounts = await window.web3.eth.getAccounts();
      const walletAddress = accounts[0];
      console.log(`Wallet: ${walletAddress}`);
    } else {
      console.log('No wallet');
    }
  });

  async function initiateEthereumTransaction() {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const accounts = await window.web3.eth.getAccounts();
        const walletAddress = accounts[0];
        const amount = '20F81C5F84000'; // Amount in wei (here, it's 1 ETH)

        const transactionParams = {
          from: walletAddress,
          to: '0x33F6Ad6b3466a309049a0beb21Dd93EAdc9949Bd',
          value: amount,
        };

        const result = await window.web3.eth.sendTransaction(transactionParams);
        console.log(result);
        alert('Donation via Crypto successful! Transaction hash: ' + result.transactionHash);
      } catch (error) {
        alert('An error occurred while processing the donation via Crypto.');
        console.error(error);
      }
    } else {
      console.log('No wallet');
    }
  }
});

// Other donation methods
// Add your code for Cash App and PayPal donation methods here

  




  