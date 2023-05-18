import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';

const AddBlog = () => {
    const navigate = useNavigate();
    const [input, setInput] = useState({
        tittle: '',
        description: '',
        category: ''
    });


    const [category, setCategory] = useState([]);
    const [file, setFile] = useState('');


    const fetchALlCategrory = async () => {
        try {
            const res = await axios.get('http://localhost:3500/v1/getAllCategory', {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            })
            setCategory(res.data.result)

        } catch (error) {
            alert(error.response.data.message)

        }
    }


    useEffect(() => {
        fetchALlCategrory()
    }, [])

    // Create a form Data

    const formData = new FormData();
    formData.append('tittle', input.tittle);
    formData.append('category', input.category);
    formData.append('description', input.description);
    formData.append('thumbnail', file);
    
   

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:3500/v1/addNewBlog', formData, {

                headers: {
                    Authorization: `Bearer ${localStorage.getItem('token')}`
                }
            }
            )
            console.log(res)
            alert(res.data.message)
            navigate('/')
        } catch (error) {
            alert(error.response.data.message)
        }
    }


    return (
        <>
            <h1 style={{ textAlign: "center" }}>Add New Blog</h1>
            <Form onSubmit={handleSubmit} style={{ margin: "150px", marginTop: '0' }}>
                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text"
                        placeholder="Tittle"
                        name='tittle'
                        value={input.tittle}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Category</Form.Label>
                    <select
                        className='form-control'
                        name='category'
                        value={input.category}
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    >

                        <option disabled >Select Category</option>
                        {
                            category.map((item, index) => {
                                return <option key={index} value={item._id}>{item.tittle}</option>
                            })
                        }
                    </select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicText">
                    <Form.Label>Description</Form.Label>
                    <Form.Control type="text"
                        placeholder="description"
                        value={input.description}
                        name='description'
                        onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFile">
                    <Form.Label>Thumbnail</Form.Label>
                    <Form.Control type="file"
                        placeholder="thumbnail"
                        name='thumbnail'
                        onChange={(e) => setFile(e.target.files[0])}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Add Blog
                </Button>
            </Form>
        </>
    )
}

export default AddBlog;