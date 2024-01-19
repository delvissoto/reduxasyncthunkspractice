import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { selectAllPosts, getPostStatus, getPostError, fetchPosts } from "./postsSlice";
import PostExcerpt from "./PostExcerpt";



const PostsList = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectAllPosts) // here we are grabing the posts form postslice  with useSelector 
  const postsStatus = useSelector(getPostStatus)
  const postsError = useSelector(getPostError)


  useEffect(() => {
    if (postsStatus === 'idle') {
      dispatch(fetchPosts())
    }
  }, [postsStatus, dispatch])

  let content;
  if(postsStatus ==='loading'){
    content = <p>"Loading..."</p>;
  }else if (postsStatus === "succeeded"){
    const orderedPost = posts.slice().sort((a, b) => b.date.localeCompare(a.date))
    content = orderedPost.map((post, index)=> <PostExcerpt key={index} post={post}/>)  // Dont forget the index if i dot want to see duplicates. 
  }else if (postsStatus === 'failed'){
    content = <p>{postsError}</p>;
  }


  return (
    <div className="postdiv">
      <h2>POSTS</h2>
      {content}
    </div>
  )
}

export default PostsList