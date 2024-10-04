import React, { useEffect } from "react";
import skill1 from "../../assets/skills/1.png";
import skill2 from "../../assets/skills/2.png";
import skill3 from "../../assets/skills/3.png";
import skill4 from "../../assets/skills/4.png";
import skill5 from "../../assets/skills/5.png";
import skill6 from "../../assets/skills/6.png";
import skill7 from "../../assets/skills/7.png";
import skill8 from "../../assets/skills/8.png";
import skill9 from "../../assets/skills/9.png";
import skill10 from "../../assets/skills/10.png";
import skill11 from "../../assets/skills/11.png";
import skill12 from "../../assets/skills/12.png";
import skill13 from "../../assets/skills/13.png";
import skill14 from "../../assets/skills/14.png";
import skill15 from "../../assets/skills/15.png";
import skill16 from "../../assets/skills/16.png";
import { StyledSkills } from "./StyledSkills";
import Aos from "aos";
import "aos/dist/aos.css";

const skillsData = [
  { src: skill10, label: "React", style_p: "title-m-up" },
  { src: skill11, label: "TypeScript", style_p: "" },
  { src: skill2, label: "Material UI", style_p: "" },
  { src: skill3, label: "Node", style_p: "" },
  { src: skill1, label: "Git", style_p: "" },
  { src: skill7, label: "Laravel", style_p: "" },
  { src: skill8, label: "Bootstrap", style_p: "" },
  { src: skill9, label: "Chakra UI", style_p: "" },
  { src: skill6, label: "Mongo DB", style_p: "" },
  { src: skill5, label: "MySQL", style_p: "" },
  { src: skill12, label: "PostgreSQL", style_p: "" },
  { src: skill13, label: "Sequelize", style_p: "" },
  { src: skill14, label: "Tailwind CSS", style_p: "title-m-up" },
  { src: skill4, label: "Styled Components", style_p: "title-up" },
  { src: skill15, label: "FastApi", style_p: "title-s-up" },
  { src: skill16, label: "Python", style_p: "title-xs-up" },
];

const Skills = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <StyledSkills className="container" id="skills">
      <h2 className="title-section">SKILLS</h2>
      <div className="images" data-aos="zoom-in" data-aos-duration="1500">
        {skillsData.map((skill, index) => (
          <div className="content-img" key={index}>
            <img src={skill.src} alt={`${skill.label} logo`} />
            <p className={skill.style_p}>{skill.label}</p>
          </div>
        ))}
      </div>
    </StyledSkills>
  );
};

export default Skills;
