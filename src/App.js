import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CreatePost from './components/CreatePost/CreatePost';


function App() {
  return (
    <div className='Background'>
      <div>
        <div>
          <NavBar/>
        </div>
        <div className='PostSubmit'>
          <CreatePost/>
        </div>
      </div>

    </div>
  );
}

export default App;
