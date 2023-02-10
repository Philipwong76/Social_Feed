import React from 'react';
import { useState } from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import CreatePost from './components/CreatePost/CreatePost';
import DisplayPosts from './components/DisplayPosts/DisplayPost';

function App() {

  const [posts, setPost] =useState([{ name: 'Philip', post: 'Welcome to my social feed!'}]);

  function addNewPost(post){

    let tempPosts = [post, ...posts];

    setPost(tempPosts);
  }

  return (
    <div className='Background'>
      <div>
        <div>
          <NavBar/>
        </div>
        <div className='PostSubmit'>
          <CreatePost addNewPostProperty={addNewPost}/>
        </div>
        <div className='Feeds'>
          <DisplayPosts parentPost={posts}/>
        </div>
      </div>

    </div>
  );
}

export default App;
