import { Link, useNavigate } from 'react-router';

const CallToAction = () => {
  const navigate = useNavigate();

  const handleContactClick = () => {
    navigate('/contact');
  };

  return (
    <section className="relative py-20 px-4 sm:px-8 overflow-x-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] rounded-full opacity-10 blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-l from-[#a8551a] via-[#e99b63] to-[#b85c1e] rounded-full opacity-10 blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center">
          {/* Fixed heading with adjusted line-height and padding */}
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#b85c1e] via-[#e99b63] to-[#a8551a] bg-clip-text text-transparent leading-tight md:leading-normal pb-1">
            Ready to Bring Your Ideas to Life?
          </h2>
          <p className="text-base md:text-xl text-gray-300 max-w-2xl mx-auto mb-10">
            Let's collaborate on your next project. Whether you need a website, web application, 
            or technical expertise, I'm here to help you succeed.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleContactClick}
              className="bg-gradient-to-r from-[#8b4513] to-[#a8551a] text-white font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:from-[#9a4f1c] hover:to-[#b85c1e] flex items-center gap-2 group"
            >
              Get in Touch
              <svg 
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
            
            <Link
              to='/projects'
              className="border border-gray-700 text-gray-300 font-medium py-3 px-8 rounded-lg transition-all duration-300 hover:border-[#e99b63] hover:text-[#e99b63]"
            >
              View My Work
            </Link>
          </div>
          
          <div className="mt-12 flex justify-center">
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#e99b63] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                <span>Fast Response</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#e99b63] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
                <span>Quality Guaranteed</span>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#e99b63] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;