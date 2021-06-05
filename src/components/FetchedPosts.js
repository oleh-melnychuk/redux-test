import { Post } from "./Post"

export const FetchedPosts = ({posts}) => {
  if(!posts.length){
    return  <button type="submit" className="btn btn-primary">Load</button>
  }
  return posts.map((post) => <Post {...{post} } key={post}  />)
}