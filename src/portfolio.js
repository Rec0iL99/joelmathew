
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Joel Mathew Koshy 😎",
  title: "Hi all, I'm Joel",
  subTitle: emoji("A passionate Software Developer 👨‍💻 having experience in building 🔨 Native & Hybrid 📱 mobile apps."),
  resumeLink: "https://drive.google.com/file/d/1y4bB7pMJR_8SWh-fhuz-7iKgKVeSnlRl/view?usp=sharing"
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/Rec0iL99",
  linkedin: "https://www.linkedin.com/in/joel-mathew-koshy/",
  gmail: "joelmathewkoshy@karunya.edu.in",
  gitlab: "https://gitlab.com/Rec0iL99",
  // Instagram and Twitter are also supported in the links!
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: "NjE2MjhkNGZlODk3NDYwNjY2MjhhNmUwZjQwMTFlMDlhOGNjMmE1OA==",
  githubUserName: "Rec0iL99",
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92-3243454077",
  email_address: "joelmathewkoshy@karunya.edu.in"
};

export { greeting, socialMediaLinks, openSource, contactInfo };
