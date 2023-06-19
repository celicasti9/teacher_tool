document.addEventListener('DOMContentLoaded', function() 
{
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
  
   /* paypalBtn.addEventListener('click', function() {
      // Call your backend API endpoint for PayPal donation
      // Replace `YOUR_BACKEND_API_URL` with the actual URL of your backend API endpoint
      fetch('https://api-m.paypal.com')
        .then(function(response) {
          // Handle the response from the backend API
          if (response.ok) {
            alert('Donation via PayPal successful!');
          } else {
            alert('Donation via PayPal failed. Please try again later.');
          }
        })
        .catch(function(error) {
          alert('An error occurred while processing the donation via PayPal.');
          console.error(error);
        });
    });
    */
  
    cryptoBtn.addEventListener('click', function() {
      // Call your backend API endpoint for crypto donation
      // Replace `YOUR_BACKEND_API_URL` with the actual URL of your backend API endpoint
      fetch('YOUR_BACKEND_API_URL/crypto')
        .then(function(response) {
          // Handle the response from the backend API
          if (response.ok) {
            alert('Donation via Crypto successful!');
          } else {
            alert('Donation via Crypto failed. Please try again later.');
          }
        })
        .catch(function(error) {
          alert('An error occurred while processing the donation via Crypto.');
          console.error(error);
        });
    });

    /*HERE?*/

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
    

  });

  // Connect Wallet
document.getElementById("connect-button").addEventListener("click", async () => {
  if (window.ethereum) {
    await window.ethereum.request({ method: "eth_requestAccounts" });
    window.web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const walletAddress = accounts[0];
    console.log(`Wallet: ${walletAddress}`);
  } else {
    console.log("No wallet");
  }
});

// Other donation methods
// Add your code for Cash App and PayPal donation methods here

  




  