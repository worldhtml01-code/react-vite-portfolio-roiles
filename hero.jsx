function Hero(){
  return(
      <section className="flex flex-col items-center text-center px-6 py-32">

        <h2 className="text-5xl font-bold tracking-tight">
          Build Something Amazing
        </h2>

        <p className="mt-6 max-w-xl text-lg text-gray-500">
          Create beautiful and modern web applications
          using React and Tailwind CSS.
        </p>

        <div className="mt-8 flex gap-4">

          <button className="rounded-lg bg-black px-6 py-3 text-white hover:bg-gray-800">
            Get Started
          </button>

          <button className="rounded-lg border border-gray-300 px-6 py-3 hover:bg-gray-100">
            Learn More
          </button>

        </div>

      </section>
  );
}
export default Hero;
