import { connect } from "react-redux"
import { Post } from "./Post"

const Posts = ({syncProps}) => {
  console.log(syncProps);
  if(!syncProps.length){
    return "You don't have any posts"
  }
  return syncProps.map((post) => <Post {...{post} } key={post.id}  />)
}
const mapStateToProps = (state) => {
  console.log(state);
  return {
    syncProps: state.posts.posts
  }
}
export default connect(mapStateToProps, null)(Posts)