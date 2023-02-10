import React from "react";
import './DisplayPosts.css';
import DislikeButton from "../Post/DislikeButton/DislikeButton";
import LikeButton from "../Post/LikeButton/LikeButton";

const DisplayPosts = (props) => {
    return ( 
            <div className="Form">
                    {props.parentPost.map((post) => {
                        return (
                            <div>
                                <div className="DisplayName"><td>{post.name}</td></div><br></br>
                                <div className="DisplayPost"><td>{post.post}</td></div><br></br>
                                    <div className="PostForm">
                                        <div className="Like"><LikeButton message="Like"/></div> <div className="Dislike"><DislikeButton message="Dislike"/></div>
                                    </div>
                                <div className="Line"></div>
                            </div>
                        );
                    })}
            </div>
     );
}
 
export default DisplayPosts;