import BlogList from './BlogList';
import { useEffect, useState } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState(null);

    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => {
                return res.json();
            }).then(data => {
                setBlogs(data);
            })
    }, []);
    

    function deleteBlog(id) {
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
    }

    // can use fragments instead of div to stop REACT complaining <> </>
    return (
        <> 
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} /> }
        </>
    );
}

export default Blogs;
