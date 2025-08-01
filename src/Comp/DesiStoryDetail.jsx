import React from 'react';
import { useParams, Link } from 'react-router-dom';
import desiStories from '../assets/DesiStories.json';
import Navbar from './Navbar';
import Footer from './Footer';

const DesiStoryDetail = () => {
  const { id } = useParams();
  const story = desiStories.find((s) => s.id === parseInt(id));
  const defaultImage = '/images/default.jpg'; // fallback image path

  if (!story) {
    return (
      <div className="text-center text-white py-20 bg-zinc-950 min-h-screen">
        <h2 className="text-2xl text-red-400">Story not found.</h2>
        <Link to="/desi" className="text-yellow-400 underline mt-4 block">
          ← Back to Desi Stories
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <section className="bg-zinc-950 text-white py-16 px-4 min-h-screen">
        <div className="max-w-3xl mx-auto">

          {/* Top Back Button */}
          <Link to="/desi" className="text-yellow-400 hover:underline inline-block mb-6">
            ← Back to Desi Stories
          </Link>

          {/* Title */}
          <h1 className="text-4xl font-bold text-yellow-400 mb-6">{story.title}</h1>

          {/* Image */}
          <img
            src={story.image || defaultImage}
            alt={story.title}
            className="w-full rounded-2xl shadow-lg mb-6"
          />

          {/* Content */}
          <p className="text-zinc-300 leading-relaxed text-lg whitespace-pre-line">
            {story.content}
          </p>

          {/* Bottom Back Button */}
          <Link to="/desi" className="text-yellow-400 hover:underline inline-block mt-10">
            ← Back to Desi Stories
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DesiStoryDetail;
