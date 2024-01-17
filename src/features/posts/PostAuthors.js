import { useSelector } from "react-redux";
import { selectAllUsers } from "../users/userslice";

import React from 'react'

const PostAuthors = ({ userId }) => {

     const users = useSelector(selectAllUsers)

     const author = users.find(user =>user.id === userId);

     return <span>by {author ? author.name : 'Unknown author'}</span>


  
}

export default PostAuthors