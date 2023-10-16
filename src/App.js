import './css/App.css';
import allBlogs from './json/blogsData.json';
import BlogList from './components/BlogList';

function App() {

  function deleteBlog(id) {
    allBlogs = allBlogs.filter(item => item.id !== id)
  }

  return (
    <div>
      <BlogList blogs={allBlogs} deleteBlog={deleteBlog}/>
    </div>

  )

}

export default App;

