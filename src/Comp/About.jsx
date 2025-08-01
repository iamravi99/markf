import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const About = () => {
  return (

    <>
    <Navbar/>
    <section className="bg-zinc-950 text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-pink-500 mb-6 text-center">About Us</h1>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          Welcome to our Adult Blog — a safe, respectful, and creative platform designed exclusively for adults (18+).
          Our mission is to provide open-minded individuals a space to explore and enjoy well-written, diverse erotic stories
          and content meant strictly for mature audiences.
        </p>

        <p className="text-zinc-300 text-lg leading-relaxed mb-6">
          We believe in freedom of expression, consent, and fantasy. All stories published here are fictional and meant for
          entertainment purposes only. We do not promote any illegal or non-consensual activity.
        </p>

        <h2 className="text-2xl font-semibold text-pink-400 mt-10 mb-4">⚖️ Legal & Content Disclaimer</h2>

        <ul className="list-disc list-inside text-zinc-300 space-y-2">
          <li>This site is strictly for users who are 18 years or older.</li>
          <li>All content is fictional and for adult entertainment purposes only.</li>
          <li>We do not allow or promote any illegal, abusive, or exploitative content.</li>
          <li>All content is either original or posted with permission. If you believe your rights are violated, contact us.</li>
          <li>We use third-party ads (e.g., ExoClick) that may track your activity. Read our privacy policy for details.</li>
        </ul>

        <p className="text-zinc-400 text-sm mt-10 border-t border-zinc-700 pt-4 italic">
          If you are under 18 or offended by sexually explicit material, we kindly ask you to leave this site immediately.
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default About;
