// src/pages/Disclaimer.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Disclaimer = () => {
  return (

    <>
<Navbar/>
    {/* Disclaimer Section */}




    <section className="bg-gradient-to-b from-zinc-900 to-black text-gray-100 min-h-screen px-6 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-pink-500 mb-6 border-b border-pink-500 pb-2">
          ⚠️ Disclaimer & Legal Notice
        </h1>

        <p className="text-lg mb-4">
          Welcome to <strong className="text-white">LustVerse</strong> — an adult-themed blog platform intended strictly for individuals who are at least <strong>18 years of age or older</strong>. By accessing this website, you confirm that:
        </p>

        <ul className="list-disc list-inside mb-6 text-base space-y-2">
          <li>You are at least 18 years old (or legal age in your country/region).</li>
          <li>You voluntarily choose to view sexually explicit content for personal use.</li>
          <li>You understand that all content is intended for adults only and may include fictional stories, advice, product reviews, and imagery that may be considered inappropriate for minors.</li>
          <li>Your local laws allow you to view and interact with adult content.</li>
        </ul>

        <h2 className="text-2xl text-pink-400 font-semibold mb-2">📘 Content & Responsibility</h2>
        <p className="mb-4">
          All the content on this website is either original or published with proper rights and permissions. The creators of this website do not encourage illegal, abusive, or non-consensual acts in any form — fictional or otherwise.
        </p>

        <p className="mb-4">
          The material here is for <strong>entertainment, education, and personal expression</strong>. It should not be used as a substitute for professional advice in legal, medical, or psychological matters.
        </p>

        <h2 className="text-2xl text-pink-400 font-semibold mb-2">⚖️ Copyright & DMCA</h2>
        <p className="mb-4">
          We respect intellectual property. If you believe that any content on this website violates your copyrights, please contact us  with valid proof. We will respond within 72 hours to resolve any issues under the <strong>DMCA (Digital Millennium Copyright Act)</strong>.
        </p>

        <h2 className="text-2xl text-pink-400 font-semibold mb-2">🔐 Privacy & Security</h2>
        <p className="mb-4">
          We value your privacy. We do not collect personal data unless explicitly submitted by the user (e.g., contact form, subscription, comments). Your browsing activity is not tracked personally.
        </p>

        <h2 className="text-2xl text-pink-400 font-semibold mb-2">🔞 Adult Content Warning</h2>
        <p className="mb-4 text-pink-200 font-semibold">
          This website is strictly for adults. If you are under the legal age of access in your jurisdiction, or find such material offensive, please leave immediately.
        </p>

        <p className="text-sm mt-8 italic text-gray-400 border-t border-zinc-700 pt-4">
          By continuing to use this website, you agree to the terms mentioned above, and accept full responsibility for your actions while browsing. This disclaimer is subject to change without notice.
        </p>
      </div>
    </section>
    
    
    
    <Footer/>
    </>
  );
};

export default Disclaimer;
