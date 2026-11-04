import React from 'react';
import {TypeAnimation} from 'react-type-animation';
import Tilt from 'react-parallax-tilt';
import profileImage from '../../assets/pt.jpg';

const About = () => {
  return (
    <section
      id="about"
      className="py-16 px-4 md:px-10 lg:px-20 font-sans"
    >
      <div className="max-w-screen-xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight">
            Prabesh Thapa
          </h2>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight">
            <span className="text-white">I am a </span>
            <TypeAnimation
      sequence={[
        'Fullstack Developer', 2000,
        'AI/ML Enthusiast', 2000,
        'Machine Learning Developer', 2000,
        'AI Application Developer', 2000,
      ]}
      wrapper="span"
      speed={100}
      deletionSpeed={50}
      repeat={Infinity}
      cursor={true}
      style={{ color: '#8245ec', display: 'inline-block' }}
    />
          </h3>

          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-4 mb-8">
            Hi! I'm a Full-Stack Developer with a growing focus on Artificial Intelligence and Machine Learning. I enjoy building modern, user-friendly web applications using React and the MERN stack, while also exploring Python, Machine Learning, and AI-powered solutions.
            I'm passionate about combining web technologies with AI to develop intelligent applications that solve real-world problems. I enjoy learning new technologies, experimenting with ideas, and continuously improving my skills to build meaningful digital experiences.
          </p>

          <a
  href="/Prabesh_Resume.pdf"
  download="Prabesh_Resume.pdf"
  className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
  style={{
    background: 'linear-gradient(90deg, #8245ec, #a855f7)',
    boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
  }}
>
  DOWNLOAD CV
</a>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 border-4 border-purple-700 rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              src={profileImage}
              alt="Prabesh Thapa"
              className="w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
