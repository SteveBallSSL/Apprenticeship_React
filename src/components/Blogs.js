import BlogList from './BlogList';
import Spinner from './Spinner';
import { useEffect, useState } from 'react';

function Blogs() {
    const [blogs, setBlogs] = useState(null);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);


    useEffect(() => {
        fetch('http://localhost:5000/blogs')
            .then(res => {
                // For 200 error
                if (!res.ok) {
                    throw Error('Could not get data for that resource.');
                }

                return res.json();
            }).then(data => {
                setTimeout(() => {
                    setBlogs(data);
                    setError(null);
                }, 2000);
            }).catch(err => {
                setIsLoading(false);
                setError(err.message);
            })
    }, []);


    function deleteBlog(id) {
        const newBlogs = blogs.filter(item => item.id !== id);
        setBlogs(newBlogs);
    }

    // can use fragments instead of div to stop REACT complaining <> </>
    return (
        <div>
            {error && <div>{error}</div>}
            {isLoading && <Spinner />}
            {blogs && <BlogList blogs={blogs} deleteBlog={deleteBlog} />}
        </div>
    );

}

export default Blogs;
