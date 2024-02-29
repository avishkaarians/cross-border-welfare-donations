import React, { useState } from 'react';
import phishingLinks from './phishingLinks';
import './PhishingDetector.css';

const PhishingDetector = () => {
  const [url, setUrl] = useState('');
  const [result, setResult] = useState('');

  const checkPhishing = () => {
    if (phishingLinks.includes(url)) {
      setResult('Phishing link');
    } else {
      setResult('Not a phishing link');
    }
  };

  return (
    <div className='contain'>
      <h2>Phishing Link Detector</h2>
      <input type="text" value={url} onChange={(e) => setUrl(e.target.value)} />
      <button onClick={checkPhishing}>Check</button>
      {result && <p className={result === 'Phishing link' ? 'phishing-link' : 'not-phishing-link'}>{result}</p>}
    </div>
  );
};

export default PhishingDetector;