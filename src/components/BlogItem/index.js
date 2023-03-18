// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <h2>{publishedDate}</h2>
      </div>
      <p>{description}</p>
    </li>
  )
}
export default BlogItem
