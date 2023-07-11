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
    title: 'Arm Inverse Kinematic',
    description: 'In this innovative project, I utilized Inverse Kinematics (IK) and THREE.js to create authentic arm movements for VR avatars, delivering an immersive user experience in the webxr class. Leveraging JavaScript, I facilitated real-time calculations for intricate avatar control. By applying Euler & quaternion mathematics, I managed complex rotations, demonstrating my prowess in 3D programming.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  {
    id: 'project2',
    title: 'Motion Tracking for Avatar',
    description: 'Aimed at revolutionizing the desktop experience of the metaverse, uses THREE.js and advanced motion tracking technology MediaPipe from Google. The end goal was to provide a highly immersive learning experience for desktop users. I implemented a system for bone interpolation that could process webcam feeds in real time, translating users\' physical movements into the digital world. ',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  {
    id: 'project3',
    title: 'Travel Journey with globe',
    description: 'Interactive globe with THREE.js. Users could traverse the globe, I leveraged the versatility of React to build a user-friendly front end, GSAP animations were used to enhance the UI/UX, providing visually pleasing transitions and interactive elements. The application was written in TypeScript and utilized Vite as the build tool, showcasing my proficiency in modern JavaScript frameworks and tools.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  
  {
    id: 'project4',
    title: 'Automated 3D Asset Optimizer',
    description: 'This is the description for Project 1.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:'flex-row-reverse'
  },
  {
    id: 'project5',
    title: '3D Rock Paper Scissors Simulator',
    description: 'I transformed the classic Rock Paper Scissors game into an engaging 3D experience. Inspired by its 2D counterpart, the game was built using THREE.js and JavaScript, demonstrating my ability to adapt traditional gaming concepts into modern, immersive formats. This added an additional layer of depth and effectively transcended the flat.',
    imageUrl: 'https://res.cloudinary.com/practicaldev/image/fetch/s--v4013JHR--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/i/91polur10vt0b2jkbvuh.jpg',
    githubLink: 'https://github.com/username/project1',
    websiteLink: 'https://project1.example.com',
    css:''
  },
  // Add more projects as needed
];

export default portfolio;
