import React from 'react';
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import TopHat from '../components/Tophat'
import Fedora from '../components/Fedora'
import ReporterHat from '../components/ReporterHat'
import ContactIcons from './ContactIcons';
import texturedBackground from '../images/textured-background.png'


const backgroundImgStyle ={
  backgroundImage: `url(${texturedBackground})`,
  backgroundPosition: "center",
    backgroundPepeat: "repeat",
    backgroundSize: "cover",
    backgroundAttachment: "fixed"
}
function App() {
  return (
    <div className="main" style={backgroundImgStyle}>
      <h1 className="text name-title">Will Ley</h1>
      <h3 className="text welcome-text">Developer, life long learner, and wearer of many hats.</h3>
      <TopHat />
      <About />
      <Fedora />
      <Projects /> 
      <ReporterHat />
      <Blogs />
      <ContactIcons/>
    </div>
  );
}

export default App;
