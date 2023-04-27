const Hero = () => {
  return (
    <section className="dark:bg-yellows-500 dark:text-yellows-950">
      <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
        <h1 className="text-4xl font-bold leading-none sm:text-5xl">
          Forest School with <br /> James
          {/* <span className="dark:text-violet-400">laborum doloribus</span>
          delectus */}
        </h1>
        <p className="px-8 mt-8 mb-12 text-lg">
          Get your kids into nature, and experience the wonders of the world.
        </p>
        <div className="flex flex-wrap justify-center">
          <button className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900">
            Get started
          </button>
          <button className="px-8 py-3 m-2 text-lg border rounded dark:text-gray-50 dark:border-gray-700">
            Learn more
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
