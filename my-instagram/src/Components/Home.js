import React from 'react';
import './Css/Home.css';
import Post from './Post';
import Status from './Status';
import Navbar from './Navbar';

function Home() {
    return (
        <div className="home">
            <Navbar />
            <Status />
            <Post />
            <Post />
        </div>
    )
}

export default Home
