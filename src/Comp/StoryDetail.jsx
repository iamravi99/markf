import React from 'react';
import { useParams, Link } from 'react-router-dom';
import stories from '../assets/Stories.json';
import Footer from './Footer';
import Navbar from './Navbar';

const StoryDetail = () => {
  const { id } = useParams();
  const story = stories.find((s) => s.id === parseInt(id));

  // Default image if not present in JSON
  const defaultImage = "/images/default.jpg"; // Put a default image in public/images/

  if (!story) {
    return (
      <div className="text-center text-white py-20">
        <h2 className="text-2xl">Story Not Found</h2>
        <Link to="/stories" className="text-pink-500 underline mt-4 block">
          ← Back to Stories
        </Link>
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="bg-zinc-950 text-white min-h-screen py-12 px-4">
        <div className="max-w-3xl mx-auto">

          {/* Top Back Button */}
          <Link to="/stories" className="mb-6 inline-block text-pink-500 hover:underline">
            ← Back to Stories
          </Link>

          {/* Story Image */}
          <img
            src={story.image || defaultImage}
            alt={story.title}
            className="w-full h-64 object-cover rounded-lg mb-6 shadow-lg"
          />

          {/* Title + Category */}
          <h1 className="text-4xl font-bold text-pink-500 mb-4">{story.title}</h1>
          <span className="bg-pink-600 px-3 py-1 text-xs uppercase rounded-full">
            {story.category}
          </span>

          {/* Full Content */}
          <p className="mt-6 text-zinc-300 leading-7 whitespace-pre-line">
            {story.content}
          </p>

          {/* Bottom Back Button */}
          <Link
            to="/"
            className="mt-10 inline-block text-pink-500 hover:underline"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default StoryDetail;
