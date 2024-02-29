import React, { useState } from 'react';
import Web3 from 'web3';
import "./Blockchainpayment.css"

const BlockchainPayment = () => {
  const [userWalletAddress, setUserWalletAddress] = useState(null);
  const [walletBalance, setWalletBalance] = useState('');
  const [popupVisible, setPopupVisible] = useState(false);
  const [popupAmount, setPopupAmount] = useState('');
  const [popupTxId, setPopupTxId] = useState('');
  const [recipientAddress, setRecipientAddress] = useState('0x5c5e9dfed62b8c58555a094813e8ff2a8216c2be'); // Define recipientAddress state
  const [transferAmount, setTransferAmount] = useState('');

  const connectWalletwithMetaMask = async () => {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setUserWalletAddress(accounts[0]);
      } catch (error) {
        console.error('Failed to connect to wallet:', error);
      }
    } else {
      console.error('Web3 not available.');
    }
  };

  const signOutOfMetaMask = () => {
    setUserWalletAddress(null);
    setWalletBalance('');
  };

  const checkBalance = async () => {
    if (userWalletAddress) {
      try {
        const balance = await window.web3.eth.getBalance(userWalletAddress);
        setWalletBalance(window.web3.utils.fromWei(balance, 'ether'));
      } catch (error) {
        console.error('Failed to get wallet balance:', error);
      }
    }
  };

  const transferFunds = async () => {
    if (!recipientAddress || !transferAmount) return;

    if (userWalletAddress) {
      try {
        const transactionParameters = {
          from: userWalletAddress,
          to: recipientAddress,
          value: window.web3.utils.toWei(transferAmount, 'ether')
        };

        const txHash = await window.web3.eth.sendTransaction(transactionParameters);
        
        setPopupAmount(`Amount: ${transferAmount} ETH`);
        setPopupTxId(`Transaction ID: ${txHash}`);
        setPopupVisible(true);
      } catch (error) {
        console.error('Error transferring funds:', error);
      }
    } else {
      console.error('Wallet not connected.');
    }
  };

  const copyTxId = () => {
    const txId = popupTxId;
    navigator.clipboard.writeText(txId)
      .then(() => {
        alert('Transaction ID copied to clipboard!');
      })
      .catch((error) => {
        console.error('Failed to copy transaction ID:', error);
      });
  };

  return (
    <div className="BlockchainPayment"style={{ backgroundColor: '#FAF0E6' }}>
      <center>
        <div className="card">
          <h1>Welcome to Binary Brains Payment System!</h1>
          <button onClick={userWalletAddress ? signOutOfMetaMask : connectWalletwithMetaMask} className="custom-btn2">
            {userWalletAddress ? 'Sign Out' : 'Connect Wallet'}
          </button>
          <button onClick={checkBalance} className="custom-btn2">Get Balance of Wallet</button>
          <p id="walletAddress">{userWalletAddress}</p>
          <p id="walletBalance">{walletBalance}</p>
          <input type="text" id="recipientAddress" placeholder="Recipient Address" style={{ width: '100%', height: '40px', padding: '15px', margin : '10px 0px', fontSize: '18px', borderRadius: '10px' }} value={recipientAddress} onChange={(e) => setRecipientAddress(e.target.value)} disabled /><br /><br />
          <input type="text" id="transferAmount" placeholder="Enter Amount" style={{ width: '100%', height: '40px', padding: '15px', margin : '10px 0px', fontSize: '18px', borderRadius: '10px' }} onChange={(e) => setTransferAmount(e.target.value)} value={transferAmount} /><br /><br />
          <button onClick={transferFunds} className="custom-btn2">Transfer Funds</button>
          <p id="transferStatus"></p>
          {/* <p>-----OR-----</p>
          <p>If you dont have a account</p>
          <img src="./images/QR.png" style={{ maxWidth: '150px', maxHeight: '150px' }} alt="QR Code" />
          <p>Else, click <a href="https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn">here</a>.</p> */}
        </div>

        {popupVisible && (
          <div id="popup">
            <lottie-player src="https://assets2.lottiefiles.com/packages/lf20_6LimOm.json" background="transparent" speed="1" style={{ width: '300px', height: '300px' }} autoplay></lottie-player>
            <h2>Transaction Details</h2>
            <p id="popupAmount">{popupAmount}</p>
            <p id="popupTxId">{popupTxId}</p>
            <button className="custom-btn btn-5" onClick={copyTxId}>Copy</button>
            <button className="custom-btn btn-5" onClick={() => setPopupVisible(false)}>Close</button>
          </div>
        )}
      </center>
    </div>
  );
};

export default BlockchainPayment;
