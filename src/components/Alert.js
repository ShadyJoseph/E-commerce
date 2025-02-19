const Alert = ({ isDarkMode }) => {
  const scrollToContent = () => {
    window.scrollTo({
      top: 750,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {true && (
        <div
          className={`relative isolate flex flex-col justify-center items-center h-[30px] sm:h-[45px] md:h-[40px] overflow-hidden ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'} px-6 py-2.5 sm:px-8 sm:py-4 md:px-10 md:py-6`}
        >
          {/* Background gradient effect */}
          <div
            className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] ${isDarkMode ? 'bg-gradient-to-r from-[#ff6286] to-[#5c3fff]' : 'bg-gradient-to-r from-[#fca5a5] to-[#fcd34d]'} opacity-50`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            ></div>
          </div>
          <div
            className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
            aria-hidden="true"
          >
            <div
              className={`aspect-[577/310] w-[36.0625rem] ${isDarkMode ? 'bg-gradient-to-r from-[#ff6286] to-[#5c3fff]' : 'bg-gradient-to-r from-[#fca5a5] to-[#fcd34d]'} opacity-50`}
              style={{
                clipPath:
                  "polygon(74.8% 41.9%, 97.2% 73.2%, 100% 34.9%, 92.5% 0.4%, 87.5% 0%, 75% 28.6%, 58.5% 54.6%, 50.1% 56.8%, 46.9% 44%, 48.3% 17.4%, 24.7% 53.9%, 0% 27.9%, 11.9% 74.2%, 24.9% 54.1%, 68.6% 100%, 74.8% 41.9%)",
              }}
            ></div>
          </div>

          {/* Main content */}
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center sm:text-left md:gap-x-6 md:gap-y-3">
            <p
              className={`text-sm sm:text-base md:text-lg leading-6 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}
            >
              <strong className="font-semibold">Adidas</strong> is making 50% off
              <svg
                viewBox="0 0 2 2"
                className="mx-2 inline h-0.5 w-0.5 fill-current"
                aria-hidden="true"
              >
                <circle cx="1" cy="1" r="1" />
              </svg>
              Order Now and get 50% off your purchase on all <strong>Adidas</strong> items.
            </p>
            <button
              onClick={scrollToContent}
              className={`flex-none rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} px-3.5 py-1 text-sm font-semibold ${isDarkMode ? 'text-white' : 'text-gray-900'} shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900 transition-all duration-300 transform sm:px-3 sm:py-1 md:px-4 md:py-2`}
            >
              Order Now <span aria-hidden="true">&darr;</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Alert;
