const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const Hero = () => {
  return (
    <main className="flex lg:mt-20 flex-col lg:flex-row items-center justify-between min-h-[calc(90vh-6rem)]">
      <div data-aos="fade-right"
            data-aos-offset="300"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
            className="max-w-xl ml-[5%] z-10 mt-[90%] md:mt-[60%] lg:mt-0">
        <div className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold tracking-wider my-8">
        <h1 className="flex items-center gap-2 md:text-5xl text-3xl font-semibold leading-tight">
          Shaping
          <span className="relative h-[48px] md:h-[68px] overflow-hidden">
            <span className="flex flex-col animate-[wordSlider_21s_infinite_cubic-bezier(0.9,0.01,0.3,0.99)]">
              {words.map((word, index) => (
                <span
                  key={index}
                  className="flex items-center gap-2 h-[48px] md:h-[68px] pb-[2px]">
                  <img
                    src={word.imgPath}
                    alt={word.text}
                    className="size-6 md:size-8 rounded-full bg-white"
                  />
                  <span className="whitespace-nowrap">{word.text}</span>
                </span>
              ))}
            </span>
          </span>
        </h1>
        <h1>into Real Projects</h1>
        <h1>that Deliver Results</h1>
        </div>
        <p className="text-white/50 md:text-xl relative z-10 pointer-events-none">
         Hey, I’m Harsh Joshi, a full-stack developer passionate about building fast, scalable, and impactful web experiences
        </p>
      </div>
     

    


    </main>
  );
};

export default Hero;
