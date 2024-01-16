import { v4 as uuid } from 'uuid';

const contactObject = {
  name: 'Ngonidzashe Zvenyika',
  email: 'nfzvenyika@gmail.com',
  number: '+27791390693',
  address: 'Helshoogte Residence, Stellenbosch University',
  website: 'https://ngonidzashe-zvenyika.github.io/homepage/',
  github: 'https://github.com/Ngonidzashe-Zvenyika',
  linkedin: 'https://www.linkedin.com/in/ngonidzashe-zvenyika-b7a4a6217/',
};

const educationOne = {
  institution: 'The Odin Project',
  course: 'Full-Stack Web Development',
  begin: '2023-02-01',
  finish: 'Present',
  achievement:
    "\n1. Competent with HTML, CSS and Javascript.\n2. In regards to tooling, I have completed several projects demonstrating an understanding of:\n • React \n • Webpack \n • Vite \n • Git \n • Linux \n • Visual Studio Code \n • Github \n • Node Package Manager \n • API's \n • JSON \n • Bash CLI \n • Vercel (Project Deployment) \n3. In addition to this, I have studied object-oriented programming during high school (Python) and currently continue to sharpen my skills with Javascript as a web developer. \n4. As it pertains to coding best practices, I have a working knowledge of:\n • Responsive design \n • Accessibility guidlines \n • Test driven development \n • The five solid design principles \n5. Lastly, with regards to my knowledge of data structures and algorithms, I have completed several projects demonstrating an understanding of:\n • Binary trees \n • Graphs \n • Linked-lists  \n • Stacks \n • Queues \n • Arrays \n • Recursion \n • Divide and conquer algorithms (min-max) \n6. I am currently delving deeper into React and progressing towards learning back-end development using Node.js.",
  id: uuid(),
};

const educationTwo = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Computer Science',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'A',
  id: uuid(),
};

const educationThree = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Mathematics',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'B',
  id: uuid(),
};

const educationFour = {
  institution: 'Falcon College',
  course: 'Cambridge: A-Level Physics',
  begin: '2021-01-01',
  finish: 'November 2022',
  achievement: 'B',
  id: uuid(),
};

const educationFive = {
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
  end: 'October 2023',
  description:
    "\nIn October this year, I contributed code to The Odin Project, the open source web development curriculum that I am currently completing. Having acquired the necessary skills to submit an issue on Github, I volunteered to clarify the instructions of one of the course's modules. After being assigned to solve the problem I forked the necessary Github repository, made my changes, and finally submitted a pull request. To my delight, my changes were accepted and this represented a full circle moment in my learning because my work was finally useful to someone other than myself.",
  id: uuid(),
};

const experienceTwo = {
  company: "The Duke Of Edinburgh's Award Association",
  position: "The Duke Of Edingburgh's International Gold Award",
  start: '2020-07-05',
  end: 'November 2022',
  description:
    'To qualify, students must learn a skill, participate in a physical activity, and volunteer a service for fifty-two weeks, one of these activities must be declared as a major and conducted for seventy-eight weeks. Furthermore, they must participate in an adventurous journey and work voluntarily in an unfamiliar place for one week. I learned graphic designing in AutoCAD, took up jogging, and tutored students from various high schools to fulfill my activity requirements. Furthermore, I was part of a group that explored the Okavango Delta in Botswana - our goal was to learn what it takes to be a guide in Africa. Lastly, I volunteered to work at a drug rehabilitation center for one week.',
  id: uuid(),
};

const experienceThree = {
  company: 'Falcon College',
  position: 'Headboy',
  start: '2021-11-01',
  end: 'November 2022',
  description:
    'I was the Headboy of Falcon College (Zimbabwe) in 2022. This position required me to set a high standard for my peers and those who looked up to me. Some of my achievements were, attaining Acadademic Honors for my performance in the Cambridge examinations, Cultural Honors for my participation and leadership in several school clubs/societies namely Debate and Toastmasters, and placing second-best aggregate in total points accumulated during my participation in our annual school athletics competion.',
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
  ],
  experienceArray: [experienceOne, experienceTwo, experienceThree],
};

export default exampleObject;
