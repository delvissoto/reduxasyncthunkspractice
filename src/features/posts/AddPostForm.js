import { useState } from "react"
import { useDispatch, useSelector } from "react-redux";

import { postAdded } from "./postsSlice";
import { selectAllUsers } from "../users/userslice";

const AddPostForm = () => {
const dispatch = useDispatch();
const [title, setTitle] = useState("");
const [content, setContent] = useState("");
const [userId, setUserId] = useState("");


const users = useSelector(selectAllUsers);

const onSavePostClicked = (e) =>{
    e. preventDefault()
    if (title && content){ 
        dispatch(
            postAdded(title, content, userId) // here we will just add the input form from the useState and will be rest will just be handle with our prepared callback. 
        )
        setTitle('')
        setContent("")
    }
}

const canSave = Boolean(title) && Boolean(content) && Boolean(userId) // gets applied to the submit button . verifies to see if it is true that it has been entered or selected. 

const userOptions = users.map(user =>( // this will display a option of users that we can select to apply it to the post. 
    <option key={user.id} value={user.id}>
        {user.name}
    </option>
))



  return (
    <section className="formArea">
    <p >Create posts</p>
    <form >

        <label htmlFor="postTitle"> Post Title:</label><br/>
        <input type="text" id="postTitle" name="postTitle" value={title}  onChange={(e) => setTitle(e.target.value)}></input><br/>

        <label htmlFor="postAuthor">Aurthor: </label><br/>
        <select id="postAuthor" value={userId} onChange={(e) => setUserId(e.target.value)}>
            <option value=" "></option>
            {userOptions}
        </select><br/>

        <label htmlFor="postContent"> Post Content:</label><br/>
        <input type="text" id="postContent" name="postContent" value={content}  onChange={(e) => setContent(e.target.value)}></input><br/>

        <input type="submit" onClick={onSavePostClicked} disabled={!canSave}></input>

    </form>
    
    </section>
  )
}

export default AddPostForm