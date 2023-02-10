import React from "react";
import './DisplayPosts.css';

const DisplayPosts = (props) => {
    return ( 
            <div className="Form">
                    {props.parentPost.map((post) => {
                        return (
                            <div>
                                <div className="DisplayName"><td>{post.name}</td></div><br></br>
                                <div className="DisplayPost"><td>{post.post}</td></div><br></br>
                                <div className="Line"></div>
                            </div>
                        );
                    })}
            </div>
     );
}
 
export default DisplayPosts;