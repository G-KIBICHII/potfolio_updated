import React from "react";
import "./about.css";

import profile from "../../assets/profile.jpeg";

const About = () => {
  return (
    <div className="about">
      <div className="about-title">
        <h1>About me</h1>
        {/* <img  src={profile} alt="" /> */}

        <div className="about-section">
          <div className="about-left">
            <img width="100%" src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
              Hi, I’m Gilbert, a versatile developer with expertise in Next.js, Angular, React.js, React Native, Vue.js, Nuxt.js, Node.js, and Django. I specialize in crafting dynamic, high-performance web and mobile applications by leveraging these cutting-edge technologies.My focus is on delivering seamless user experiences and scalable solutions, whether I’m building server-rendered sites, cross-platform apps, or robust back-end systems.
              </p>
              <p>
              Driven by a passion for technology and problem-solving, I’m always exploring new tools and approaches to enhance my development skills. I thrive on innovation and collaboration, and I’m eager to connect with others to turn ideas into reality. If you’re interested in discussing a project or exploring new opportunities, let’s get in touch!
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>React.js </p> <hr style={{ width: "100%" }} />
              </div>
              <div className="about-skill">
                <p>React Native</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Angular </p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next.js</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Vue.js</p> <hr style={{ width: "50%" }} />
              </div>
              {/* <div className="about-skill">
                <p>Javascript</p> <hr style={{ width: "50%" }} />
              </div> */}
              <div className="about-skill">
                <p>Django</p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Nuxt.js</p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>Node.js</p> <hr style={{ width: "100%" }} />
              </div>

            </div>
            <div className="about-achievements">
              <div className="about-achievement">
                <h1>10+</h1>
                <p>YEARS OF EXPERIENCE</p>
              </div>
              <hr />

              <div className="about-achievement">
                <h1>90+</h1>
                <p>PROJECTS COMPLETED</p>
              </div>
              <hr />
              <div className="about-achievement">
                <h1>15+</h1>
                <p>HAPPY CLIENTS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
