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
            <img width="300px" src={profile} alt="" />
          </div>
          <div className="about-right">
            <div className="about-para">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem quaerat cumque sed soluta rerum dolorem esse sunt
                dolore repellendus nesciunt.
              </p>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae,
                vero saepe magnam assumenda error repellat corrupti? Quidem
                dolorem veritatis quisquam.
              </p>
            </div>
            <div className="about-skills">
              <div className="about-skill">
                <p>HTML & CSS </p> <hr style={{ width: "50%" }} />
              </div>
              <div className="about-skill">
                <p>React </p> <hr style={{ width: "70%" }} />
              </div>
              <div className="about-skill">
                <p>Next</p> <hr style={{ width: "60%" }} />
              </div>
              <div className="about-skill">
                <p>Javascript</p> <hr style={{ width: "50%" }} />
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
