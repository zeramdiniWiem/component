import logo from './logo.svg';
import './App.css';
import React from "react"; 
import ProfilePhoto from './component/profile/photo';
import FullName from './component/profile/fullName';
import Adress from './component/profile/adress';

function App() {
  return (
   

    <div className="App">
      
    <ProfilePhoto/>
    <FullName/>
    <Adress/>
    
    </div>

    

  );
}

export default App;
