import React, { useEffect, useState } from 'react';

const BannerAds = () => {
  const [zoneId, setZoneId] = useState(null);
  const [className, setClassName] = useState('');

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;

    if (isMobile) {
      setZoneId('5690716'); // Mobile zone ID
      setClassName('eas6a97888e10');
    } else {
      setZoneId('5690700'); // Desktop zone ID
      setClassName('eas6a97888e2');
    }
  }, []);

  useEffect(() => {
    if (!zoneId || !className) return;

    const script = document.createElement('script');
    script.src = 'https://a.magsrv.com/ad-provider.js';
    script.async = true;
    script.type = 'application/javascript';
    document.body.appendChild(script);

    const inlineScript = document.createElement('script');
    inlineScript.innerHTML = '(AdProvider = window.AdProvider || []).push({"serve": {}});';
    document.body.appendChild(inlineScript);

    return () => {
      document.body.removeChild(script);
      document.body.removeChild(inlineScript);
    };
  }, [zoneId, className]);

  return (
    <div className="w-full flex justify-center items-center my-4 px-2">
      {zoneId && className && (
        <ins
          className={className}
          data-zoneid={zoneId}
          style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
        ></ins>
      )}
    </div>
  );
};

export default BannerAds;
