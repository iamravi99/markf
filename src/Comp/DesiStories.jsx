import React from 'react';
import { Link } from 'react-router-dom';
import desiStories from '../assets/DesiStories.json';
import Navbar from './Navbar';
import Footer from './Footer';

const DesiStories = () => {
  return (
    <>
      <Navbar />
      <section className="bg-zinc-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-400 text-center mb-12">
            🏡 Desi Kahaniyan (देसी कहानियाँ)
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {desiStories.map((story) => (
              <Link
                to={`/desi-story/${story.id}`}
                key={story.id}
                className="block bg-zinc-900 rounded-2xl shadow hover:shadow-yellow-500/30 transition hover:scale-105 duration-300 overflow-hidden"
              >
                {story.image && (
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-48 object-cover"
                  />
                )}
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {story.title}
                  </h3>
                  <p className="text-sm text-zinc-400 mb-4">{story.excerpt}</p>
                  <div className="flex justify-between items-center">
                    <span className="bg-yellow-600 text-xs px-3 py-1 rounded-full uppercase">
                      {story.category}
                    </span>
                    <span className="text-sm text-yellow-400 hover:underline">
                      Read More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default DesiStories;
