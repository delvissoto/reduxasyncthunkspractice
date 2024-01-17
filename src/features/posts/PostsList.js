import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthors from "./PostAuthors";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./reactionButton";


const PostsList = () => {
  const posts = useSelector(selectAllPosts) // here we are grabing the posts form postslice  with useSelector 

  const orderedPosts = posts.slice().sort((a, b) =>b.date.localeCompare(a.date)) // this allows the array to be sorted by creating a copy of the posts array sorted. 


  const renderPost = orderedPosts.map(post =>(   // here we are mapping throught posts grabing the reducers to be mapped and render. 
    <article key={post.id} className="singlePost">
      <h3>{post.title}</h3>
      <p>{post.content.substring(0,100)}</p>
      <p>
      <PostAuthors userId={post.userId}/>
      <TimeAgo timestamp={post.date}/>
      </p>
      <ReactionButtons post={post}/>
    </article>
  ))
  return (
    <div className="postdiv">
      <h2>POSTS</h2>
      {renderPost}
    </div>
  )
}

export default PostsList