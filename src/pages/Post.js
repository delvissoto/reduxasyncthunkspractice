import React from 'react'
import AddPostForm from '../features/posts/AddPostForm'
import PostsList from '../features/posts/PostsList'

const Post = () => {
  return (
    <div>
        <AddPostForm/>
        <PostsList/>
    </div>
  )
}

export default Post