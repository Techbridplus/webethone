const Hero = () => {
    return (
        <div className="relative flex items-center justify-center h-screen bg-purple-900 text-white">
            <div className="absolute inset-0 bg-gradient-to-b from-purple-800 to-purple-900 opacity-50"></div>
            <div className="relative z-10 text-center">
                <h1 className="text-5xl font-bold">Learn How To Capture</h1>
                <h2 className="text-6xl font-extrabold mt-4">CREATIVE POTENTIAL</h2>
                <p className="mt-6 text-lg">Start Exploring</p>
                <button className="mt-4 px-6 py-2 bg-white text-purple-900 rounded-full">Explore</button>
            </div>
        </div>
    );
};

export default Hero;