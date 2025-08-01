import React from 'react';
import { Link } from 'react-router-dom';
import stories from '../assets/Stories.json';


const Stories = () => {
  return (
    <>
    

      <section className="bg-zinc-950 text-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-pink-500 text-center mb-12">
            🔥 Erotic Stories
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story) => (
              <Link
                to={`/story/${story.id}`}
                key={story.id}
                className="block bg-zinc-900 rounded-2xl p-6 shadow hover:shadow-pink-500/30 transition hover:scale-105 duration-300"
              >
                {/* Image */}
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-48 object-cover rounded-xl mb-4"
                />

                {/* Title */}
                <h3 className="text-xl font-semibold text-white mb-2">{story.title}</h3>

                {/* Excerpt */}
                <p className="text-sm text-zinc-400 mb-4">{story.excerpt}</p>

                {/* Category + CTA */}
                <div className="flex justify-between items-center">
                  <span className="bg-pink-600 text-xs px-3 py-1 rounded-full uppercase">
                    {story.category}
                  </span>
                  <span className="text-sm text-pink-400 hover:underline">
                    Read More →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    
    </>
  );
};

export default Stories;
