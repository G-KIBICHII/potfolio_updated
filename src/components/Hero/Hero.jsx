import React from "react";
import "./hero.css";
// import profile from'../../assets/profile_img.svg'
import profile from "../../assets/profile2.jpg"
const Hero = () => {
  return (
    <div className="hero">
      <img src={profile} alt="" />
      <h1><span>I`m Gilbert Kibichii,</span> frontend developer based in Kenya</h1>
      <p>
        I am a frontend developer from Nakuru, Kenya with 10 years of experience{" "}
      </p>
      <div className="hero-action">
        <div className="hero-conect">Connect with me</div>
        <div className="hero-resume">My resume</div>
      </div>
    </div>
  );
};

export default Hero;
