import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import { useState } from 'react';
import {useNavigate} from 'react-router-dom';

function Register() {
  const navigate = useNavigate()
  const [input, setInput] = useState({
    userName: '',
    email: '',
    password: ''
  })
  
  const formHandler =async(e)=>{
    e.preventDefault()
    try {
      const res = await axios.post('https://blog-app-3fq7.onrender.com/v1/signup',input)
      alert(res.data.message)
      navigate('/login')
    } catch (error) {
      alert(error.response.data.message)
    }
  }



  return (
    <>
      <h1 style={{ textAlign: "center" }}>SignUp Page</h1>
      <Form onSubmit={formHandler} style={{ margin: "150px", marginTop: '0' }}>
        <Form.Group className="mb-3" controlId="formBasicText">
          <Form.Label>UserName</Form.Label>
          <Form.Control type="text" placeholder="UserName"
            name='userName'
            value={input.userName}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
          />
        </Form.Group>


        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"
            name='email'
            value={input.email}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />
            
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password"
            placeholder="Password"
            name='password'
            value={input.password}
            onChange={(e) => setInput({ ...input, [e.target.name]: e.target.value })}
            />

        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default Register;