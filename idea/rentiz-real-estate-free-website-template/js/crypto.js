document.addEventListener('DOMContentLoaded', function() {
    const cryptoBtn = document.getElementById('cryptoBtn');
  
    cryptoBtn.addEventListener('click', function() {
      // Check if MetaMask is installed
      if (typeof window.ethereum !== 'undefined') {
        // Request user's permission to connect
        window.ethereum.request({ method: 'eth_requestAccounts' })
          .then(function(accounts) {
            const provider = new ethers.providers.Web3Provider(window.ethereum);
            const signer = provider.getSigner();
  
            // Construct a transaction object
            const transaction = {
              to: 'x33F6Ad6b3466a309049a0beb21Dd93EAdc9949Bd',
              value: ethers.utils.parseEther('0.1'), // Adjust the value as needed
            };
  
            // Send the transaction
            signer.sendTransaction(transaction)
              .then(function(transactionHash) {
                // Handle successful transaction
                console.log('Transaction successful:', transactionHash);
              })
              .catch(function(error) {
                // Handle transaction error
                console.error('Transaction error:', error);
              });
          })
          .catch(function(error) {
            // Handle connection error
            console.error('Connection error:', error);
          });
      } else {
        // MetaMask not installed or user denied permission
        console.error('MetaMask not detected or permission denied.');
      }
    });
  });
  