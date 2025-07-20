const TechStack = () => {
  const tech = [
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      bg: 'bg-white',
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      bg: 'bg-white',
    },
    {
      name: 'MongoDB',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'Redis',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
    },
    {
      name: 'Git',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
  ];

  return (
    <div className="w-full flex flex-col items-center text-center px-4 py-10">
      {/* Tech Icons */}
      <div className="grid grid-cols-4 sm:grid-cols-5 gap-6 sm:gap-8 mb-6 lg:mb-14 lg:mt-3">
        {tech.map((item, index) => (
          <div
            key={index}
            className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-[#1f1f1f] hover:scale-110 transition-transform duration-300 shadow-md ${item.bg || ''}`}
          >
            <img
              src={item.src}
              alt={item.name}
              title={item.name}
              className="w-7 h-7 sm:w-8 sm:h-8 object-contain"
            />
          </div>
        ))}
      </div>
    <div className="lg:mt-14">
      {/* Head Text */}
      <p className="grid-headtext">Tech Stack</p>

      {/* Subtext */}
      <p className="grid-subtext">
        I enjoy building across the stack—from clean, responsive UIs to powerful backend systems. These tools help me make things that work well and scale smoothly.
      </p>
      </div>
    </div>
  );
};

export default TechStack;
