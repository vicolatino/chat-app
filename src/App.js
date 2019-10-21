import React from 'react';
import './App.css';
import Contact from './components/Contact.js'

function App() {
  return (
    <div >
      <Contact name= 'Michel Dupuit' image= 'https://randomuser.me/api/portraits/men/2.jpg' />
      <Contact name= 'Jean Jean' image= 'https://randomuser.me/api/portraits/men/26.jpg'/>
      <Contact name= 'Robert Lafolle' image= 'https://randomuser.me/api/portraits/men/49.jpg'/>
      
    </div>
  );
}

export default App;
