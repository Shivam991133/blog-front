import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddCategory = () => {
  const navigate = useNavigate()

  const [input, setInput] = useState({
    tittle: ""
  })

  const handleCategory = async (e) => {
    e.preventDefault()
    try {
      const res = await axios.post('http://localhost:3500/v1/addNewCategory', input, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        },
      }
      )
      alert(res.data.message)
      navigate('/')
    } catch (error) {
      alert(error.response.data.message)
    }
  }

  return (
    <>
      <h1 style={{ textAlign: "center" }}>AddCategoryPage</h1>
      <Form onSubmit={handleCategory} style={{ margin: "150px", marginTop: '0' }}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>tittle</Form.Label>
          <Form.Control type="text"
            placeholder="tittle"
            name='tittle'
            value={input.tittle}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Add Category
        </Button>
      </Form>
    </>
  )
}
export default AddCategory;