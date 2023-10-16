function BlogList(props) {

    const blogList = props.blogs.map( blog => {
        return (
            <div key={blog.id}>
                <div>Title:  {blog.title} </div>
                <div>Author: {blog.author}</div>
                <div>Body:   {blog.body}  </div>
                <button onClick={() => {props.deleteBlog(blog.id)}}> Delete </button>
            </div>
        )
    });

    return blogList;
}
export default BlogList;