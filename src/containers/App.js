import React from 'react';
import About from './About'
import Projects from './Projects'
import Blogs from './Blogs'
import ContactIcons from './ContactIcons';
import TitleBlock from '../components/TitleBlock';


function App() {
  return (
    <div className="main" >
    <div className="content-wrapper">
      <TitleBlock/> 
      <About />
      <Projects /> 
      <Blogs />
      <ContactIcons/>

    </div>
    </div>
  );
}

export default App;
