import React, {useState} from "react";
import './CreatePost.css';

const CreatePost = (props) => {

    const [name, setName] = useState('');
    const [post, setPost] = useState('');

    function onSubmit(formEvent){
        formEvent.preventDefault();
        const postEntry = {
            name: name,
            post: post
        }

        console.log(postEntry);
        props.addNewPostProperty(postEntry)
    }

    return ( 
        <form onSubmit={onSubmit} className="Createform">
            <div className="PaddingFunction">
                <label className="Name">Name</label>
                <input type='text' value={name} onChange={(event) => setName(event.target.value)} className='Nametext'/><br></br>
            </div>
            <div className="PaddingFunction">
                <label className="Post">Post</label>
                <input type='text' value={post} onChange={(event) => setPost(event.target.value)} className="Posttext" />
                <button type="sumbit" className="Createbutton">Create</button>
            </div>
        </form>

     );
}
 
export default CreatePost;