import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
function Home() {
  const navigate = useNavigate()
  const [blogs, setBlog] = useState([]);

  const fetchALlBlog = async () => {
    
    try {
      const res = await axios.get('https://blog-app-3fq7.onrender.com/v1/getAllBlogs', {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
      setBlog(res.data.fetchAllBlogs);

    } catch (error) {
      alert(error.response.data.message)

    }
  }


  useEffect(() => {
    fetchALlBlog()
  }, [])


  return (
    <div>
      {
        blogs && blogs.length > 0 ? (

          blogs.map((item, index) => {

            return (
              <div>
                {blogs && blogs.length > 0 ? (
                  blogs.map((item, index) => (
                    <div key={index}>
                      <Card.Img style={{ height: '300px', width: '400px' }} variant="top" src={`http://localhost:3500/${item.thumbnail}`} />
                      <Card.Body style={{ width: '400px' }}>
                        <Card.Title>{item.title}</Card.Title>
                        <Card.Text>{item.description}</Card.Text>
                          <Button onClick={()=>navigate('/addBlog')} variant="primary">Go Back</Button>
                      </Card.Body>
                    </div>
                  ))
                ) : (
                  <h2>No Post</h2>
                )}
              </div>

            )
          }
          )
        )
          : <h2> No Post</h2>
      }
    </div>
  )
}

export default Home;