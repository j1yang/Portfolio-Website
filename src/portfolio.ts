// portfolio.ts

export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  githubLink?: string;
  websiteLink?: string;
  css:string;
}

const portfolio: Project[] = [
  {
    id: 'project1',
    title: 'Project 1',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project2',
    title: 'Project 2',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  {
    id: 'project3',
    title: 'Project 3',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project4',
    title: 'Project 4',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  {
    id: 'project5',
    title: 'Project 5',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project6',
    title: 'Project 6',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  // Add more projects as needed
];

export default portfolio;
