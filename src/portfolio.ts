import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface SkillsSection {
  skills: string[];
  softwareSkills: {
    fontAwesomeClassname: IconDefinition;
    skillName: string;
  }[];
}

const skillsSection: SkillsSection = {
  title: "Skills",
  subTitle: "subtitle subtitle subtitle subtitle",
  skills: [
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
    "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications",
  ],

  /* https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: {prefix:"fa-brands", iconName:"fa-html5"},
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fa-brands fa-css3-alt",
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fa-brands fa-sass",
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fa-brands fa-js",
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fa-brands fa-react",
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fa-brands fa-node",
    },
    {
      skillName: "swift",
      fontAwesomeClassname: "fa-brands fa-swift",
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fa-brands fa-npm",
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database",
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fa-brands fa-aws",
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire",
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fa-brands fa-python",
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fa-brands fa-docker",
    },
  ],
  display: true, // Set false to hide this section, defaults to true
};
export {
  skillsSection
};