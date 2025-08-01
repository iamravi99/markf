import React, { useEffect } from 'react';

const InstantMessageAd = () => {
  useEffect(() => {
    const loadAd = () => {
      const script1 = document.createElement('script');
      script1.src = 'https://a.magsrv.com/ad-provider.js';
      script1.async = true;
      script1.type = 'application/javascript';

      script1.onload = () => {
        const script2 = document.createElement('script');
        script2.innerHTML = '(AdProvider = window.AdProvider || []).push({"serve": {}});';
        document.body.appendChild(script2);
      };

      document.body.appendChild(script1);
    };

    // Delay ad loading to avoid initial crash
    const timeout = setTimeout(() => {
      loadAd();
    }, 1000); // 1 second delay

    return () => {
      clearTimeout(timeout);
    };
  }, []);

  return (
    <div
      className="fixed bottom-4 right-4 z-50"
      style={{ minWidth: 300, minHeight: 250 }}
    >
      <ins
        className="eas6a97888e6"
        data-zoneid="5690726"
        style={{ display: 'block' }}
      ></ins>
    </div>
  );
};

export default InstantMessageAd;
