import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  const isBackgroundRed = true;
  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div       style={{
      backgroundColor: isBackgroundRed ? 'white' : 'blue',
    }}>
      {listOfPosts.map((value, key) => {
        return (
          <div className="post">
            <div className="title"> {value.title} </div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.username}</div>
            <div className="inline-block">
             <button className="Dbutton">Delete</button>
             <button className="Ebutton">Edit</button>
             </div>
          </div>
        );
      })}
      
    </div>
    
  );
  
}

export default Home;