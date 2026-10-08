import React from "react";

const Intro = ({ onStart }) => {
  return (
    <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">

        {/* Logo */}
        <div className="mb-6">
          <span className="text-sm tracking-[0.4em] text-zinc-400">
            NOTELY
          </span>
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          Your thoughts.
          <br />
          <span className="text-zinc-500">
            Organized beautifully.
          </span>
        </h1>

        {/* Description */}
        <p className="mt-6 text-zinc-400 text-lg">
          Create, manage and organize your notes with a
          simple and modern interface.
        </p>

        {/* Button */}
        <button
          onClick={onStart}
          className="mt-10 px-7 py-3 rounded-full bg-white text-black
                     font-medium hover:bg-zinc-200 transition-all
                     hover:scale-105"
        >
          Get Started →
        </button>

        {/* Small feature text */}
        <div className="mt-12 flex justify-center gap-6 text-sm text-zinc-500">
          <span>✦ Fast</span>
          <span>✦ Simple</span>
          <span>✦ Modern</span>
        </div>

      </div>
    </div>
  );
};

export default Intro;