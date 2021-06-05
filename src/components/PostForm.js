import { useState } from "react"
import { connect } from "react-redux"
import {createPost} from "../redux/actions"

const PostForm = ({createPost}) => {
  console.log(createPost);
  const [formData, setFormData] = useState({
    title: ""
  })
  const onChangeInputHandler =  (e) => {
    setFormData((prev) => ({
      ...prev,
      ...{[e.target.name]: e.target.value}
    }))
  }
  const onSubmitHandler = (e) => {
    e.preventDefault();
    setFormData({
      title: ""
    });
    const { title } = formData;

    const newPost = {
      title,
      id: Date.now().toString()
    }
    createPost(newPost);
  }
  return(
    <form onSubmit={onSubmitHandler}>
    <input 
      type="text" 
      name="title"
      className="form-control"
      value={formData.title}
      onChange={onChangeInputHandler}
    />
    <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  )
}

export default connect(null, {createPost})(PostForm)