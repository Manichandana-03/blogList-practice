// Write your JS code here
import BlogItem from '../BlogItem'

import './index.css'

const BlogList = props => {
  const {blogDetails} = props
  const {id} = blogDetails
  return (
    <ul>
      {blogDetails.map(each => (
        <BlogItem key={id} blogDetails={each} />
      ))}
    </ul>
  )
}

export default BlogList
