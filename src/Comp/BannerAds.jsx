import React, { useEffect } from 'react';

const BannerAds = () => {
  useEffect(() => {
    const script1 = document.createElement('script');
    script1.src = 'https://a.magsrv.com/ad-provider.js';
    script1.async = true;
    script1.type = 'application/javascript';
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = '(AdProvider = window.AdProvider || []).push({"serve": {}});';
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script1);
      document.body.removeChild(script2);
    };
  }, []);

  return (
    <div className="w-full flex justify-center my-4">
      <ins className="eas6a97888e2" data-zoneid="5690700"></ins>
    </div>
  );
};

export default BannerAds;
