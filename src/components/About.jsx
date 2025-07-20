import { useState } from 'react';
import Globe from 'react-globe.gl';
import TechStack from './techstack.jsx';
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText('harshcode0907@gmail.com');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="sm:px-10 px-5 my-20 " id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-4 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="images/About/heroimg.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain lg:mb-10" />

            <div>
              <p className="text-xl font-semibold mb-2 text-white font-generalsans">Hi, I’m Harsh</p>
              <p className="text-[#afb0b6] text-base font-generalsans">
                I enjoy building clean, responsive web experiences. From frontend designs to backend logic, I love turning ideas into functional digital solutions.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <TechStack />
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0,0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-blue-marble.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 28.6139, lng: 77.2090, text: 'I am here', color: 'white', size: 200 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">Open to Remote, Hybrid, or On-Site Opportunities</p>
              <p className="grid-subtext">Comfortable collaborating across time zones and regions.</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className="grid-container">
            <img src="images/About/grid3.png" alt="grid-3" className="w-full sm:h-[266px] h-fit object-contain lg:mb-10" />

            <div className='lg:mt-14'>
            <p className="grid-headtext">Problem Solver. Builder. Learner.</p>
            <p className="grid-subtext">
              I love figuring things out and building cool stuff with code. Coding lets me turn ideas into real things—and I’m always learning something new along the way.
            </p>
            </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <img src="images/About/grid4.png"
            alt="grid-4"
            className="w-full sm:h-[266px] h-fit object-contain"/>


            <div className="space-y-2">
              <p className="grid-subtext text-center">Contact me</p>
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'images/About/tick.svg' : 'images/About/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">harshcode0907@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;