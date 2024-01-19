import PostAuthors from "./PostAuthors";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./reactionButton";

const PostExcerpt = ({ post }) => {
  return (
    <article className="singlePost">
    <h3>{post.title}</h3>
    <p>{post.body.substring(0, 100)}</p>
    <p>
    <PostAuthors userId={post.userId}/>
    <TimeAgo timestamp={post.date}/>
    </p>
    <ReactionButtons post={post}/>
  </article>
  )
}

export default PostExcerpt