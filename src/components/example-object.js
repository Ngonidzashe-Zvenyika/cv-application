import { v4 as uuid } from 'uuid';

const contactObject = {
  name: 'Ngonidzashe Zvenyika',
  email: 'nfzvenyika@gmail.com',
  number: '+27791390693',
  address: "Helshoogte Men's Residence, Merriman Ave, Stellenbosch, 7600",
  website: 'https://ngonidzashe-zvenyika.github.io/homepage/',
  github: 'https://github.com/Ngonidzashe-Zvenyika',
  linkedin: 'https://www.linkedin.com/in/ngonidzashe-zvenyika-b7a4a6217/',
};

const educationOne = {
  institution: 'Stellenbosch University',
  course: 'BSc Computer Science - Focal Area: Data Science',
  begin: '2024-02-01',
  finish: 'April 2027',
  achievement: 'Currently in progress.',
  id: uuid(),
};

const educationTwo = {
  institution: 'The Odin Project',
  course: 'Full-Stack Web Development',
  begin: '2023-02-01',
  finish: 'July 2024',
  achievement:
    "\n1 - Competent with HTML, CSS, and JavaScript.\n2 - Completed several projects demonstrating an understanding of:\n • React \n • Webpack \n • Vite \n • Linux \n • IDE's \n • Git \n • Node Package Manager \n • API's \n • Vercel (Project Deployment) \n3 - Developed my understanding of object-oriented programming. \n4 - Learnt to comply with the following best practices:\n • Responsive design \n • Accessibility \n • Test driven development \n • The solid design principles \n5 - Lastly, with regards to my knowledge of data structures and algorithms, I have completed several projects demonstrating an understanding of:\n • Binary trees \n • Graphs \n • Linked lists  \n • Stacks \n • Queues \n • Arrays \n • Recursion \n • Divide and conquer algorithms (minimax) \n6 - I am currently learning more about React and progressing towards back-end development with Node.js.",
  id: uuid(),
};

const educationThree = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Computer Science',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'A',
  id: uuid(),
};

const educationFour = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Mathematics',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'B',
  id: uuid(),
};

const educationFive = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Physics',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'B',
  id: uuid(),
};

const educationSix = {
  institution: 'Falcon College',
  course: 'Cambridge: AS-Level English',
  begin: '2021-01-01',
  finish: 'November 2021',
  achievement: 'A',
  id: uuid(),
};

const experienceOne = {
  company: 'The Odin Project',
  position: 'Open Source Software Contributor',
  start: '2023-10-01',
  end: 'Present',
  description:
    '\nIn October of 2023 I began contributing code to The Odin Project, an open-source web development curriculum. Having acquired the necessary skills to submit an issue on GitHub, I volunteered to clarify the instructions of a course module. After being assigned to solve the problem, I forked the necessary GitHub repository, made my changes and finally submitted a pull request. My contribution was accepted and this experience inspired me to continue developing my skills in order to produce work that is useful to other people.',
  id: uuid(),
};

const experienceTwo = {
  company: "The Duke of Edinburgh's Award Association",
  position: "The Duke of Edinburgh's International Gold Award",
  start: '2020-07-05',
  end: 'November 2022',
  description:
    '\nTo attain this award, students must commit to learning a skill, participating in a physical activity, and volunteering for fifty-two weeks, one of these must be declared as a major and conducted for seventy-eight weeks. In addition to this, students must also conduct an adventurous journey and work voluntarily in an unfamiliar place for at least one week. I learnt graphic designing in AutoCAD, took up jogging, and tutored students from various high schools to fulfil my activity requirements. Furthermore, I was part of a group that explored the Okavango Delta in Botswana and I also volunteered my services at a drug rehabilitation centre.',
  id: uuid(),
};

const experienceThree = {
  company: 'Falcon College',
  position: 'Headboy',
  start: '2021-11-01',
  end: 'November 2022',
  description:
    '\nI was the Headboy of Falcon College (Zimbabwe) in 2022. This position required me to be an example to those who looked up to me. Some of my achievements were, attaining Acadademic Honors for my performance in the Cambridge examinations, Cultural Honors for my participation and leadership in several school societies chiefly Debate and Toastmasters, and placing second-best aggregate in total points accumulated during my participation in our annual school athletics competition.',
  id: uuid(),
};

const exampleObject = {
  contactObject,
  educationArray: [
    educationOne,
    educationTwo,
    educationThree,
    educationFour,
    educationFive,
    educationSix,
  ],
  experienceArray: [experienceOne, experienceTwo, experienceThree],
};

export default exampleObject;
