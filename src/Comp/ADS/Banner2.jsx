// src/components/Banner2.jsx
import React, { useEffect } from 'react';

const Banner2 = () => {
  useEffect(() => {
    // Dynamically add the ad script to the page
    const script = document.createElement('script');
    script.src = 'https://a.magsrv.com/ad-provider.js';
    script.async = true;
    document.body.appendChild(script);

    // Push ad serve command
    window.AdProvider = window.AdProvider || [];
    window.AdProvider.push({ serve: {} });

    return () => {
      // Clean up script if component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="my-4 flex justify-center">
      <ins className="eas6a97888e2" data-zoneid="5690884" style={{ width: 300, height: 250, display: 'block' }}></ins>
    </div>
  );
};

export default Banner2;
