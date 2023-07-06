import React, {useState} from 'react';
interface ProjectProps {
  img: string;
  title: string;
  text: string;
  github?: string;
  live?: string;
}

const Project: React.FC<ProjectProps> = ({ }) => {
  return (
    <div>
      <img src="https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg" alt="" />
      <div>
        <h3></h3>
        <p></p>
      </div>
    </div>
  );
};

export default Project;