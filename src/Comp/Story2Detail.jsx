import React from 'react';
import { useParams, Link } from 'react-router-dom';
import story2Data from '../assets/Story2.json';
import Navbar from './Navbar';
import Footer from './Footer';

const Story2Detail = () => {
  const { id } = useParams();
  const story = story2Data.find((s) => s.id === parseInt(id));
  const defaultImage = '/images/default.jpg'; // fallback image path

  if (!story) {
    return (
      <div className="bg-zinc-950 text-white text-center py-20">
        <h2 className="text-2xl text-red-400">Story not found.</h2>
        <Link to="/stories" className="text-purple-400 underline mt-4 block">
          ← Back to Stories
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
          <Link to="/stories" className="mb-6 inline-block text-purple-400 hover:underline">
            ← Back to Stories
          </Link>

          {/* Story Image */}
          <img
            src={story.image || defaultImage}
            alt={story.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          />

          {/* Story Title & Category */}
          <h1 className="text-4xl font-bold text-purple-400 mb-4">{story.title}</h1>
          <p className="text-sm text-purple-300 mb-6 uppercase">{story.category}</p>

          {/* Story Content */}
          <div className="text-lg text-zinc-300 leading-relaxed whitespace-pre-line">
            {story.content}
          </div>

          {/* Bottom Back Button */}
          <Link to="/stories" className="mt-10 inline-block text-purple-400 hover:underline">
            ← Back to Stories
          </Link>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Story2Detail;
