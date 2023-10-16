import './css/App.css';
import allBlogs from './json/blogsData.json';


function App() {

  const blogList = allBlogs.map(blog => {
      return (
          <div key={blog.id}>
              <div>Title:{blog.title}</div>
              <div>Author: {blog.author}</div>
              <div>Body: {blog.body}</div>
          </div>
      )
  });
  return blogList;

}

export default App;

