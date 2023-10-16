import './css/App.css';
import allBlogs from './json/blogsData.json';
import BlogList from './components/BlogList';
import { useState } from 'react';


function App() {

  const [blogs, setBlogs] = useState(allBlogs);

  function deleteBlog(id) {
    let filteredBlogs = blogs.filter((blog) => blog.id != id);
    setBlogs(filteredBlogs);
  }


  return (
    <div>
      <BlogList blogs={blogs} deleteBlog={deleteBlog}/>
    </div>

  )

}

export default App;

