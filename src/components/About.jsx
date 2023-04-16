import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I'm a web developer with a focus on the MERN stack, but mostly focused on front-end development. I have worked with React.js, Tailwind, Bootstrap, Material UI etc. in the frontend and also have experience working with Node.js, Express, Laravel.
        </p>

        <br />

        <p className="text-xl">
          I am passionate for React.js and I feel React.js is the future of modern web developement. I love JavaScript and also keep exploring new trending technologies in web development.
        </p>
      </div>
    </div>
  );
};

export default About;
